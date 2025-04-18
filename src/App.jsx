import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing"; // Import Landing component
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";  



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

       

      
      </Routes>
    </Router>
  );
}

export default App;
