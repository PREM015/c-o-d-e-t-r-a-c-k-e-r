// Landing.jsx
import { useRef } from "react";
import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";

function Landing() {
  const bodyRef = useRef(null); // This will point to Body

  return (
    <>
      <Header />
      <Hero scrollToRef={bodyRef} />
      <Body ref={bodyRef} />
    </>
  );
}

export default Landing;
