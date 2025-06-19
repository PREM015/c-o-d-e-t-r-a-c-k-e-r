import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Used to navigate to other pages without reload
import "../styles/Header.css"; // Import external CSS styles for this component

// 🧠 Header Component: Displays a welcome message with typing animation
function Header() {
  // ✨ Motivational phrases to display one-by-one
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

  // 📦 React state to track the current phrase index
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // 🖊️ Text being displayed with typing effect
  const [displayedText, setDisplayedText] = useState("");

  const navigate = useNavigate(); // 🧭 Hook to programmatically navigate between routes

  // 🎯 Typing effect logic: runs every time `currentTextIndex` changes
  useEffect(() => {
    let charIndex = 0; // Start typing from the first character

    const typingInterval = setInterval(() => {
      // Show one more character every 100ms
      if (charIndex <= texts[currentTextIndex].length) {
        setDisplayedText(texts[currentTextIndex].slice(0, charIndex));
        charIndex++;
      } else {
        // After full sentence is typed, wait, then switch to next text
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText(""); // Reset the display
          // Move to next text, loop back to 0 if end is reached
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1000); // 1-second pause before switching text
      }
    }, 100); // Typing speed (milliseconds per character)

    // Clean up the interval to prevent bugs
    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  // 🔁 Button click handler: takes the user to dashboard page
  const handleExplore = () => {
    navigate("/dashboard");
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Main Heading */}
        <h1>Welcome to CodeTracker</h1>

        {/* Dynamic Typing Text */}
        <p className="dynamic-text">
          {displayedText}
          <span className="cursor"></span> {/* Blinking cursor */}
        </p>

        {/* Call-To-Action Button */}
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
