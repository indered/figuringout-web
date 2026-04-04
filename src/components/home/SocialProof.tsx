'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useAnimatedCounter } from '@/lib/animations'

const stats = [
  { value: 500, suffix: '+', label: 'On the waitlist', color: '#14B8A6' },
  { value: 4, suffix: '', label: 'Cities running', color: '#FFD700' },
  { value: 1, suffix: '', label: 'Brand that gets it', color: '#FF6B9D' },
]

const testimonials = [
  {
    quote: "I signed up because the flavor name was 'Left On Read' and honestly, same.",
    name: 'Priya',
    city: 'Mumbai',
  },
  {
    quote: "Finally, a hydration brand that doesn't make me feel like I need to bench 200.",
    name: 'Arjun',
    city: 'Bangalore',
  },
  {
    quote: "The sachets haven't even shipped and I'm already emotionally attached.",
    name: 'Neha',
    city: 'Delhi',
  },
]

const marqueeWords = [
  'still figuring it out',
  'but hydrated',
  'running anyway',
  'zero sugar zero regrets',
  'therapy is expensive',
  'left on read again',
  'existential hydration',
  'situationship with water',
]

function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const count = useAnimatedCounter(stat.value, isInView, stat.value > 100 ? 1.5 : 0.8)

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <p className="text-xs sm:text-sm font-medium mt-1" style={{ color: '#6B7280' }}>
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#14B8A6' }}>
            Community
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
            People who are also figuring it out
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl p-5 sm:p-6"
              style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-3" style={{ color: '#14B8A6' }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" opacity="0.15" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.15" />
              </svg>
              <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#1A1A1A' }}>
                {t.quote}
              </p>
              <p className="text-xs font-medium" style={{ color: '#6B7280' }}>
                — {t.name}, {t.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative py-4 overflow-hidden" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="text-sm sm:text-base font-medium mx-6 sm:mx-8"
              style={{ color: i % 2 === 0 ? '#14B8A6' : '#6B7280' }}
            >
              {word} •
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
