'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '@/lib/animations'

const lines = [
  { text: "You don't know if this job is right for you.", dim: false },
  { text: "You don't know where you're going next.", dim: false },
  { text: "You don't know if that person is your person.", dim: false },
  { text: 'Everything feels uncertain.', dim: true },
  { text: 'Everything is uncertain.', dim: true, italic: true },
  { text: 'Except one thing.', dim: false },
]

function ScrollWord({
  word,
  index,
  total,
  scrollYProgress,
  dim,
}: {
  word: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  dim: boolean
}) {
  const start = index / total
  const end = start + 1 / total

  const opacity = useTransform(scrollYProgress, [start, Math.min(end, 1)], [0.08, dim ? 0.5 : 1])
  const blur = useTransform(scrollYProgress, [start, Math.min(end, 1)], [4, 0])
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.span
      className="inline-block mr-[0.3em] will-change-[opacity,filter]"
      style={{ opacity, filter }}
    >
      {word}
    </motion.span>
  )
}

function DesktopManifesto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.3'],
  })

  // Flatten all words for sequential reveal
  const allWords: { word: string; dim: boolean }[] = []
  lines.forEach((line) => {
    line.text.split(' ').forEach((word) => {
      allWords.push({ word, dim: line.dim })
    })
    allWords.push({ word: '\n', dim: false }) // line break marker
  })
  const totalWords = allWords.filter((w) => w.word !== '\n').length

  // "You run." headline transforms
  const youRunScale = useTransform(scrollYProgress, [0.7, 0.85], [0.85, 1])
  const youRunBlur = useTransform(scrollYProgress, [0.7, 0.85], [8, 0])
  const youRunFilter = useTransform(youRunBlur, (v) => `blur(${v}px)`)
  const youRunOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1])

  let wordIndex = 0

  return (
    <div ref={containerRef}>
      <div className="space-y-4 sm:space-y-6 text-lg sm:text-2xl md:text-3xl font-light leading-relaxed" style={{ color: 'white' }}>
        {lines.map((line, lineIdx) => (
          <p key={lineIdx} style={line.dim ? { color: 'rgba(255,255,255,0.5)' } : undefined}>
            {line.text.split(' ').map((word) => {
              const idx = wordIndex++
              return (
                <ScrollWord
                  key={`${lineIdx}-${idx}`}
                  word={line.italic ? word : word}
                  index={idx}
                  total={totalWords}
                  scrollYProgress={scrollYProgress}
                  dim={line.dim}
                />
              )
            })}
          </p>
        ))}

        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold pt-2 sm:pt-4 will-change-[opacity,filter,transform]"
          style={{
            color: '#FFD700',
            scale: youRunScale,
            filter: youRunFilter,
            opacity: youRunOpacity,
          }}
        >
          You run.
        </motion.h2>

        <motion.p
          style={{ color: 'rgba(255,255,255,0.8)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          And hydration fuels that one thing.<br className="hidden sm:block" />
          That one certain thing.
        </motion.p>
      </div>
    </div>
  )
}

function MobileManifesto() {
  return (
    <div className="space-y-4 text-lg sm:text-2xl font-light leading-relaxed" style={{ color: 'white' }}>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          style={line.dim ? { color: 'rgba(255,255,255,0.5)' } : undefined}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {line.italic ? <em>{line.text}</em> : line.text}
        </motion.p>
      ))}
      <motion.h2
        className="text-3xl font-bold pt-2"
        style={{ color: '#FFD700' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        You run.
      </motion.h2>
      <motion.p
        style={{ color: 'rgba(255,255,255,0.8)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        And hydration fuels that one thing.<br />
        That one certain thing.
      </motion.p>
    </div>
  )
}

export default function Manifesto() {
  const isMobile = useIsMobile()

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: '#0D9488' }} aria-labelledby="manifesto-heading">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: '#1A1A1A' }} preserveAspectRatio="none">
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

        <div id="manifesto-heading">
          {isMobile ? <MobileManifesto /> : <DesktopManifesto />}
        </div>

        <motion.div
          className="mt-10 sm:mt-16 pt-8 sm:pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            So yeah — we haven&apos;t figured it out.<br />
            Not our careers. Not our hearts. Not where we&apos;re headed.<br />
            <br />
            But we&apos;re running anyway.<br />
            And we&apos;re hydrated.
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
