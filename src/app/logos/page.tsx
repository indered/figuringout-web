'use client'

const logos = [
  { name: 'Full Wordmark', file: '/logo-full.svg', desc: 'Figuring Out. with teal dot', bg: '#FDF8F3' },
  { name: 'Social — Dark', file: '/logo-social-dark.svg', desc: 'Dark bg, white F', bg: '#1A1A1A' },
  { name: 'Social — Light', file: '/logo-social-light.svg', desc: 'Cream bg, dark F', bg: '#FDF8F3' },
  { name: 'Social — Teal', file: '/logo-social-teal.svg', desc: 'Teal bg, white F', bg: '#14B8A6' },
  { name: 'Social — Circle', file: '/logo-social-circle.svg', desc: 'Circular, cream bg', bg: '#FDF8F3' },
  { name: 'Icon', file: '/logo-icon.svg', desc: 'Just the teal dot', bg: '#FDF8F3' },
  { name: 'Favicon', file: '/favicon.svg', desc: 'Small F with dot', bg: '#FDF8F3' },
]

export default function LogosPage() {
  return (
    <div className="min-h-screen px-4 py-12 sm:py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>
          Figuring Out<span style={{ color: '#14B8A6' }}>.</span> Logos
        </h1>
        <p className="text-sm mb-10" style={{ color: '#6B7280' }}>
          All brand assets. Click download to save.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.file}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              {/* Preview */}
              <div
                className="flex items-center justify-center p-6 sm:p-8"
                style={{ backgroundColor: logo.bg, minHeight: 160 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="max-w-full max-h-24 sm:max-h-28"
                />
              </div>

              {/* Info + Download */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{logo.name}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{logo.desc}</p>
                </div>
                <a
                  href={logo.file}
                  download
                  className="text-xs font-bold px-3 py-2 rounded-lg cursor-pointer flex-shrink-0"
                  style={{ backgroundColor: '#14B8A6', color: 'white' }}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
