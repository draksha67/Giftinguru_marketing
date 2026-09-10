import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart } from 'lucide-react'
import logo2 from '/logo2.png'
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const quickLinks = ['Home', 'About', 'Decorations', 'Visit Our Stores', 'Testimonials', 'Privacy Policy', 'Terms & Conditions']
const categories = ['Toys & Collectibles', 'Decorative Gifts', 'Religious Statues', 'Keychains', 'Occasion Gifts', 'Unique Gifts']

export default function Footer() {
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

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center">
              <img
                src={logo2}
                alt="GiftinGuru Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              India's one-stop gift destination for unique toys, decor items, religious statues, keychains, and collectibles for every occasion.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/giftinguru.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>

              <a
                href="https://www.facebook.com/Giftinguru.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>

              <a
                href="https://www.youtube.com/@giftinguru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
            <p className="text-sm text-gray-400">Follow us</p>
          </div>

          {/* Quick Links + Categories */}
          <div className="grid grid-cols-2 gap-6 md:contents">

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link}>
                    {link === "Privacy Policy" ? (
                      <Link
                        to="/privacy-policy"
                        className="text-sm text-gray-400 hover:text-orange-400"
                      >
                        {link}
                      </Link>
                    ) : link === "Terms & Conditions" ? (
                      <Link
                        to="/terms-conditions"
                        className="text-sm text-gray-400 hover:text-orange-400"
                      >
                        {link}
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          handleScroll(link.toLowerCase().replace(/\s+/g, "-"))
                        }
                        className="text-sm text-gray-400 hover:text-orange-400 text-left"
                      >
                        {link}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Categories
              </h4>

              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <a
                      href="#offerings"
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">Shipra Sun City Market, Indirapuram, Ghaziabad, UP – 201014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">+91 9717817771</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:Giftinguru@gmail.com" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Giftinguru@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} GiftinGuru. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-orange-500 fill-orange-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}