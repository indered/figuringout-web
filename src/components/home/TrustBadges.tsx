'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useAnimatedCounter } from '@/lib/animations'

const badges = [
  { value: 0, suffix: 'g', label: 'Sugar', quip: 'Not even the sneaky kind', color: '#14B8A6' },
  { value: 0, suffix: '', label: 'Artificial Sweeteners', quip: 'We checked twice', color: '#FFD700' },
  { value: 300, suffix: 'mg', label: 'Sodium per sachet', quip: 'The good kind of salty', color: '#FF4D00' },
  { value: 100, suffix: '%', label: 'Vegan', quip: 'No animals were confused', color: '#FF6B9D' },
]

function BadgeCard({ badge, index }: { badge: typeof badges[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const count = useAnimatedCounter(badge.value, isInView, badge.value > 10 ? 1.5 : 0.3)

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-5 sm:p-6 text-center"
      style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
    >
      <div className="mb-2">
        <span className="text-4xl sm:text-5xl font-bold" style={{ color: badge.color }}>
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold" style={{ color: badge.color }}>
          {badge.suffix}
        </span>
      </div>
      <p className="text-sm sm:text-base font-bold mb-1" style={{ color: '#1A1A1A' }}>
        {badge.label}
      </p>
      <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
        {badge.quip}
      </p>
    </motion.div>
  )
}

export default function TrustBadges() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#14B8A6' }}>
            Clean Label Promise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
            The numbers that matter
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            We figured out the formula. Here&apos;s what&apos;s in it. And more importantly, what&apos;s not.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((badge, i) => (
            <BadgeCard key={badge.label} badge={badge} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
