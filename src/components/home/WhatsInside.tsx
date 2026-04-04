const ingredients = [
  { name: 'Potassium', amount: '200mg', benefit: 'Prevents cramps & fatigue' },
  { name: 'Magnesium', amount: '60mg', benefit: 'Recovery & nerve function' },
  { name: 'Calcium', amount: '40mg', benefit: 'Bone strength & muscle support' },
  { name: 'Chloride', amount: '150mg', benefit: 'Fluid balance' },
  { name: 'Zinc', amount: '5mg', benefit: 'Immunity & post-run recovery' },
  { name: 'Vitamin C', amount: '100mg', benefit: 'Antioxidant protection' },
  { name: 'Vitamin B12', amount: '100mcg', benefit: 'Energy metabolism' },
]

export default function WhatsInside() {
  return (
    <section id="whats-inside" className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
          What is this thing actually
        </h2>
        <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: '#6B7280' }}>
          Premium electrolyte sachet for everyone running through life.
        </p>

        {/* Proper table */}
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
                <th className="text-left text-[10px] sm:text-xs font-semibold uppercase tracking-wider pb-2 sm:pb-3" style={{ color: '#9CA3AF' }}>Ingredient</th>
                <th className="text-right text-[10px] sm:text-xs font-semibold uppercase tracking-wider pb-2 sm:pb-3 w-[80px] sm:w-[100px]" style={{ color: '#9CA3AF' }}>Amount</th>
                <th className="text-right text-[10px] sm:text-xs font-semibold uppercase tracking-wider pb-2 sm:pb-3" style={{ color: '#9CA3AF' }}>Benefit</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((item) => (
                <tr key={item.name} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td className="text-sm sm:text-base font-semibold py-2.5 sm:py-3" style={{ color: '#1A1A1A' }}>{item.name}</td>
                  <td className="text-sm sm:text-base font-bold text-right py-2.5 sm:py-3 tabular-nums" style={{ color: '#14B8A6' }}>{item.amount}</td>
                  <td className="text-xs sm:text-sm text-right py-2.5 sm:py-3" style={{ color: '#4B5563' }}>{item.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tags in one line */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
          {['100% Vegan', '0g Sugar', 'No Artificial Anything', '10 Cal'].map((label) => (
            <span
              key={label}
              className="text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
