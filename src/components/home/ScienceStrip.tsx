'use client'

import { motion } from 'framer-motion'

const steps = [
  { label: 'Drink', desc: 'Mix sachet with water' },
  { label: 'Absorb', desc: 'Electrolytes pull water into cells' },
  { label: 'Hydrate', desc: '2-3x faster than plain water' },
]

export default function ScienceStrip() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 sm:gap-3">
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold" style={{ color: '#14B8A6' }}>{s.label}</p>
                <p className="text-[9px] sm:text-[11px]" style={{ color: '#6B7280' }}>{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="flex-shrink-0 mx-1 sm:mx-2">
                  <path d="M0 4h16M13 1l3 3-3 3" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
