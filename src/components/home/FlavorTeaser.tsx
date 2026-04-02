'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coreFlavors } from '@/data/flavors'

function FlavorBox({ flavor, index }: { flavor: typeof coreFlavors[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15 }}
      onViewportEnter={() => {
        setTimeout(() => setIsOpen(true), 300 + index * 200)
      }}
      onHoverStart={() => setIsOpen(true)}
    >
      {/* Box Container */}
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-visible"
        style={{ perspective: '600px' }}
      >
        {/* Box Body */}
        <div
          className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 pt-16 sm:pt-20 pb-4 sm:pb-5"
          style={{
            backgroundColor: flavor.color,
            minHeight: '200px',
          }}
        >
          {/* Box interior shadow */}
          <div
            className="absolute inset-x-2 top-12 bottom-2 rounded-xl"
            style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          />

          {/* Sachet popping out */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: '-40px' }}
                initial={{ y: 60, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sachet color={flavor.color} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flavor info at bottom of box */}
          <div className="relative z-10 text-center mt-auto pt-8">
            <h3 className="text-sm sm:text-base font-bold text-white mb-1 drop-shadow-sm">
              {flavor.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-white/80 font-medium">
              {flavor.taste}
            </p>
          </div>
        </div>

        {/* Box Lid */}
        <motion.div
          className="absolute top-0 left-0 right-0 rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
          style={{
            height: '50px',
            backgroundColor: flavor.color,
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
            filter: 'brightness(1.1)',
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? -130 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          {/* Lid top design */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl">🌴</div>
          </div>

          {/* Lid edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2"
            style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
          />

          {/* Lid inner surface */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#f5f5f5',
              transform: 'rotateX(180deg)',
              backfaceVisibility: 'hidden',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Sachet({ color }: { color: string }) {
  return (
    <svg width="70" height="95" viewBox="0 0 90 120" fill="none">
      {/* Shadow */}
      <ellipse cx="45" cy="115" rx="25" ry="4" fill="black" fillOpacity="0.1" />

      {/* Back fold */}
      <path d="M15 18 L22 8 L68 8 L75 18" fill={color} style={{ filter: 'brightness(0.75)' }} />

      {/* Main body */}
      <rect x="12" y="18" width="66" height="92" rx="4" fill="white" />

      {/* Color strip */}
      <rect x="12" y="18" width="66" height="25" rx="4" fill={color} />
      <rect x="12" y="40" width="66" height="3" fill={color} style={{ filter: 'brightness(0.9)' }} />

      {/* Brand */}
      <text x="45" y="68" textAnchor="middle" fill={color} fontSize="9" fontWeight="800" fontFamily="system-ui">
        FIGURING
      </text>
      <text x="45" y="80" textAnchor="middle" fill={color} fontSize="9" fontWeight="800" fontFamily="system-ui">
        OUT.
      </text>

      {/* Bottom decoration */}
      <rect x="20" y="92" width="50" height="12" rx="2" fill={color} fillOpacity="0.15" />

      {/* Shine */}
      <rect x="58" y="45" width="8" height="35" rx="4" fill={color} fillOpacity="0.1" />

      {/* Tear notch */}
      <circle cx="70" cy="25" r="3" fill="white" fillOpacity="0.5" />
    </svg>
  )
}

export default function FlavorTeaser() {
  return (
    <section id="flavors" className="py-12 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What's inside?
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base max-w-md mx-auto mb-8 sm:mb-12"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Four moods. Four flavors. Zero sugar.
        </motion.p>

        {/* Flavor Boxes Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreFlavors.map((flavor, index) => (
            <FlavorBox key={flavor.slug} flavor={flavor} index={index} />
          ))}
        </div>

        {/* Limited drops teaser */}
        <motion.div
          className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-gray-400 mr-2">Coming soon:</span>
          {['Ghosted', 'Sunday Scaries', 'Chai Can Wait'].map((name) => (
            <span
              key={name}
              className="text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ backgroundColor: '#14B8A6', color: 'white', opacity: 0.7 }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
