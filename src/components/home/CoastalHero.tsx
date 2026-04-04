'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function CoastalHero() {
  const { scrollY } = useScroll()

  const sunY = useTransform(scrollY, [0, 500], [0, -120])
  const wavesY = useTransform(scrollY, [0, 500], [0, 40])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 40%, #FFA07A 75%, #FDF8F3 100%)',
        }}
      />

      {/* Sun */}
      <motion.div
        className="absolute z-10 will-change-transform"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)',
          boxShadow: '0 0 80px rgba(255, 165, 0, 0.6)',
          top: '15%',
          left: '50%',
          x: '-50%',
          y: sunY,
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Distant waves */}
      <motion.div className="absolute bottom-[18%] left-0 right-0 z-10 will-change-transform" style={{ y: wavesY }}>
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full"
          style={{ fill: '#14B8A6', opacity: 0.3 }}
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </motion.div>

      {/* Mid waves */}
      <motion.div className="absolute bottom-[14%] left-0 right-0 z-20 will-change-transform" style={{ y: wavesY }}>
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full"
          style={{ fill: '#0D9488', opacity: 0.5 }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </motion.div>

      {/* Front waves */}
      <div className="absolute bottom-[10%] left-0 right-0 z-30">
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full"
          style={{ fill: '#14B8A6' }}
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,80 C180,40 360,100 540,60 C720,20 900,80 1080,50 C1260,20 1380,70 1440,40 L1440,120 L0,120 Z" />
        </motion.svg>
      </div>

      {/* Beach / Sand — reduced to 10% */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{
          height: '10%',
          background: 'linear-gradient(180deg, #E8DFD5 0%, #D4C4B5 100%)',
        }}
      />

      {/* Palm tree left */}
      <motion.div
        className="absolute bottom-[6%] left-[5%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="120" height="200" viewBox="0 0 120 200">
          <path d="M55,200 Q60,150 65,100 Q68,50 60,30" stroke="#8B7355" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <ellipse cx="30" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(-30, 60, 30)"/>
          <ellipse cx="90" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(30, 60, 30)"/>
          <ellipse cx="60" cy="10" rx="30" ry="10" fill="#3D6B55"/>
          <ellipse cx="20" cy="40" rx="30" ry="10" fill="#2D5A45" transform="rotate(-50, 60, 30)"/>
          <ellipse cx="100" cy="40" rx="30" ry="10" fill="#2D5A45" transform="rotate(50, 60, 30)"/>
        </svg>
      </motion.div>

      {/* Palm tree right */}
      <motion.div
        className="absolute bottom-[6%] right-[5%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="100" height="180" viewBox="0 0 120 200">
          <path d="M55,200 Q58,140 62,90 Q65,50 58,25" stroke="#7A6548" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <ellipse cx="30" cy="20" rx="30" ry="10" fill="#2D5A45" transform="rotate(-35, 58, 25)"/>
          <ellipse cx="86" cy="20" rx="30" ry="10" fill="#2D5A45" transform="rotate(35, 58, 25)"/>
          <ellipse cx="58" cy="8" rx="25" ry="8" fill="#3D6B55"/>
        </svg>
      </motion.div>

      {/* Running sachet — cute little packet with legs */}
      <motion.div
        className="absolute bottom-[11%] sm:bottom-[11%] z-[55]"
        initial={{ left: '-15%' }}
        animate={{ left: '115%' }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <motion.svg
          className="w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16"
          viewBox="0 0 50 70"
          fill="none"
          animate={{ y: [0, -3, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Shadow */}
          <ellipse cx="25" cy="67" rx="12" ry="3" fill="black" fillOpacity="0.1" />
          {/* Sachet body */}
          <rect x="10" y="8" width="30" height="40" rx="4" fill="#14B8A6" />
          {/* Top fold */}
          <path d="M10 14 L16 6 L34 6 L40 14" fill="#0D9488" />
          {/* White label */}
          <rect x="14" y="18" width="22" height="18" rx="3" fill="white" fillOpacity="0.9" />
          {/* Brand text */}
          <text x="25" y="29" textAnchor="middle" fill="#14B8A6" fontSize="5.5" fontWeight="800" fontFamily="system-ui">FO.</text>
          {/* Cute eyes */}
          <circle cx="21" cy="25" r="1.2" fill="#14B8A6" />
          <circle cx="29" cy="25" r="1.2" fill="#14B8A6" />
          {/* Tiny smile */}
          <path d="M23 31 Q25 33 27 31" stroke="#14B8A6" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          {/* Left leg — stepping */}
          <motion.path
            d="M18 48 L14 58 L11 58"
            stroke="#1A1A1A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ d: ["M18 48 L14 58 L11 58", "M18 48 L22 58 L25 58", "M18 48 L14 58 L11 58"] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Right leg — stepping */}
          <motion.path
            d="M32 48 L36 58 L39 58"
            stroke="#1A1A1A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ d: ["M32 48 L36 58 L39 58", "M32 48 L28 58 L25 58", "M32 48 L36 58 L39 58"] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Tiny sweat drops */}
          <motion.circle
            cx="42" cy="15" r="1.5" fill="#87CEEB"
            animate={{ opacity: [1, 0], y: [0, 8], x: [0, 3] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle
            cx="44" cy="20" r="1" fill="#87CEEB"
            animate={{ opacity: [1, 0], y: [0, 6], x: [0, 2] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </motion.div>

      {/* Content */}
      <div
        className="relative z-[60] max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20 pb-20 sm:pb-28"
      >
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className="text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Coming Soon
          </span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="block sm:inline">In a world where everyone is figuring out,</span>{' '}
          <span style={{ color: '#14B8A6' }}>hydrate while you figure it out.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Premium electrolytes for everyone running through life.
        </motion.p>

      </div>
    </section>
  )
}
