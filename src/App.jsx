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
import ContactModal from './components/ContactModel'

import { useEffect, useState } from 'react'
import TermsConditions from "./components/Terms-Conditions";
import Decorations from "./components/Decorations";

function AppContent() {
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const location = useLocation();

  const handleOpen = () => {
    setOpenServiceModal(true);
  };

  const handleClose = () => {
    setOpenServiceModal(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      // Wait until the home page is rendered
      setTimeout(() => {
        const el = document.getElementById(id);

        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Normal route change → go to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname, location.state]);

  return (
    <>
      <Navbar openServices={handleOpen} />

      <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CTA />
                <Features />
                <GiftinGuruDecorations onBookService={handleOpen} />
                <VisitOurStores />
                <Testimonials />
              </>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/decorations" element={<Decorations />} />
        </Routes>
      </div>

      <Footer />

      {/* GLOBAL MODAL */}
      {openServiceModal && (
        <ContactModal onClose={handleClose} />
      )}
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}