import { coreFlavors } from '@/data/flavors'
import Sachet3D, { sachetColors } from './Sachet3D'

export default function ProductStrip() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        {/* Fanned sachet display — one torn with powder */}
        <div className="relative mx-auto mb-5 sm:mb-6" style={{ height: 220 }}>
          {coreFlavors.map((f, i) => {
            const colors = sachetColors[f.slug] || sachetColors['clarity']
            const angles = [-30, -15, -5]
            const lefts = ['12%', '34%', '56%']
            const tops = [25, 5, 0]
            return (
              <div key={f.slug} style={{ position: 'absolute', left: lefts[i], top: tops[i], zIndex: 3 - i }}>
                <Sachet3D
                  bandColor={colors.bandColor}
                  bandLight={colors.bandLight}
                  bandDark={colors.bandDark}
                  name={f.name}
                  taste={f.taste}
                  angle={angles[i]}
                  size={34}
                  torn={i === 0}
                />
              </div>
            )
          })}
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
