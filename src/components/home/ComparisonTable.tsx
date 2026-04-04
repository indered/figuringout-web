'use client'

import { motion } from 'framer-motion'

const comparison = [
  { metric: 'Sugar', us: '0g', gatorade: '34g', liquidiv: '11g' },
  { metric: 'Artificial stuff', us: 'None', gatorade: 'Yes', liquidiv: 'Yes' },
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

        {/* Desktop table */}
        <motion.div
          className="hidden sm:block rounded-xl overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th className="text-left text-xs font-medium tracking-widest uppercase p-4" style={{ color: '#9CA3AF' }}></th>
                <th className="text-center text-xs font-bold tracking-widest uppercase p-4" style={{ color: '#14B8A6' }}>Figuring Out</th>
                <th className="text-center text-xs font-medium tracking-widest uppercase p-4" style={{ color: '#6B7280' }}>Gatorade</th>
                <th className="text-center text-xs font-medium tracking-widest uppercase p-4" style={{ color: '#6B7280' }}>Liquid IV</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr
                  key={row.metric}
                  style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <td className="text-sm font-medium p-4" style={{ color: '#9CA3AF' }}>{row.metric}</td>
                  <td className="text-sm font-bold text-center p-4" style={{ color: '#14B8A6' }}>{row.us}</td>
                  <td className="text-sm text-center p-4" style={{ color: '#6B7280' }}>{row.gatorade}</td>
                  <td className="text-sm text-center p-4" style={{ color: '#6B7280' }}>{row.liquidiv}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-2.5">
          {comparison.map((row, i) => (
            <motion.div
              key={row.metric}
              className="rounded-xl p-3.5"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider mb-1.5" style={{ color: '#6B7280' }}>{row.metric}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px]" style={{ color: '#6B7280' }}>Us: </span>
                  <span className="text-xs font-bold" style={{ color: '#14B8A6' }}>{row.us}</span>
                </div>
                <div>
                  <span className="text-[10px]" style={{ color: '#6B7280' }}>Gatorade: </span>
                  <span className="text-[10px]" style={{ color: '#9CA3AF' }}>{row.gatorade}</span>
                </div>
                <div>
                  <span className="text-[10px]" style={{ color: '#6B7280' }}>Liquid IV: </span>
                  <span className="text-[10px]" style={{ color: '#9CA3AF' }}>{row.liquidiv}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
