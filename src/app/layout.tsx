import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://figuringout-web.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#14B8A6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Primary Meta Tags
  title: {
    default: "Figuring Out | Premium Electrolytes for Runners in India",
    template: "%s | Figuring Out",
  },
  description:
    "India's first premium electrolyte brand for runners and urban millennials. In a world where everyone is figuring out, at least we figured out the hydration. Launching October 2026.",
  keywords: [
    "figuring out electrolytes",
    "electrolytes india",
    "hydration for runners india",
    "premium electrolytes",
    "figuring out hydration",
    "electrolyte drink india",
    "running hydration",
    "sports drink india",
    "run club india",
    "millennial hydration",
    "urban runners india",
    "electrolyte sachets",
    "hydration for runners",
    "best electrolytes for running",
    "electrolyte powder india",
  ],
  authors: [{ name: "Figuring Out" }],
  creator: "Figuring Out",
  publisher: "Figuring Out",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Figuring Out",
    title: "Figuring Out | Premium Electrolytes for Runners in India",
    description:
      "India's first premium electrolyte brand for runners and urban millennials. In a world where everyone is figuring out, at least we figured out the hydration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Figuring Out - Premium Electrolytes for Runners in India",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Figuring Out | Premium Electrolytes for Runners in India",
    description:
      "India's first premium electrolyte brand for runners and urban millennials. At least we figured out the hydration.",
    images: ["/og-image.png"],
    creator: "@figuringoutindia",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Alternate languages (for future internationalization)
  alternates: {
    canonical: siteUrl,
  },

  // Category
  category: "Health & Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Figuring Out",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "India's first premium electrolyte brand for runners and urban millennials.",
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Mahesh",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/figuringoutindia",
      "https://twitter.com/figuringoutindia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@figuringout.in",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Figuring Out",
    url: siteUrl,
    description:
      "India's first premium electrolyte brand for runners and urban millennials.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Figuring Out Electrolytes",
    description:
      "Premium electrolyte sachets for runners. Four unique flavors inspired by millennial life experiences.",
    brand: {
      "@type": "Brand",
      name: "Figuring Out",
    },
    category: "Health & Fitness / Sports Nutrition / Electrolytes",
    audience: {
      "@type": "Audience",
      audienceType: "Runners, Athletes, Urban Millennials",
      geographicArea: {
        "@type": "Country",
        name: "India",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "499",
      highPrice: "1799",
      availability: "https://schema.org/PreOrder",
      availabilityStarts: "2026-10-01",
      seller: {
        "@type": "Organization",
        name: "Figuring Out",
      },
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Figuring Out",
    description:
      "Premium electrolyte brand and run club community for Indian millennials.",
    url: siteUrl,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: '#FDF8F3', color: '#1A1A1A' }}>
        {children}
      </body>
    </html>
  );
}
