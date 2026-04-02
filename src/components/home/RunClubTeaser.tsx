'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function RunClubTeaser() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: '#FF6B6B' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-20">🏃‍♂️</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20">🌴</div>

          <div className="max-w-xl relative z-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'white', opacity: 0.8 }}>
              🏃 Run Club
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'white' }}>
              Not a run club.<br />
              Just people who run.
            </h2>
            <p className="text-base font-medium" style={{ color: 'white', opacity: 0.9 }}>
              Every Saturday. Everywhere in India.<br />
              All paces. No agenda. No judgment.<br />
              Show up or don't. <em>(Show up.)</em>
            </p>
          </div>

          <Link
            href="/run-club"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 shadow-lg relative z-10"
            style={{ backgroundColor: 'white', color: '#FF6B6B' }}
          >
            Find a run near you →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
