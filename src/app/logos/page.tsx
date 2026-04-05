import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Logos',
  description: 'Download Figuring Out brand logos in SVG and PNG formats. Instagram-ready profile pictures included.',
  openGraph: {
    title: 'Brand Logos | Figuring Out',
    description: 'Download Figuring Out brand logos and assets.',
    url: 'https://figuringout.club/logos',
  },
  alternates: { canonical: 'https://figuringout.club/logos' },
}

const logos = [
  { name: 'Full Wordmark', file: '/logo-full.svg', desc: 'Figuring Out. with teal dot', bg: '#FDF8F3', type: 'SVG' },
  { name: 'Social — Dark', file: '/logo-social-dark.svg', desc: 'Dark bg, white F', bg: '#1A1A1A', type: 'SVG' },
  { name: 'Social — Light', file: '/logo-social-light.svg', desc: 'Cream bg, dark F', bg: '#FDF8F3', type: 'SVG' },
  { name: 'Social — Teal', file: '/logo-social-teal.svg', desc: 'Teal bg, white F', bg: '#14B8A6', type: 'SVG' },
  { name: 'Social — Circle', file: '/logo-social-circle.svg', desc: 'Circular, cream bg', bg: '#FDF8F3', type: 'SVG' },
  { name: 'Icon', file: '/logo-icon.svg', desc: 'Just the teal dot', bg: '#FDF8F3', type: 'SVG' },
  { name: 'Favicon', file: '/favicon.svg', desc: 'Small F with dot', bg: '#FDF8F3', type: 'SVG' },
]

const pngs = [
  { name: 'IG DP — Dark', file: '/logo-social-dark-1080.png', desc: '1080x1080 PNG', bg: '#1A1A1A' },
  { name: 'IG DP — Teal', file: '/logo-social-teal-1080.png', desc: '1080x1080 PNG', bg: '#14B8A6' },
  { name: 'IG DP — Light', file: '/logo-social-light-1080.png', desc: '1080x1080 PNG', bg: '#FDF8F3' },
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
        {/* PNG section for IG */}
        <h2 className="text-xl font-bold mt-12 mb-2" style={{ color: '#F5F5F5' }}>
          Instagram Ready <span className="text-sm font-normal" style={{ color: '#6B7280' }}>1080x1080 PNG</span>
        </h2>
        <p className="text-xs mb-6" style={{ color: '#6B7280' }}>Ready to use as IG profile picture. No conversion needed.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pngs.map((logo) => (
            <div
              key={logo.file}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="flex items-center justify-center p-6 sm:p-8"
                style={{ backgroundColor: logo.bg, minHeight: 160 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="max-w-full max-h-24 sm:max-h-28 rounded-xl"
                />
              </div>
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
        {/* Email Signature */}
        <h2 className="text-xl font-bold mt-12 mb-2" style={{ color: '#F5F5F5' }}>
          Email Signature
        </h2>
        <p className="text-xs mb-6" style={{ color: '#9CA3AF' }}>Copy from the preview or open the HTML file directly.</p>

        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <div className="p-6 sm:p-8" style={{ backgroundColor: '#FFFFFF' }}>
            <iframe src="/email-signature.html" className="w-full border-0" style={{ height: 120 }} title="Email signature preview" />
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>Email Signature</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>HTML — works in Gmail, Outlook, Apple Mail</p>
            </div>
            <a
              href="/email-signature.html"
              target="_blank"
              className="text-xs font-bold px-3 py-2 rounded-lg cursor-pointer flex-shrink-0"
              style={{ backgroundColor: '#14B8A6', color: 'white' }}
            >
              Open
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
