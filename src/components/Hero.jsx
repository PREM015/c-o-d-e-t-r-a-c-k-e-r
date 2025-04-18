import React from "react";

const Hero = ({ scrollToRef }) => {
  const scrollToBody = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 text-white px-6 py-12">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-screen-lg mx-auto">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-blue-400 drop-shadow-xl">
            Track. Analyze. Level Up.
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 font-medium leading-relaxed tracking-wide">
            Welcome to <span className="font-semibold text-blue-300">CodeTracker</span> — your
            all-in-one dashboard for coding progress across platforms like LeetCode, Codeforces,
            GitHub, and more. Visualize growth, maintain streaks, and share achievements, all in one
            place.
          </p>
          <button
            onClick={scrollToBody}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105"
          >
            Explore Dashboard
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="rounded-2xl shadow-2xl w-auto max-w-md"
            alt="Code tracking dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
