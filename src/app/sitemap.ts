import type { MetadataRoute } from 'next'
import { flavors } from '@/data/flavors'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://figuringout-web.vercel.app'
  const lastModified = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/story`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Product/flavor pages (for future when product pages are created)
  const flavorPages: MetadataRoute.Sitemap = flavors.map((flavor) => ({
    url: `${siteUrl}/products/${flavor.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Future pages (commented out until created)
  const futurePagesPlaceholder: MetadataRoute.Sitemap = [
    // {
    //   url: `${siteUrl}/shop`,
    //   lastModified,
    //   changeFrequency: 'daily',
    //   priority: 0.9,
    // },
    // {
    //   url: `${siteUrl}/run-club`,
    //   lastModified,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]

  return [...staticPages, ...futurePagesPlaceholder]
  // When product pages are live, uncomment: return [...staticPages, ...flavorPages, ...futurePagesPlaceholder]
}
