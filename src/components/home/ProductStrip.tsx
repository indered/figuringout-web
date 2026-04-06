import { coreFlavors } from '@/data/flavors'
import Sachet3D from './Sachet3D'

export default function ProductStrip() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        {/* 3 sachets — center raised, sides rotated, radial glow */}
        <div className="relative flex items-end justify-center gap-2 sm:gap-4 mb-5 sm:mb-6">
          {/* Background glow for each sachet */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-24 h-24 rounded-full blur-2xl"
              style={{ backgroundColor: coreFlavors[0]?.color, opacity: 0.12, left: '12%', bottom: '20%' }}
            />
            <div
              className="absolute w-32 h-32 rounded-full blur-2xl"
              style={{ backgroundColor: coreFlavors[2]?.color, opacity: 0.15, left: '35%', bottom: '25%' }}
            />
            <div
              className="absolute w-24 h-24 rounded-full blur-2xl"
              style={{ backgroundColor: coreFlavors[1]?.color, opacity: 0.12, right: '12%', bottom: '20%' }}
            />
          </div>

          {/* Left sachet */}
          <div className="relative" style={{ transform: 'rotate(-8deg)' }}>
            <Sachet3D color={coreFlavors[0]?.color || '#8B5CF6'} label={coreFlavors[0]?.name || ''} size={58} />
          </div>

          {/* Center sachet — hero */}
          <div className="relative" style={{ transform: 'translateY(-14px)' }}>
            <Sachet3D color={coreFlavors[2]?.color || '#14B8A6'} label={coreFlavors[2]?.name || ''} size={75} />
          </div>

          {/* Right sachet */}
          <div className="relative" style={{ transform: 'rotate(8deg)' }}>
            <Sachet3D color={coreFlavors[1]?.color || '#FF4D00'} label={coreFlavors[1]?.name || ''} size={58} />
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
