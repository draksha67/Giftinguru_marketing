import { useState } from "react";

const services = [
    {
        id: "birthday",
        title: "Birthday Decorations",
        subtitle: "Make every birthday unforgettable",
        emoji: "🎂",
        bg: "#FFF7ED",
        images: [
            "/birth1.jpeg",
            "/birth7.jpeg",
            "/birth3.jpeg",
            "/birth4.jpeg",
            "/birth5.jpeg",
            "/birth6.jpeg",
            "/birth8.jpeg",
            "/birth9.jpeg",
            "/birth10.jpeg",
            "/birth11.jpeg",
            "/birth12.jpeg",
            "/birth13.jpeg",
            "/birth2.jpeg",
            "/birth14.jpeg",
            "/birth15.jpeg"
        ],
    },
    {
        id: "anniversary",
        title: "Anniversary Decorations",
        subtitle: "Celebrate love in a beautiful way",
        emoji: "💕",
        bg: "#FFF1F6",
        images: [
            "/ann1.jpeg",
            "/ann2.jpeg",
            "/ann3.jpeg",
            "/ann4.jpeg",
            "/ann5.jpeg",
        ],
    },
    {
        id: "function",
        title: "Wedding & Function Decor",
        subtitle: "Elegant setups for special occasions",
        emoji: "💍",
        bg: "#FFFBEB",
        images: [
            "/wed1.jpeg",
            "/wed2.jpeg",
            "/wed3.jpeg",
            "/wed5.jpeg",
        ],
    },
    {
        id: "custom",
        title: "Custom Event Setup",
        subtitle: "Your theme, our creativity",
        emoji: "✨",
        bg: "#F0FDF4",
        images: [
            "/custom5.jpeg",
            "/custom6.jpeg",
            "/custom7.jpeg",
            "/custom8.jpeg",
            "/custom9.jpeg",
            "/custom10.jpeg",
        ],
    },
];

// ── VIDEO DATA (commented out) ──
// const videos = [
//     {
//         id: 1,
//         title: "Birthday Decoration Setup",
//         category: "Birthday",
//         src: "/video1.mp4",
//     },
//     {
//         id: 2,
//         title: "Anniversary Decoration",
//         category: "Anniversary",
//         src: "/video2.mp4",
//     },
//     {
//         id: 3,
//         title: "Wedding Decoration Setup",
//         category: "Wedding",
//         src: "/video3.mp4",
//     },
// ];

export default function Decorations() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    // const [selectedVideo, setSelectedVideo] = useState(null);

    // const modalVideoRef = useRef(null);

    // const closeVideoModal = () => {
    //     if (modalVideoRef.current) {
    //         modalVideoRef.current.pause();
    //         modalVideoRef.current.currentTime = 0;
    //     }

    //     setSelectedVideo(null);
    // };

    // Autoplay whenever the modal video is mounted (i.e. a video is selected)
    // useEffect(() => {
    //     if (!selectedVideo || !modalVideoRef.current) return;

    //     const video = modalVideoRef.current;

    //     // Try to autoplay (unmuted). If the browser blocks it, fall back to muted autoplay.
    //     const playPromise = video.play();
    //     if (playPromise && typeof playPromise.catch === "function") {
    //         playPromise.catch(() => {
    //             video.muted = true;
    //             video.play().catch(() => {});
    //         });
    //     }

    //     // Pause automatically if the modal video scrolls out of view
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (!entry.isIntersecting && !video.paused) {
    //                 video.pause();
    //             }
    //         },
    //         {
    //             threshold: 0.25,
    //         }
    //     );

    //     observer.observe(video);

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [selectedVideo]);

    const filteredServices =
        activeCategory === "all"
            ? services
            : services.filter((service) => service.id === activeCategory);

    return (
        <div className="decorations-page">

            <style>{`
                * {
                    box-sizing: border-box;
                }

                .decorations-page {
                    min-height: 100vh;
                    background:
                        radial-gradient(circle at top left, #fff7ed 0%, transparent 35%),
                        radial-gradient(circle at top right, #fff1f2 0%, transparent 30%),
                        #ffffff;
                    font-family: 'Poppins', 'Segoe UI', sans-serif;
                    color: #111827;
                }

                .decorations-container {
                    max-width: 1180px;
                    margin: auto;
                    padding: 70px 20px;
                }

                /* HERO */

                .decorations-hero {
                    text-align: center;
                    max-width: 750px;
                    margin: 0 auto 55px;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    padding: 7px 15px;
                    border-radius: 999px;
                    background: #fff7ed;
                    color: #f97316;
                    border: 1px solid #fed7aa;
                    font-size: 12px;
                    font-weight: 700;
                    margin-top: 25px;
                    margin-bottom: 18px;
                }

                .decorations-hero h1 {
                    font-size: clamp(34px, 6vw, 58px);
                    line-height: 1.08;
                    margin: 0 0 18px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .hero-highlight {
                    color: #f97316;
                }

                .decorations-hero p {
                    color: #6b7280;
                    font-size: 15px;
                    line-height: 1.8;
                    margin: auto;
                    max-width: 600px;
                }

                /* FILTER */

                .category-filter {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 50px;
                }

                .filter-btn {
                    border: 1px solid #e5e7eb;
                    background: #fff;
                    color: #4b5563;
                    padding: 10px 18px;
                    border-radius: 999px;
                    font-family: inherit;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all .2s ease;
                }

                .filter-btn:hover {
                    border-color: #f97316;
                    color: #f97316;
                }

                .filter-btn.active {
                    background: #111827;
                    color: white;
                    border-color: #111827;
                }

                /* SERVICE */

                .service-section {
                    margin-bottom: 65px;
                }

                .service-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .service-title-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .service-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    font-size: 23px;
                }

                .service-header h2 {
                    margin: 0;
                    font-size: 23px;
                    font-weight: 800;
                }

                .service-header p {
                    margin: 3px 0 0;
                    color: #9ca3af;
                    font-size: 12px;
                }

                .photo-count {
                    color: #9ca3af;
                    font-size: 12px;
                    font-weight: 600;
                }

                /* GALLERY */

                .image-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 14px;
                }

                .image-card {
                    position: relative;
                    aspect-ratio: 1 / 1;
                    overflow: hidden;
                    border-radius: 18px;
                    cursor: pointer;
                    background: #f3f4f6;
                }

                .image-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform .5s ease;
                }

                .image-card:hover img {
                    transform: scale(1.08);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: flex-end;
                    padding: 18px;
                    opacity: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,.65),
                        transparent 65%
                    );
                    transition: opacity .3s ease;
                }

                .image-card:hover .image-overlay {
                    opacity: 1;
                }

                .view-image {
                    color: white;
                    font-size: 12px;
                    font-weight: 700;
                }

                /* VIDEOS (CSS kept, harmless if unused — comment block below if you want it fully gone) */
                /*
                .video-section {
                    margin-top: 80px;
                    padding-top: 55px;
                    border-top: 1px solid #f3f4f6;
                }

                .section-heading {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .section-heading span {
                    font-size: 11px;
                    color: #f97316;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                }

                .section-heading h2 {
                    font-size: clamp(25px, 4vw, 36px);
                    margin: 7px 0;
                    font-weight: 800;
                }

                .section-heading p {
                    color: #9ca3af;
                    font-size: 13px;
                }

                .video-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 18px;
                }

                .video-card {
                    overflow: hidden;
                    border-radius: 18px;
                    background: #111827;
                    box-shadow: 0 8px 30px rgba(0,0,0,.08);
                    cursor: pointer;
                }

                .video-wrapper {
                    position: relative;
                    aspect-ratio: 16 / 10;
                    background: #000;
                }

                .video-wrapper video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    pointer-events: none;
                }

                .video-play-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, .18);
                    transition: background .2s ease;
                }

                .video-card:hover .video-play-overlay {
                    background: rgba(0, 0, 0, .32);
                }

                .video-play-icon {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, .95);
                    color: #111827;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    padding-left: 3px;
                    box-shadow: 0 6px 18px rgba(0,0,0,.25);
                    transition: transform .2s ease;
                }

                .video-card:hover .video-play-icon {
                    transform: scale(1.08);
                }

                .video-info {
                    padding: 15px 16px;
                    background: white;
                }

                .video-category {
                    color: #f97316;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                }

                .video-info h3 {
                    margin: 5px 0 0;
                    font-size: 14px;
                    font-weight: 700;
                }
                */

                /* CTA */

                .booking-cta {
                    margin-top: 75px;
                    padding: 45px 25px;
                    border-radius: 25px;
                    text-align: center;
                    background:
                        linear-gradient(
                            135deg,
                            #111827 0%,
                            #1f2937 100%
                        );
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .booking-cta::before {
                    content: "";
                    position: absolute;
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    background: rgba(249,115,22,.15);
                    top: -120px;
                    right: -80px;
                }

                .booking-cta h2 {
                    position: relative;
                    margin: 0 0 9px;
                    font-size: 28px;
                    font-weight: 800;
                }

                .booking-cta p {
                    position: relative;
                    color: #d1d5db;
                    font-size: 13px;
                    margin-bottom: 22px;
                }

                .booking-btn {
                    position: relative;
                    border: none;
                    background: #f97316;
                    color: white;
                    border-radius: 10px;
                    padding: 12px 25px;
                    font-family: inherit;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all .2s ease;
                }

                .booking-btn:hover {
                    background: #ea580c;
                    transform: translateY(-2px);
                }

                /* ── DECORATION DETAIL MODAL ── */

.decoration-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background: rgba(15, 23, 42, 0.72);
    backdrop-filter: blur(8px);

    animation: decorationFadeIn .25s ease;
}

@keyframes decorationFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.decoration-detail-card {
    position: relative;

    width: min(900px, 100%);
    max-height: 90vh;

    display: grid;
    grid-template-columns: 1.1fr .9fr;

    overflow: hidden;

    background: #ffffff;
    border-radius: 24px;

    box-shadow:
        0 30px 80px rgba(0, 0, 0, .25);

    animation: decorationCardIn .3s ease;
}

@keyframes decorationCardIn {
    from {
        opacity: 0;
        transform: translateY(20px) scale(.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}


/* IMAGE */

.decoration-detail-image {
    min-height: 520px;
    background: #f3f4f6;
    overflow: hidden;
}

.decoration-detail-image img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
}


/* CONTENT */

.decoration-detail-content {
    padding: 45px 38px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.decoration-detail-icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    font-size: 25px;

    margin-bottom: 18px;
}

.decoration-detail-category {
    color: #f97316;

    font-size: 11px;
    font-weight: 800;

    text-transform: uppercase;
    letter-spacing: 1.2px;

    margin-bottom: 7px;
}

.decoration-detail-content h2 {
    margin: 0 0 12px;

    color: #111827;

    font-size: 28px;
    line-height: 1.2;

    font-weight: 800;
}

.decoration-detail-content p {
    margin: 0;

    color: #6b7280;

    font-size: 14px;
    line-height: 1.7;
}


/* DIVIDER */

.decoration-detail-divider {
    height: 1px;

    background: #e5e7eb;

    margin: 25px 0;
}


/* FEATURES */

.decoration-detail-info {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.decoration-detail-info > div {
    display: grid;
    grid-template-columns: 32px 1fr;

    column-gap: 10px;
    align-items: center;
}

.decoration-detail-info span {
    grid-row: span 2;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    background: #fff7ed;

    font-size: 15px;
}

.decoration-detail-info strong {
    color: #111827;

    font-size: 12px;
    font-weight: 700;
}

.decoration-detail-info small {
    color: #9ca3af;

    font-size: 10px;
}


/* BOOK BUTTON */

.decoration-book-btn {
    width: 100%;

    margin-top: 28px;

    border: none;

    padding: 14px 20px;

    border-radius: 11px;

    background: #111827;
    color: #ffffff;

    font-family: inherit;

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    transition: all .2s ease;
}

.decoration-book-btn:hover {
    background: #f97316;
    transform: translateY(-2px);

    box-shadow:
        0 8px 20px rgba(249, 115, 22, .25);
}


/* CLOSE */

.decoration-modal-close {
    position: absolute;

    top: 14px;
    right: 14px;

    z-index: 5;

    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    border-radius: 50%;

    background: rgba(255, 255, 255, .92);
    color: #111827;

    font-size: 15px;

    cursor: pointer;

    box-shadow:
        0 5px 15px rgba(0, 0, 0, .12);

    transition: all .2s ease;
}

.decoration-modal-close:hover {
    background: #111827;
    color: white;

    transform: rotate(90deg);
}


/* MOBILE */

@media (max-width: 700px) {

    .decoration-modal {
        padding: 12px;
    }

    .decoration-detail-card {
        grid-template-columns: 1fr;

        max-height: 94vh;

        overflow-y: auto;

        border-radius: 20px;
    }

    .decoration-detail-image {
        min-height: 300px;
        max-height: 360px;
    }

    .decoration-detail-content {
        padding: 25px 22px 28px;
    }

    .decoration-detail-content h2 {
        font-size: 23px;
    }

    .decoration-detail-content p {
        font-size: 13px;
    }

    .decoration-detail-divider {
        margin: 18px 0;
    }

    .decoration-book-btn {
        margin-top: 22px;
    }

}

                /* VIDEO MODAL (commented out) */
                /*
                .video-only-card {
                    position: relative;
                    width: min(720px, 88vw);
                    max-height: 72vh;
                    background: #000;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, .35);
                    animation: decorationCardIn .3s ease;
                }

                .video-only-card video {
                    display: block;
                    width: 100%;
                    max-height: 72vh;
                    object-fit: contain;
                    background: #000;
                }

                .video-only-card .decoration-modal-close {
                    z-index: 10;
                }

                @media (max-width: 700px) {
                    .video-only-card {
                        width: 92vw;
                        max-height: 72vh;
                        border-radius: 14px;
                    }

                    .video-only-card video {
                        max-height: 72vh;
                    }
                }
                */

                /* TABLET */

                @media (max-width: 900px) {
                    .image-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .video-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* MOBILE */

                @media (max-width: 600px) {
                    .decorations-container {
                        padding: 45px 15px;
                    }

                    .decorations-hero {
                        margin-bottom: 35px;
                    }

                    .hero-badge{
                        margin-top: 40px;
                    }

                    .decorations-hero h1 {
                        letter-spacing: -.7px;
                    }

                    .category-filter {
                        margin-bottom: 35px;
                    }

                    .filter-btn {
                        padding: 9px 13px;
                        font-size: 11px;
                    }

                    .service-header {
                        align-items: flex-start;
                    }

                    .service-header h2 {
                        font-size: 18px;
                    }

                    .image-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 9px;
                    }

                    .image-card {
                        border-radius: 12px;
                    }

                    .video-grid {
                        grid-template-columns: 1fr;
                    }

                    .video-play-icon {
                        width: 46px;
                        height: 46px;
                        font-size: 15px;
                    }

                    .booking-cta {
                        padding: 35px 18px;
                    }

                    .booking-cta h2 {
                        font-size: 23px;
                    }
                }
            `}</style>

            <div className="decorations-container">

                {/* HERO */}

                <section className="decorations-hero">

                    <div className="hero-badge">
                        ✨ OUR DECORATION SERVICES
                    </div>

                    <h1>
                        We Create
                        <br />
                        <span className="hero-highlight">
                            Beautiful Memories
                        </span>
                    </h1>

                    <p>
                        Explore our decoration work for birthdays,
                        anniversaries, weddings, functions and
                        completely customized events.
                    </p>

                </section>

                {/* FILTER */}

                <div className="category-filter">

                    <button
                        className={`filter-btn ${activeCategory === "all" ? "active" : ""
                            }`}
                        onClick={() => setActiveCategory("all")}
                    >
                        ✨ All Services
                    </button>

                    {services.map((service) => (
                        <button
                            key={service.id}
                            className={`filter-btn ${activeCategory === service.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(service.id)}
                        >
                            {service.emoji} {service.title}
                        </button>
                    ))}

                </div>

                {/* SERVICES */}

                {filteredServices.map((service) => (

                    <section
                        className="service-section"
                        key={service.id}
                    >

                        <div className="service-header">

                            <div className="service-title-wrapper">

                                <div
                                    className="service-icon"
                                    style={{
                                        background: service.bg
                                    }}
                                >
                                    {service.emoji}
                                </div>

                                <div>
                                    <h2>
                                        {service.title}
                                    </h2>

                                    <p>
                                        {service.subtitle}
                                    </p>
                                </div>

                            </div>

                            <span className="photo-count">
                                {service.images.length} Photos
                            </span>

                        </div>

                        <div className="image-grid">

                            {service.images.map((image, index) => (

                                <div
                                    className="image-card"
                                    key={index}
                                    onClick={() => {
                                        setSelectedImage(image)
                                        setSelectedService(service)
                                    }}
                                >

                                    <img
                                        src={image}
                                        alt={service.title}
                                        loading="lazy"
                                    />

                                    <div className="image-overlay">
                                        <span className="view-image">
                                            View Photo →
                                        </span>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                ))}

                {/* VIDEOS SECTION — commented out
                <section className="video-section">

                    <div className="section-heading">

                        <span>
                            Behind The Scenes
                        </span>

                        <h2>
                            See Our Decorations In Action 🎥
                        </h2>

                        <p>
                            Watch some of our latest decoration setups.
                        </p>

                    </div>

                    <div className="video-grid">
                        {videos.map((video) => (
                            <div
                                className="video-card"
                                key={video.id}
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="video-wrapper">
                                    <video
                                        src={video.src}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        tabIndex={-1}
                                    />
                                    <div className="video-play-overlay">
                                        <span className="video-play-icon">▶</span>
                                    </div>
                                </div>

                                <div className="video-info">
                                    <div className="video-category">
                                        {video.category}
                                    </div>

                                    <h3>
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
                */}

                {/* CTA */}

                <section className="booking-cta">

                    <h2>
                        Planning Your Next Celebration? 🎀
                    </h2>

                    <p>
                        Let us create a beautiful setup for your
                        special occasion.
                    </p>

                    <button
                        className="booking-btn"
                        onClick={() =>
                            window.location.href = "tel:+919220896622"
                        }
                    >
                        📞 Book Decoration Service
                    </button>

                </section>

            </div>

            {/* ── Decoration Detail Card ── */}

            {selectedImage && selectedService && (
                <div
                    className="decoration-modal"
                    onClick={() => {
                        setSelectedImage(null);
                        setSelectedService(null);
                    }}
                >
                    <div
                        className="decoration-detail-card"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            className="decoration-modal-close"
                            onClick={() => {
                                setSelectedImage(null);
                                setSelectedService(null);
                            }}
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div className="decoration-detail-image">
                            <img
                                src={selectedImage}
                                alt={selectedService.title}
                            />
                        </div>

                        {/* Content */}
                        <div className="decoration-detail-content">

                            <div
                                className="decoration-detail-icon"
                                style={{
                                    background: selectedService.bg
                                }}
                            >
                                {selectedService.emoji}
                            </div>

                            <div className="decoration-detail-category">
                                {selectedService.title}
                            </div>

                            <h2>
                                {selectedService.title}
                            </h2>

                            <p>
                                {selectedService.subtitle}
                            </p>

                            <div className="decoration-detail-divider" />

                            <div className="decoration-detail-info">

                                <div>
                                    <span>✨</span>
                                    <strong>Premium Setup</strong>
                                    <small>Beautiful decoration setup</small>
                                </div>

                                <div>
                                    <span>🎨</span>
                                    <strong>Custom Themes</strong>
                                    <small>Choose your preferred theme</small>
                                </div>

                                <div>
                                    <span>🎉</span>
                                    <strong>Special Occasions</strong>
                                    <small>Perfect for your celebration</small>
                                </div>

                            </div>

                            <button
                                className="decoration-book-btn"
                                onClick={() => {
                                    window.location.href =
                                        "tel:+919220896622";
                                }}
                            >
                                📞 Book This Decoration
                            </button>

                        </div>
                    </div>
                </div>
            )}

            {/* VIDEO MODAL — commented out
            {selectedVideo && (
                <div
                    className="decoration-modal video-modal"
                    onClick={closeVideoModal}
                >
                    <div
                        className="video-only-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="decoration-modal-close"
                            onClick={closeVideoModal}
                        >
                            ✕
                        </button>

                        <video
                            ref={modalVideoRef}
                            src={selectedVideo.src}
                            controls
                            playsInline
                            preload="metadata"
                        />
                    </div>
                </div>
            )}
            */}

        </div>
    );
}