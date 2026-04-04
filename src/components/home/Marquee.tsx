'use client'

const words = [
  'still figuring it out',
  'but hydrated',
  'running anyway',
  'zero sugar zero regrets',
  'therapy is expensive',
  'left on read again',
  'existential hydration',
  'broke but hydrated',
  'hot ex energy',
  'finding clarity',
]

export default function Marquee() {
  return (
    <div
      className="py-3 sm:py-4 overflow-hidden"
      style={{ backgroundColor: '#FDF8F3', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm font-medium mx-4 sm:mx-6"
            style={{ color: i % 2 === 0 ? '#14B8A6' : '#9CA3AF' }}
          >
            {word} •
          </span>
        ))}
      </div>
    </div>
  )
}
