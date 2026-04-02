'use client'

import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#E8DFD5' }}>
      {/* Decorative palm shadow */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" fill="#2D5A45">
          <ellipse cx="100" cy="50" rx="80" ry="30" transform="rotate(-20, 100, 100)" />
          <ellipse cx="60" cy="80" rx="60" ry="25" transform="rotate(-45, 100, 100)" />
          <ellipse cx="140" cy="80" rx="60" ry="25" transform="rotate(45, 100, 100)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium tracking-widest uppercase mb-6"
          style={{ color: '#14B8A6' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-8"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We started running because we had no answers.
        </motion.h2>

        <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#4B5563' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Not sure about the job. Not sure about the relationship. Not sure about anything, really.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            So we ran. At 5am when the city was still asleep. At 10pm when the thoughts got too loud. On weekends when everyone else was "living their best life."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Running didn't give us answers. But it gave us something better — <span className="font-semibold" style={{ color: '#1A1A1A' }}>clarity</span>. The kind that comes when your legs are tired and your mind finally shuts up.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            We built Figuring Out for everyone who's in that messy middle. The quarter-life crisis crowd. The mid-life pivot people. The "I don't know what I'm doing but I'm doing it anyway" tribe.
          </motion.p>

          <motion.p
            className="text-xl font-semibold pt-4"
            style={{ color: '#1A1A1A' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            You might not have life figured out. But at least you'll be hydrated while you're figuring it out.
          </motion.p>
        </div>

        {/* Founder note */}
        <motion.div
          className="mt-12 pt-8 flex items-center gap-4"
          style={{ borderTop: '2px solid rgba(0,0,0,0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: '#14B8A6' }}
          >
            M
          </div>
          <div>
            <p className="font-semibold" style={{ color: '#1A1A1A' }}>Mahesh</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Founder, still figuring it out</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
