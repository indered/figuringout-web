'use client'

const ingredients = [
  { name: 'Potassium', benefit: 'Prevents cramps & fatigue' },
  { name: 'Magnesium', benefit: 'Recovery & nerve function' },
  { name: 'Calcium', benefit: 'Bone strength & muscle support' },
  { name: 'Chloride', benefit: 'Fluid balance' },
  { name: 'Zinc', benefit: 'Immunity & post-run recovery' },
  { name: 'Vitamin C', benefit: 'Antioxidant protection' },
  { name: 'Vitamin B12', benefit: 'Energy metabolism' },
]

const claims = ['0g Sugar', 'No Artificial Anything', '100% Vegan', '10 Cal']

export default function WhatsInside() {
  return (
    <section id="whats-inside" className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#14B8A6' }}>
            What&apos;s Inside
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
            What is this thing actually
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
            A premium electrolyte sachet with everything your body loses when you run — and nothing it doesn&apos;t need.
          </p>
        </div>

        {/* Ingredient list */}
        <div className="mb-8">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-3"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              <span className="text-sm sm:text-base font-medium" style={{ color: '#1A1A1A' }}>
                {item.name}
              </span>
              <span className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                {item.benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Clean label claims */}
        <div className="flex flex-wrap gap-2">
          {claims.map((c) => (
            <span
              key={c}
              className="text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(20,184,166,0.1)', color: '#0D9488' }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
