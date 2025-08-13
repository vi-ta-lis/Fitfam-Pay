export default function ComingSoon() {
  return (
    <>
      <div className="why-card">
        <h1>FitfamPay App is coming soon</h1>
        <p>
          Get ready to transform your fitness journey with our upcoming
          FitfamPay app! We are launching soon on the App Store and Google
          Playsotore. Sign up below to get notified when we launch
        </p>

        <div className="signup-container">
          <div className="signup-inner">
            <form className="signup-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="signup-input"
              />
              <button type="submit" className="signup-button">
                Sign Up for Updates
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
