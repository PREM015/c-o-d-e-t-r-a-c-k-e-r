import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Home from "./pages/Home/Index";
import Dashboard from "./pages/Home/Dashboard";
import RecentActivity from "./pages/Home/RecentActivity";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* 🌍 Main Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/recent-activity" element={<RecentActivity />} />

          {/* 📄 Static Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔐 Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ❌ 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Global Footer (Always Visible) */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
