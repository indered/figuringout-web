import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { createMediaContainer, publishMedia } from '@/lib/instagram'

export const dynamic = 'force-dynamic'

const VALID_TEMPLATES = ['quote', 'flavor', 'carousel'] as const
const VALID_SIZES = ['square', 'portrait'] as const

// GET — list queued posts or process the queue
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')

  if (action === 'process') {
    return processQueue(request)
  }

  // List queued posts
  const { db } = await connectToDatabase()
  const status = searchParams.get('status') || 'queued'
  const limit = Math.min(Number(searchParams.get('limit')) || 50, 100)

  const posts = await db.collection('fig_out_ig_posts')
    .find({ status })
    .sort({ scheduledFor: 1 })
    .limit(limit)
    .toArray()

  return NextResponse.json({ posts, count: posts.length })
}

// POST — add a post to the queue
export async function POST(request: Request) {
  const authHeader = request.headers.get('Authorization')
  const secret = process.env.INSTAGRAM_PIPELINE_SECRET
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { template, caption, igCaption, flavor, accentColor, size, subtitle, scheduledFor } = body

    if (!caption || !igCaption || !scheduledFor) {
      return NextResponse.json({ error: 'caption, igCaption, and scheduledFor are required' }, { status: 400 })
    }
    if (template && !VALID_TEMPLATES.includes(template)) {
      return NextResponse.json({ error: `template must be one of: ${VALID_TEMPLATES.join(', ')}` }, { status: 400 })
    }
    if (size && !VALID_SIZES.includes(size)) {
      return NextResponse.json({ error: `size must be one of: ${VALID_SIZES.join(', ')}` }, { status: 400 })
    }

    const scheduledDate = new Date(scheduledFor)
    if (isNaN(scheduledDate.getTime()) || scheduledDate <= new Date()) {
      return NextResponse.json({ error: 'scheduledFor must be a valid future date' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://figuringout.club'
    const params = new URLSearchParams()
    params.set('template', template || 'quote')
    params.set('caption', caption)
    if (flavor) params.set('flavor', flavor)
    if (accentColor) params.set('accentColor', accentColor)
    if (size) params.set('size', size)
    if (subtitle) params.set('subtitle', subtitle)

    const imageUrl = `${baseUrl}/api/instagram/generate?${params.toString()}`

    const { db } = await connectToDatabase()
    const post = {
      template: template || 'quote',
      caption,
      igCaption,
      flavor: flavor || null,
      accentColor: accentColor || null,
      size: size || 'square',
      subtitle: subtitle || null,
      imageUrl,
      status: 'queued',
      scheduledFor: scheduledDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection('fig_out_ig_posts').insertOne(post)

    return NextResponse.json({
      success: true,
      queueId: result.insertedId.toString(),
      scheduledFor: scheduledDate.toISOString(),
    })
  } catch (error) {
    console.error('Queue add error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

// Process queued posts that are due
async function processQueue(request: Request) {
  // Verify cron secret or pipeline secret
  const authHeader = request.headers.get('Authorization')
  const cronSecret = process.env.CRON_SECRET
  const pipelineSecret = process.env.INSTAGRAM_PIPELINE_SECRET

  const isAuthorized =
    (cronSecret && authHeader === `Bearer ${cronSecret}`) ||
    (pipelineSecret && authHeader === `Bearer ${pipelineSecret}`)

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { db } = await connectToDatabase()
  const now = new Date()

  const duePosts = await db.collection('fig_out_ig_posts')
    .find({ status: 'queued', scheduledFor: { $lte: now } })
    .sort({ scheduledFor: 1 })
    .limit(5) // Process max 5 per run to stay within rate limits
    .toArray()

  const results = []

  for (const post of duePosts) {
    try {
      await db.collection('fig_out_ig_posts').updateOne(
        { _id: post._id },
        { $set: { status: 'publishing', updatedAt: new Date() } }
      )

      const containerId = await createMediaContainer(post.imageUrl, post.igCaption)
      const igMediaId = await publishMedia(containerId)

      await db.collection('fig_out_ig_posts').updateOne(
        { _id: post._id },
        {
          $set: {
            status: 'published',
            igContainerId: containerId,
            igMediaId,
            publishedAt: new Date(),
            updatedAt: new Date(),
          },
        }
      )

      results.push({ id: post._id.toString(), status: 'published', igMediaId })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      await db.collection('fig_out_ig_posts').updateOne(
        { _id: post._id },
        { $set: { status: 'failed', error: message, updatedAt: new Date() } }
      )
      results.push({ id: post._id.toString(), status: 'failed', error: message })
    }
  }

  return NextResponse.json({
    processed: results.length,
    results,
  })
}
