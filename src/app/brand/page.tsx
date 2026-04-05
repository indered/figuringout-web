import type { Metadata } from 'next'
import BrandContent from './BrandContent'

export const metadata: Metadata = {
  title: 'Brand Assets',
  description: 'Figuring Out brand guidelines — logos, colors, typography, and design assets.',
  openGraph: {
    title: 'Brand Assets | Figuring Out',
    description: 'Logos, colors, typography, and design assets for Figuring Out.',
    url: 'https://figuringout.club/brand',
  },
  alternates: { canonical: 'https://figuringout.club/brand' },
}

export default function BrandPage() {
  return <BrandContent />
}
