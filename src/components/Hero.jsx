// Hero.jsx
import React, { useRef } from "react";
import "../styles/Hero.css"; // Import the CSS file for styling

const Hero = () => {
  const bodySectionRef = useRef(null); // Create a reference to the body section

  const scrollToBody = () => {
    // Scroll smoothly to the body section
    bodySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to CodeTracker</h1>
        <p className="hero-description">
          Track your coding progress and conquer new challenges with ease.
        </p>
        <button className="cta-button" onClick={scrollToBody}>
          Start Coding
        </button>
      </div>
    </section>
  );
};

export default Hero;
