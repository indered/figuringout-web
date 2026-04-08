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

      {/* Cloud 1 — large cumulus, left side, slow drift */}
      <motion.div
        className="absolute z-[5] will-change-transform"
        style={{ top: '4%', left: '2%', y: cloudFarY, opacity: cloudFarOpacity }}
        animate={rm ? {} : { x: [0, 80, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="420" height="140" viewBox="0 0 420 140" fill="none" className="w-[260px] sm:w-[360px] md:w-[420px]">
          <defs>
            <filter id="cloudSoft1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            <radialGradient id="cloudGrad1" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="70%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.15" />
            </radialGradient>
          </defs>
          {/* Base cloud body — overlapping soft circles */}
          <g filter="url(#cloudSoft1)">
            <circle cx="140" cy="85" r="45" fill="url(#cloudGrad1)" />
            <circle cx="190" cy="70" r="50" fill="url(#cloudGrad1)" />
            <circle cx="250" cy="75" r="42" fill="url(#cloudGrad1)" />
            <circle cx="110" cy="90" r="38" fill="white" fillOpacity="0.5" />
            <circle cx="300" cy="85" r="32" fill="white" fillOpacity="0.4" />
            {/* Top billows */}
            <circle cx="170" cy="55" r="35" fill="white" fillOpacity="0.7" />
            <circle cx="220" cy="50" r="38" fill="white" fillOpacity="0.75" />
            <circle cx="265" cy="58" r="28" fill="white" fillOpacity="0.5" />
            {/* Bottom flat base */}
            <ellipse cx="200" cy="105" rx="130" ry="18" fill="white" fillOpacity="0.35" />
          </g>
          {/* Bright highlight on top */}
          <circle cx="210" cy="48" r="22" fill="white" fillOpacity="0.5" />
        </svg>
      </motion.div>

      {/* Cloud 2 — right side, puffier, opposite drift */}
      <motion.div
        className="absolute z-[5] will-change-transform"
        style={{ top: '8%', right: '0%', y: cloudNearY, opacity: cloudNearOpacity }}
        animate={rm ? {} : { x: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="380" height="130" viewBox="0 0 380 130" fill="none" className="w-[220px] sm:w-[300px] md:w-[380px]">
          <defs>
            <filter id="cloudSoft2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
            </filter>
            <radialGradient id="cloudGrad2" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="white" stopOpacity="0.85" />
              <stop offset="60%" stopColor="white" stopOpacity="0.55" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <g filter="url(#cloudSoft2)">
            <circle cx="130" cy="70" r="42" fill="url(#cloudGrad2)" />
            <circle cx="185" cy="60" r="48" fill="url(#cloudGrad2)" />
            <circle cx="240" cy="68" r="38" fill="url(#cloudGrad2)" />
            <circle cx="90" cy="78" r="30" fill="white" fillOpacity="0.4" />
            <circle cx="285" cy="75" r="28" fill="white" fillOpacity="0.35" />
            {/* Top billows */}
            <circle cx="160" cy="42" r="32" fill="white" fillOpacity="0.65" />
            <circle cx="210" cy="38" r="35" fill="white" fillOpacity="0.7" />
            {/* Base */}
            <ellipse cx="185" cy="95" rx="110" ry="15" fill="white" fillOpacity="0.3" />
          </g>
        </svg>
      </motion.div>

      {/* Cloud 3 — wispy cirrus, center, very slow */}
      <motion.div
        className="absolute z-[5] will-change-transform hidden sm:block"
        style={{ top: '14%', left: '30%', y: cloudFarY }}
        animate={rm ? {} : { x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="240" height="70" viewBox="0 0 240 70" fill="none">
          <defs>
            <filter id="cloudSoft3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
          <g filter="url(#cloudSoft3)">
            <ellipse cx="80" cy="35" rx="55" ry="16" fill="white" fillOpacity="0.35" />
            <ellipse cx="140" cy="30" rx="65" ry="14" fill="white" fillOpacity="0.3" />
            <ellipse cx="190" cy="38" rx="40" ry="10" fill="white" fillOpacity="0.25" />
          </g>
        </svg>
      </motion.div>


      {/* Sun — with soft glow rings */}
      <motion.div
        className="absolute z-10 will-change-transform"
        style={{ top: '15%', left: '50%', x: '-50%', y: sunY }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute"
          style={{
            width: '280px', height: '280px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,165,0,0.05) 50%, transparent 70%)',
            top: '-65px', left: '-65px',
          }}
          animate={rm ? {} : { scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Inner sun */}
        <motion.div
          style={{
            width: '150px', height: '150px', borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 35%, #FFF5CC 0%, #FFD700 30%, #FFA500 80%, #E88A00 100%)',
            boxShadow: '0 0 60px rgba(255, 180, 0, 0.5), 0 0 120px rgba(255, 165, 0, 0.3)',
          }}
          animate={rm ? {} : { scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

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

      {/* Palm tree left — simple, clean silhouette */}
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

      {/* Palm tree right — smaller */}
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

      {/* Footprints in the sand — horizontal, walking left to right */}
      <div className="absolute bottom-[2%] sm:bottom-[3%] left-[8%] right-[8%] z-[45]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${3 + i * 12}%`, bottom: isLeft ? '4px' : '16px' }}
              initial={{ opacity: 0 }}
              animate={rm ? {} : { opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: i * 0.6, times: [0, 0.12, 0.75, 1], ease: 'easeInOut' }}
            >
              <svg width="38" height="22" viewBox="0 0 38 22" fill="none"
                className="w-[25px] h-[14px] sm:w-[36px] sm:h-[20px]"
              >
                {/* Displaced sand ring */}
                <ellipse cx="29" cy="11" ry="8" rx="7" fill="#C8B898" fillOpacity="0.25" />
                <ellipse cx="11" cy="11" ry="6.5" rx="6.5" fill="#C8B898" fillOpacity="0.2" />
                {/* Shadow depth */}
                <ellipse cx="29" cy="11" ry="6" rx="5.5" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="11" cy="11" ry="4.5" rx="5" fill="#9A8A6A" fillOpacity="0.3" />
                {/* Ball of foot (toes point right) */}
                <ellipse cx="29" cy="11" ry="5" rx="4.5" fill="#A89878" fillOpacity="0.5" />
                {/* Heel (left side) */}
                <ellipse cx="11" cy="11" ry="3.8" rx="4.2" fill="#A89878" fillOpacity="0.45" />
                {/* Arch gap */}
                <ellipse cx="20" cy="11" ry="2" rx="3.5" fill="#D4C4B5" fillOpacity="0.3" />
                {/* 5 toes — pointing right */}
                <ellipse cx="34.5" cy="5.5" ry="1.8" rx="1.4" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="36" cy="8.5" ry="1.6" rx="1.3" fill="#9A8A6A" fillOpacity="0.4" />
                <ellipse cx="36.5" cy="11.5" ry="1.5" rx="1.2" fill="#9A8A6A" fillOpacity="0.4" />
                <ellipse cx="35.5" cy="14" ry="1.3" rx="1.1" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="34" cy="16" ry="1.1" rx="1" fill="#9A8A6A" fillOpacity="0.3" />
                {/* Wet sand highlight */}
                <ellipse cx="30" cy="10" ry="2.5" rx="1.5" fill="white" fillOpacity="0.08" />
              </svg>
            </motion.div>
          )
        })}

        {/* Wave wash */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[35px] rounded-[50%_50%_0_0]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(20,184,166,0.1) 15%, rgba(255,255,255,0.12) 40%, rgba(20,184,166,0.08) 65%, transparent 100%)',
          }}
          animate={rm ? {} : { x: ['-110%', '110%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      {/* Dune grass — left cluster, curved blades with seed heads */}
      <div className="absolute bottom-[7%] left-[2%] sm:left-[4%] z-[46]" aria-hidden="true">
        <motion.svg width="60" height="70" viewBox="0 0 60 70" className="w-[40px] h-[50px] sm:w-[60px] sm:h-[70px]"
          style={{ transformOrigin: 'bottom center' }}
        >
          {/* Tall blade with seed head */}
          <motion.path d="M20,70 C20,50 18,30 12,8" stroke="#5B6A3B" strokeWidth="2" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M20,70 C20,50 18,30 12,8', 'M20,70 C22,50 24,30 18,8', 'M20,70 C20,50 18,30 12,8'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ellipse cx="12" cy="6" rx="2" ry="4" fill="#7A8A5B" fillOpacity="0.6" />
          {/* Medium blade */}
          <motion.path d="M25,70 C25,52 27,38 30,18" stroke="#6B7A4B" strokeWidth="1.8" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M25,70 C25,52 27,38 30,18', 'M25,70 C27,52 30,38 35,18', 'M25,70 C25,52 27,38 30,18'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Short blade */}
          <motion.path d="M30,70 C30,55 28,42 24,30" stroke="#5B6A3B" strokeWidth="1.5" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M30,70 C30,55 28,42 24,30', 'M30,70 C31,55 30,42 28,30', 'M30,70 C30,55 28,42 24,30'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Tall right blade with seed */}
          <motion.path d="M35,70 C35,48 38,28 42,10" stroke="#6B7A4B" strokeWidth="1.8" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M35,70 C35,48 38,28 42,10', 'M35,70 C37,48 42,28 48,10', 'M35,70 C35,48 38,28 42,10'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ellipse cx="42" cy="8" rx="1.5" ry="3.5" fill="#7A8A5B" fillOpacity="0.5" />
          {/* Thin wispy blade */}
          <motion.path d="M15,70 C15,58 13,45 8,35" stroke="#5B6A3B" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6"
            animate={rm ? {} : { d: ['M15,70 C15,58 13,45 8,35', 'M15,70 C16,58 15,45 12,35', 'M15,70 C15,58 13,45 8,35'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      {/* Dune grass — right cluster */}
      <div className="absolute bottom-[7%] right-[2%] sm:right-[4%] z-[46]" aria-hidden="true">
        <motion.svg width="50" height="65" viewBox="0 0 50 65" className="w-[35px] h-[45px] sm:w-[50px] sm:h-[65px]"
          style={{ transformOrigin: 'bottom center' }}
        >
          <motion.path d="M15,65 C15,45 12,28 8,10" stroke="#6B7A4B" strokeWidth="1.8" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M15,65 C15,45 12,28 8,10', 'M15,65 C17,45 16,28 14,10', 'M15,65 C15,45 12,28 8,10'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ellipse cx="8" cy="8" rx="1.5" ry="3.5" fill="#7A8A5B" fillOpacity="0.5" />
          <motion.path d="M22,65 C22,50 24,35 28,20" stroke="#5B6A3B" strokeWidth="1.6" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M22,65 C22,50 24,35 28,20', 'M22,65 C24,50 28,35 34,20', 'M22,65 C22,50 24,35 28,20'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path d="M28,65 C28,55 26,42 22,32" stroke="#6B7A4B" strokeWidth="1.3" fill="none" strokeLinecap="round"
            animate={rm ? {} : { d: ['M28,65 C28,55 26,42 22,32', 'M28,65 C29,55 28,42 26,32', 'M28,65 C28,55 26,42 22,32'] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path d="M35,65 C35,48 37,32 40,15" stroke="#5B6A3B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"
            animate={rm ? {} : { d: ['M35,65 C35,48 37,32 40,15', 'M35,65 C37,48 40,32 45,15', 'M35,65 C35,48 37,32 40,15'] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
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
