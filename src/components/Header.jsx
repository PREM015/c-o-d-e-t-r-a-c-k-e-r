import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const texts = [
    "Master Data Structures & Algorithms.",
    "Prepare for Coding Interviews.",
    "Track Your Daily Progress.",
    "Build Amazing Projects with Confidence.",
    "Achieve Your Dream Tech Job.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= texts[currentTextIndex].length) {
        setDisplayedText(texts[currentTextIndex].slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText("");
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  const handleExplore = () => {
    navigate("");
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to CodeTracker</h1>
        <p className="dynamic-text">
          {displayedText}
          <span className="cursor"></span>
        </p>
        <div className="button-container">
          <button className="explore-button" onClick={handleExplore}>
            Explore Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
