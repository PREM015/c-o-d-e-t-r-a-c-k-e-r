import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Navbar component
import Landing from "./components/Landing";  // Landing page component
import Home from "./pages/Home/Index";  // Home page component
import About from "./pages/About/Index";  // About page component
import Contact from "./pages/Contact/Index";  // Contact page component
import Login from "./pages/Auth/Login";  // Login page component
import Signup from "./pages/Auth/Signup";  // Signup page component
import ForgotPassword from "./pages/Auth/ForgotPassword";  // Forgot password page
import Dashboard from "./pages/Home/Dashboard";  // Dashboard page component
import NotFound from "./pages/NotFound";  // 404 page for unmatched routes
import { ThemeProvider } from './contexts/ThemeContext';  // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Navbar always shows */}
        <Navbar />

        {/* Route-based rendering */}
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Catch-all fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
