// Landing.jsx

// React hook to create a reference to a DOM element
import { useRef } from "react";

// Importing components used in the landing page
import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";

function Landing() {
  // 📌 useRef creates a reference to the <Body> section so we can scroll to it
  const bodyRef = useRef(null);

  return (
    <>
      {/* 🔝 Top Banner with animated motivational text */}
      <Header />

      {/* 🚀 Hero section with welcome message and call-to-action
           We're passing the ref so that Hero can scroll to the Body when needed */}
      <Hero scrollToRef={bodyRef} />

      {/* 📦 Main feature section
           We attach the ref here so we can scroll to this element from Hero */}
      <Body ref={bodyRef} />
    </>
  );
}

export default Landing;
