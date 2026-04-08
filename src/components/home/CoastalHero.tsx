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

      {/* ===== BIRDS — bigger, visible, two groups ===== */}

      {/* Bird group 1 — right side, V-formation flock */}
      <motion.div
        className="absolute z-[6] hidden sm:block will-change-transform"
        style={{ top: '13%', right: '18%', y: birdsY, opacity: birdsOpacity }}
        animate={rm ? {} : { x: [0, 40, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="140" height="60" viewBox="0 0 140 60" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Lead bird — largest */}
          <path d="M60,25 C55,18 48,12 40,15" stroke="#3A2A1A" strokeWidth="2.2" fill="none" />
          <path d="M60,25 C65,18 72,12 80,15" stroke="#3A2A1A" strokeWidth="2.2" fill="none" />
          {/* Right wing birds */}
          <path d="M85,20 C82,15 78,11 73,13" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M85,20 C88,15 92,11 97,13" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M105,18 C103,14 100,11 96,12.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          <path d="M105,18 C107,14 110,11 114,12.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          {/* Left wing birds */}
          <path d="M35,22 C32,17 28,13 23,15" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M35,22 C38,17 42,13 47,15" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M15,20 C13,16 10,13 6,14.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          <path d="M15,20 C17,16 20,13 24,14.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          {/* Trailing bird — smaller, drifting behind */}
          <path d="M70,38 C68,34 65,31 61,32.5" stroke="#6A5A4A" strokeWidth="1.3" fill="none" />
          <path d="M70,38 C72,34 75,31 79,32.5" stroke="#6A5A4A" strokeWidth="1.3" fill="none" />
        </svg>
      </motion.div>

      {/* Bird group 2 — left side, scattered trio, different timing */}
      <motion.div
        className="absolute z-[6] hidden md:block will-change-transform"
        style={{ top: '20%', left: '12%', y: birdsY }}
        animate={rm ? {} : { x: [0, -25, 0], y: [0, -6, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="100" height="45" viewBox="0 0 100 45" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40,18 C36,12 30,8 24,11" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M40,18 C44,12 50,8 56,11" stroke="#4A3A2A" strokeWidth="1.8" fill="none" />
          <path d="M65,25 C63,21 60,18 56,19.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          <path d="M65,25 C67,21 70,18 74,19.5" stroke="#5A4A3A" strokeWidth="1.5" fill="none" />
          <path d="M20,30 C18,27 16,24 13,25" stroke="#6A5A4A" strokeWidth="1.3" fill="none" />
          <path d="M20,30 C22,27 24,24 27,25" stroke="#6A5A4A" strokeWidth="1.3" fill="none" />
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

      {/* Palm tree left — curved trunk, layered fronds, coconuts */}
      <motion.div
        className="absolute bottom-[6%] left-[3%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={rm ? {} : { rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="160" height="240" viewBox="0 0 160 240">
          {/* Trunk — curved, tapered, with bark texture */}
          <path d="M70,240 C68,200 65,170 62,140 C58,110 55,80 60,40" stroke="#6B5B3E" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M70,240 C68,200 65,170 62,140 C58,110 55,80 60,40" stroke="#7A6B4E" strokeWidth="10" fill="none" strokeLinecap="round"/>
          {/* Bark rings */}
          <path d="M64,180 C66,178 68,179 69,181" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M62,150 C64,148 66,149 67,151" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M60,120 C62,118 64,119 65,121" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M58,90 C60,88 62,89 63,91" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.35"/>
          {/* Coconuts */}
          <circle cx="56" cy="42" r="4.5" fill="#5D4E37" />
          <circle cx="64" cy="40" r="4" fill="#6B5B3E" />
          <circle cx="60" cy="46" r="4.2" fill="#4D3E27" />
          {/* Fronds — each a curved path with leaflet lines */}
          {/* Right drooping frond */}
          <path d="M60,38 C80,25 110,20 140,35" stroke="#2D6B45" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M85,24 L90,30 M95,23 L98,29 M105,22 L107,28 M115,24 L116,30 M125,28 L124,33" stroke="#2D6B45" strokeWidth="1.2" fill="none" opacity="0.6"/>
          {/* Right upper frond */}
          <path d="M60,36 C75,18 100,8 130,15" stroke="#3D7B55" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M80,14 L84,20 M90,12 L93,18 M100,10 L102,16 M110,11 L111,17" stroke="#3D7B55" strokeWidth="1" fill="none" opacity="0.5"/>
          {/* Left drooping frond */}
          <path d="M60,38 C40,25 15,25 -5,45" stroke="#2D5A45" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M35,27 L32,33 M25,28 L22,34 M15,32 L12,38 M8,38 L5,42" stroke="#2D5A45" strokeWidth="1.2" fill="none" opacity="0.6"/>
          {/* Left upper frond */}
          <path d="M60,36 C42,20 20,15 -5,22" stroke="#3D6B55" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M38,18 L35,24 M28,17 L25,23 M18,18 L15,24 M8,20 L6,25" stroke="#3D6B55" strokeWidth="1" fill="none" opacity="0.5"/>
          {/* Top frond */}
          <path d="M60,36 C58,18 52,5 40,-8" stroke="#3D7B55" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M57,15 L52,18 M55,8 L50,11 M53,0 L48,3" stroke="#3D7B55" strokeWidth="1" fill="none" opacity="0.5"/>
          {/* Back frond */}
          <path d="M60,38 C70,15 85,-2 105,-8" stroke="#1D4A35" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Palm tree right — shorter, leaning */}
      <motion.div
        className="absolute bottom-[6%] right-[3%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={rm ? {} : { rotate: [1.5, -1.5, 1.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="140" height="210" viewBox="0 0 140 210">
          {/* Trunk */}
          <path d="M75,210 C78,175 80,145 78,115 C76,85 72,60 68,35" stroke="#6B5B3E" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <path d="M75,210 C78,175 80,145 78,115 C76,85 72,60 68,35" stroke="#7A6B4E" strokeWidth="8" fill="none" strokeLinecap="round"/>
          {/* Bark */}
          <path d="M77,160 C79,158 81,159 82,161" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.35"/>
          <path d="M78,130 C80,128 82,129 83,131" stroke="#5A4B2E" strokeWidth="1" fill="none" opacity="0.35"/>
          {/* Coconuts */}
          <circle cx="64" cy="38" r="4" fill="#5D4E37" />
          <circle cx="72" cy="36" r="3.5" fill="#6B5B3E" />
          {/* Fronds */}
          <path d="M68,33 C85,20 110,18 135,30" stroke="#2D6B45" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
          <path d="M90,20 L93,26 M100,19 L102,25 M110,20 L111,26 M120,24 L120,29" stroke="#2D6B45" strokeWidth="1.1" fill="none" opacity="0.6"/>
          <path d="M68,33 C50,22 25,22 5,38" stroke="#2D5A45" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
          <path d="M45,24 L42,30 M35,25 L32,31 M25,29 L22,34 M15,34 L13,38" stroke="#2D5A45" strokeWidth="1.1" fill="none" opacity="0.6"/>
          <path d="M68,32 C60,15 55,2 48,-10" stroke="#3D7B55" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <path d="M68,33 C80,12 95,0 110,-5" stroke="#1D4A35" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5"/>
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

      {/* Footprints in the sand — realistic with depth and displaced sand */}
      <div className="absolute bottom-[2%] sm:bottom-[3%] left-[8%] right-[8%] z-[45]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${3 + i * 12}%`, bottom: isLeft ? '0px' : '12px' }}
              initial={{ opacity: 0 }}
              animate={rm ? {} : { opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: i * 0.6, times: [0, 0.12, 0.75, 1], ease: 'easeInOut' }}
            >
              <svg width="22" height="38" viewBox="0 0 22 38" fill="none"
                className="w-[14px] h-[25px] sm:w-[20px] sm:h-[36px]"
                style={{ transform: `rotate(${isLeft ? -10 : 10}deg)` }}
              >
                {/* Displaced sand ring (lighter outer edge) */}
                <ellipse cx="11" cy="9" rx="8" ry="7" fill="#C8B898" fillOpacity="0.25" />
                <ellipse cx="11" cy="27" rx="6.5" ry="6.5" fill="#C8B898" fillOpacity="0.2" />
                {/* Shadow depth (darker inner impression) */}
                <ellipse cx="11" cy="9" rx="6" ry="5.5" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="11" cy="27" rx="4.5" ry="5" fill="#9A8A6A" fillOpacity="0.3" />
                {/* Ball of foot */}
                <ellipse cx="11" cy="9" rx="5" ry="4.5" fill="#A89878" fillOpacity="0.5" />
                {/* Heel */}
                <ellipse cx="11" cy="27" rx="3.8" ry="4.2" fill="#A89878" fillOpacity="0.45" />
                {/* Arch — lighter gap between ball and heel */}
                <ellipse cx="11" cy="18" rx="2" ry="3.5" fill="#D4C4B5" fillOpacity="0.3" />
                {/* Toe impressions — 5 toes with varying depth */}
                <ellipse cx="5.5" cy="3.5" rx="1.8" ry="1.4" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="8.5" cy="2" rx="1.6" ry="1.3" fill="#9A8A6A" fillOpacity="0.4" />
                <ellipse cx="11.5" cy="1.5" rx="1.5" ry="1.2" fill="#9A8A6A" fillOpacity="0.4" />
                <ellipse cx="14" cy="2.5" rx="1.3" ry="1.1" fill="#9A8A6A" fillOpacity="0.35" />
                <ellipse cx="16" cy="4" rx="1.1" ry="1" fill="#9A8A6A" fillOpacity="0.3" />
                {/* Subtle highlight (wet sand reflection) */}
                <ellipse cx="10" cy="8" rx="2.5" ry="1.5" fill="white" fillOpacity="0.08" />
              </svg>
            </motion.div>
          )
        })}

        {/* Wave wash — gentle water creeping up the sand */}
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
