import Header from "../components/Header";
import Footer from "../components/Footer";

function SignUp() {
  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Sign Up</h1>
          <form>
            <label htmlFor="username">Full Name:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" id="password" name="password" required />
            <p>
              Already have an account?
              <a id="text" href="/signin">
                Sign in
              </a>
            </p>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignUp;
