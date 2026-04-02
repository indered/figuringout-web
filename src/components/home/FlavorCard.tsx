'use client'

import Link from 'next/link'
import type { Flavor } from '@/data/flavors'
import { formatPrice } from '@/lib/utils'

interface FlavorCardProps {
  flavor: Flavor
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  const lowestPrice = Math.min(...flavor.variants.map(v => v.priceInPaise))

  return (
    <Link href={`/products/${flavor.slug}`}>
      <div
        className="group relative rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        style={{
          backgroundColor: '#141414',
          border: '1px solid #2A2A2A',
          minHeight: '320px',
        }}
      >
        {/* Limited / New badge */}
        {flavor.isLimited && (
          <span
            className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: '#FF4D00', color: '#0D0D0D' }}
          >
            Limited Drop
          </span>
        )}
        {flavor.isNew && !flavor.isLimited && (
          <span
            className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: '#2A2A2A', color: '#F5F5F5' }}
          >
            New
          </span>
        )}

        {/* Color dot */}
        <div
          className="w-12 h-12 rounded-full mb-auto opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: flavor.color }}
        />

        <div className="mt-8">
          {/* Flavor name */}
          <h3 className="text-xl font-bold mb-1" style={{ color: '#F5F5F5' }}>
            {flavor.name}
          </h3>

          {/* Taste profile */}
          <p className="text-xs font-medium mb-3 tracking-wide uppercase" style={{ color: flavor.color }}>
            {flavor.taste}
          </p>

          {/* Tagline */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0A0A0' }}>
            {flavor.tagline}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold" style={{ color: '#F5F5F5' }}>
              from {formatPrice(lowestPrice)}
            </span>
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full transition-all group-hover:opacity-90"
              style={{ backgroundColor: '#FF4D00', color: '#0D0D0D' }}
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
