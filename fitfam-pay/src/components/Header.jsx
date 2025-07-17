import Logo from "../assets/ChatGPT_Image_Jul_6__2025__03_44_02_PM-removebg-preview.png";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav id="nav-container">
        <div id="logo">
          <NavLink to="/">
            <img src={Logo} alt="Fitfam Pay logo" />
          </NavLink>
        </div>

        <div id="nav">
          <ul>
            <li>
              <NavLink to="/join">Join Now</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
