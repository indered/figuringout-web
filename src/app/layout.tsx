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
    default: "Figuring Out | Premium Electrolytes for Runners",
    template: "%s | Figuring Out",
  },
  description:
    "Premium electrolyte brand for runners and urban millennials. In a world where everyone is figuring out, hydrate while you figure it out. Launching October 2026.",
  keywords: [
    "figuring out electrolytes",
    "premium electrolytes",
    "figuring out hydration",
    "hydration for runners",
    "electrolyte drink",
    "running hydration",
    "millennial hydration",
    "urban runners",
    "electrolyte sachets",
    "best electrolytes for running",
    "electrolyte powder",
    "sports hydration",
    "run club",
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
    locale: "en_US",
    url: siteUrl,
    siteName: "Figuring Out",
    title: "Figuring Out | Premium Electrolytes for Runners",
    description:
      "Premium electrolyte brand for runners and urban millennials. In a world where everyone is figuring out, hydrate while you figure it out.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Figuring Out - Premium Electrolytes for Runners",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Figuring Out | Premium Electrolytes for Runners",
    description:
      "Premium electrolyte brand for runners and urban millennials. At least we figured out the hydration.",
    images: ["/og"],
    creator: "@figuringout_",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
    shortcut: "/favicon.svg",
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
    logo: `${siteUrl}/logo-full.svg`,
    description:
      "Premium electrolyte brand for runners and urban millennials.",
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Mahesh",
      },
    ],
    sameAs: [
      "https://instagram.com/figuringout_",
      "https://twitter.com/figuringout_",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@figuringout.co",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Figuring Out",
    url: siteUrl,
    description:
      "Premium electrolyte brand for runners and urban millennials. At least we figured out the hydration.",
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
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "9.99",
      highPrice: "29.99",
      availability: "https://schema.org/PreOrder",
      availabilityStarts: "2026-10-01",
      seller: {
        "@type": "Organization",
        name: "Figuring Out",
      },
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
      </head>
      <body className="min-h-screen" style={{ backgroundColor: '#FDF8F3', color: '#1A1A1A' }}>
        {children}
      </body>
    </html>
  );
}
