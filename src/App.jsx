import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import GiftinGuruDecorations from './components/Giftingurudecorations'
import VisitOurStores from './components/VisitOurStore'
import PrivacyPolicy from './components/Privacy-Policy'

import { useEffect, useState } from 'react'
import TermsConditions from "./components/Terms-Conditions";

function AppContent() {
  const [openServiceModal, setOpenServiceModal] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      const scrollToSection = () => {
        const el = document.getElementById(id);

        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    } else {
      window.scrollTo(0, 0);
    }
    if (location.state?.openService) {
      setOpenServiceModal(true);
    } else {
      setOpenServiceModal(false);
    }

  }, [location]);
  const handleOpen = () => {
    setOpenServiceModal(false) // reset
    setTimeout(() => {
      setOpenServiceModal(true)
    }, 50)
  }

  return (
    <>
      <Navbar openServices={handleOpen} />

      <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CTA />
              <Features />
              <GiftinGuruDecorations openFromNavbar={openServiceModal} />
              <VisitOurStores />
              <Testimonials />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}


// 👉 OUTER WRAPPER
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}