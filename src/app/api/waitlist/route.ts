import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

// Force dynamic rendering (skip pre-rendering at build time)
export const dynamic = 'force-dynamic'

interface WaitlistEntry {
  phone: string
  createdAt: Date
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone } = body

    // Validate phone
    if (!phone || typeof phone !== 'string') {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid phone number. Enter 10 digits.' },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()
    const collection = db.collection<WaitlistEntry>('waitlist')

    // Check if already exists
    const existing = await collection.findOne({ phone: cleanPhone })
    if (existing) {
      const position = await collection.countDocuments({ createdAt: { $lte: existing.createdAt } })
      return NextResponse.json({
        message: "You're already on the list!",
        alreadyExists: true,
        position,
      })
    }

    // Check if we've hit 1000
    const count = await collection.countDocuments()
    if (count >= 1000) {
      return NextResponse.json(
        { error: 'Waitlist is full!' },
        { status: 400 }
      )
    }

    // Add to waitlist
    const entry: WaitlistEntry = {
      phone: cleanPhone,
      createdAt: new Date(),
      ip: request.headers.get('x-forwarded-for') || undefined,
    }

    await collection.insertOne(entry)
    const position = count + 1

    return NextResponse.json({
      message: 'Successfully joined the waitlist!',
      position,
      spotsLeft: 1000 - position,
    })
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
    const collection = db.collection('waitlist')
    const count = await collection.countDocuments()

    return NextResponse.json({
      count,
      spotsLeft: Math.max(0, 1000 - count),
    })
  } catch (error) {
    console.error('Waitlist GET error:', error)
    return NextResponse.json({ count: 0, spotsLeft: 1000 })
  }
}
