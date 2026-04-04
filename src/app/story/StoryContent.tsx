'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StoryContent() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDF8F3' }}>
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4" aria-label="Story page navigation">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'white', color: '#1A1A1A', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            aria-label="Go back to homepage"
          >
            ← Back
          </Link>
          <Link
            href="/#waitlist"
            className="text-sm font-bold px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.p
            className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6"
            style={{ color: '#14B8A6' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Story
          </motion.p>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 sm:mb-10"
            style={{ color: '#1A1A1A' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We started running because we had no answers.
          </motion.h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed" style={{ color: '#4B5563' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Not sure about the job. Not sure about the relationship. Not sure about anything, really.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              So we ran. At 5am when the city was still asleep. At 10pm when the thoughts got too loud. On weekends when everyone else was &quot;living their best life.&quot;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Running didn&apos;t give us answers. But it gave us something better — <strong style={{ color: '#1A1A1A' }}>clarity</strong>. The kind that comes when your legs are tired and your mind finally shuts up.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We built Figuring Out for everyone who&apos;s in that messy middle. The quarter-life crisis crowd. The mid-life pivot people. The &quot;I don&apos;t know what I&apos;m doing but I&apos;m doing it anyway&quot; tribe.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl font-semibold pt-4"
              style={{ color: '#1A1A1A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              You might not have life figured out. But at least you&apos;ll be hydrated while you&apos;re figuring it out.
            </motion.p>
          </div>

          {/* Founder */}
          <motion.aside
            className="mt-12 pt-8 flex items-center gap-4"
            style={{ borderTop: '2px solid rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            aria-label="Founder information"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: '#14B8A6' }}
              role="img"
              aria-label="Mahesh's avatar"
            >
              M
            </div>
            <address className="not-italic">
              <a href="https://instagram.com/mahesh.inder_" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#14B8A6] transition-colors cursor-pointer" style={{ color: '#1A1A1A' }}>Mahesh</a>
              <p className="text-sm" style={{ color: '#6B7280' }}>Founder, still figuring it out</p>
            </address>
          </motion.aside>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
                boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
              }}
            >
              Join the Waitlist →
            </Link>
          </motion.div>
        </div>
      </article>
    </main>
  )
}
