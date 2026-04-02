'use client'

import { motion } from 'framer-motion'
import { coreFlavors } from '@/data/flavors'

function Sachet({ color, name }: { color: string; name: string }) {
  // Create a darker shade for depth
  const darkerColor = color

  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: 80, height: 110 }}
      whileHover={{ rotate: [-2, 2, 0], transition: { duration: 0.3 } }}
    >
      <svg width="80" height="110" viewBox="0 0 80 110" fill="none">
        {/* Shadow */}
        <ellipse cx="40" cy="105" rx="25" ry="4" fill="black" fillOpacity="0.1" />

        {/* Back of sachet (folded top) */}
        <path
          d="M12 15 L18 5 L62 5 L68 15"
          fill={darkerColor}
          style={{ filter: 'brightness(0.7)' }}
        />

        {/* Main sachet body */}
        <rect x="10" y="15" width="60" height="85" rx="3" fill={color} />

        {/* Left edge shadow */}
        <rect x="10" y="15" width="6" height="85" rx="2" fill="black" fillOpacity="0.15" />

        {/* Top seal line */}
        <rect x="10" y="15" width="60" height="10" fill={darkerColor} style={{ filter: 'brightness(0.85)' }} />
        <line x1="10" y1="25" x2="70" y2="25" stroke="black" strokeOpacity="0.1" strokeWidth="1" />

        {/* Tear notch */}
        <path d="M65 17 L70 12 L70 22 Z" fill="white" fillOpacity="0.3" />
        <circle cx="67" cy="20" r="2" fill="white" fillOpacity="0.5" />

        {/* Brand logo area */}
        <rect x="18" y="32" width="44" height="35" rx="4" fill="white" fillOpacity="0.95" />

        {/* Brand text */}
        <text x="40" y="47" textAnchor="middle" fill={color} fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif">
          FIGURING
        </text>
        <text x="40" y="58" textAnchor="middle" fill={color} fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif">
          OUT.
        </text>

        {/* Decorative wave pattern */}
        <path
          d="M15 75 Q30 70 40 75 Q50 80 65 75"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.4"
        />
        <path
          d="M15 82 Q30 77 40 82 Q50 87 65 82"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.25"
        />

        {/* Bottom highlight */}
        <rect x="15" y="90" width="50" height="5" rx="2" fill="white" fillOpacity="0.15" />

        {/* Shine effect */}
        <rect x="55" y="30" width="8" height="40" rx="4" fill="white" fillOpacity="0.15" transform="rotate(15, 59, 50)" />
      </svg>

      {/* Flavor name badge */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[8px] font-bold whitespace-nowrap"
        style={{ backgroundColor: color, color: 'white', fontSize: '7px' }}
      >
        {name.split(' ')[0]}
      </div>
    </motion.div>
  )
}

export default function FlavorTeaser() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.p
          className="text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: '#14B8A6' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Lineup
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What are you figuring out today?
        </motion.h2>
        <motion.p
          className="text-base max-w-xl mx-auto mb-16"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Four flavors. Each one named after something you're probably dealing with right now.
        </motion.p>

        {/* Flavor Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {coreFlavors.map((flavor, index) => (
            <motion.div
              key={flavor.slug}
              className="rounded-3xl p-6 pb-8 transition-all group cursor-pointer"
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
              <div className="mb-6 pt-2">
                <Sachet color={flavor.color} name={flavor.name} />
              </div>

              {/* Flavor name */}
              <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
                {flavor.name}
              </h3>

              {/* Taste profile */}
              <p
                className="text-xs font-semibold mb-3 tracking-wide uppercase"
                style={{ color: flavor.color }}
              >
                {flavor.taste}
              </p>

              {/* Tagline */}
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {flavor.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Limited drops teaser */}
        <motion.div
          className="mt-10 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-sm font-bold text-white/80 mb-3">
              Coming Soon: Limited Drops
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {['Broke But Hydrated', 'Ghosted', 'Sunday Scaries', 'Chai Can Wait'].map((name) => (
                <motion.span
                  key={name}
                  className="text-xs md:text-sm font-bold px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
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
