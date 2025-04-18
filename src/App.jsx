import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing"; // Import Landing component
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword"; 
import Dashboard from "./pages/Home/Dashboard" ;



function App() {
  return (
    <Router>
      {/* Navbar always shows */}
      <Navbar />

      {/* Route-based rendering */}
      <Routes>
        {/* Landing page shows Header + Hero + Body */}
        <Route path="/" element={<Landing />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Add the route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

      
      </Routes>
    </Router>
  );
}

export default App;
