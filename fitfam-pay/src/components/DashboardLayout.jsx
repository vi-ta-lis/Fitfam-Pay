import Logo from "../assets/ChatGPT_Image_Jul_6__2025__03_44_02_PM-removebg-preview.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";

function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav id="nav-container">
          <div id="logo">
            <NavLink to="/dashboardlayout">
              <img src={Logo} alt="Fitfam Pay logo" />
            </NavLink>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
          </div>

          <div id="nav" className={menuOpen ? "open" : ""}>
            <ul>
              <li>
                <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/subscribers" onClick={() => setMenuOpen(false)}>
                  Active Subscribers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expiredmembers"
                  onClick={() => setMenuOpen(false)}
                >
                  Expired Subscribers
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Dashboard />
    </div>
  );
}

export default DashboardLayout;
