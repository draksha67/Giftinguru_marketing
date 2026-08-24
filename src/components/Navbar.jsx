import { useState, useEffect } from 'react'
import { Gift, Menu, X } from 'lucide-react'
import logo2 from '../assets/logo2.png'
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ openServices }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);

      if (el) {
        const yOffset = -80;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Decorations', 'Visit Our Stores', 'Testimonials']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img
            src={logo2}
            alt="GiftinGuru Logo"
            className="h-14 w-auto object-contain "
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              onClick={() => handleScroll(link.toLowerCase().replace(/\s+/g, "-"))}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 relative group cursor-pointer"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={openServices}
          className="hidden md:inline-flex px-5 py-2.5 text-sm font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-md shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 cursor-pointer"
        >
          Book Decor Services
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-orange-100 transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-4 space-y-3">
          {links.map(link => (
            <button
              key={link}
              onClick={() => {
                const id = link.toLowerCase().replace(/\s+/g, "-")
                setMenuOpen(false)
                setTimeout(() => {
                  handleScroll(id)
                }, 100)
              }}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-orange-500 py-1.5 transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openServices();
            }}
            className="block w-full text-center px-5 py-2.5 text-sm font-semibold bg-orange-500 text-white rounded-xl mt-2"
          >
            Book Services
          </button>
        </div>
      </div>
    </nav >
  )
}