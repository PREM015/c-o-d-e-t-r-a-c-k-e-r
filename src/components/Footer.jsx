import React from "react";
import { Link } from "react-router-dom"; // Used to link to different pages without reloading

// 🌐 Footer Component: Visible at the bottom of all pages
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 mt-10 hover:text-blue-600">
      {/* 📦 Main container with 4 columns on medium screens, 1 column on mobile */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 🧠 Brand Info Section */}
        <div>
          {/* App Name */}
          <h2 className="text-xl font-bold text-indigo-400">CodeTracker</h2>
          {/* Short brand description */}
          <p className="mt-2 text-sm text-gray-400">
            Track your coding journey and improve daily with personalized insights.
          </p>
        </div>

        {/* ⚡ Quick Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {/* Use <Link> to navigate between pages without reloading the app */}
            <li><Link to="/home" className="hover:text-white">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* 📚 Resource Links (Authentication-related pages) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/signup" className="hover:text-white">Signup</Link></li>
            <li><Link to="/forgot-password" className="hover:text-white">Forgot Password</Link></li>
          </ul>
        </div>

        {/* ☎️ Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@codetracker.dev</p>
          <p className="text-sm mt-1">Phone: +91 98765 43210</p>
          <p className="text-sm mt-1">Location: India</p>
        </div>
      </div>

      {/* 🔻 Footer Bottom: Copyright text */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        {/* Show the current year automatically */}
        &copy; {new Date().getFullYear()} CodeTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
