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

      {/* Far clouds — slow drift */}
      <motion.div
        className="absolute z-[5] will-change-transform hidden sm:block"
        style={{ top: '8%', left: '10%', y: cloudFarY, opacity: cloudFarOpacity }}
        animate={rm ? {} : { x: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
          <ellipse cx="80" cy="35" rx="80" ry="20" fill="white" fillOpacity="0.5" />
          <ellipse cx="120" cy="30" rx="50" ry="18" fill="white" fillOpacity="0.4" />
          <ellipse cx="60" cy="28" rx="40" ry="15" fill="white" fillOpacity="0.3" />
        </svg>
      </motion.div>

      {/* Near clouds — faster drift */}
      <motion.div
        className="absolute z-[5] will-change-transform hidden sm:block"
        style={{ top: '12%', right: '5%', y: cloudNearY, opacity: cloudNearOpacity }}
        animate={rm ? {} : { x: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
          <ellipse cx="70" cy="28" rx="65" ry="18" fill="white" fillOpacity="0.6" />
          <ellipse cx="110" cy="25" rx="40" ry="14" fill="white" fillOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Distant birds */}
      <motion.div
        className="absolute z-[6] hidden md:block will-change-transform"
        style={{ top: '18%', right: '25%', y: birdsY, opacity: birdsOpacity }}
        animate={rm ? {} : { x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="#5A4A3A" strokeWidth="1.2" strokeLinecap="round">
          <path d="M2,10 Q8,4 14,10" />
          <path d="M20,6 Q25,1 30,6" />
          <path d="M38,12 Q43,7 48,12" />
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

      {/* Footprints in the sand */}
      <div className="absolute bottom-[4%] sm:bottom-[5%] left-[10%] right-[10%] z-[45] hidden sm:block" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${8 + i * 16}%`, bottom: i % 2 === 0 ? '2px' : '8px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={rm ? {} : { opacity: [0, 0.35, 0.35, 0], scale: [0.95, 1, 1, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 0.5, times: [0, 0.15, 0.7, 1], ease: 'easeInOut' }}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none"
              style={{ transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)` }}
            >
              <ellipse cx="6" cy="5" rx="4" ry="3.5" fill="#C4A882" fillOpacity="0.5" />
              <ellipse cx="6" cy="15" rx="3" ry="3" fill="#C4A882" fillOpacity="0.4" />
            </svg>
          </motion.div>
        ))}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{ background: 'linear-gradient(90deg, rgba(20,184,166,0.08) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)' }}
          animate={rm ? {} : { x: ['-110%', '110%'], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      {/* Dune grass — left */}
      <div className="absolute bottom-[8%] left-[2%] z-[46] hidden md:block" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i} className="absolute"
            style={{
              left: i * 4, bottom: 0, width: 1.5, height: 18 + (i % 2) * 6,
              background: 'linear-gradient(0deg, #8B9A6B 0%, #6B7A4B 100%)',
              borderRadius: '1px 1px 0 0', transformOrigin: 'bottom center', opacity: 0.4,
            }}
            animate={rm ? {} : { rotate: [-4 - i * 2, 4 + i * 2, -4 - i * 2] }}
            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Dune grass — right */}
      <div className="absolute bottom-[8%] right-[3%] z-[46] hidden md:block" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i} className="absolute"
            style={{
              right: i * 5, bottom: 0, width: 1.5, height: 15 + (i % 2) * 8,
              background: 'linear-gradient(0deg, #8B9A6B 0%, #6B7A4B 100%)',
              borderRadius: '1px 1px 0 0', transformOrigin: 'bottom center', opacity: 0.35,
            }}
            animate={rm ? {} : { rotate: [3 + i, -5 - i, 3 + i] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
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
