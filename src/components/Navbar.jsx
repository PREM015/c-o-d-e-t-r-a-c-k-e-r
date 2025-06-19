import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../styles/Navbar.css"; // 👕 Custom CSS styles

function Navbar() {
  const location = useLocation(); // 📍 Get the current route (URL)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 📱 For mobile hamburger menu toggle

  // 🔗 List of top-level navigation items with labels and icons
  const navItems = [
    { label: "Home", path: "/home", icon: "🏠" },
    { label: "About", path: "/about", icon: "ℹ️" },
    { label: "Contact", path: "/contact", icon: "📞" },
    { label: "Login", path: "/login", icon: "🔐" },
  ];

  // 🍔 Toggle hamburger menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* 🌟 Logo and brand name */}
      <Link to="/" className="logo">
        <img src={reactLogo} alt="Logo" className="logo-img" />
        <span className="site-name">CodeTracker</span>
      </Link>

      {/* ☰ Hamburger icon for small screens */}
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* 🧭 Navigation menu - shows when isMenuOpen is true (mobile) */}
      <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        {navItems.map((item, index) => {
          // ✅ Highlight active nav link (based on route)
          const isActive =
            location.pathname === item.path || location.pathname.startsWith(item.path);

          return (
            <div key={index} className="nav-item">
              {/* 🔘 Main Nav Link */}
              <NavLink
                to={item.path}
                className={`nav-button ${isActive ? "active" : ""}`}
              >
                {item.icon} {item.label}
              </NavLink>

              {/* ⬇️ Submenu Dropdown for each section */}
              <div className="dropdown">
                <ul>
                  {item.label === "Home" && (
                    <>
                      <li>
                        <NavLink to="/home/dashboard">📊 Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink to="/home/recent-activity">📁 Recent Activity</NavLink>
                      </li>
                    </>
                  )}

                  {item.label === "About" && (
                    <>
                      <li>
                        <NavLink to="/about/platform-details">🧱 Platform Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about/our-vision">🎯 Our Vision</NavLink>
                      </li>
                    </>
                  )}

                  {item.label === "Contact" && (
                    <>
                      <li>
                        <NavLink to="/contact/email-us">✉️ Email Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact/support-forum">💬 Support Forum</NavLink>
                      </li>
                    </>
                  )}

                  {item.label === "Login" && (
                    <>
                      <li>
                        <NavLink to="/login">🔐 Login</NavLink>
                      </li>
                      <li>
                        <NavLink to="/signup">🆕 Create Account</NavLink>
                      </li>
                      <li>
                        <NavLink to="/forgot-password">❓ Forgot Password</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
