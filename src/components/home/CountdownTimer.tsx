'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const LAUNCH_DATE = new Date('2026-10-02T00:00:00+05:30') // IST

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = LAUNCH_DATE.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4">
      {blocks.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold shadow-lg"
            style={{ backgroundColor: 'white', border: '2px solid #14B8A6', color: '#14B8A6' }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-[10px] sm:text-xs mt-1.5 sm:mt-2 uppercase tracking-wide sm:tracking-widest font-medium" style={{ color: '#6B7280' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
