import Header from "../components/Header";
import Input from "../components/Input";
import HomeImg from "../assets/gym-1.png";

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
    </main>
  );
}
export default Home;

//change search btn to Join now,then as you click on join now it takes you to a page where you sign up/sign in. can search or use current location to search & pay for gyms around.
//  change input to a profile/account/login
