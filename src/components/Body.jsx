// Body.jsx
import React from "react";
import "../styles/Body.css";
import image1 from "../assets/images/image1.jpg"; // Correctly importing the image

function Body() {
  return (
    <div className="body-container">
      <div className="image-section">
        <img src={image1} alt="CodeTracker" className="image" />
      </div>
      <div className="body-content">
        <h2 className="heading">Welcome to CodeTracker</h2>
        <p className="description">
          This platform helps you track your coding journey efficiently. Join us and level up your skills with a personalized approach!
        </p>
        <div className="button-container">
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
