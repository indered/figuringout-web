import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

// Force dynamic rendering (skip pre-rendering at build time)
export const dynamic = 'force-dynamic'

interface PhoneEntry {
  phone: string
  countryCode: string
  createdAt: Date
  ip?: string
}

interface EmailEntry {
  email: string
  createdAt: Date
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    const { db } = await connectToDatabase()
    const ip = request.headers.get('x-forwarded-for') || undefined

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

      // Check if already exists (same phone + country code)
      const existing = await phoneCollection.findOne({
        phone: cleanPhone,
        countryCode: countryCode || '+91'
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
        countryCode: countryCode || '+91',
        createdAt: new Date(),
        ip,
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
