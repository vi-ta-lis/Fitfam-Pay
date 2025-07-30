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
import MapView from "../components/MapView";
import Footer from "../components/Footer";
import { Element } from "react-scroll";
import Fadein from "../components/FadeIn";
import { useState } from "react";
import GymMap from "../components/GymMap";
import { GYMDATA } from "../util/gym";
import GymDetailsCard from "../components/GymDetailsCard";

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locationText, setLocationText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedGym, setSelectedGym] = useState(null);

  const handleSearch = async (query) => {
    if (!query || query.trim() === "") return;

    setLocationText(query);
    setIsLoading(true);
    setSearchResult(GYMDATA); // dummy data from js file
    setHasSearched(true);

    // wait for 2 secs
    setTimeout(() => {
      new Promise((resolve) => resolve(setIsLoading(false)));
    }, 2000);
  };

  const handleGymSelect = (gym) => {
    setSelectedGym(gym);
  };

  return (
    <main>
      <Header />

      <Element name="home">
        <div id="home-container">
          <div>
            <h1>Pay for Gym, flex your gains</h1>
            <h2>Search. Pay. Train.</h2>
            <Input onSearch={handleSearch} />
          </div>
          <div>
            <img src={HomeImg} alt="gym-photo" />
          </div>
        </div>
      </Element>

      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
        }}
      >
        {selectedGym && <GymDetailsCard gym={selectedGym} />}
        {hasSearched && (
          <div style={{ width: "100%" }}>
            <h2>
              Gyms near: <em>{locationText}</em>
            </h2>
            {isLoading && <p>Loading gyms...</p>}
            {!isLoading && searchResult.length === 0 && (
              <p>
                No gyms found near "{locationText}" — maybe try a bigger city or
                check your spelling.
              </p>
            )}
            {!isLoading && searchResult && (
              <GymMap
                key={searchResult}
                gymData={searchResult}
                onGymSelect={handleGymSelect}
              />
            )}
          </div>
        )}
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
              <img src={Track} alt="Track your membership" /> Track your gym
              membership
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
        <TestimonialSlider />
      </Fadein>

      <Footer />
    </main>
  );
}

export default Home;
