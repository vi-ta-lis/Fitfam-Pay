import ErrImg from "../assets/404 Error-amico.png";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

function Error() {
  return (
    <div id="error-page">
      <img src={ErrImg} alt="Error img" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/">Go back to Home</NavLink>
      <Footer />
    </div>
  );
}
export default Error;
