const ingredients = [
  { name: 'Potassium', amount: '200mg', benefit: 'Prevents cramps & fatigue' },
  { name: 'Magnesium', amount: '60mg', benefit: 'Recovery & nerve function' },
  { name: 'Calcium', amount: '40mg', benefit: 'Bone strength & muscle support' },
  { name: 'Chloride', amount: '150mg', benefit: 'Fluid balance' },
  { name: 'Zinc', amount: '5mg', benefit: 'Immunity & post-run recovery' },
  { name: 'Vitamin C', amount: '100mg', benefit: 'Antioxidant protection' },
  { name: 'Vitamin B12', amount: '100mcg', benefit: 'Energy metabolism' },
]

const highlights = [
  { label: '100% Vegan', accent: true },
  { label: '0g Sugar', accent: true },
  { label: 'No Artificial Anything', accent: true },
  { label: '10 Cal', accent: true },
]

export default function WhatsInside() {
  return (
    <section id="whats-inside" className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto">
        {/* Single heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: '#1A1A1A' }}>
          What is this thing actually
        </h2>

        {/* Ingredient list with amounts */}
        <div className="mb-6 sm:mb-8">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-3"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-sm sm:text-base font-semibold" style={{ color: '#1A1A1A' }}>
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm font-bold" style={{ color: '#14B8A6' }}>
                  {item.amount}
                </span>
              </div>
              <span className="text-xs sm:text-sm" style={{ color: '#4B5563' }}>
                {item.benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Highlighted claims */}
        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h.label}
              className="text-xs sm:text-sm font-bold px-4 py-2 rounded-full"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              {h.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
