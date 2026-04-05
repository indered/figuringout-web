import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/home/ScrollProgress'
import CoastalHero from '@/components/home/CoastalHero'
import WhatsInside from '@/components/home/WhatsInside'
import FlavorTeaser from '@/components/home/FlavorTeaser'
import Marquee from '@/components/home/Marquee'
import ComparisonTable from '@/components/home/ComparisonTable'
import WaitlistSection from '@/components/home/WaitlistSection'
import Footer from '@/components/layout/Footer'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Figuring Out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Figuring Out is a premium electrolyte sachet brand for runners and active people. Each sachet contains essential electrolytes like potassium, magnesium, calcium, zinc, and vitamins — with 0g sugar and no artificial ingredients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Figuring Out vegan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Figuring Out is 100% vegan with no animal-derived ingredients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much sugar is in Figuring Out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero. Figuring Out contains 0g sugar and only 10 calories per sachet. No artificial sweeteners either.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Figuring Out launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Figuring Out is coming soon. Join the waitlist to be the first to know — the first 200 signups get a free box.',
      },
    },
    {
      '@type': 'Question',
      name: 'What flavors does Figuring Out have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The launch lineup includes three flavors: Broke But Hydrated (berry & pomegranate), Hot Ex (citrus energy), and Clarity (himalayan lime).',
      },
    },
  ],
}

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FDF8F3' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <CoastalHero />
      <WhatsInside />
      <FlavorTeaser />
      <Marquee />
      <ComparisonTable />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
