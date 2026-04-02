import Navbar from '@/components/layout/Navbar'
import CoastalHero from '@/components/home/CoastalHero'
import BoxReveal from '@/components/home/BoxReveal'
import FlavorTeaser from '@/components/home/FlavorTeaser'
import Manifesto from '@/components/home/Manifesto'
import OurStory from '@/components/home/OurStory'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FDF8F3' }}>
      <Navbar />
      <CoastalHero />
      <BoxReveal />
      <FlavorTeaser />
      <Manifesto />
      <OurStory />
      <Footer />
    </main>
  )
}
