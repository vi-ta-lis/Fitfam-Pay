import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Contact.css";
function Contact() {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #4c1d95, #6b21a8)",
          color: "white",
          padding: "2rem 1rem",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            height: "70vh",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Left Half */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "2rem",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ fontSize: "7rem", margin: 0, lineHeight: "1" }}>Hello.</h1>
            <p style={{ fontSize: "1.5rem", marginTop: "1rem", maxWidth: "400px" }}>
              Need to get in touch? We're all ears.
            </p>
          </div>

          {/* Right Half - Black Male Image */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "2rem",
            }}
          >
            <img
  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  alt="Friendly Black Male"
  className="contact-img"
  style={{
    maxWidth: "100%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  }}
/>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "2rem",
            borderRadius: "16px",
            width: "90%",
            maxWidth: "450px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Us</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Reach out for inquiries, partnerships, or feedback.
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "0.8rem",
                backgroundColor: "#9333ea",
                border: "none",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
