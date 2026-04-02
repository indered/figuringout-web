import Navbar from '@/components/layout/Navbar'
import CoastalHero from '@/components/home/CoastalHero'
import FlavorTeaser from '@/components/home/FlavorTeaser'
import Manifesto from '@/components/home/Manifesto'
import RunClubTeaser from '@/components/home/RunClubTeaser'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FDF8F3' }}>
      <Navbar />
      <CoastalHero />
      <FlavorTeaser />
      <Manifesto />
      <RunClubTeaser />
      <Footer />
    </main>
  )
}
