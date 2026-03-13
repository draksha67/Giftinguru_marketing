import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sumit Sisodia',
    quote: 'Gifting Guru in Siddharth Vihar, Ghaziabad is a great place for unique gift items. Good variety, reasonable pricing, and helpful staff. Perfect shop for birthdays, anniversaries, and special occasions. Highly recommended.',
    rating: 5,
    initials: 'SS',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Rajesh Thapliyal',
    quote: 'Best quality toy shop in Indirapuram. They have the best variety of return gifts and home decor gifts available in the market... All my kids toys come from this store for the past 10 years.. Very polite staff.',
    rating: 5,
    initials: 'RT',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Neeta Kedia',
    quote: 'Very nice toys, sale person karan gives Very good service. Very best collection!!',
    rating: 5,
    initials: 'NK',
    color: 'bg-green-100 text-green-600',
  },
  

]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

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

export default function Testimonials() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section id="testimonials" className="py-15 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-10 reveal-section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-orange-500 bg-orange-50 px-4 py-1.5 rounded-full mb-4">Customer Stories</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Real stories from real customers who found the perfect gift at GiftinGuru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-orange-500 fill-orange-500" />
              </div>

              <StarRow count={t.rating} />

              <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal-section { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}