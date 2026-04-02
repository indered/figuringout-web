import FlavorCard from './FlavorCard'
import { coreFlavors } from '@/data/flavors'
import Link from 'next/link'

export default function FlavorShowcase() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#FF4D00' }}>
              The Lineup
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#F5F5F5' }}>
              What are you<br />figuring out today?
            </h2>
          </div>
          <Link
            href="/products"
            className="self-start text-sm font-medium underline underline-offset-4 hover:opacity-60 transition-opacity"
            style={{ color: '#A0A0A0' }}
          >
            See all flavors →
          </Link>
        </div>

        {/* Core 4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFlavors.map((flavor) => (
            <FlavorCard key={flavor.slug} flavor={flavor} />
          ))}
        </div>

        {/* Try All Four CTA */}
        <div
          className="mt-6 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ backgroundColor: '#141414', border: '1px solid #2A2A2A' }}
        >
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#F5F5F5' }}>
              Try All Four
            </h3>
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
              Still figuring out your favourite. Fair. 40 sachets, one of each.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs line-through" style={{ color: '#3D3D3D' }}>₹1,996</p>
              <p className="text-lg font-bold" style={{ color: '#F5F5F5' }}>₹1,799</p>
            </div>
            <Link
              href="/products/try-all-four"
              className="text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: '#FF4D00', color: '#0D0D0D' }}
            >
              Get the pack
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
