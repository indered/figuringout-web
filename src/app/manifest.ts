import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Figuring Out - Premium Electrolytes',
    short_name: 'Figuring Out',
    description: 'Premium electrolytes for everyone running through life.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FDF8F3',
    theme_color: '#14B8A6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['health', 'fitness', 'lifestyle'],
  }
}
