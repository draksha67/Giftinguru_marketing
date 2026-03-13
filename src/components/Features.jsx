import { useEffect, useRef } from 'react'

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

export default function Features() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 reveal-section">
        <div className="space-y-5 sm:space-y-6 text-center">
          <span className="inline-block text-sm font-semibold text-orange-500 bg-orange-500/10 px-4 py-1.5 rounded-full">
            Why GiftinGuru
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            More Than Just a <span className="text-orange-500">Gift Store</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-lg mx-auto">
            We've built a space where every customer walks out with exactly what they were looking for and more. Here's what sets us apart.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {[['100k+', 'Happy Customers'], ['10k+', 'Gift Items'], ['3+', 'Store Locations'], ['4.9★', 'Avg. Rating']].map(([num, label]) => (
              <div key={label} className="bg-white rounded-2xl p-3 sm:p-4 border border-gray-100 shadow-sm">
                <p className="text-xl sm:text-2xl font-extrabold text-orange-500">{num}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal-section { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}