import { coreFlavors } from '@/data/flavors'
import Sachet3D, { sachetColors } from './Sachet3D'

const flavorLine: Record<string, string> = {
  'broke-but-hydrated': 'Tastes like berry & pomegranate',
  'hot-ex': 'Feels like citrus energy',
  'clarity': 'Think himalayan lime',
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
          {coreFlavors.map((flavor) => {
            const colors = sachetColors[flavor.slug] || sachetColors['clarity']
            return (
              <div
                key={flavor.slug}
                className="rounded-2xl p-5 cursor-pointer transition-shadow duration-200 hover:shadow-lg"
                style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <div className="flex justify-center mb-4">
                  <Sachet3D
                    bandColor={colors.bandColor}
                    bandLight={colors.bandLight}
                    bandDark={colors.bandDark}
                    name={flavor.name}
                    taste={flavor.taste}
                    angle={-5}
                    size={30}
                  />
                </div>
                <h3 className="text-base font-bold mb-0.5" style={{ color: '#1A1A1A' }}>{flavor.name}</h3>
                <p className="text-xs font-medium mb-1" style={{ color: colors.bandDark }}>
                  {flavorLine[flavor.slug] || flavor.taste}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{flavor.tagline}</p>
              </div>
            )
          })}
        </div>

        {/* Mobile */}
        <div className="sm:hidden space-y-3">
          {coreFlavors.map((flavor) => {
            const colors = sachetColors[flavor.slug] || sachetColors['clarity']
            return (
              <div
                key={flavor.slug}
                className="rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
                style={{ backgroundColor: colors.bandColor }}
              >
                <div className="flex-shrink-0">
                  <Sachet3D
                    bandColor={colors.bandColor}
                    bandLight={colors.bandLight}
                    bandDark={colors.bandDark}
                    name={flavor.name}
                    taste={flavor.taste}
                    size={22}
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{flavor.name}</h3>
                  <p className="text-xs text-white/90">
                    {flavorLine[flavor.slug] || flavor.taste}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
