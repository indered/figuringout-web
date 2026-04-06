import { coreFlavors } from '@/data/flavors'

function Sachet3D({ color, label, size = 'md' }: { color: string; label: string; size?: 'sm' | 'md' | 'lg' }) {
  const scale = size === 'lg' ? 1.3 : size === 'sm' ? 0.85 : 1
  const w = Math.round(110 * scale)
  const h = Math.round(160 * scale)

  return (
    <svg width={w} height={h} viewBox="0 0 110 160" fill="none">
      {/* Drop shadow */}
      <ellipse cx="55" cy="155" rx="35" ry="5" fill="black" fillOpacity="0.08" />

      {/* Back face (3D depth) */}
      <path
        d="M18 22 L88 22 L95 28 L95 138 L88 144 L18 144 L18 22Z"
        fill={color}
        style={{ filter: 'brightness(0.6)' }}
      />

      {/* Right side face (3D depth) */}
      <path
        d="M88 22 L95 28 L95 138 L88 144 L88 22Z"
        fill={color}
        style={{ filter: 'brightness(0.45)' }}
      />

      {/* Main front face */}
      <rect x="12" y="18" width="76" height="122" rx="4" fill={color} />

      {/* Top seal */}
      <rect x="12" y="18" width="76" height="14" rx="2" fill={color} style={{ filter: 'brightness(0.8)' }} />
      <line x1="12" y1="32" x2="88" y2="32" stroke="black" strokeOpacity="0.1" strokeWidth="1" />

      {/* Tear notch */}
      <path d="M80 20 L88 14 L88 26 Z" fill="white" fillOpacity="0.2" />
      <circle cx="84" cy="22" r="2" fill="white" fillOpacity="0.3" />

      {/* White label area */}
      <rect x="20" y="38" width="60" height="56" rx="6" fill="white" fillOpacity="0.95" />

      {/* Brand text */}
      <text x="50" y="58" textAnchor="middle" fill={color} fontSize="12" fontWeight="800" fontFamily="system-ui, sans-serif">
        FIGURING
      </text>
      <text x="50" y="73" textAnchor="middle" fill={color} fontSize="12" fontWeight="800" fontFamily="system-ui, sans-serif">
        OUT.
      </text>
      {/* Flavor name */}
      <text x="50" y="87" textAnchor="middle" fill={color} fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.6">
        {label.toUpperCase()}
      </text>

      {/* Wave pattern */}
      <path
        d="M18 108 Q35 100 50 108 Q65 116 82 108"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeOpacity="0.4"
      />
      <path
        d="M18 116 Q35 108 50 116 Q65 124 82 116"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.25"
      />

      {/* Bottom seal line */}
      <rect x="20" y="128" width="60" height="5" rx="2.5" fill="white" fillOpacity="0.12" />

      {/* Glossy highlight (left edge) */}
      <rect x="12" y="32" width="6" height="108" rx="2" fill="white" fillOpacity="0.15" />

      {/* Shine streak */}
      <rect x="72" y="36" width="8" height="60" rx="4" fill="white" fillOpacity="0.1" transform="rotate(8, 76, 66)" />
    </svg>
  )
}

export default function ProductStrip() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* 3 sachets — middle one larger and slightly raised */}
        <div className="flex items-end justify-center gap-3 sm:gap-5 mb-5 sm:mb-6">
          <div style={{ transform: 'rotate(-6deg)' }}>
            <Sachet3D color={coreFlavors[0]?.color || '#8B5CF6'} label={coreFlavors[0]?.name || ''} size="sm" />
          </div>
          <div style={{ transform: 'translateY(-12px)' }}>
            <Sachet3D color={coreFlavors[2]?.color || '#14B8A6'} label={coreFlavors[2]?.name || ''} size="lg" />
          </div>
          <div style={{ transform: 'rotate(6deg)' }}>
            <Sachet3D color={coreFlavors[1]?.color || '#FF4D00'} label={coreFlavors[1]?.name || ''} size="sm" />
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
          Premium Electrolyte Sachets
        </h2>
        <p className="text-xs sm:text-sm mb-3" style={{ color: '#6B7280' }}>
          3 flavors · 0g sugar · Everything your body loses when you run
        </p>
        <span
          className="inline-block text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(20,184,166,0.1)', color: '#0D8A72' }}
        >
          Available Soon
        </span>
      </div>
    </section>
  )
}
