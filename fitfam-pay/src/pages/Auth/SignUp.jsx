import React, { useState, useEffect } from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [strength, setStrength] = useState({ level: "", color: "" });
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Strong password regex
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

  const checkStrength = (password) => {
    if (!password) return setStrength({ level: "", color: "" });

    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[@$!%*?#&_]/.test(password)) score++;

    if (score <= 2) setStrength({ level: "Weak", color: "#ef4444" }); // red
    else if (score === 3 || score === 4)
      setStrength({ level: "Medium", color: "#f97316" }); // orange
    else if (score >= 5) setStrength({ level: "Strong", color: "#22c55e" }); // green
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim() || formData.username.length < 3) {
      newErrors.username =
        "Full Name must be at least 3 characters long and contain only letters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
      newErrors.username = "Full Name can only contain letters and spaces.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!strongPassword.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Auto-check validity whenever inputs change
  useEffect(() => {
    setIsFormValid(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      checkStrength(value);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // 🚀 Simulate backend request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("✅ Sign up successful!");
      // TODO: Send formData to backend here
    } catch (err) {
      alert("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="username">Full Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.username && touched.username ? "error" : ""}
              placeholder="Enter your full name"
              required
            />
            {touched.username && errors.username && (
              <p className="error-text">{errors.username}</p>
            )}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "error" : ""}
              placeholder="Enter a valid email"
              required
            />
            {touched.email && errors.email && (
              <p className="error-text">{errors.email}</p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? "error" : ""}
              placeholder="At least 8 characters"
              required
            />
            {/* Password strength bar */}
            {formData.password && (
              <div className="strength-bar">
                <div
                  className="strength-fill"
                  style={{ backgroundColor: strength.color }}
                ></div>
              </div>
            )}
            {strength.level && (
              <p className="strength-text" style={{ color: strength.color }}>
                {strength.level}
              </p>
            )}
            {touched.password && errors.password && (
              <p className="error-text">{errors.password}</p>
            )}

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword ? "error" : ""
              }
              placeholder="Re-enter your password"
              required
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}

            <p>
              Already have an account?{" "}
              <a id="text" href="/signin">
                Sign in
              </a>
            </p>
            <button type="submit" disabled={!isFormValid || loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
