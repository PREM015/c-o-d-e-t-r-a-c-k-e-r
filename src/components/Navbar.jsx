import { NavLink, Link, useLocation } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation(); // Get current route

  const navItems = [
    { label: "Home", path: "/home", icon: "🏠" },
    { label: "About", path: "/about", icon: "ℹ️" },
    { label: "Contact", path: "/contact", icon: "📞" },
    { label: "Login", path: "/login", icon: "🔐" },
  ];

  return (
    <nav className="navbar">
      {/* Logo and Site Name */}
      <Link to="/" className="logo">
        <img src={reactLogo} alt="Logo" className="logo-img" />
        <span className="site-name">CodeTracker</span>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        {navItems.map((item, index) => {
          // Check if current route is either the exact path or any child path
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);

          return (
            <div key={index} className="nav-item">
              <NavLink
                to={item.path}
                className={`nav-button ${isActive ? "active" : ""}`}
              >
                {item.icon} {item.label}
              </NavLink>

              {/* Dropdown Menu */}
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
