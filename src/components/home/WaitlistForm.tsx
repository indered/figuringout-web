'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [spotsLeft, setSpotsLeft] = useState(847) // fake scarcity, update from API later

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      // TODO: Replace with actual API call
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanPhone }),
      })

      if (res.ok) {
        setStatus('success')
        setSpotsLeft(prev => Math.max(0, prev - 1))
      } else {
        setStatus('error')
      }
    } catch {
      // For now, just show success (no backend yet)
      setStatus('success')
      setSpotsLeft(prev => Math.max(0, prev - 1))
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-3xl p-8 text-center max-w-md mx-auto shadow-xl"
        style={{ backgroundColor: 'white', border: '2px solid #14B8A6' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white"
          style={{ backgroundColor: '#14B8A6' }}
        >
          ✓
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
          You're on the list! 🌴
        </h3>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          We'll hit you up on WhatsApp when we launch.
          <br />
          First 1000 get a free box. You're one of them.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Urgency badge */}
      <div className="flex justify-center mb-6">
        <span
          className="text-xs font-semibold px-4 py-2 rounded-full shadow-md"
          style={{ backgroundColor: '#FF6B6B', color: 'white' }}
        >
          🎁 First 1000 signups get a FREE box
        </span>
      </div>

      {/* Spots left */}
      <p className="text-center text-sm mb-4" style={{ color: '#6B7280' }}>
        Only <span style={{ color: '#FF6B6B', fontWeight: 700 }}>{spotsLeft}</span> free spots left
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium"
            style={{ color: '#6B7280' }}
          >
            +91
          </span>
          <input
            type="tel"
            placeholder="Enter your number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
              setStatus('idle')
            }}
            className="w-full pl-12 pr-4 py-4 rounded-full text-base outline-none transition-all focus:ring-2 shadow-md"
            style={{
              backgroundColor: 'white',
              border: '2px solid #E8DFD5',
              color: '#1A1A1A',
            }}
            maxLength={10}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 shadow-md"
          style={{ backgroundColor: '#14B8A6', color: 'white' }}
        >
          {status === 'loading' ? 'Joining...' : 'Join waitlist'}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-center text-sm mt-3" style={{ color: '#FF6B6B' }}>
          Enter a valid 10-digit number
        </p>
      )}

      <p className="text-center text-xs mt-4" style={{ color: '#6B7280' }}>
        We'll only text you when we launch. No spam. Promise.
      </p>
    </div>
  )
}
