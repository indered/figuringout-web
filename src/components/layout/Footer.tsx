import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-16 px-6 relative" style={{ backgroundColor: '#E8DFD5' }}>
      {/* Finish line decoration */}
      <div className="absolute top-0 left-0 right-0 h-4 flex">
        {Array(20).fill(null).map((_, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: i % 2 === 0 ? '#1A1A1A' : 'white' }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-8">
        {/* Finish message */}
        <div className="text-center mb-12">
          <p className="text-lg font-bold" style={{ color: '#14B8A6' }}>🏁 You made it to the finish line!</p>
          <p className="text-sm mt-2" style={{ color: '#6B7280' }}>Still figuring it out though. And that's okay.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo + Tagline */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
              Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
            </Link>
            <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
              At least we got hydration figured out.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/figuringout.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[#14B8A6] transition-colors"
              style={{ color: '#1A1A1A' }}
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/figuringout_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[#14B8A6] transition-colors"
              style={{ color: '#1A1A1A' }}
            >
              Twitter
            </a>
            <a
              href="mailto:hello@figuringout.in"
              className="text-sm font-medium hover:text-[#14B8A6] transition-colors"
              style={{ color: '#1A1A1A' }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '2px solid rgba(0,0,0,0.1)' }}>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            © 2026 Figuring Out. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            Made with 🌴 in India
          </p>
        </div>
      </div>
    </footer>
  )
}
