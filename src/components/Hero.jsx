import React from "react";
import { useNavigate } from "react-router-dom";
import herosection from "../assets/images/herosection.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("home/dashboard");
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
            onClick={goToDashboard}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105"
          >
            Explore Dashboard
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative group transition-transform duration-300 transform hover:scale-105">
            <img
              src={herosection}
              className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] max-w-sm border-4 border-blue-500/20"
              alt="Code tracking dashboard preview"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
