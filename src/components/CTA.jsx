import { useEffect, useRef } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('reveal-visible'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
}

export default function CTA() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="py-15 bg-white">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center reveal-section">
        <div className="text-6xl mb-6 animate-bounce" style={{animationDuration:'3s'}}>🎁</div>
        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Find the <span className="text-orange-500">Perfect Gift</span> Today
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Stop the guesswork. Walk into any GiftinGuru store and let us help you find something truly special.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#visit-our-stores"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all duration-200 shadow-xl shadow-orange-300 hover:-translate-y-0.5 text-base"
          >
            <MapPin className="w-5 h-5" />
            Visit Store
          </a>
        </div>
      </div>

      <style>{`
        .reveal-section { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}