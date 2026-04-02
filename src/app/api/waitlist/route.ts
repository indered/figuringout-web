import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

// Simple file-based storage for now
// TODO: Replace with MongoDB when backend is ready
const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json')

interface WaitlistEntry {
  phone: string
  createdAt: string
  ip?: string
}

async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2))
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
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Get existing waitlist
    const waitlist = await getWaitlist()

    // Check if already exists
    const exists = waitlist.some(entry => entry.phone === cleanPhone)
    if (exists) {
      return NextResponse.json(
        { message: 'Already on the waitlist', position: waitlist.findIndex(e => e.phone === cleanPhone) + 1 },
        { status: 200 }
      )
    }

    // Check if we've hit 1000
    if (waitlist.length >= 1000) {
      return NextResponse.json(
        { error: 'Waitlist is full' },
        { status: 400 }
      )
    }

    // Add to waitlist
    const entry: WaitlistEntry = {
      phone: cleanPhone,
      createdAt: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || undefined,
    }

    waitlist.push(entry)
    await saveWaitlist(waitlist)

    return NextResponse.json({
      message: 'Successfully joined the waitlist',
      position: waitlist.length,
      spotsLeft: 1000 - waitlist.length,
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const waitlist = await getWaitlist()
    return NextResponse.json({
      count: waitlist.length,
      spotsLeft: Math.max(0, 1000 - waitlist.length),
    })
  } catch {
    return NextResponse.json({ count: 0, spotsLeft: 1000 })
  }
}
