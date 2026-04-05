'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BrandContent() {
  const logos = [
    { name: 'Full Wordmark', description: 'Primary logo for website, packaging', file: '/logo-full.svg', bg: '#FDF8F3' },
    { name: 'Favicon', description: 'Browser tab, small icons', file: '/favicon.svg', bg: '#FDF8F3' },
    { name: 'App Icon', description: 'The teal dot - brand mark', file: '/logo-icon.svg', bg: '#FDF8F3' },
    { name: 'Apple Touch Icon', description: 'iOS home screen', file: '/apple-touch-icon.svg', bg: '#FDF8F3' },
    { name: 'OG Image', description: 'Social sharing preview', file: '/og-image.svg', bg: '#FDF8F3', wide: true },
  ]

  const colors = [
    { name: 'Teal (Primary)', hex: '#14B8A6', text: 'white' },
    { name: 'Dark Teal', hex: '#0D9488', text: 'white' },
    { name: 'Near Black', hex: '#1A1A1A', text: 'white' },
    { name: 'Cream', hex: '#FDF8F3', text: '#1A1A1A' },
    { name: 'Sand', hex: '#E8DFD5', text: '#1A1A1A' },
    { name: 'Golden', hex: '#FFD700', text: '#1A1A1A' },
    { name: 'Gray', hex: '#6B7280', text: 'white' },
  ]

  const flavorColors = [
    { name: 'Broke But Hydrated', hex: '#8B5CF6' },
    { name: 'Hot Ex', hex: '#FF4D00' },
    { name: 'Clarity', hex: '#14B8A6' },
  ]

  return (
    <main className="min-h-screen py-12 px-4" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#1A1A1A' }}>Brand Assets</h1>
            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Figuring Out. — Logo & Color Guide</p>
          </div>
          <Link href="/" className="text-sm font-medium px-4 py-2 rounded-full" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
            ← Back to Site
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>The Logo</h2>
          <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: 'white' }}>
            <div className="inline-flex items-baseline">
              <span className="text-6xl font-bold" style={{ color: '#1A1A1A' }}>Figuring Out</span>
              <span className="w-4 h-4 rounded-full inline-block ml-1" style={{ backgroundColor: '#14B8A6' }} />
            </div>
            <p className="mt-6 text-sm" style={{ color: '#6B7280' }}>Font: Space Grotesk Bold · Text: #1A1A1A · Dot: #14B8A6</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Social Media Profile (F.)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { bg: '#FDF8F3', textColor: '#1A1A1A', dotColor: '#14B8A6', label: 'Light BG' },
              { bg: '#1A1A1A', textColor: 'white', dotColor: '#14B8A6', label: 'Dark BG' },
              { bg: '#14B8A6', textColor: 'white', dotColor: 'white', label: 'Teal BG' },
              { bg: '#FDF8F3', textColor: '#1A1A1A', dotColor: '#14B8A6', label: 'Circle (IG)', circle: true },
            ].map((v) => (
              <motion.div key={v.label} className="rounded-2xl p-8 flex flex-col items-center" style={{ backgroundColor: 'white' }} whileHover={{ scale: 1.02 }}>
                <div className={`w-24 h-24 ${v.circle ? 'rounded-full' : 'rounded-2xl'} flex items-center justify-center mb-4`} style={{ backgroundColor: v.bg, border: v.circle ? '2px solid #E8DFD5' : 'none' }}>
                  <span className="text-5xl font-bold" style={{ color: v.textColor }}>F</span>
                  <span className="w-3 h-3 rounded-full ml-0.5 mt-4" style={{ backgroundColor: v.dotColor }} />
                </div>
                <p className="text-xs font-medium" style={{ color: '#6B7280' }}>{v.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Logo Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logos.map((logo) => (
              <motion.div key={logo.name} className={`rounded-2xl overflow-hidden ${logo.wide ? 'md:col-span-2 lg:col-span-3' : ''}`} style={{ backgroundColor: 'white' }} whileHover={{ scale: 1.02 }}>
                <div className={`flex items-center justify-center ${logo.wide ? 'h-48' : 'h-32'}`} style={{ backgroundColor: logo.bg }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.file} alt={logo.name} className={logo.wide ? 'max-h-40 w-auto' : 'max-h-20 w-auto'} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm" style={{ color: '#1A1A1A' }}>{logo.name}</h3>
                  <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{logo.description}</p>
                  <a href={logo.file} download className="inline-block mt-2 text-xs font-medium" style={{ color: '#14B8A6' }}>Download SVG →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {colors.map((color) => (
              <motion.div key={color.hex} className="rounded-xl overflow-hidden" style={{ backgroundColor: 'white' }} whileHover={{ scale: 1.05 }}>
                <div className="h-20 flex items-end p-3" style={{ backgroundColor: color.hex }}>
                  <span className="text-xs font-mono" style={{ color: color.text }}>{color.hex}</span>
                </div>
                <div className="p-3"><p className="text-xs font-medium" style={{ color: '#1A1A1A' }}>{color.name}</p></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Flavor Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            {flavorColors.map((flavor) => (
              <motion.div key={flavor.hex} className="rounded-xl overflow-hidden" style={{ backgroundColor: flavor.hex }} whileHover={{ scale: 1.05 }}>
                <div className="h-24 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-sm font-bold" style={{ color: '#1A1A1A' }}>{flavor.name}</span>
                  <span className="text-xs font-mono mt-1" style={{ color: 'rgba(0,0,0,0.5)' }}>{flavor.hex}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Typography</h2>
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'white' }}>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#6B7280' }}>Font Family</p>
                <p className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>Space Grotesk</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4" style={{ borderTop: '1px solid #E8DFD5' }}>
                {[400, 500, 600, 700].map((w) => (
                  <div key={w}>
                    <p className="text-xs mb-1" style={{ color: '#6B7280' }}>{w === 400 ? 'Regular' : w === 500 ? 'Medium' : w === 600 ? 'Semi-Bold' : 'Bold'} ({w})</p>
                    <p className="text-lg" style={{ fontWeight: w }}>Figuring Out</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
