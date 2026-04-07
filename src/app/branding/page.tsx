import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding',
  description: 'Figuring Out brand guidelines, logos, colors, typography, and downloadable assets.',
  openGraph: {
    title: 'Branding | Figuring Out',
    description: 'Brand guidelines and assets for Figuring Out.',
    url: 'https://figuringout.club/branding',
  },
  alternates: { canonical: 'https://figuringout.club/branding' },
}

const logos = [
  { name: 'Full Wordmark', file: '/logo-full.svg', desc: 'Figuring Out. with teal dot', bg: '#FDF8F3' },
  { name: 'Social — Dark', file: '/logo-social-dark.svg', desc: 'Dark bg, white F.', bg: '#1A1A1A' },
  { name: 'Social — Light', file: '/logo-social-light.svg', desc: 'Cream bg, dark F.', bg: '#FDF8F3' },
  { name: 'Social — Teal', file: '/logo-social-teal.svg', desc: 'Teal bg, white F.', bg: '#14B8A6' },
  { name: 'Social — Circle', file: '/logo-social-circle.svg', desc: 'Circular, cream bg', bg: '#FDF8F3' },
  { name: 'Favicon', file: '/favicon.svg', desc: 'Browser tab icon', bg: '#FDF8F3' },
]

const pngs = [
  { name: 'IG DP — Dark', file: '/logo-social-dark-1080.png', desc: '1080x1080 PNG', bg: '#1A1A1A' },
  { name: 'IG DP — Teal', file: '/logo-social-teal-1080.png', desc: '1080x1080 PNG', bg: '#14B8A6' },
  { name: 'IG DP — Light', file: '/logo-social-light-1080.png', desc: '1080x1080 PNG', bg: '#FDF8F3' },
  { name: 'Facebook Cover', file: '/fb-cover.png', desc: '820x312 PNG', bg: '#1A1A1A' },
]

const brandColors = [
  { name: 'Teal (Primary)', hex: '#14B8A6', desc: 'The dot. CTAs. Accent.', text: 'white' },
  { name: 'Cream', hex: '#FDF8F3', desc: 'Website background', text: '#1A1A1A' },
  { name: 'Dark', hex: '#1A1A1A', desc: 'Primary text', text: 'white' },
  { name: 'Sand', hex: '#E8DFD5', desc: 'Footer, accents', text: '#1A1A1A' },
]

const sachetColors = [
  { name: 'Razzle Red', hex: '#E8173A', desc: 'Broke But Hydrated', text: 'white' },
  { name: 'Royal Blue', hex: '#4169E1', desc: 'Hot Ex', text: 'white' },
  { name: 'Teal', hex: '#14B8A6', desc: 'Clarity', text: 'white' },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg sm:text-xl font-bold mt-14 mb-6" style={{ color: '#F5F5F5' }}>{children}</h2>
}

function Rule({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold mb-1" style={{ color: '#F5F5F5' }}>{title}</p>
      <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{children}</p>
    </div>
  )
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen px-4 py-12 sm:py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F5F5F5' }}>
          Figuring Out<span style={{ color: '#14B8A6' }}>.</span> Branding
        </h1>
        <p className="text-sm mb-12" style={{ color: '#6B7280' }}>
          Brand guidelines and assets. Follow these rules everywhere.
        </p>

        {/* ===== BRAND RULES ===== */}
        <div className="rounded-xl p-6 sm:p-8 mb-10" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#14B8A6' }}>
            Brand Rules
          </p>

          <Rule title="Brand Name">
            Written as: <strong>Figuring Out.</strong> — capital F, capital O, rest lowercase. The dot (period) is ALWAYS teal #14B8A6, never the same color as the text. Never write as &quot;FIGURING OUT&quot;, &quot;figuring out&quot;, or &quot;FiguringOut&quot;.
          </Rule>

          <Rule title="Logo — Full Wordmark">
            &quot;Figuring Out&quot; in Space Grotesk Bold + teal dot. This is the primary logo. The teal dot is part of the logo — never optional, never removed.
          </Rule>

          <Rule title="Logo — Short Mark (F.)">
            &quot;F.&quot; for social media profiles, favicons, small spaces. Capital F + teal dot. Same rules apply — the dot is always teal.
          </Rule>

          <Rule title="Font">
            Space Grotesk — all weights (300-700). Used everywhere: website, packaging, marketing, print. No other fonts. Self-hosted via next/font on the website.
          </Rule>

          <Rule title="The Teal Dot">
            The dot after &quot;Figuring Out&quot; and &quot;F&quot; is always #14B8A6 (brand teal). On dark backgrounds: teal dot. On light backgrounds: teal dot. On colored backgrounds: teal dot or white dot if teal doesn&apos;t contrast. The dot is the brand mark.
          </Rule>

          <Rule title="Tone of Voice">
            Playful, self-aware, never preachy. Talks like a friend on a run, not a coach with a clipboard. Never say: &quot;beast mode&quot;, &quot;crush it&quot;, &quot;grind&quot;, &quot;hustle&quot;, &quot;fuel your potential&quot;.
          </Rule>

          <Rule title="Tagline">
            &quot;Hydrate while you figure it out.&quot; — always lowercase except the H.
          </Rule>

          <Rule title="Handles">
            Instagram: @figuringout.club · Email: hi@figuringout.club · LinkedIn: figuringoutclub · Domain: figuringout.club
          </Rule>
        </div>

        {/* ===== COLORS ===== */}
        <SectionTitle>Brand Colors</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {brandColors.map(c => (
            <div key={c.hex} className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="h-20 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                <span className="text-[10px] font-mono" style={{ color: c.text }}>{c.hex}</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold" style={{ color: '#F5F5F5' }}>{c.name}</p>
                <p className="text-[10px]" style={{ color: '#6B7280' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>Sachet Colors (Experimental)</SectionTitle>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {sachetColors.map(c => (
            <div key={c.hex} className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="h-20 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                <span className="text-[10px] font-mono" style={{ color: c.text }}>{c.hex}</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold" style={{ color: '#F5F5F5' }}>{c.name}</p>
                <p className="text-[10px]" style={{ color: '#6B7280' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== TYPOGRAPHY ===== */}
        <SectionTitle>Typography</SectionTitle>
        <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
          <p className="text-2xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Space Grotesk</p>
          <p className="text-xs mb-4" style={{ color: '#6B7280' }}>The only font. Used for everything.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
            {[
              { w: 300, label: 'Light' },
              { w: 400, label: 'Regular' },
              { w: 600, label: 'Semi-Bold' },
              { w: 700, label: 'Bold' },
            ].map(f => (
              <div key={f.w}>
                <p className="text-[10px] mb-1" style={{ color: '#6B7280' }}>{f.label} ({f.w})</p>
                <p className="text-lg" style={{ color: '#F5F5F5', fontWeight: f.w }}>Figuring Out<span style={{ color: '#14B8A6' }}>.</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== LOGO CORRECT/INCORRECT ===== */}
        <SectionTitle>Logo Usage</SectionTitle>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.2)' }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#14B8A6' }}>Correct</p>
            <p className="text-base font-bold mb-1" style={{ color: '#F5F5F5' }}>Figuring Out<span style={{ color: '#14B8A6' }}>.</span></p>
            <p className="text-base font-bold mb-1" style={{ color: '#F5F5F5' }}>F<span style={{ color: '#14B8A6' }}>.</span></p>
            <p className="text-[10px]" style={{ color: '#9CA3AF' }}>Capital F, capital O, teal dot</p>
          </div>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(232,23,58,0.08)', border: '1px solid rgba(232,23,58,0.2)' }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#E8173A' }}>Incorrect</p>
            <p className="text-base font-bold mb-1 line-through" style={{ color: '#6B7280' }}>FIGURING OUT.</p>
            <p className="text-base font-bold mb-1 line-through" style={{ color: '#6B7280' }}>figuring out.</p>
            <p className="text-base font-bold mb-1 line-through" style={{ color: '#6B7280' }}>Figuring Out<span style={{ color: '#6B7280' }}>.</span></p>
            <p className="text-[10px]" style={{ color: '#9CA3AF' }}>No all caps, no all lowercase, dot is never same as text color</p>
          </div>
        </div>

        {/* ===== LOGO DOWNLOADS ===== */}
        <SectionTitle>Logo Downloads — SVG</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {logos.map((logo) => (
            <div key={logo.file} className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-center p-6" style={{ backgroundColor: logo.bg, minHeight: 140 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.file} alt={logo.name} className="max-w-full max-h-20" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{logo.name}</p>
                  <p className="text-[10px]" style={{ color: '#6B7280' }}>{logo.desc}</p>
                </div>
                <a href={logo.file} download className="text-[10px] font-bold px-3 py-1.5 rounded-lg cursor-pointer" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
                  SVG
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PNG downloads */}
        <SectionTitle>Social Media — PNG</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pngs.map((logo) => (
            <div key={logo.file} className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-center p-6" style={{ backgroundColor: logo.bg, minHeight: 140 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.file} alt={logo.name} className="max-w-full max-h-20 rounded-lg" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>{logo.name}</p>
                  <p className="text-[10px]" style={{ color: '#6B7280' }}>{logo.desc}</p>
                </div>
                <a href={logo.file} download className="text-[10px] font-bold px-3 py-1.5 rounded-lg cursor-pointer" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
                  PNG
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Email Signature */}
        <SectionTitle>Email Signature</SectionTitle>
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <iframe src="/email-signature.html" className="w-full border-0" style={{ height: 120 }} title="Email signature preview" />
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5F5F5' }}>Email Signature</p>
              <p className="text-[10px]" style={{ color: '#9CA3AF' }}>HTML — Gmail, Outlook, Apple Mail</p>
            </div>
            <a href="/email-signature.html" target="_blank" className="text-[10px] font-bold px-3 py-1.5 rounded-lg cursor-pointer" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
              Open
            </a>
          </div>
        </div>

        {/* Flavors */}
        <SectionTitle>Current Flavors</SectionTitle>
        <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
          <div className="space-y-4">
            {[
              { name: 'Broke But Hydrated', taste: 'Berry & Pomegranate', line: 'Tastes like berry & pomegranate', color: '#E8173A' },
              { name: 'Hot Ex', taste: 'Citrus Energy', line: 'Feels like citrus energy', color: '#4169E1' },
              { name: 'Clarity', taste: 'Himalayan Lime', line: 'Think himalayan lime', color: '#14B8A6' },
            ].map(f => (
              <div key={f.name} className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
                <div>
                  <p className="text-sm font-bold" style={{ color: '#F5F5F5' }}>{f.name}</p>
                  <p className="text-[10px]" style={{ color: '#9CA3AF' }}>{f.taste} · {f.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[10px]" style={{ color: '#6B7280' }}>
            Figuring Out<span style={{ color: '#14B8A6' }}>.</span> © 2026
          </p>
        </div>
      </div>
    </div>
  )
}
