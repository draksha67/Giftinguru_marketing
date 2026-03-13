import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin, Sparkles, Star } from 'lucide-react'
import sadhuLogo from '../assets/sadhuLogo.png'

const FloatingBadge = ({ className, children }) => (
  <div className={`absolute bg-white rounded-2xl shadow-xl shadow-gray-200/80 px-4 py-3 flex items-center gap-2.5 border border-gray-100 ${className}`}>
    {children}
  </div>
)

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('hero-visible'), 100)
  }, [])

  return (
    <section id="home" className="relative lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/40">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-50/40 blur-3xl" />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#f97316" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 lg:pt-28 pb-8 sm:pb-14 lg:pb-20 w-full opacity-0 translate-y-6 transition-all duration-1000 ease-out" style={{ transitionDelay: '0.1s' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              India's Premier Gift Store
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900">
                India's{' '}
                <span className="relative">
                  <span className="text-orange-500">One-Stop</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6 Q50 2 100 5 Q150 8 198 4" stroke="#fdba74" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
                <br />Gift & Decoration Destination
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-xl font-light">
                Unique gifts, toys, décor items, and beautiful decorations for every celebration handpicked with love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#visit-our-stores"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-300 hover:shadow-orange-400 hover:-translate-y-0.5 text-base"
              >
                Visit Store
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {['🎁', '🎀', '🎊', '🎉'].map((e, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-base shadow-sm">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Loved by 100k+ happy customers</p>
              </div>
            </div>
          </div>

          {/* Right: Visual card cluster */}
          <div className="relative hidden lg:flex justify-center items-center h-[520px]">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <img
                src={sadhuLogo}
                alt="GiftinGuru Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            {/* Floating badges */}
            {/* Toys */}
            <FloatingBadge className="top-10 -left-10 animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-lg">🧸</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Toys</p>
                <p className="text-xs text-gray-400">& Collectibles</p>
              </div>
            </FloatingBadge>

            {/* Decorative Gifts */}
            <FloatingBadge className="top-24 right-[-40px] animate-pulse" style={{ animationDuration: '5s' }}>
              <div className="w-8 h-8 bg-pink-100 rounded-xl flex items-center justify-center text-lg">🎁</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Decor</p>
                <p className="text-xs text-gray-400">& Gifts</p>
              </div>
            </FloatingBadge>

            {/* Religious Idols */}
            <FloatingBadge className="top-52 -left-12 animate-pulse" style={{ animationDuration: '6s' }}>
              <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-lg">🕉️</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Religious</p>
                <p className="text-xs text-gray-400">Idols</p>
              </div>
            </FloatingBadge>

            {/* Home Decor */}
            <FloatingBadge className="top-72 right-[-50px] animate-pulse" style={{ animationDuration: '5.5s' }}>
              <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center text-lg">🏠</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Home</p>
                <p className="text-xs text-gray-400">Decor</p>
              </div>
            </FloatingBadge>

            {/* Handmade Crafts */}
            <FloatingBadge className="bottom-40 -left-10 animate-pulse" style={{ animationDuration: '4.5s' }}>
              <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-lg">🧵</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Handmade</p>
                <p className="text-xs text-gray-400">Crafts</p>
              </div>
            </FloatingBadge>

            {/* Festival Specials */}
            <FloatingBadge className="bottom-28 right-[-40px] animate-pulse" style={{ animationDuration: '6s' }}>
              <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-lg">✨</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Festival</p>
                <p className="text-xs text-gray-400">Specials</p>
              </div>
            </FloatingBadge>

            {/* Statues */}
            <FloatingBadge className="bottom-12 -left-12">
              <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-lg">🗿</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Statues</p>
                <p className="text-xs text-gray-400">& Idols</p>
              </div>
            </FloatingBadge>

            {/* Keychains */}
            <FloatingBadge className="top-6 right-[-70px]">
              <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-lg">🔑</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Keychains</p>
                <p className="text-xs text-gray-400">& Accessories</p>
              </div>
            </FloatingBadge>
            {/* Top Center Badge */}
            <FloatingBadge className="-top-6 left-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: '5s' }}>
              <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center text-lg">🎀</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Gift</p>
                <p className="text-xs text-gray-400">Wrapping</p>
              </div>
            </FloatingBadge>

            {/* Bottom Center Badge */}
            <FloatingBadge className="-bottom-6 left-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: '4.5s' }}>
              <div className="w-8 h-8 bg-indigo-100 rounded-xl flex items-center justify-center text-lg">🛍️</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Shopping</p>
                <p className="text-xs text-gray-400">Essentials</p>
              </div>
            </FloatingBadge>

            {/* Upper Slight Right Badge */}
            <FloatingBadge className="top-4 right-1/4 animate-pulse" style={{ animationDuration: '6s' }}>
              <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center text-lg">🎉</div>
              <div>
                <p className="text-xs font-bold text-gray-800">Party</p>
                <p className="text-xs text-gray-400">Supplies</p>
              </div>
            </FloatingBadge>

          </div>
        </div>
      </div>

      <style>{`
        .hero-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  )
}