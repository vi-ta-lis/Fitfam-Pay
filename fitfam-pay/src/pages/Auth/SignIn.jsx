import { useState, useEffect } from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic
  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check form validity on input change
  useEffect(() => {
    setIsFormValid(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("✅ Sign in successful!");
      // TODO: redirect or set auth state
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} noValidate>
            {errors.form && <p className="error-text">{errors.form}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "error" : ""}
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
            />
            {touched.password && errors.password && (
              <p className="error-text">{errors.password}</p>
            )}

            <button type="submit" disabled={!isFormValid || loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <a id="text" href="/resetpassword">
              Forgot password?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
