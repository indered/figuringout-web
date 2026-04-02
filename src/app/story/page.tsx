'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StoryPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDF8F3' }}>
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all hover:scale-105"
          style={{ backgroundColor: 'white', color: '#1A1A1A', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        >
          ← Back
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl sm:text-8xl mb-6"
        >
          🏃‍♂️
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Why we run
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl max-w-md mx-auto"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Not for medals. For sanity.
        </motion.p>
      </section>

      {/* Story blocks */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="space-y-16">
          {/* Block 1 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🤷</div>
            <p className="text-xl sm:text-2xl font-medium" style={{ color: '#1A1A1A' }}>
              Job? Confusing.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">💔</div>
            <p className="text-xl sm:text-2xl font-medium" style={{ color: '#1A1A1A' }}>
              Relationship? Complicated.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🧠</div>
            <p className="text-xl sm:text-2xl font-medium" style={{ color: '#1A1A1A' }}>
              Life? Still loading.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#14B8A6' }} />
          </motion.div>

          {/* Block 4 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">👟</div>
            <p className="text-xl sm:text-2xl font-medium" style={{ color: '#1A1A1A' }}>
              So we run.
            </p>
            <p className="text-base mt-2" style={{ color: '#6B7280' }}>
              At 5am when everyone's asleep.<br />
              At 10pm when the thoughts get loud.
            </p>
          </motion.div>

          {/* Block 5 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">💡</div>
            <p className="text-xl sm:text-2xl font-medium" style={{ color: '#1A1A1A' }}>
              Running doesn't give answers.
            </p>
            <p className="text-base mt-2" style={{ color: '#6B7280' }}>
              But it gives clarity.
            </p>
          </motion.div>

          {/* Final block */}
          <motion.div
            className="text-center rounded-3xl p-8 sm:p-12"
            style={{ backgroundColor: '#14B8A6' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🌴</div>
            <p className="text-xl sm:text-2xl font-bold text-white mb-2">
              Figuring Out
            </p>
            <p className="text-base text-white/80">
              You might not have life figured out.<br />
              But at least you'll be hydrated.
            </p>
          </motion.div>

          {/* Founder */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: '#14B8A6' }}
            >
              M
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>Mahesh</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Still figuring it out</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
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
      </section>
    </main>
  )
}
