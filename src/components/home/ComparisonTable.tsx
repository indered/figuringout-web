'use client'

import { motion } from 'framer-motion'

const comparison = [
  { metric: 'Sugar', us: '0g', gatorade: '34g', liquidiv: '11g' },
  { metric: 'Artificial', us: 'None', gatorade: 'Yes', liquidiv: 'Yes' },
  { metric: 'Sodium', us: '300mg', gatorade: '160mg', liquidiv: '500mg' },
  { metric: 'Calories', us: '10', gatorade: '140', liquidiv: '45' },
  { metric: 'Vibe', us: 'Existential hydration', gatorade: 'Locker room', liquidiv: 'Wellness influencer' },
]

export default function ComparisonTable() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#F5F5F5' }}>
            How we stack up
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
            We think we win, but you do you.
          </p>
        </motion.div>

        {/* Same table for both mobile and desktop — just scales */}
        <motion.div
          className="rounded-xl overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full table-fixed">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th className="text-left text-[10px] sm:text-xs font-medium uppercase p-2.5 sm:p-4 w-[22%]" style={{ color: '#9CA3AF' }}></th>
                <th className="text-center text-[10px] sm:text-xs font-bold uppercase p-2.5 sm:p-4" style={{ color: '#14B8A6' }}>Us</th>
                <th className="text-center text-[10px] sm:text-xs font-medium uppercase p-2.5 sm:p-4" style={{ color: '#6B7280' }}>Gatorade</th>
                <th className="text-center text-[10px] sm:text-xs font-medium uppercase p-2.5 sm:p-4" style={{ color: '#6B7280' }}>Liquid IV</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.metric}
                  style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                >
                  <td className="text-[11px] sm:text-sm font-medium p-2.5 sm:p-4" style={{ color: '#9CA3AF' }}>{row.metric}</td>
                  <td className="text-[11px] sm:text-sm font-bold text-center p-2.5 sm:p-4" style={{ color: '#14B8A6' }}>{row.us}</td>
                  <td className="text-[11px] sm:text-sm text-center p-2.5 sm:p-4" style={{ color: '#6B7280' }}>{row.gatorade}</td>
                  <td className="text-[11px] sm:text-sm text-center p-2.5 sm:p-4" style={{ color: '#6B7280' }}>{row.liquidiv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
