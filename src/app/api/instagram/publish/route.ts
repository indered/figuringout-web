import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { createMediaContainer, publishMedia } from '@/lib/instagram'

export const dynamic = 'force-dynamic'

const VALID_TEMPLATES = ['quote', 'flavor', 'carousel'] as const
const VALID_SIZES = ['square', 'portrait'] as const

export async function POST(request: Request) {
  // Auth check
  const authHeader = request.headers.get('Authorization')
  const secret = process.env.INSTAGRAM_PIPELINE_SECRET
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { template, caption, igCaption, flavor, accentColor, size, subtitle } = body

    // Validate
    if (!caption || !igCaption) {
      return NextResponse.json({ error: 'caption and igCaption are required' }, { status: 400 })
    }
    if (template && !VALID_TEMPLATES.includes(template)) {
      return NextResponse.json({ error: `template must be one of: ${VALID_TEMPLATES.join(', ')}` }, { status: 400 })
    }
    if (size && !VALID_SIZES.includes(size)) {
      return NextResponse.json({ error: `size must be one of: ${VALID_SIZES.join(', ')}` }, { status: 400 })
    }

    // Build public image URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://figuringout.club'
    const params = new URLSearchParams()
    params.set('template', template || 'quote')
    params.set('caption', caption)
    if (flavor) params.set('flavor', flavor)
    if (accentColor) params.set('accentColor', accentColor)
    if (size) params.set('size', size)
    if (subtitle) params.set('subtitle', subtitle)

    const imageUrl = `${baseUrl}/api/instagram/generate?${params.toString()}`

    // Create IG media container
    const containerId = await createMediaContainer(imageUrl, igCaption)

    // Publish
    const igMediaId = await publishMedia(containerId)

    // Save record
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
      igContainerId: containerId,
      igMediaId,
      status: 'published',
      createdAt: new Date(),
      publishedAt: new Date(),
    }

    const result = await db.collection('fig_out_ig_posts').insertOne(post)

    return NextResponse.json({
      success: true,
      postId: result.insertedId.toString(),
      igMediaId,
      imageUrl,
    })
  } catch (error) {
    console.error('Instagram publish error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
