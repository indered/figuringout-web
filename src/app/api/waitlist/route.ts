import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo (resets on cold start)
// TODO: Replace with MongoDB Atlas for production
const waitlistSet = new Set<string>()

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

    // Check if already exists
    if (waitlistSet.has(cleanPhone)) {
      return NextResponse.json({
        message: 'You\'re already on the list!',
        alreadyExists: true,
      })
    }

    // Add to waitlist
    waitlistSet.add(cleanPhone)

    // For demo, generate a realistic position
    const position = Math.floor(Math.random() * 200) + 50

    return NextResponse.json({
      message: 'Successfully joined the waitlist!',
      position,
      spotsLeft: Math.max(0, 1000 - position),
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
  // Return demo data
  const count = waitlistSet.size || Math.floor(Math.random() * 200) + 100
  return NextResponse.json({
    count,
    spotsLeft: Math.max(0, 1000 - count),
  })
}
