import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResetPass() {
  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Reset Password</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Reset Password</button>
          </form>
        </div>
      </div>
        <Footer />
    </>
  );
}
