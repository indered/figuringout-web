'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function CoastalHero() {
  const { scrollY } = useScroll()
  const prefersReducedMotion = useReducedMotion()
  const rm = prefersReducedMotion // shorthand

  // Sun parallax
  const sunY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, -120])

  // Per-wave parallax (different rates for depth)
  const waveFarY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, 20])
  const waveMidY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, 35])
  const waveFrontY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, 50])

  // Waves flatten on scroll (calming ocean)
  const waveFarScaleY = useTransform(scrollY, [0, 400], rm ? [1, 1] : [1, 0.6])
  const waveMidScaleY = useTransform(scrollY, [0, 400], rm ? [1, 1] : [1, 0.7])
  const waveFrontScaleY = useTransform(scrollY, [0, 400], rm ? [1, 1] : [1, 0.75])

  // Sky color shift (sunrise → golden hour overlay)
  const skyShiftOpacity = useTransform(scrollY, [0, 400], rm ? [0, 0] : [0, 0.4])

  // Content parallax fade
  const contentY = useTransform(scrollY, [0, 300], rm ? [0, 0] : [0, -60])
  const contentOpacity = useTransform(scrollY, [0, 250], rm ? [1, 1] : [1, 0])

  // Clouds parallax
  const cloudFarY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, -30])
  const cloudNearY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, -60])
  const cloudFarOpacity = useTransform(scrollY, [0, 400], rm ? [0.4, 0.4] : [0.4, 0])
  const cloudNearOpacity = useTransform(scrollY, [0, 500], rm ? [0.5, 0.5] : [0.5, 0.1])

  // Birds parallax
  const birdsY = useTransform(scrollY, [0, 500], rm ? [0, 0] : [0, -50])
  const birdsOpacity = useTransform(scrollY, [0, 300], rm ? [0.4, 0.4] : [0.4, 0])

  // Sand grows on scroll (transition to next section)
  const sandHeight = useTransform(scrollY, [200, 500], rm ? ['10%', '10%'] : ['10%', '20%'])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Base sky — sunrise */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 40%, #FFA07A 75%, #FDF8F3 100%)',
        }}
      />

      {/* Sky overlay — golden hour (fades in on scroll) */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, #6BA3D6 0%, #87CEEB 30%, #FFD080 70%, #FFA07A 100%)',
          opacity: skyShiftOpacity,
        }}
      />

      {/* ===== CLOUDS — big, soft, visible ===== */}

      {/* Cloud 1 — large, left side, slow drift */}
      <motion.div
        className="absolute z-[5] will-change-transform"
        style={{ top: '4%', left: '2%', y: cloudFarY, opacity: cloudFarOpacity }}
        animate={rm ? {} : { x: [0, 80, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="400" height="100" viewBox="0 0 400 100" fill="none" className="w-[250px] sm:w-[350px] md:w-[400px]">
          <ellipse cx="160" cy="60" rx="140" ry="35" fill="white" fillOpacity="0.7" />
          <ellipse cx="240" cy="50" rx="100" ry="30" fill="white" fillOpacity="0.6" />
          <ellipse cx="100" cy="55" rx="80" ry="28" fill="white" fillOpacity="0.5" />
          <ellipse cx="300" cy="58" rx="60" ry="20" fill="white" fillOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Cloud 2 — right side, slightly lower, faster drift opposite direction */}
      <motion.div
        className="absolute z-[5] will-change-transform"
        style={{ top: '8%', right: '0%', y: cloudNearY, opacity: cloudNearOpacity }}
        animate={rm ? {} : { x: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="350" height="90" viewBox="0 0 350 90" fill="none" className="w-[200px] sm:w-[280px] md:w-[350px]">
          <ellipse cx="150" cy="50" rx="120" ry="32" fill="white" fillOpacity="0.75" />
          <ellipse cx="230" cy="45" rx="80" ry="25" fill="white" fillOpacity="0.55" />
          <ellipse cx="80" cy="48" rx="70" ry="22" fill="white" fillOpacity="0.45" />
        </svg>
      </motion.div>

      {/* Cloud 3 — small wispy, center-left, very slow */}
      <motion.div
        className="absolute z-[5] will-change-transform hidden sm:block"
        style={{ top: '14%', left: '30%', y: cloudFarY }}
        animate={rm ? {} : { x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
          <ellipse cx="100" cy="30" rx="90" ry="22" fill="white" fillOpacity="0.4" />
          <ellipse cx="140" cy="28" rx="50" ry="16" fill="white" fillOpacity="0.3" />
        </svg>
      </motion.div>

      {/* ===== BIRDS — bigger, visible, two groups ===== */}

      {/* Bird group 1 — right side */}
      <motion.div
        className="absolute z-[6] hidden sm:block will-change-transform"
        style={{ top: '15%', right: '20%', y: birdsY, opacity: birdsOpacity }}
        animate={rm ? {} : { x: [0, 30, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" stroke="#4A3A2A" strokeWidth="2" strokeLinecap="round">
          <path d="M5,20 Q15,8 25,20" />
          <path d="M35,14 Q44,4 53,14" />
          <path d="M60,22 Q68,12 76,22" />
          <path d="M85,16 Q92,8 99,16" />
          <path d="M105,24 Q110,18 115,24" />
        </svg>
      </motion.div>

      {/* Bird group 2 — left side, slightly lower, different timing */}
      <motion.div
        className="absolute z-[6] hidden md:block will-change-transform"
        style={{ top: '20%', left: '15%', y: birdsY }}
        animate={rm ? {} : { x: [0, -20, 0], y: [0, -5, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none" stroke="#5A4A3A" strokeWidth="1.8" strokeLinecap="round">
          <path d="M5,18 Q12,8 19,18" />
          <path d="M28,12 Q34,4 40,12" />
          <path d="M50,20 Q56,12 62,20" />
        </svg>
      </motion.div>

      {/* Sun */}
      <motion.div
        className="absolute z-10 will-change-transform"
        style={{
          width: '150px', height: '150px', borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)',
          boxShadow: '0 0 80px rgba(255, 165, 0, 0.6)',
          top: '15%', left: '50%', x: '-50%', y: sunY,
        }}
        animate={rm ? {} : { scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Distant waves — individual parallax + flatten on scroll */}
      <motion.div
        className="absolute bottom-[18%] left-0 right-0 z-10 will-change-transform"
        style={{ y: waveFarY, scaleY: waveFarScaleY, transformOrigin: 'bottom' }}
      >
        <motion.svg viewBox="0 0 1440 120" className="w-full" style={{ fill: '#14B8A6', opacity: 0.3 }}
          animate={rm ? {} : { x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </motion.div>

      {/* Mid waves */}
      <motion.div
        className="absolute bottom-[14%] left-0 right-0 z-20 will-change-transform"
        style={{ y: waveMidY, scaleY: waveMidScaleY, transformOrigin: 'bottom' }}
      >
        <motion.svg viewBox="0 0 1440 120" className="w-full" style={{ fill: '#0D9488', opacity: 0.5 }}
          animate={rm ? {} : { x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </motion.div>

      {/* Front waves */}
      <motion.div
        className="absolute bottom-[10%] left-0 right-0 z-30 will-change-transform"
        style={{ y: waveFrontY, scaleY: waveFrontScaleY, transformOrigin: 'bottom' }}
      >
        <motion.svg viewBox="0 0 1440 120" className="w-full" style={{ fill: '#14B8A6' }}
          animate={rm ? {} : { x: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,80 C180,40 360,100 540,60 C720,20 900,80 1080,50 C1260,20 1380,70 1440,40 L1440,120 L0,120 Z" />
        </motion.svg>
      </motion.div>

      {/* Beach / Sand — grows on scroll, blends into next section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{
          height: sandHeight,
          background: 'linear-gradient(180deg, #E8DFD5 0%, #D4C4B5 50%, #FDF8F3 100%)',
        }}
      />

      {/* Palm tree left */}
      <motion.div
        className="absolute bottom-[6%] left-[5%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={rm ? {} : { rotate: [-2, 2, -2] }}
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
        animate={rm ? {} : { rotate: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="100" height="180" viewBox="0 0 120 200">
          <path d="M55,200 Q58,140 62,90 Q65,50 58,25" stroke="#7A6548" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <ellipse cx="30" cy="20" rx="30" ry="10" fill="#2D5A45" transform="rotate(-35, 58, 25)"/>
          <ellipse cx="86" cy="20" rx="30" ry="10" fill="#2D5A45" transform="rotate(35, 58, 25)"/>
          <ellipse cx="58" cy="8" rx="25" ry="8" fill="#3D6B55"/>
        </svg>
      </motion.div>

      {/* Wet sand shimmer */}
      <div className="absolute bottom-[9%] left-0 right-0 z-[42] h-[2%] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.1), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={rm ? {} : { backgroundPosition: ['0% 0%', '200% 0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Footprints in the sand — bigger, visible, all screens */}
      <div className="absolute bottom-[2%] sm:bottom-[3%] left-[5%] right-[5%] z-[45]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${5 + i * 12}%`, bottom: i % 2 === 0 ? '0px' : '10px' }}
            initial={{ opacity: 0 }}
            animate={rm ? {} : { opacity: [0, 0.55, 0.55, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: i * 0.6, times: [0, 0.12, 0.75, 1], ease: 'easeInOut' }}
          >
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none"
              className="w-[12px] h-[20px] sm:w-[16px] sm:h-[28px]"
              style={{ transform: `rotate(${i % 2 === 0 ? -12 : 12}deg)` }}
            >
              {/* Ball of foot */}
              <ellipse cx="8" cy="7" rx="5.5" ry="5" fill="#B8A080" fillOpacity="0.6" />
              {/* Heel */}
              <ellipse cx="8" cy="21" rx="4" ry="4.5" fill="#B8A080" fillOpacity="0.5" />
              {/* Arch gap */}
              <ellipse cx="8" cy="14" rx="2.5" ry="2" fill="#D4C4B5" fillOpacity="0.4" />
              {/* Toe impressions */}
              <circle cx="4" cy="2" r="1.2" fill="#B8A080" fillOpacity="0.4" />
              <circle cx="7" cy="1" r="1.3" fill="#B8A080" fillOpacity="0.45" />
              <circle cx="10" cy="1.5" r="1.1" fill="#B8A080" fillOpacity="0.4" />
              <circle cx="12.5" cy="3" r="1" fill="#B8A080" fillOpacity="0.35" />
            </svg>
          </motion.div>
        ))}

        {/* Wave wash */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[30px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(20,184,166,0.12) 20%, rgba(255,255,255,0.1) 50%, rgba(20,184,166,0.08) 80%, transparent 100%)',
            borderRadius: '0 0 4px 4px',
          }}
          animate={rm ? {} : { x: ['-110%', '110%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      {/* Dune grass — left cluster */}
      <div className="absolute bottom-[7%] left-[2%] sm:left-[4%] z-[46]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i} className="absolute"
            style={{
              left: i * 5, bottom: 0, width: 2,
              height: 25 + (i % 3) * 10 + (i % 2) * 5,
              background: `linear-gradient(0deg, #7A8A5B 0%, ${i % 2 === 0 ? '#5B6A3B' : '#6B7A4B'} 100%)`,
              borderRadius: '2px 2px 0 0', transformOrigin: 'bottom center', opacity: 0.55,
            }}
            animate={rm ? {} : { rotate: [-5 - i * 1.5, 5 + i * 1.5, -5 - i * 1.5] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Dune grass — right cluster */}
      <div className="absolute bottom-[7%] right-[2%] sm:right-[4%] z-[46]" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i} className="absolute"
            style={{
              right: i * 5, bottom: 0, width: 2,
              height: 20 + (i % 3) * 12 + (i % 2) * 4,
              background: `linear-gradient(0deg, #7A8A5B 0%, ${i % 2 === 0 ? '#6B7A4B' : '#5B6A3B'} 100%)`,
              borderRadius: '2px 2px 0 0', transformOrigin: 'bottom center', opacity: 0.5,
            }}
            animate={rm ? {} : { rotate: [4 + i, -6 - i, 4 + i] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content — parallax fade on scroll */}
      <motion.div
        className="relative z-[60] max-w-4xl mx-auto px-4 sm:px-6 text-center pt-12 sm:pt-16 pb-8 sm:pb-16 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
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
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hydrate while you figure it out<span style={{ color: '#14B8A6' }}>.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span style={{ color: '#1A1A1A', fontWeight: 600 }}>Premium electrolytes</span>{' '}
          <span style={{ color: '#6B7280' }}>for everyone running through life.</span>
        </motion.p>
      </motion.div>
    </section>
  )
}
