'use client'

import { motion } from 'framer-motion'
import { coreFlavors } from '@/data/flavors'

function Sachet({ color }: { color: string }) {
  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: 70, height: 95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.svg
        width="70"
        height="95"
        viewBox="0 0 90 120"
        fill="none"
        initial={{ rotate: -3 }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="45" cy="115" rx="30" ry="5" fill="black" fillOpacity="0.08" />
        <path d="M12 18 L20 6 L70 6 L78 18" fill={color} style={{ filter: 'brightness(0.7)' }} />
        <rect x="10" y="18" width="70" height="95" rx="4" fill={color} />
        <rect x="10" y="18" width="8" height="95" rx="2" fill="black" fillOpacity="0.12" />
        <rect x="10" y="18" width="70" height="12" fill={color} style={{ filter: 'brightness(0.85)' }} />
        <line x1="10" y1="30" x2="80" y2="30" stroke="black" strokeOpacity="0.08" strokeWidth="1" />
        <path d="M73 20 L80 14 L80 26 Z" fill="white" fillOpacity="0.25" />
        <circle cx="76" cy="23" r="2.5" fill="white" fillOpacity="0.4" />
        <rect x="18" y="36" width="54" height="44" rx="5" fill="white" fillOpacity="0.95" />
        <text x="45" y="54" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">FIGURING</text>
        <text x="45" y="68" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">OUT.</text>
        <path d="M15 88 Q32 82 45 88 Q58 94 75 88" stroke="white" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
        <path d="M15 96 Q32 90 45 96 Q58 102 75 96" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3" />
        <rect x="62" y="35" width="10" height="50" rx="5" fill="white" fillOpacity="0.12" transform="rotate(12, 67, 60)" />
      </motion.svg>
    </motion.div>
  )
}

export default function FlavorTeaser() {
  return (
    <section id="flavors" className="py-10 sm:py-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5" style={{ color: '#1A1A1A' }}>
            The flavors
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
            Each one named after something you&apos;re probably dealing with right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {coreFlavors.map((flavor, i) => (
            <motion.div
              key={flavor.slug}
              className="rounded-xl sm:rounded-2xl p-3.5 sm:p-5 cursor-pointer"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.1)', transition: { duration: 0.2 } }}
            >
              {/* Sachet animation */}
              <motion.div
                className="mb-3 sm:mb-4"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                <Sachet color={flavor.color} />
              </motion.div>

              <h3 className="text-sm sm:text-base font-bold mb-0.5" style={{ color: '#1A1A1A' }}>
                {flavor.name}
              </h3>
              <p className="text-[10px] sm:text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: flavor.color }}>
                {flavor.taste}
              </p>
              <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                {flavor.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
