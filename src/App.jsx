// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🌍 Landing Page
import Landing from "./components/Landing";

// 🏠 Home Pages
import Home from "./pages/Home/Index";
import Dashboard from "./pages/Home/Dashboard";
import RecentActivity from "./pages/Home/RecentActivity";

// 📄 About Pages
import About from "./pages/About/Index";
import OurVision from "./pages/About/OurVision";
import PlatformDetails from "./pages/About/PlatformDetails";

// 📬 Contact Pages
import Contact from "./pages/Contact/Index";
import EmailUs from "./pages/Contact/EmailUs";
import SupportForum from "./pages/Contact/SupportForum";

// 🔐 Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// 👤 Account Pages (Can be protected later)
import Profile from "./pages/Account/Profile";
import EditProfile from "./pages/Account/EditProfile";
import ChangePassword from "./pages/Account/ChangePassword";

// ❌ Not Found Page
import NotFound from "./pages/NotFound";

// 🎨 Theme + Auth Context
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />

          <Routes>
            {/* 🌍 Landing */}
            <Route path="/" element={<Landing />} />

            {/* 🏠 Home */}
            <Route path="/home" element={<Home />} />
            <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/home/recent-activity" element={<RecentActivity />} />

            {/* 📄 About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/our-vision" element={<OurVision />} />
            <Route path="/about/platform-details" element={<PlatformDetails />} />

            {/* 📬 Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/email-us" element={<EmailUs />} />
            <Route path="/contact/support-forum" element={<SupportForum />} />

            {/* 🔐 Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* 👤 Account */}
            <Route path="/account/profile" element={<Profile />} />
            <Route path="/account/edit-profile" element={<EditProfile />} />
            <Route path="/account/change-password" element={<ChangePassword />} />

            {/* ❌ Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
