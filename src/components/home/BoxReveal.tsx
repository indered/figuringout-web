'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FLAVORS = [
  { name: 'Left On Read', color: '#FFD93D', accent: '#FFF8E1' },
  { name: 'Situationship', color: '#FF6B9C', accent: '#FFE4EC' },
  { name: 'Therapy Is Expensive', color: '#FF8C42', accent: '#FFF0E5' },
  { name: 'Still Loading', color: '#4ECDC4', accent: '#E0FAF8' },
]

export default function BoxReveal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSachets, setShowSachets] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      // Start opening animation after a brief delay
      const timer1 = setTimeout(() => setIsOpen(true), 500)
      const timer2 = setTimeout(() => setShowSachets(true), 1200)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [isInView])

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ backgroundColor: '#FDF8F3' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: '#14B8A6' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: '#FFD93D' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
            What's in the box?
          </h2>
          <p className="text-base sm:text-lg max-w-md mx-auto" style={{ color: '#6B7280' }}>
            Premium hydration, delivered beautifully
          </p>
        </motion.div>

        {/* Box Container */}
        <div ref={ref} className="flex justify-center items-center" style={{ perspective: '1000px' }}>
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* The Box */}
            <motion.div
              className="relative w-72 sm:w-80 md:w-96"
              initial={{ rotateX: 10, rotateY: -5 }}
              animate={{ rotateX: isOpen ? 5 : 10, rotateY: isOpen ? 0 : -5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Box Base */}
              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, #14B8A6 0%, #0D9488 100%)',
                  height: '280px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Box Front Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Logo/Brand on box */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 0.3 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-4xl sm:text-5xl mb-2">🌴</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      FIGURING OUT
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1">Premium Electrolytes</p>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
                    <svg viewBox="0 0 400 60" className="w-full h-full">
                      <path d="M0,30 Q100,0 200,30 T400,30 L400,60 L0,60 Z" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Box Side (right) */}
                <div
                  className="absolute top-0 right-0 w-8 h-full"
                  style={{
                    background: 'linear-gradient(180deg, #0D9488 0%, #0A7A6E 100%)',
                    transform: 'translateX(100%) rotateY(90deg)',
                    transformOrigin: 'left',
                  }}
                />
              </div>

              {/* Box Lid */}
              <motion.div
                className="absolute top-0 left-0 right-0 rounded-t-2xl sm:rounded-t-3xl shadow-lg"
                style={{
                  background: 'linear-gradient(145deg, #16C4B2 0%, #14B8A6 100%)',
                  height: '60px',
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                }}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpen ? -120 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              >
                {/* Lid top surface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-white/30" />
                </div>

                {/* Lid inner surface (visible when open) */}
                <div
                  className="absolute inset-0 rounded-t-2xl sm:rounded-t-3xl"
                  style={{
                    background: 'linear-gradient(180deg, #F5F5F5 0%, #E8E8E8 100%)',
                    transform: 'rotateX(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </motion.div>

              {/* Sachets Rising */}
              <AnimatePresence>
                {showSachets && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {FLAVORS.map((flavor, index) => (
                      <motion.div
                        key={flavor.name}
                        className="relative"
                        initial={{ y: 100, opacity: 0, rotateZ: -5 + index * 3 }}
                        animate={{
                          y: -80 - index * 15,
                          opacity: 1,
                          rotateZ: -8 + index * 5,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.15,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        {/* Sachet */}
                        <motion.div
                          className="w-14 sm:w-16 md:w-20 rounded-lg shadow-xl overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${flavor.color} 0%, ${flavor.accent} 100%)`,
                            aspectRatio: '1/1.4',
                          }}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          {/* Sachet content */}
                          <div className="h-full flex flex-col items-center justify-center p-1.5 sm:p-2">
                            <div className="text-lg sm:text-xl mb-0.5">🌴</div>
                            <div
                              className="text-[6px] sm:text-[8px] font-bold text-center leading-tight px-1"
                              style={{ color: '#1A1A1A' }}
                            >
                              {flavor.name.split(' ').map((word, i) => (
                                <div key={i}>{word}</div>
                              ))}
                            </div>
                          </div>

                          {/* Shine effect */}
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              background: 'linear-gradient(135deg, white 0%, transparent 50%)',
                            }}
                          />

                          {/* Torn edge */}
                          <svg
                            className="absolute bottom-0 left-0 right-0"
                            viewBox="0 0 80 8"
                            preserveAspectRatio="none"
                            style={{ height: '6px' }}
                          >
                            <path
                              d="M0,4 L5,2 L10,6 L15,3 L20,5 L25,2 L30,6 L35,3 L40,5 L45,2 L50,6 L55,3 L60,5 L65,2 L70,6 L75,3 L80,4 L80,8 L0,8 Z"
                              fill="rgba(0,0,0,0.1)"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Shadow */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 h-8 rounded-full blur-xl"
              style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
              animate={{
                scale: isOpen ? 1.1 : 1,
                opacity: isOpen ? 0.2 : 0.15,
              }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* CTA below box */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showSachets ? 1 : 0, y: showSachets ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base mb-4" style={{ color: '#6B7280' }}>
            4 flavors. Zero sugar. All the electrolytes.
          </p>
          <motion.button
            className="px-6 sm:px-8 py-3 rounded-full font-semibold text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
