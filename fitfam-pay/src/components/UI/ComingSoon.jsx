import React, { useState } from "react";
import App from "../../assets/health.gif";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    // ✅ strong email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate API request (replace with real backend call)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail(""); // clear input after success
    }, 2000);
  };

  return (
    <section className="coming-soon">
      <div className="coming-soon-content">
        <h1 className="coming-title">
          <img src={App} alt="gym-app" /> FitfamPay App is Coming Soon!
        </h1>
        <p className="coming-text">
          Get ready to transform your fitness journey with our upcoming{" "}
          <strong>FitfamPay app</strong>! We’re launching soon on the{" "}
          <span>App Store</span> and <span>Google Play Store</span>. Sign up
          below to get notified when we launch.
        </p>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Enter your email"
            className={`signup-input ${error ? "error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Please wait..." : "Notify Me"}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}
        {success && (
          <p className="success-text">✅ You’ll be notified when we launch!</p>
        )}
      </div>
    </section>
  );
}
