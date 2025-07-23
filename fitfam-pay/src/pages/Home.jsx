import Header from "../components/Header";
import Input from "../components/Input";
import HomeImg from "../assets/gym-head.jpg";
import FindGym from "../assets/search-file.gif";
import PayGym from "../assets/money.gif";
import Bolt from "../assets/thunder.gif";
import Gymming from "../assets/weightlifting.gif";
import TheGym from "../assets/gym.gif";
import Track from "../assets/receipt-verification.gif";
import Travel from "../assets/airplane.gif";
import TestimonialSlider from "../components/Testimonials";
import Footer from "../components/Footer";
import { Element } from "react-scroll";
import Fadein from "../components/FadeIn";
function Home() {
  return (
    <main>
      <Header />

      <div>
        <Element name="home">
          <div id="home-container">
            <div>
              <h1>Pay for Gym, flex your gains</h1>
              <h2>Search. Pay. Train.</h2>
              <Input />
            </div>
            <div>
              <img src={HomeImg} alt="gym-photo" />
            </div>
          </div>
        </Element>
      </div>

      <Fadein id="line1">
        <h1 id="line1txt">How it Works</h1>

        <div id="steps">
          <div className="step-card">
            <img src={FindGym} alt="Finding Gym" />
            <h2>Step 1:</h2>
            <h3>Find gyms near your current location or preferred area</h3>
          </div>

          <div className="step-card">
            <img src={PayGym} alt="Paying Gym" />
            <h2>Step 2:</h2>
            <h3>Make secure payments for your gym membership</h3>
          </div>

          <div className="step-card">
            <img src={Gymming} alt="Gymming" />
            <h2>Step 3:</h2>
            <h3>Start training and track your fitness journey</h3>
          </div>
        </div>
      </Fadein>

      <Fadein>
        <div className="why-card">
          <h1>Why Choose Us?</h1>
          <ul>
            <li>
              <img src={Bolt} alt="fast" /> Fast, secure & seamless checkout
            </li>
            <li>
              <img src={TheGym} alt="gym" /> Access to gyms across multiple
              cities
            </li>
            <li>
              <img src={Track} alt="Track your membership" />
              Track your gym membership
            </li>
            <li>
              <img src={Travel} alt="travlers" /> Perfect for travelers,
              students & busy professionals
            </li>
          </ul>
        </div>
      </Fadein>

      <Fadein>
        <div className="why-card">
          <h1>Own a Gym? Let's Partner Up</h1>
          <p>
            Bring more foot traffic to your gym by listing it on our platform.
            Get discovered by new customers in your area - risk free!
          </p>
          <a href="/join">
            <button type="submit">List Your Gym</button>
          </a>
        </div>
      </Fadein>

      <Fadein>
        <div>
          <TestimonialSlider />
        </div>
      </Fadein>

      <div>
        <Footer />
      </div>
    </main>
  );
}
export default Home;

//change search btn to Join now,then as you click on join now it takes you to a page where you sign up/sign in. can search or use current location to search & pay for gyms around.
//  change input to a profile/account/login
