'use client'

import { motion } from 'framer-motion'

const ingredients = [
  { name: 'Potassium', benefit: 'Prevents cramps & fatigue' },
  { name: 'Magnesium', benefit: 'Recovery & nerve function' },
  { name: 'Calcium', benefit: 'Bone strength & muscle support' },
  { name: 'Chloride', benefit: 'Fluid balance' },
  { name: 'Zinc', benefit: 'Immunity & post-run recovery' },
  { name: 'Vitamin C', benefit: 'Antioxidant protection' },
  { name: 'Vitamin B12', benefit: 'Energy metabolism' },
]

const claims = ['0g Sugar', 'No Artificial Anything', '100% Vegan', '10 Cal']

export default function WhatsInside() {
  return (
    <section id="whats-inside" className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5" style={{ color: '#1A1A1A' }}>
            What is this thing actually
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
            Essential electrolytes + vitamins. Nothing else.
          </p>
        </motion.div>

        {/* Simple ingredient list */}
        <div className="mb-6 sm:mb-8">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex items-center justify-between py-2.5 sm:py-3"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <span className="text-sm sm:text-base font-medium" style={{ color: '#1A1A1A' }}>
                {item.name}
              </span>
              <span className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                {item.benefit}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Clean label claims — inline pills */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {claims.map((c) => (
            <span
              key={c}
              className="text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(20,184,166,0.1)', color: '#0D9488' }}
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
