'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: '#0D9488' }}>
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: '#FDF8F3' }} preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
        <motion.p
          className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 sm:mb-12"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Catch Your Breath
        </motion.p>

        <div className="space-y-4 sm:space-y-6 text-lg sm:text-2xl md:text-3xl font-light leading-relaxed" style={{ color: 'white' }}>
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            You don't know if this job is right for you.
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            You don't know where you're going next.
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            You don't know if that person is your person.
          </motion.p>
          <motion.p style={{ color: 'rgba(255,255,255,0.5)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Everything feels uncertain.
          </motion.p>
          <motion.p style={{ color: 'rgba(255,255,255,0.5)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            Everything <em>is</em> uncertain.
          </motion.p>
          <motion.p className="pt-2 sm:pt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            Except one thing.
          </motion.p>
          <motion.p
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
            style={{ color: '#FFD700' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            You run.
          </motion.p>
          <motion.p style={{ color: 'rgba(255,255,255,0.8)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
            And hydration fuels that one thing.<br className="hidden sm:block" />
            That one certain thing.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 sm:mt-16 pt-8 sm:pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            So yeah — we haven't figured it out.<br />
            Not our careers. Not our hearts. Not where we're headed.<br />
            <br />
            But we're running anyway.<br />
            And we're hydrated.
          </p>
          <Link
            href="/story"
            className="inline-block mt-6 sm:mt-8 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'white', color: '#0D9488' }}
          >
            Read the full story →
          </Link>
        </motion.div>
      </div>

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: '#FDF8F3' }}>
          <path d="M0,0 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,0 Z" />
        </svg>
      </div>
    </section>
  )
}
