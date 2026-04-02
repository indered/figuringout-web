'use client'

import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'
import WaitlistForm from './WaitlistForm'

export default function CoastalHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Sky gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 40%, #FFA07A 70%, #FDF8F3 100%)',
        }}
      />

      {/* Sun */}
      <motion.div
        className="absolute z-10"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)',
          boxShadow: '0 0 80px rgba(255, 165, 0, 0.6)',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Distant waves */}
      <div className="absolute bottom-[35%] left-0 right-0 z-10">
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full"
          style={{ fill: '#14B8A6', opacity: 0.3 }}
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </div>

      {/* Mid waves */}
      <div className="absolute bottom-[30%] left-0 right-0 z-20">
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full"
          style={{ fill: '#0D9488', opacity: 0.5 }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
        </motion.svg>
      </div>

      {/* Front waves */}
      <div className="absolute bottom-[25%] left-0 right-0 z-30">
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

      {/* Beach / Sand area */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{
          height: '25%',
          background: 'linear-gradient(180deg, #E8DFD5 0%, #D4C4B5 100%)',
        }}
      />

      {/* Palm tree left */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] z-50 hidden md:block"
        style={{ transformOrigin: 'bottom center' }}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="120" height="200" viewBox="0 0 120 200">
          {/* Trunk */}
          <path d="M55,200 Q60,150 65,100 Q68,50 60,30" stroke="#8B7355" strokeWidth="12" fill="none" strokeLinecap="round"/>
          {/* Leaves */}
          <ellipse cx="30" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(-30, 60, 30)"/>
          <ellipse cx="90" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(30, 60, 30)"/>
          <ellipse cx="60" cy="10" rx="30" ry="10" fill="#3D6B55"/>
          <ellipse cx="20" cy="40" rx="30" ry="10" fill="#2D5A45" transform="rotate(-50, 60, 30)"/>
          <ellipse cx="100" cy="40" rx="30" ry="10" fill="#2D5A45" transform="rotate(50, 60, 30)"/>
        </svg>
      </motion.div>

      {/* Palm tree right */}
      <motion.div
        className="absolute bottom-[20%] right-[5%] z-50 hidden md:block"
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

      {/* Animated runner silhouette */}
      <motion.div
        className="absolute bottom-[22%] z-50"
        initial={{ left: '-10%' }}
        animate={{ left: '110%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="40" height="60" viewBox="0 0 40 60" fill="#1A1A1A" opacity="0.7">
          <circle cx="20" cy="8" r="6" />
          <path d="M20,14 L20,32 M20,20 L10,28 M20,20 L30,26 M20,32 L12,50 M20,32 L28,48"
                stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-[60] max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20 pb-28 sm:pb-40">
        {/* Coming Soon Badge */}
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
            Coming October 2026
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="block sm:inline">In a world where everyone is figuring out,</span>{' '}
          <span style={{ color: '#14B8A6' }}>at least we figured out the hydration.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          India's first electrolyte for everyone running through life.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[70] flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#1A1A1A' }}>Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: '#1A1A1A' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#1A1A1A' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
