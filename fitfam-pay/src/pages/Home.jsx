import Header from "../components/Header";
import Input from "../components/Input";
import HomeImg from "../assets/gym-1.png";
import FindGym from "../assets/magnifyglass_11303180.png";
import PayGym from "../assets/credit-card.png";
import Gymming from "../assets/weight-lifting.png";

function Home() {
  return (
    <main>
      <Header />
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

      <div id="line1">
        <h1>How it Works</h1>

        <div id="steps">
          <div>
            <img src={FindGym} alt="Finding Gym" />
            <h2>Step 1:</h2>
            <h3>Find gyms near your current location or preferred area</h3>
          </div>

          <div>
            <img src={PayGym} alt="Finding Gym" />
            <h2>Step 2:</h2>
            <h3>Find gyms near your current location or preferred area</h3>
          </div>
          <div>
            <img src={Gymming} alt="Finding Gym" />
            <h2>Step 3:</h2>
            <h3>Find gyms near your current location or preferred area</h3>
          </div>
        </div>
      </div>
      <div id="line1">
        <h1>Why Choose Us?</h1>
      </div>
      <div id="line1">
        <h1>Own a Gym? Let's Partner Up</h1>
      </div>
      <div id="line1">
        <h1>Loved By Gym Goers</h1>
      </div>
    </main>
  );
}
export default Home;

//change search btn to Join now,then as you click on join now it takes you to a page where you sign up/sign in. can search or use current location to search & pay for gyms around.
//  change input to a profile/account/login
