import Header from "../components/Header";
import Footer from "../components/Footer";

function SignIn() {
  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Sign In</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign In</button>
            <a id="text" href="/resetpassword">
              Forgot pasword?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
