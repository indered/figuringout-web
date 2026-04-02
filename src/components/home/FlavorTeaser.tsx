'use client'

import { motion } from 'framer-motion'
import { coreFlavors } from '@/data/flavors'

function Sachet({ color, name }: { color: string; name: string }) {
  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: 90, height: 120 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.svg
        width="90"
        height="120"
        viewBox="0 0 90 120"
        fill="none"
        initial={{ rotate: -3 }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Shadow */}
        <ellipse cx="45" cy="115" rx="30" ry="5" fill="black" fillOpacity="0.08" />

        {/* Back of sachet (folded top) */}
        <path
          d="M12 18 L20 6 L70 6 L78 18"
          fill={color}
          style={{ filter: 'brightness(0.7)' }}
        />

        {/* Main sachet body */}
        <rect x="10" y="18" width="70" height="95" rx="4" fill={color} />

        {/* Left edge shadow */}
        <rect x="10" y="18" width="8" height="95" rx="2" fill="black" fillOpacity="0.12" />

        {/* Top seal line */}
        <rect x="10" y="18" width="70" height="12" fill={color} style={{ filter: 'brightness(0.85)' }} />
        <line x1="10" y1="30" x2="80" y2="30" stroke="black" strokeOpacity="0.08" strokeWidth="1" />

        {/* Tear notch */}
        <path d="M73 20 L80 14 L80 26 Z" fill="white" fillOpacity="0.25" />
        <circle cx="76" cy="23" r="2.5" fill="white" fillOpacity="0.4" />

        {/* Brand logo area - larger */}
        <rect x="18" y="36" width="54" height="44" rx="5" fill="white" fillOpacity="0.95" />

        {/* Brand text - LARGER */}
        <text x="45" y="54" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">
          FIGURING
        </text>
        <text x="45" y="68" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">
          OUT.
        </text>

        {/* Decorative wave pattern */}
        <path
          d="M15 88 Q32 82 45 88 Q58 94 75 88"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeOpacity="0.5"
        />
        <path
          d="M15 96 Q32 90 45 96 Q58 102 75 96"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />

        {/* Bottom highlight */}
        <rect x="18" y="102" width="54" height="6" rx="3" fill="white" fillOpacity="0.15" />

        {/* Shine effect */}
        <rect x="62" y="35" width="10" height="50" rx="5" fill="white" fillOpacity="0.12" transform="rotate(12, 67, 60)" />
      </motion.svg>
    </motion.div>
  )
}

export default function FlavorTeaser() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.p
          className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4"
          style={{ color: '#14B8A6' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Lineup
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What are you figuring out today?
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-16 px-4"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Four flavors. Each one named after something you're probably dealing with right now.
        </motion.p>

        {/* Flavor Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {coreFlavors.map((flavor, index) => (
            <motion.div
              key={flavor.slug}
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 pb-5 sm:pb-8 transition-all group cursor-pointer"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              }}
            >
              {/* Sachet */}
              <motion.div
                className="mb-4 sm:mb-6 pt-2"
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                <Sachet color={flavor.color} name={flavor.name} />
              </motion.div>

              {/* Flavor name - LARGER */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
                {flavor.name}
              </h3>

              {/* Taste profile - MORE VISIBLE */}
              <p
                className="text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 tracking-wide uppercase"
                style={{ color: flavor.color }}
              >
                {flavor.taste}
              </p>

              {/* Tagline - hidden on very small screens */}
              <p className="text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ color: '#6B7280' }}>
                {flavor.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Limited drops teaser */}
        <motion.div
          className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-xs sm:text-sm font-bold text-white/80 mb-3">
              Coming Soon: Limited Drops
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['Broke But Hydrated', 'Ghosted', 'Sunday Scaries', 'Chai Can Wait'].map((name, i) => (
                <motion.span
                  key={name}
                  className="text-[10px] sm:text-xs md:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
