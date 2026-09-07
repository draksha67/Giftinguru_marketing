export default function ContactModal({ onClose }) {
  return (
    <div
      className="contact-modal-bg"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "rgba(0,0,0,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        className="contact-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "32px 28px 24px",
          maxWidth: "360px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,.22)",
          position: "relative",
          fontFamily: "'Poppins', 'Segoe UI', sans-serif",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "14px",
            background: "#f3f4f6",
            border: "none",
            borderRadius: "8px",
            width: "28px",
            height: "28px",
            fontSize: "14px",
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>

        <div style={{ fontSize: "40px", marginBottom: "12px" }}>
          🎀
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: "800",
            color: "#111827",
            margin: "0 0 8px",
          }}
        >
          Contact Us to Plan
          <br />
          Your Event With Us
        </h3>

        <p
          style={{
            color: "#6b7280",
            fontSize: "13px",
            lineHeight: 1.65,
            margin: "0 0 18px",
          }}
        >
          Reach out to our team and let's bring your celebration to life!
        </p>

        <div
          style={{
            background: "#FFF4EC",
            border: "1.5px solid #fed7aa",
            borderRadius: "12px",
            padding: "14px 16px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#9ca3af",
              margin: "0 0 5px",
              fontWeight: "600",
              letterSpacing: ".05em",
              textTransform: "uppercase",
            }}
          >
            📞 Call / WhatsApp
          </p>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "800",
              color: "#f97316",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            +91 92208 96622
          </p>
        </div>
      </div>
    </div>
  );
}