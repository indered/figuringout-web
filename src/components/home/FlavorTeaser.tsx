'use client'

import { coreFlavors } from '@/data/flavors'

function Sachet({ color, size = 'md' }: { color: string; size?: 'sm' | 'md' }) {
  const w = size === 'sm' ? 50 : 70
  const h = size === 'sm' ? 68 : 95
  return (
    <div className="relative mx-auto" style={{ width: w, height: h }}>
      <svg width={w} height={h} viewBox="0 0 90 120" fill="none">
        <ellipse cx="45" cy="115" rx="30" ry="5" fill="black" fillOpacity="0.08" />
        <path d="M12 18 L20 6 L70 6 L78 18" fill={color} style={{ filter: 'brightness(0.7)' }} />
        <rect x="10" y="18" width="70" height="95" rx="4" fill={color} />
        <rect x="10" y="18" width="8" height="95" rx="2" fill="black" fillOpacity="0.12" />
        <rect x="10" y="18" width="70" height="12" fill={color} style={{ filter: 'brightness(0.85)' }} />
        <line x1="10" y1="30" x2="80" y2="30" stroke="black" strokeOpacity="0.08" strokeWidth="1" />
        <path d="M73 20 L80 14 L80 26 Z" fill="white" fillOpacity="0.25" />
        <circle cx="76" cy="23" r="2.5" fill="white" fillOpacity="0.4" />
        <rect x="18" y="36" width="54" height="44" rx="5" fill="white" fillOpacity="0.95" />
        <text x="45" y="54" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">FIGURING</text>
        <text x="45" y="68" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">OUT.</text>
        <path d="M15 88 Q32 82 45 88 Q58 94 75 88" stroke="white" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
        <path d="M15 96 Q32 90 45 96 Q58 102 75 96" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3" />
        <rect x="62" y="35" width="10" height="50" rx="5" fill="white" fillOpacity="0.12" transform="rotate(12, 67, 60)" />
      </svg>
    </div>
  )
}

export default function FlavorTeaser() {
  return (
    <section id="flavors" className="py-10 sm:py-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5" style={{ color: '#1A1A1A' }}>
            The flavors
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
            Each one named after something you&apos;re probably dealing with right now.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4">
          {coreFlavors.map((flavor) => (
            <div
              key={flavor.slug}
              className="rounded-2xl p-5 cursor-pointer transition-shadow duration-200 hover:shadow-lg"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              <div className="mb-4">
                <Sachet color={flavor.color} />
              </div>
              <h3 className="text-base font-bold mb-0.5" style={{ color: '#1A1A1A' }}>{flavor.name}</h3>
              <p className="text-xs font-medium mb-1" style={{ color: flavor.color }}>
                Tastes like {flavor.taste.toLowerCase()}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{flavor.tagline}</p>
            </div>
          ))}
        </div>

        {/* Mobile — colored cards with full sachet */}
        <div className="sm:hidden space-y-3">
          {coreFlavors.map((flavor) => (
            <div
              key={flavor.slug}
              className="rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
              style={{ backgroundColor: flavor.color }}
            >
              <div className="flex-shrink-0">
                <Sachet color={flavor.color} size="sm" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{flavor.name}</h3>
                <p className="text-xs text-white/70">
                  Tastes like {flavor.taste.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
