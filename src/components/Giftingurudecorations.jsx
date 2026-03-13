import { useState } from "react";

const gallery = {
    birthday: [
        { id: 1, src: "src/assets/birth1.jpeg", alt: "Birthday balloon setup" },
        { id: 2, src: "src/assets/birth2.jpeg", alt: "Birthday cake decor" },
        { id: 3, src: "src/assets/birth3.jpeg", alt: "Birthday party decoration" },
        { id: 4, src: "src/assets/birth4.jpeg", alt: "Birthday centerpiece" },
    ],
    anniversary: [
        { id: 7, src: "src/assets/ann1.jpeg", alt: "Anniversary rose decor" },
        { id: 8, src: "src/assets/ann2.jpeg", alt: "Anniversary candle setup" },
        { id: 9, src: "src/assets/ann3.jpeg", alt: "Anniversary table decor" },
        { id: 10, src: "src/assets/ann5.jpeg", alt: "Anniversary floral arrangement" },
    ],
    function: [
        { id: 15, src: "src/assets/wed1.jpeg", alt: "Wedding lights decor" },
        { id: 16, src: "src/assets/wed2.jpeg", alt: "Wedding flower decor" },
        { id: 17, src: "src/assets/wed3.jpeg", alt: "Wedding decoration setup" },
        { id: 18, src: "src/assets/wed5.jpeg", alt: "Wedding reception decor" },
    ],
    custom: [
        { id: 20, src: "src/assets/custom1.jpeg", alt: "Custom event hall setup" },
        { id: 21, src: "src/assets/custom2.jpeg", alt: "Custom theme decoration" },
        { id: 22, src: "src/assets/custom3.jpeg", alt: "Custom event stage" },
        { id: 23, src: "src/assets/custom4.jpeg", alt: "Custom event lighting" },
    ],
};

const CATEGORIES = [
    { key: "birthday",    emoji: "🎂", label: "Most Popular", title: "Birthday Decorations", bg: "#FFF4EC", accent: "#f97316" },
    { key: "anniversary", emoji: "💕", label: "Romantic",     title: "Anniversary Decor",    bg: "#FFF0F5", accent: "#ec4899" },
    { key: "function",    emoji: "🎉", label: "Wedding",      title: "Function Decor",        bg: "#FFFBEC", accent: "#eab308" },
    { key: "custom",      emoji: "✨", label: "Premium",      title: "Custom Event Setup",    bg: "#F4FFF4", accent: "#22c55e" },
];

export default function GiftinGuruDecorations() {
    const [selected, setSelected]       = useState("birthday");
    const [lightbox, setLightbox]       = useState(null);
    const [showContact, setShowContact] = useState(false);

    const activeCat    = CATEGORIES.find(c => c.key === selected);
    const activePhotos = gallery[selected] || [];

    return (
        <section
            id="decorations"
            style={{
                fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                background: "linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)",
                padding: "40px 16px",
                scrollMarginTop: "72px",
                boxSizing: "border-box",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; }

                .deco-inner {
                    max-width: 960px;
                    margin: 0 auto;
                    width: 100%;
                }

                /* ── Category cards ── */
                .cat-card { transition: transform .2s ease, box-shadow .2s ease; cursor: pointer; }
                .cat-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,.10) !important; }

                /* ── Photo cards ── */
                .photo-wrap { overflow: hidden; border-radius: 10px; position: relative; }
                .photo-wrap img { transition: transform .4s ease; display: block; width: 100%; height: 100%; object-fit: cover; }
                .photo-wrap:hover img { transform: scale(1.05); }
                .photo-wrap .overlay { transition: opacity .3s ease; }
                .photo-wrap:hover .overlay { opacity: 1 !important; }

                .gallery-grid { animation: galFade .3s ease; }
                @keyframes galFade { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

                /* ── Lightbox / modal ── */
                .lb-bg  { animation: lbIn .18s ease; }
                .lb-img { animation: lbUp .22s ease; }
                @keyframes lbIn { from { opacity:0 }  to { opacity:1 } }
                @keyframes lbUp { from { transform:scale(.95);opacity:0 } to { transform:scale(1);opacity:1 } }
                .contact-modal-bg  { animation: lbIn .18s ease; }
                .contact-modal-box { animation: lbUp .22s ease; }

                /* ── Main two-column layout ── */
                .deco-layout {
                    display: grid;
                    grid-template-columns: 190px 1fr;
                    gap: 16px;
                    align-items: start;
                    width: 100%;
                }

                /* ── Photo grid: 2-col on desktop ── */
                .photo-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                /* ── Tablet (≤768px): sidebar becomes 2×2 grid above gallery ── */
                @media (max-width: 768px) {
                    .deco-layout {
                        grid-template-columns: 1fr;
                        gap: 14px;
                    }
                    .cat-sidebar {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        flex-direction: unset !important;
                        gap: 8px;
                    }
                }

                /* ── Mobile (≤480px): cat cards full-width, photos single column ── */
                @media (max-width: 480px) {
                    .cat-sidebar {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .photo-grid {
                        grid-template-columns: 1fr !important;
                    }
                }

                /* ── Very small (≤360px) ── */
                @media (max-width: 360px) {
                    .cat-sidebar {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            <div className="deco-inner">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <span style={{
                        display: "inline-block", border: "1.5px solid #f97316", color: "#f97316",
                        borderRadius: "999px", padding: "3px 14px", fontSize: "12px",
                        fontWeight: "600", marginBottom: "10px",
                    }}>
                        Our Services
                    </span>

                    <h2 style={{
                        fontSize: "clamp(25px, 4vw, 34px)", fontWeight: "800",
                        color: "#111827", lineHeight: 1.8, margin: "0 0 8px",
                    }}>
                        We Turn Celebrations{" "}
                        <span style={{ color: "#f97316" }}>into Memories</span>
                    </h2>

                    <p style={{
                        color: "#6b7280", fontSize: "clamp(13px, 2vw, 14px)", lineHeight: 1.7,
                        maxWidth: "420px", margin: "0 auto 14px",
                    }}>
                        Select a category to explore our real event setups.
                    </p>

                    <button
                        onClick={() => setShowContact(true)}
                        style={{
                            background: "#f97316", color: "#fff", border: "none",
                            borderRadius: "10px", padding: "11px 24px",
                            fontSize: "clamp(13px, 2.5vw, 15px)",
                            fontWeight: "800", fontFamily: "inherit", cursor: "pointer",
                            display: "inline-flex", alignItems: "center", gap: "7px",
                            boxShadow: "0 4px 16px rgba(249,115,22,0.35)",
                            transition: "background .18s, transform .15s",
                            maxWidth: "100%",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#ea580c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        🎀 Book Decoration Service
                    </button>
                </div>

                {/* ── Two-column layout ── */}
                <div className="deco-layout">

                    {/* LEFT — vertical category cards (sidebar) */}
                    <div
                        className="cat-sidebar"
                        style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}
                    >
                        {CATEGORIES.map(cat => {
                            const isActive = selected === cat.key;
                            return (
                                <div
                                    key={cat.key}
                                    className="cat-card"
                                    onClick={() => setSelected(cat.key)}
                                    style={{
                                        background: cat.bg,
                                        borderRadius: "12px",
                                        padding: "16px 12px 14px",
                                        minHeight: "110px",
                                        position: "relative",
                                        width: "100%",
                                        boxShadow: isActive
                                            ? `0 0 0 2px ${cat.accent}, 0 6px 18px rgba(0,0,0,.09)`
                                            : "0 1px 5px rgba(0,0,0,.06)",
                                    }}
                                >
                                    {isActive && (
                                        <div style={{
                                            position: "absolute", top: 0, left: "10px", right: "10px",
                                            height: "3px", background: cat.accent,
                                            borderRadius: "0 0 3px 3px",
                                        }} />
                                    )}

                                    <span style={{
                                        position: "absolute", top: "8px", right: "9px",
                                        fontSize: "9px", fontWeight: "700",
                                        textTransform: "uppercase", letterSpacing: ".05em",
                                        color: isActive ? cat.accent : "#9ca3af",
                                    }}>
                                        {cat.label}
                                    </span>

                                    <div style={{ fontSize: "24px", marginBottom: "6px", lineHeight: 1 }}>
                                        {cat.emoji}
                                    </div>

                                    <h3 style={{
                                        fontSize: "12px", fontWeight: "700",
                                        color: "#111827", margin: "0 0 6px", lineHeight: 1.3,
                                    }}>
                                        {cat.title}
                                    </h3>

                                    <span style={{
                                        display: "inline-block", fontSize: "10px", fontWeight: "700",
                                        padding: "2px 7px", borderRadius: "999px",
                                        background: isActive ? cat.accent : "rgba(0,0,0,.06)",
                                        color: isActive ? "#fff" : "#6b7280",
                                        transition: "all .2s",
                                    }}>
                                        {gallery[cat.key].length} photos
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT — gallery panel */}
                    <div style={{ width: "100%", minWidth: 0 }}>

                        {/* Heading */}
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                            <span style={{ fontSize: "18px" }}>{activeCat.emoji}</span>
                            <div>
                                <h3 style={{ fontSize: "15px", fontWeight: "800", color: "#111827", margin: 0 }}>
                                    {activeCat.title}
                                </h3>
                                <p style={{ color: "#9ca3af", fontSize: "11px", margin: 0 }}>
                                    {activePhotos.length} event photo{activePhotos.length !== 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>

                        {/* Accent bar */}
                        <div style={{
                            height: "3px", borderRadius: "4px", marginBottom: "10px",
                            background: `linear-gradient(90deg, ${activeCat.accent} 0%, transparent 100%)`,
                        }} />

                        {/* Photo grid — 2 col desktop, 1 col mobile */}
                        <div key={selected} className="gallery-grid photo-grid">
                            {activePhotos.map(photo => (
                                <div
                                    key={photo.id}
                                    className="photo-wrap cursor-pointer"
                                    style={{
                                        aspectRatio: "4 / 3",
                                        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setLightbox(photo)}
                                >
                                    <img src={photo.src} alt={photo.alt} loading="lazy" />

                                    <div
                                        className="overlay"
                                        style={{
                                            position: "absolute", inset: 0, opacity: 0,
                                            background: "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 55%)",
                                            display: "flex", alignItems: "flex-end",
                                            justifyContent: "space-between",
                                            padding: "10px 12px",
                                        }}
                                    >
                                        <span style={{
                                            color: "#fff", fontSize: "11px", fontWeight: "600",
                                            background: "rgba(255,255,255,.15)", borderRadius: "6px",
                                            padding: "3px 9px", backdropFilter: "blur(4px)",
                                        }}>
                                            View Photo
                                        </span>
                                        <span style={{ color: "rgba(255,255,255,.75)", fontSize: "10px", fontWeight: "500" }}>
                                            {photo.alt}
                                        </span>
                                    </div>

                                    <div style={{
                                        position: "absolute", top: "8px", left: "8px",
                                        width: "8px", height: "8px", borderRadius: "50%",
                                        background: activeCat.accent,
                                        boxShadow: "0 0 0 2.5px rgba(255,255,255,.85)",
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Lightbox ── */}
            {lightbox && (
                <div
                    className="lb-bg"
                    onClick={() => setLightbox(null)}
                    style={{
                        position: "fixed", inset: 0, zIndex: 1000,
                        background: "rgba(0,0,0,.88)",
                        display: "flex", alignItems: "center", justifyContent: "center", padding: "16px",
                    }}
                >
                    <div
                        className="lb-img"
                        onClick={e => e.stopPropagation()}
                        style={{
                            maxWidth: "820px", width: "100%",
                            borderRadius: "16px", overflow: "hidden",
                            boxShadow: "0 32px 80px rgba(0,0,0,.6)",
                        }}
                    >
                        <img
                            src={lightbox.src}
                            alt={lightbox.alt}
                            style={{ width: "100%", maxHeight: "75vh", objectFit: "cover", display: "block" }}
                        />
                        <div style={{
                            background: "#fff", display: "flex",
                            justifyContent: "space-between", alignItems: "center",
                            padding: "14px 18px",
                        }}>
                            <div>
                                <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: 0 }}>
                                    {activeCat.title}
                                </p>
                                <p style={{ color: "#9ca3af", fontSize: "12px", margin: "2px 0 0" }}>
                                    {lightbox.alt}
                                </p>
                            </div>
                            <button
                                onClick={() => setLightbox(null)}
                                style={{
                                    background: "#f3f4f6", border: "none", borderRadius: "8px",
                                    padding: "7px 14px", fontSize: "13px", fontWeight: "600",
                                    color: "#374151", cursor: "pointer", fontFamily: "inherit",
                                }}
                            >
                                Close ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Contact Modal ── */}
            {showContact && (
                <div
                    className="contact-modal-bg"
                    onClick={() => setShowContact(false)}
                    style={{
                        position: "fixed", inset: 0, zIndex: 1100,
                        background: "rgba(0,0,0,.55)",
                        display: "flex", alignItems: "center", justifyContent: "center", padding: "16px",
                    }}
                >
                    <div
                        className="contact-modal-box"
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: "#fff", borderRadius: "20px",
                            padding: "32px 28px 24px", maxWidth: "360px", width: "100%",
                            textAlign: "center", boxShadow: "0 24px 64px rgba(0,0,0,.22)",
                            position: "relative", fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                        }}
                    >
                        <button
                            onClick={() => setShowContact(false)}
                            style={{
                                position: "absolute", top: "12px", right: "14px",
                                background: "#f3f4f6", border: "none", borderRadius: "8px",
                                width: "28px", height: "28px", fontSize: "14px",
                                cursor: "pointer", color: "#6b7280",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}
                        >✕</button>

                        <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎀</div>

                        <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
                            Contact Us to Plan<br />Your Event With Us
                        </h3>
                        <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.65, margin: "0 0 18px" }}>
                            Reach out to our team and let's bring your celebration to life!
                        </p>

                        <div style={{
                            background: "#FFF4EC", border: "1.5px solid #fed7aa",
                            borderRadius: "12px", padding: "14px 16px",
                        }}>
                            <p style={{
                                fontSize: "11px", color: "#9ca3af", margin: "0 0 5px",
                                fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase",
                            }}>
                                📞 Call / WhatsApp
                            </p>
                            <p style={{ fontSize: "24px", fontWeight: "800", color: "#f97316", margin: 0, letterSpacing: "1px" }}>
                                +91 92208 96622
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}