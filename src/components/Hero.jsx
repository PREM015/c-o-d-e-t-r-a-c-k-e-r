import React from "react";
import { useNavigate } from "react-router-dom";
import herosection from "../assets/images/herosection.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("home/dashboard");
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-blue-400 drop-shadow-xl">
            Track. Analyze. Level Up.
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 font-medium leading-relaxed">
            Welcome to <span className="font-semibold text-blue-300">CodeTracker</span> — your
            all-in-one dashboard for coding progress across LeetCode, Codeforces, GitHub, and more.
          </p>
          <button
            onClick={goToDashboard}
            className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105"
          >
            🚀 Explore Dashboard
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative group transition-transform duration-300 transform hover:scale-105">
            <img
              src={herosection}
              className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-full max-w-lg border-4 border-indigo-500/10"
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
