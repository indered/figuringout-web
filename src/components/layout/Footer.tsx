import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-10 sm:py-14 px-4 sm:px-6 relative" style={{ backgroundColor: '#E8DFD5' }} role="contentinfo">
      {/* Finish line decoration */}
      <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 flex" aria-hidden="true">
        {Array(20).fill(null).map((_, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: i % 2 === 0 ? '#1A1A1A' : 'white' }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-6 sm:pt-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-base font-bold inline-flex items-center gap-1.5" style={{ color: '#14B8A6' }}>
            You made it to the finish line!
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#14B8A6" />
            </svg>
          </p>
          <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Still figuring it out though. And that&apos;s okay.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: '#1A1A1A' }} aria-label="Figuring Out - Homepage">
            Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
          </Link>

          {/* Links */}
          <nav aria-label="Footer links">
            <ul className="flex items-center gap-5 list-none">
              <li>
                <a
                  href="https://instagram.com/figuringout.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium hover:text-[#14B8A6] transition-colors cursor-pointer"
                  style={{ color: '#1A1A1A' }}
                  aria-label="Follow us on Instagram @figuringout.club"
                >
                  @figuringout.club
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@figuringout.club"
                  className="text-xs sm:text-sm font-medium hover:text-[#14B8A6] transition-colors cursor-pointer"
                  style={{ color: '#1A1A1A' }}
                  aria-label="Email us"
                >
                  hi@figuringout.club
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <p className="text-[10px] sm:text-xs" style={{ color: '#6B7280' }}>
            <small>&copy; 2026 Figuring Out. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  )
}
