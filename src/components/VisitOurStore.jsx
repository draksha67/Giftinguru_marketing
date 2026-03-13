import { useState } from "react";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";

// ─── Store data ───────────────────────────────────────────────────────────────
const stores = [
  {
    name: "Indirapuram",
    location: "Lower Ground Floor, Shipra Shopping Center, Shop No, SPL-036, Vaibhav Khand, Indirapuram, Uttar Pradesh 201014, Ghaziabad, UP",
    phone: "+91 9717817771",
    email: "Giftinguru@gmail.com",
    timings: "Mon–Sun: 10:00 AM – 9:00 PM",
    mapLink: "https://maps.google.com/?q=GiftinGuru+Indirapuram+Ghaziabad",
    photos: [
      "src/assets/TestimonialINDRA.jpg",
      "src/assets/Innp.webp",
      "src/assets/Innp2.webp",
      "src/assets/Innp3.webp",
    ],
  },
  {
    name: "Shakti Khand 4",
    location: "shop no 4, krishna complex, plot no 70, opp. Harsha City Mall, Shakti Khand 4, Indirapuram, Ghaziabad, Uttar Pradesh 201014, UP",
    phone: "+91 92208 96622",
    email: "Giftinguru@gmail.com",
    timings: "Mon–Sun: 10:00 AM – 9:00 PM",
    mapLink: "https://maps.google.com/?q=GiftinGuru+Shakti+Khand+Ghaziabad",
    photos: [
      "src/assets/TestimonialSHAKTI.jpg",
      "src/assets/Shakti.webp",
      "src/assets/Shakti2.webp",
      "src/assets/Shakti3.webp",
    ],
  },
  {
    name: "Siddharth Vihar",
    location: "Shop number 59, Gaur Siddhartham, Plot, Street No. 8, Siddharth Vihar, Indirapuram, Ghaziabad, Uttar Pradesh 201009",
    phone: "+91 96257 96622",
    email: "Giftinguru@gmail.com",
    timings: "Mon–Sun: 10:00 AM – 9:00 PM",
    mapLink: "https://maps.google.com/?q=GiftinGuru+Siddharth+Vihar+Ghaziabad",
    photos: [
      "src/assets/TestimonialSIDDHARTH.jpg",
      "src/assets/Sidd.webp",
      "src/assets/Sidd2.webp",
      "src/assets/Sidd3.webp",
    ],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full text-base transition-colors"
        >
          ✕
        </button>
        <div className="bg-gray-50 flex items-center justify-center" style={{ minHeight: 280 }}>
          <img
            src={photos[current]}
            alt={`Photo ${current + 1}`}
            className="max-h-[60vh] w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
          <button onClick={prev} className="text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors">← Prev</button>
          <span className="text-xs text-gray-400">{current + 1} / {photos.length}</span>
          <button onClick={next} className="text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors">Next →</button>
        </div>
        <div className="flex gap-2 px-5 pb-4">
          {photos.map((ph, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current ? "border-orange-400 scale-105" : "border-transparent opacity-50 hover:opacity-90"
              }`}
            >
              <img src={ph} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── StoreCard ────────────────────────────────────────────────────────────────
function StoreCard({ name, location, phone, email, timings, mapLink, photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const slots = Array.from({ length: 4 }, (_, i) => photos[i] ?? null);

  return (
    <>
      <div className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">

        {/* Square collage */}
        <div className="relative w-full" style={{ paddingTop: "75%" }}>
          <div className="absolute inset-0 p-2 grid grid-cols-2 grid-rows-2 gap-1.5">
            {slots.map((photo, i) => (
              <div
                key={i}
                className="relative group/photo overflow-hidden rounded-xl cursor-pointer bg-white/5"
                onClick={() => photo && setLightboxIndex(i)}
              >
                {photo ? (
                  <>
                    <img
                      src={photo}
                      alt={`${name} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover/photo:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/45 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 bg-white/95 text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wide whitespace-nowrap">
                        View Photo
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5">
                    <span className="text-2xl opacity-20">🎁</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Store info */}
        <div className="px-5 py-4 flex flex-col gap-1 flex-1">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400 mb-0.5">
            Giftinguru
          </p>
          <h3 className="text-base font-bold text-black leading-snug mb-2">{name}</h3>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-black leading-relaxed">{location}</p>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
            <p className="text-xs text-black">{timings}</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-xs font-medium text-gray-800 hover:text-green-400 transition-colors"
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <a
              href={`mailto:${email}`}
              className="text-xs font-medium text-gray-800 hover:text-blue-400 transition-colors"
            >
              {email}
            </a>
          </div>

          {/* View on Map Button */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors duration-200"
          >
            <MapPin className="w-3.5 h-3.5" />
            View on Map
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={slots.filter(Boolean)}
          startIndex={Math.min(lightboxIndex, slots.filter(Boolean).length - 1)}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ─── VisitOurStores ───────────────────────────────────────────────────────────
export default function VisitOurStores() {
  return (
    <section id="visit-our-stores"className="py-16 sm:py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">

      {/* Decorative blobs + dot grid — same as Franchise */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-vos" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-vos)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full mb-4 border border-orange-500/20">
            📍 Find Us Near You
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Visit Our <span className="text-orange-400">Stores</span>
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-md mx-auto font-light">
            Experience Giftinguru in person at our physical locations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <StoreCard
              key={store.name}
              name={store.name}
              location={store.location}
              phone={store.phone}
              email={store.email}
              timings={store.timings}
              mapLink={store.mapLink}
              photos={store.photos}
            />
          ))}
        </div>

      </div>
    </section>  );
}