'use client'

import CountdownTimer from './CountdownTimer'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      {/* Background marquee */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none select-none whitespace-nowrap py-4">
        <div className="flex animate-marquee">
          {Array(10).fill('FIGURING OUT · HYDRATE FIRST · FIGURE IT OUT LATER · ').map((t, i) => (
            <span key={i} className="text-6xl font-bold mr-8" style={{ color: '#F5F5F5' }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: '#1A1A1A', color: '#FF4D00', border: '1px solid #2A2A2A' }}
          >
            Coming October 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6" style={{ color: '#F5F5F5' }}>
          Hydrate first.<br />
          <span style={{ color: '#FF4D00' }}>Figure it out</span> later.
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl font-normal max-w-2xl mx-auto mb-12" style={{ color: '#A0A0A0' }}>
          India's first electrolyte for everyone running through the uncertainty.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-16">
          <CountdownTimer />
        </div>

        {/* Waitlist Form */}
        <WaitlistForm />

        {/* Flavor pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['Left On Read', 'Situationship', 'Therapy Is Expensive', 'Still Loading'].map((name) => (
            <span
              key={name}
              className="text-xs font-medium px-4 py-2 rounded-full"
              style={{ backgroundColor: '#1A1A1A', color: '#A0A0A0', border: '1px solid #2A2A2A' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#F5F5F5' }}>Scroll</span>
        <div className="w-px h-12 animate-pulse" style={{ backgroundColor: '#FF4D00' }} />
      </div>
    </section>
  )
}
