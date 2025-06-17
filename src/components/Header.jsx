import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const texts = [
    "Every Problem You Solve Counts.",
    "Consistency Today, Success Tomorrow.",
    "Code Hard, Dream Big.",
    "Your Effort Writes Your Future.",
    "Turn Logic Into Opportunity.",
    "Solve. Learn. Repeat.",
    "You're One Problem Closer to Mastery.",
    "Stay Sharp. Stay Consistent.",
    "Discipline Beats Talent When Talent Lags.",
    "Write Code Like You Mean It.",
    "Small Steps, Big Wins.",
    "Debug Your Limits.",
    "Push Code, Push Boundaries.",
    "Earn Confidence, One Submission at a Time.",
    "Track Progress. Build Greatness.",
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
    navigate("/dashboard"); // <-- Replace with actual route
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
