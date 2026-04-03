import type { Metadata } from 'next'
import StoryContent from './StoryContent'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'We started running because we had no answers. Discover how Figuring Out became a premium electrolyte brand for millennials figuring out life.',
  keywords: [
    'figuring out story',
    'electrolyte brand',
    'running community',
    'millennial hydration brand',
    'why we run',
  ],
  openGraph: {
    title: 'Our Story | Figuring Out',
    description:
      'We started running because we had no answers. Discover the story behind the premium electrolyte brand for millennials.',
    url: 'https://figuringout-web.vercel.app/story',
    type: 'article',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Figuring Out - Our Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | Figuring Out',
    description:
      'We started running because we had no answers. Discover the story behind the premium electrolyte brand.',
    images: ['/og'],
  },
  alternates: {
    canonical: 'https://figuringout-web.vercel.app/story',
  },
}

export default function StoryPage() {
  return <StoryContent />
}
