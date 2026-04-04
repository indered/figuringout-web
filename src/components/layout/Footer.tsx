import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#1A1A1A' }} role="contentinfo">
      {/* Finish line */}
      <div className="h-2 flex" aria-hidden="true">
        {Array(30).fill(null).map((_, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: i % 2 === 0 ? '#14B8A6' : '#1A1A1A' }} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Top — Logo + Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: '#F5F5F5' }}>
              Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
            </Link>
            <p className="text-xs mt-1.5" style={{ color: '#6B7280' }}>
              Hydrate while you figure it out.
            </p>
          </div>
          <p className="text-sm font-medium inline-flex items-center gap-1.5" style={{ color: '#14B8A6' }}>
            You made it to the finish line! 🌴
          </p>
        </div>

        {/* Links — clean grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          <a
            href="https://instagram.com/figuringout.club"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="18" cy="6" r="1.5" fill="#14B8A6" />
            </svg>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>@figuringout.club</p>
              <p className="text-[10px]" style={{ color: '#6B7280' }}>Follow us on Instagram</p>
            </div>
          </a>

          <a
            href="mailto:hi@figuringout.club"
            className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#14B8A6" strokeWidth="2" />
              <path d="M2 7l10 6 10-6" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>hi@figuringout.club</p>
              <p className="text-[10px]" style={{ color: '#6B7280' }}>Say hello</p>
            </div>
          </a>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-[10px]" style={{ color: '#4B5563' }}>
            &copy; 2026 Figuring Out. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/story" className="text-[10px] hover:text-[#14B8A6] transition-colors cursor-pointer" style={{ color: '#6B7280' }}>Our Story</Link>
            <Link href="#flavors" className="text-[10px] hover:text-[#14B8A6] transition-colors cursor-pointer" style={{ color: '#6B7280' }}>Flavors</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
