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

// Excluded IPs (founder devices)
const EXCLUDED_IPS = new Set([
  '49.43.112.234',
])

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { db } = await connectToDatabase()

    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '::1'

    // Skip tracking for excluded IPs
    if (EXCLUDED_IPS.has(ip)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

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
    const excludeFilter = { ip: { $nin: Array.from(EXCLUDED_IPS) } }

    const total = await visitors.countDocuments(excludeFilter)

    // Today's count
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)
    const today = await visitors.countDocuments({ ...excludeFilter, timestamp: { $gte: todayStart } })

    // Last 7 days
    const weekStart = new Date()
    weekStart.setDate(weekStart.getDate() - 7)
    const thisWeek = await visitors.countDocuments({ ...excludeFilter, timestamp: { $gte: weekStart } })

    // Recent visitors (last 50)
    const recent = await visitors.find(excludeFilter)
      .sort({ timestamp: -1 })
      .limit(50)
      .project({ ip: 0, userAgent: 0 })
      .toArray()

    // Top countries
    const topCountries = await visitors.aggregate([
      { $match: excludeFilter },
      { $group: { _id: '$country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Top cities
    const topCities = await visitors.aggregate([
      { $match: excludeFilter },
      { $group: { _id: { city: '$city', country: '$country' }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Visits per day (last 14 days)
    const twoWeeksAgo = new Date()
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
    const daily = await visitors.aggregate([
      { $match: { ...excludeFilter, timestamp: { $gte: twoWeeksAgo } } },
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
      { $match: excludeFilter },
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).toArray()

    // Waitlist data
    const emailCollection = db.collection('fig_out_emails')
    const phoneCollection = db.collection('fig_out_mobile')
    const emailCount = await emailCollection.countDocuments()
    const phoneCount = await phoneCollection.countDocuments()

    // Full waitlist lists
    const emailList = await emailCollection.find()
      .sort({ createdAt: -1 })
      .project({ _id: 0, email: 1, createdAt: 1, ipCountry: 1, ipCity: 1 })
      .toArray()

    const phoneList = await phoneCollection.find()
      .sort({ createdAt: -1 })
      .project({ _id: 0, phone: 1, countryCode: 1, country: 1, createdAt: 1, ipCountry: 1, ipCity: 1 })
      .toArray()

    return NextResponse.json({
      total,
      today,
      thisWeek,
      waitlist: {
        email: emailCount,
        phone: phoneCount,
        total: emailCount + phoneCount,
        emailList,
        phoneList,
      },
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
