import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../styles/Navbar.css";
import { useAuth } from "../contexts/AuthContext"; // 🔑 Import auth context
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth(); // 🔐 Access current user
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const navItems = [
    { label: "Home", path: "/home", icon: "🏠" },
    { label: "About", path: "/about", icon: "ℹ️" },
    { label: "Contact", path: "/contact", icon: "📞" },
    ...(!user
      ? [{ label: "Login", path: "/login", icon: "🔐" }]
      : [{ label: "Account", path: "/account/profile", icon: "👤" }]),
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={reactLogo} alt="Logo" className="logo-img" />
        <span className="site-name">CodeTracker</span>
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Items */}
      <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        {navItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path);

          return (
            <div key={index} className="nav-item">
              <NavLink
                to={item.path}
                className={`nav-button ${isActive ? "active" : ""}`}
              >
                {item.icon} {item.label}
              </NavLink>

              {/* Dropdown Submenus */}
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

                  {!user && item.label === "Login" && (
                    <>
                      <li>
                        <NavLink to="/signup">🆕 Create Account</NavLink>
                      </li>
                      <li>
                        <NavLink to="/forgot-password">❓ Forgot Password</NavLink>
                      </li>
                    </>
                  )}

                  {user && item.label === "Account" && (
                    <>
                      <li>
                        <NavLink to="/account/edit-profile">📝 Edit Profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/account/change-password">🔒 Change Password</NavLink>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="logout-btn">🚪 Logout</button>
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
