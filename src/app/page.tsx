import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/home/ScrollProgress'
import CoastalHero from '@/components/home/CoastalHero'
import WhatsInside from '@/components/home/WhatsInside'
import ScienceStrip from '@/components/home/ScienceStrip'
import FlavorTeaser from '@/components/home/FlavorTeaser'
import ComparisonTable from '@/components/home/ComparisonTable'
import WaitlistSection from '@/components/home/WaitlistSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FDF8F3' }}>
      <ScrollProgress />
      <Navbar />
      <CoastalHero />
      <WhatsInside />
      <ScienceStrip />
      <FlavorTeaser />
      <ComparisonTable />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
