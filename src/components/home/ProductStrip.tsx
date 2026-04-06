import { coreFlavors } from '@/data/flavors'

function Sachet({ color, size = 50 }: { color: string; size?: number }) {
  const h = Math.round(size * 1.35)
  return (
    <svg width={size} height={h} viewBox="0 0 90 120" fill="none">
      <path d="M12 18 L20 6 L70 6 L78 18" fill={color} style={{ filter: 'brightness(0.7)' }} />
      <rect x="10" y="18" width="70" height="95" rx="4" fill={color} />
      <rect x="10" y="18" width="8" height="95" rx="2" fill="black" fillOpacity="0.12" />
      <rect x="10" y="18" width="70" height="12" fill={color} style={{ filter: 'brightness(0.85)' }} />
      <rect x="18" y="36" width="54" height="44" rx="5" fill="white" fillOpacity="0.95" />
      <text x="45" y="54" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">FIGURING</text>
      <text x="45" y="68" textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">OUT.</text>
      <path d="M15 88 Q32 82 45 88 Q58 94 75 88" stroke="white" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
      <rect x="62" y="35" width="10" height="50" rx="5" fill="white" fillOpacity="0.12" transform="rotate(12, 67, 60)" />
    </svg>
  )
}

export default function ProductStrip() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* 3 sachets side by side */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 mb-4 sm:mb-5">
          {coreFlavors.map((f, i) => (
            <div
              key={f.slug}
              className="flex flex-col items-center"
              style={{ transform: i === 1 ? 'translateY(-8px)' : undefined }}
            >
              <Sachet color={f.color} size={i === 1 ? 56 : 46} />
            </div>
          ))}
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
          Premium Electrolyte Sachets
        </h2>
        <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
          3 flavors · 0g sugar · Everything your body loses when you run
        </p>
      </div>
    </section>
  )
}
