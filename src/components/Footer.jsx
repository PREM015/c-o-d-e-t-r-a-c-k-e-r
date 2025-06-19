import React from "react";
import { Link } from "react-router-dom"; // Used for client-side routing without full page reloads

// 🌐 Footer Component: Appears on all pages at the bottom
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 mt-16">
      {/* ✅ Main layout container: 4 columns on medium+ screens, 1 column on small */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* 🧠 Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">CodeTracker</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Track your coding journey and improve daily with personalized insights and progress visualization.
          </p>
        </div>

        {/* 🔗 Quick Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["/home", "/dashboard", "/contact", "/about"].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="text-gray-400 hover:text-indigo-400 hover:underline transition duration-200"
                >
                  {path.replace("/", "").replace("-", " ") || "Home"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔐 Auth/Resource Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            {["/login", "/signup", "/forgot-password"].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="text-gray-400 hover:text-indigo-400 hover:underline transition duration-200"
                >
                  {path.replace("/", "").replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📬 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Email: <a href="mailto:support@codetracker.dev" className="hover:text-indigo-400 transition">support@codetracker.dev</a></li>
            <li>Phone: <span className="hover:text-indigo-400 transition">+91 98765 43210</span></li>
            <li>Location: <span className="hover:text-indigo-400 transition">India</span></li>
          </ul>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">CodeTracker</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
