import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Math.min(Number(searchParams.get('limit')) || 20, 100)
  const offset = Number(searchParams.get('offset')) || 0
  const status = searchParams.get('status') // optional filter

  const { db } = await connectToDatabase()
  const filter = status ? { status } : {}

  const [posts, total] = await Promise.all([
    db.collection('fig_out_ig_posts')
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray(),
    db.collection('fig_out_ig_posts').countDocuments(filter),
  ])

  return NextResponse.json({ posts, total })
}
