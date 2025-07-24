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
import axios from "axios";

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
    setSearchResult([]);
    setHasSearched(true);

    try {
      // 1. Get coordinates of search query
      const geoResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );

      if (!geoResponse.data || geoResponse.data.length === 0) {
        console.warn("No location found!");
        setSearchResult([]);
        setIsLoading(false);
        return;
      }

      const lat = geoResponse.data[0].lat;
      const lon = geoResponse.data[0].lon;
      console.log("Coordinates:", { lat, lon });

      // 2. Fetch gyms near the coordinates using Mapbox
      const mapboxResponse = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?proximity=${lon},${lat}&limit=10&access_token=pk.eyJ1Ijoia2Fvc2ktYW5pa3dlIiwiYSI6ImNtZGhyeWRjcjA0ZGkya3F5eDVodzN6cDkifQ.RC6HClU7sKj0sb-o0SRiuQ`
      );

      const gyms = mapboxResponse.data.features.map((feature) => ({
        name: feature.text || "Unnamed Gym",
        address: feature.place_name || "No address",
        lat: feature.geometry.coordinates[1],
        lon: feature.geometry.coordinates[0],
      }));

      console.log("Parsed gyms:", gyms);

      setSearchResult(gyms);
    } catch (error) {
      console.error("Error fetching gyms:", error);
      setSearchResult([]);
    }

    setIsLoading(false);
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

      <div style={{ padding: "1rem" }}>
        {hasSearched && (
          <>
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
           <ul style={{ listStyle: "none", padding: 0 }}>
  {searchResult.map((gym, index) => (
    <li
      key={index}
      onClick={() => setSelectedGym(gym)}
      style={{
        margin: "1rem 0",
        padding: "1rem",
        borderRadius: "8px",
        background: "#f3f3f3",
        color: "#333",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <strong>{gym.name}</strong>
      <br />
      <small>{gym.address}</small>
    </li>
  ))}
</ul>


            {selectedGym && selectedGym.lat && selectedGym.lon && (
              <MapView lat={selectedGym.lat} lon={selectedGym.lon} />
            )}
          </>
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
