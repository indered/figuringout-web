'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ConceptsPage() {
  return (
    <main className="min-h-screen py-12 px-4" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white">Logo Concepts</h1>
            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
              Compact marks for social media & icons
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-full"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            ← Back
          </Link>
        </div>

        {/* Current F. Logo */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            Current: F.
            <span className="text-xs font-normal px-2 py-1 rounded" style={{ backgroundColor: '#FF6B6B', color: 'white' }}>
              Not feeling it
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['#FDF8F3', '#1A1A1A', '#14B8A6', '#0D9488'].map((bg, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: bg }}
              >
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold" style={{ color: bg === '#FDF8F3' ? '#1A1A1A' : 'white' }}>F</span>
                  <span className="w-3 h-3 rounded-full ml-1 mb-1" style={{ backgroundColor: bg === '#14B8A6' ? 'white' : '#14B8A6' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Concepts */}
        <h2 className="text-xl font-bold text-white mb-8">New Concepts</h2>

        {/* Concept 1: Ellipsis Runner */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-bold text-white">1. The Ellipsis Runner</h3>
            <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
              Top Pick
            </span>
          </div>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Three dots — the third one breaking free, running ahead. Connects to "Three Dots..." flavor.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', dot: '#6B7280', active: '#14B8A6' },
              { bg: '#1A1A1A', dot: '#4B5563', active: '#14B8A6' },
              { bg: '#14B8A6', dot: 'rgba(255,255,255,0.4)', active: 'white' },
              { bg: '#E8DFD5', dot: '#9CA3AF', active: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-end gap-2">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.dot }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.dot }} />
                  <motion.span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: scheme.active }}
                    animate={{ y: [-2, -8, -2] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 2: Unfinished Circle */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">2. The Unfinished Circle</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Circle that's 80% complete — life in progress. Teal dot at the gap.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', stroke: '#1A1A1A', dot: '#14B8A6' },
              { bg: '#1A1A1A', stroke: 'white', dot: '#14B8A6' },
              { bg: '#14B8A6', stroke: 'white', dot: 'white' },
              { bg: '#E8DFD5', stroke: '#1A1A1A', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke={scheme.stroke}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="165"
                    strokeDashoffset="35"
                    transform="rotate(-90 40 40)"
                  />
                  <circle cx="62" cy="18" r="6" fill={scheme.dot} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 3: Questioning Drop */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">3. The Questioning Drop</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Water droplet with subtle question mark curve. Hydration + figuring out.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', fill: '#14B8A6' },
              { bg: '#1A1A1A', fill: '#14B8A6' },
              { bg: '#14B8A6', fill: 'white' },
              { bg: '#E8DFD5', fill: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="60" height="80" viewBox="0 0 60 80">
                  <path
                    d="M30 5 C30 5 50 30 50 45 C50 60 42 70 30 70 C18 70 10 60 10 45 C10 30 30 5 30 5"
                    fill={scheme.fill}
                  />
                  <circle cx="30" cy="62" r="4" fill={scheme.bg} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 4: Wave Path */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">4. The Wave Path</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Single flowing wave — coastal running path. Dot as destination.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', stroke: '#1A1A1A', dot: '#14B8A6' },
              { bg: '#1A1A1A', stroke: 'white', dot: '#14B8A6' },
              { bg: '#14B8A6', stroke: 'white', dot: 'white' },
              { bg: '#E8DFD5', stroke: '#1A1A1A', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="80" height="50" viewBox="0 0 80 50">
                  <path
                    d="M5 25 Q20 5 35 25 Q50 45 65 25"
                    fill="none"
                    stroke={scheme.stroke}
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="72" cy="18" r="6" fill={scheme.dot} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 5: Pivot Point */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">5. The Pivot Point</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Two lines meeting at a turning point — changing direction mid-run.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', stroke: '#1A1A1A', dot: '#14B8A6' },
              { bg: '#1A1A1A', stroke: 'white', dot: '#14B8A6' },
              { bg: '#14B8A6', stroke: 'white', dot: 'white' },
              { bg: '#E8DFD5', stroke: '#1A1A1A', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <path
                    d="M15 55 L35 35 L55 50"
                    fill="none"
                    stroke={scheme.stroke}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="35" cy="35" r="7" fill={scheme.dot} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 6: Horizon Line */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">6. The Horizon Line</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Sunrise over water / runner on horizon. Extremely minimal.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', stroke: '#1A1A1A', dot: '#14B8A6' },
              { bg: '#1A1A1A', stroke: 'white', dot: '#14B8A6' },
              { bg: '#14B8A6', stroke: 'white', dot: '#FFD700' },
              { bg: '#E8DFD5', stroke: '#1A1A1A', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="80" height="50" viewBox="0 0 80 50">
                  <line
                    x1="10"
                    y1="35"
                    x2="70"
                    y2="35"
                    stroke={scheme.stroke}
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="40" cy="20" r="8" fill={scheme.dot} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 7: Ripple */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">7. The Ripple</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Concentric incomplete circles — water ripple, life in progress.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', stroke: '#1A1A1A', dot: '#14B8A6' },
              { bg: '#1A1A1A', stroke: 'white', dot: '#14B8A6' },
              { bg: '#14B8A6', stroke: 'white', dot: 'white' },
              { bg: '#E8DFD5', stroke: '#1A1A1A', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke={scheme.stroke}
                    strokeWidth="3"
                    strokeDasharray="150"
                    strokeDashoffset="30"
                    opacity="0.3"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="20"
                    fill="none"
                    stroke={scheme.stroke}
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset="20"
                    opacity="0.6"
                  />
                  <circle cx="40" cy="40" r="6" fill={scheme.dot} />
                </svg>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Concept 8: Running Dot */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-2">8. The Running Dot</h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Single dot with motion trail — minimal, dynamic, memorable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#FDF8F3', trail: '#E8DFD5', dot: '#14B8A6' },
              { bg: '#1A1A1A', trail: '#374151', dot: '#14B8A6' },
              { bg: '#14B8A6', trail: 'rgba(255,255,255,0.3)', dot: 'white' },
              { bg: '#E8DFD5', trail: '#D4C4B5', dot: '#14B8A6' },
            ].map((scheme, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: scheme.bg }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: scheme.trail }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scheme.trail }} />
                  <motion.div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: scheme.dot }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: '#2D2D2D' }}>
          <h3 className="text-lg font-bold text-white mb-4">Designer's Top 3</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#14B8A6' }}>
                <div className="flex items-end gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
                  <motion.span
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ y: [-1, -4, -1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
              <p className="text-sm font-bold text-white">#1 Ellipsis Runner</p>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Simple. Memorable. Connects to flavor.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#FDF8F3' }}>
                <svg width="50" height="50" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="25" fill="none" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" strokeDasharray="130" strokeDashoffset="28" transform="rotate(-90 40 40)" />
                  <circle cx="58" cy="18" r="5" fill="#14B8A6" />
                </svg>
              </div>
              <p className="text-sm font-bold text-white">#2 Unfinished Circle</p>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Universal. Sophisticated. Timeless.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#1A1A1A', border: '1px solid #374151' }}>
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#374151' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4B5563' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#14B8A6' }} />
                </div>
              </div>
              <p className="text-sm font-bold text-white">#3 Running Dot</p>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Minimal. Dynamic. Scalable.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12">
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Pick one and let's make it happen.
          </p>
        </footer>
      </div>
    </main>
  )
}
