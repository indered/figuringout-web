'use client'

import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

export default function WaitlistSection() {
  return (
    <section
      id="waitlist-section"
      className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)' }}
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: '#1A1A1A' }} preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 Z" />
        </svg>
      </div>

      {/* Decorative */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white opacity-5" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-white opacity-5" />

      <div className="max-w-2xl mx-auto relative z-10 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <WaitlistForm />
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: '#E8DFD5' }}>
          <path d="M0,0 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,0 Z" />
        </svg>
      </div>
    </section>
  )
}
