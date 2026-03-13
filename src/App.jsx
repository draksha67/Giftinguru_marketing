import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import GiftinGuruDecorations from './components/Giftingurudecorations'
import VisitOurStores from './components/VisitOurStore'

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <CTA />
      <Features />
      <GiftinGuruDecorations/>
      <VisitOurStores/>
      <Testimonials />
      <Footer />
    </div>
  )
}