import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export const dynamic = 'force-dynamic'

interface VisitorEntry {
  ip: string
  country?: string
  city?: string
  region?: string
  page: string
  userAgent?: string
  referrer?: string
  timestamp: Date
}

async function getGeo(ip: string) {
  try {
    if (!ip || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return { country: 'Local', city: 'localhost', region: '' }
    }
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,regionName`, {
      signal: AbortSignal.timeout(2000),
    })
    if (res.ok) {
      const data = await res.json()
      if (data.status === 'success') {
        return { country: data.country, city: data.city, region: data.regionName }
      }
    }
  } catch {
    // silent
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { db } = await connectToDatabase()

    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '::1'
    const geo = await getGeo(ip)

    const entry: VisitorEntry = {
      ip,
      country: geo?.country,
      city: geo?.city,
      region: geo?.region,
      page: body.page || '/',
      userAgent: request.headers.get('user-agent') || undefined,
      referrer: request.headers.get('referer') || body.referrer || undefined,
      timestamp: new Date(),
    }

    await db.collection('fig_out_visitors').insertOne(entry)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const visitors = db.collection('fig_out_visitors')

    const total = await visitors.countDocuments()

    // Today's count
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)
    const today = await visitors.countDocuments({ timestamp: { $gte: todayStart } })

    // Last 7 days
    const weekStart = new Date()
    weekStart.setDate(weekStart.getDate() - 7)
    const thisWeek = await visitors.countDocuments({ timestamp: { $gte: weekStart } })

    // Recent visitors (last 50)
    const recent = await visitors.find()
      .sort({ timestamp: -1 })
      .limit(50)
      .project({ ip: 0, userAgent: 0 })
      .toArray()

    // Top countries
    const topCountries = await visitors.aggregate([
      { $group: { _id: '$country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Top cities
    const topCities = await visitors.aggregate([
      { $group: { _id: { city: '$city', country: '$country' }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Visits per day (last 14 days)
    const twoWeeksAgo = new Date()
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
    const daily = await visitors.aggregate([
      { $match: { timestamp: { $gte: twoWeeksAgo } } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]).toArray()

    // Top pages
    const topPages = await visitors.aggregate([
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Waitlist counts
    const emailCount = await db.collection('fig_out_emails').countDocuments()
    const phoneCount = await db.collection('fig_out_mobile').countDocuments()

    return NextResponse.json({
      total,
      today,
      thisWeek,
      waitlist: { email: emailCount, phone: phoneCount, total: emailCount + phoneCount },
      topCountries,
      topCities,
      topPages,
      daily,
      recent,
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
