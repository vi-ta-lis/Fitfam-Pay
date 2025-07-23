import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/ChatGPT_Image_Jul_6__2025__03_44_02_PM-removebg-preview.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Logo} alt="Fitfam Pay Logo" />
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>FitfamPay</h2>
          </a>
        </div>

        <div className="footer-links">
          <NavLink to="/about">About</NavLink>
          <Link to="home" smooth={true} duration={700}>
            Find Gyms
          </Link>
          <NavLink to="/join">Join</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FitfamPay. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
