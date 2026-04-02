import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

// Force dynamic rendering (skip pre-rendering at build time)
export const dynamic = 'force-dynamic'

// Country code to name mapping
const COUNTRY_MAP: Record<string, string> = {
  '+91': 'India',
  '+1': 'United States',
  '+44': 'United Kingdom',
  '+971': 'United Arab Emirates',
  '+65': 'Singapore',
  '+61': 'Australia',
  '+49': 'Germany',
  '+33': 'France',
  '+81': 'Japan',
  '+86': 'China',
  '+7': 'Russia',
  '+55': 'Brazil',
  '+52': 'Mexico',
  '+39': 'Italy',
  '+34': 'Spain',
  '+31': 'Netherlands',
  '+46': 'Sweden',
  '+41': 'Switzerland',
  '+82': 'South Korea',
  '+60': 'Malaysia',
  '+66': 'Thailand',
  '+62': 'Indonesia',
  '+63': 'Philippines',
  '+84': 'Vietnam',
  '+92': 'Pakistan',
  '+880': 'Bangladesh',
  '+94': 'Sri Lanka',
  '+977': 'Nepal',
  '+27': 'South Africa',
  '+234': 'Nigeria',
  '+254': 'Kenya',
  '+20': 'Egypt',
  '+966': 'Saudi Arabia',
  '+974': 'Qatar',
  '+973': 'Bahrain',
  '+968': 'Oman',
  '+965': 'Kuwait',
}

interface IpGeoResponse {
  country?: string
  city?: string
  region?: string
  status?: string
}

async function getCountryFromIp(ip: string): Promise<{ country: string; city?: string; region?: string } | null> {
  try {
    // Skip localhost/private IPs
    if (!ip || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return null
    }

    // Use ip-api.com (free, no API key needed, 45 requests/minute)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,regionName`, {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    })

    if (!response.ok) return null

    const data: IpGeoResponse = await response.json()

    if (data.status === 'success' && data.country) {
      return {
        country: data.country,
        city: data.city,
        region: data.region,
      }
    }

    return null
  } catch {
    // Silently fail - geolocation is best-effort
    return null
  }
}

interface PhoneEntry {
  phone: string
  countryCode: string
  country: string
  ipCountry?: string
  ipCity?: string
  ipRegion?: string
  createdAt: Date
  ip?: string
}

interface EmailEntry {
  email: string
  ipCountry?: string
  ipCity?: string
  ipRegion?: string
  createdAt: Date
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    const { db } = await connectToDatabase()

    // Get IP from headers
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined

    // Get country from IP (best-effort, don't block on failure)
    const geoData = ip ? await getCountryFromIp(ip) : null

    if (type === 'email') {
      // Email signup
      const { email } = body

      if (!email || typeof email !== 'string') {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 })
      }

      const cleanEmail = email.toLowerCase().trim()
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
      }

      const emailCollection = db.collection<EmailEntry>('fig_out_emails')

      // Check if already exists
      const existing = await emailCollection.findOne({ email: cleanEmail })
      if (existing) {
        const position = await emailCollection.countDocuments({ createdAt: { $lte: existing.createdAt } })
        return NextResponse.json({
          message: "You're already on the list!",
          alreadyExists: true,
          position,
        })
      }

      // Add to waitlist
      const entry: EmailEntry = {
        email: cleanEmail,
        createdAt: new Date(),
        ip,
        ipCountry: geoData?.country,
        ipCity: geoData?.city,
        ipRegion: geoData?.region,
      }

      await emailCollection.insertOne(entry)

      // Get total count across both collections
      const phoneCollection = db.collection('fig_out_mobile')
      const emailCount = await emailCollection.countDocuments()
      const phoneCount = await phoneCollection.countDocuments()
      const totalCount = emailCount + phoneCount

      return NextResponse.json({
        message: 'Successfully joined the waitlist!',
        position: totalCount,
        spotsLeft: Math.max(0, 1000 - totalCount),
      })

    } else {
      // Phone signup
      const { phone, countryCode } = body

      if (!phone || typeof phone !== 'string') {
        return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
      }

      const cleanPhone = phone.replace(/\D/g, '')
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
      }

      const phoneCollection = db.collection<PhoneEntry>('fig_out_mobile')
      const code = countryCode || '+91'
      const countryName = COUNTRY_MAP[code] || 'Unknown'

      // Check if already exists (same phone + country code)
      const existing = await phoneCollection.findOne({
        phone: cleanPhone,
        countryCode: code
      })

      if (existing) {
        const position = await phoneCollection.countDocuments({ createdAt: { $lte: existing.createdAt } })
        return NextResponse.json({
          message: "You're already on the list!",
          alreadyExists: true,
          position,
        })
      }

      // Add to waitlist
      const entry: PhoneEntry = {
        phone: cleanPhone,
        countryCode: code,
        country: countryName,
        createdAt: new Date(),
        ip,
        ipCountry: geoData?.country,
        ipCity: geoData?.city,
        ipRegion: geoData?.region,
      }

      await phoneCollection.insertOne(entry)

      // Get total count across both collections
      const emailCollection = db.collection('fig_out_emails')
      const emailCount = await emailCollection.countDocuments()
      const phoneCount = await phoneCollection.countDocuments()
      const totalCount = emailCount + phoneCount

      return NextResponse.json({
        message: 'Successfully joined the waitlist!',
        position: totalCount,
        spotsLeft: Math.max(0, 1000 - totalCount),
      })
    }

  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    const emailCollection = db.collection('fig_out_emails')
    const phoneCollection = db.collection('fig_out_mobile')

    const emailCount = await emailCollection.countDocuments()
    const phoneCount = await phoneCollection.countDocuments()
    const totalCount = emailCount + phoneCount

    return NextResponse.json({
      count: totalCount,
      emailCount,
      phoneCount,
      spotsLeft: Math.max(0, 1000 - totalCount),
    })
  } catch (error) {
    console.error('Waitlist GET error:', error)
    return NextResponse.json({ count: 0, spotsLeft: 1000 })
  }
}
