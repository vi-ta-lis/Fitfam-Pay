import Header from "../components/Header";

function SignIn() {
  return (
    <>
      <Header />
      <div id="auth-container">
        <div id="form-box">
          <h1>Sign In</h1>
          <form>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignIn;
