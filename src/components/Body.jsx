import React from "react";
import { Card, CardBody } from "@heroui/react";

// 🖼️ Importing feature and hero section images
const dailypractice = new URL("../assets/images/dailypractice.png", import.meta.url).href;
const progressreport = new URL("../assets/images/progressreport.png", import.meta.url).href;
const communityrank = new URL("../assets/images/communityrank.png", import.meta.url).href;
const heroImage = new URL("../assets/images/herosection.jpg", import.meta.url).href;

const Body = () => {
  // 🔧 Features configuration: title, description, and image
  const features = [
    {
      title: "Daily Practice",
      text: "Maintain your coding streak and track daily XP growth.",
      img: dailypractice,
    },
    {
      title: "Progress Reports",
      text: "Visualize your coding progress with interactive graphs.",
      img: progressreport,
    },
    {
      title: "Community Rank",
      text: "Compare your stats with peers in the global leaderboard.",
      img: communityrank,
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-16 bg-[#0f172a] text-white font-sans">

      {/* 🎨 Custom CSS animation for glowing card effect */}
      <style>
        {`
          @keyframes glow {
            0%   { box-shadow: 0 0 12px #6366f1; }
            25%  { box-shadow: 0 0 12px #10b981; }
            50%  { box-shadow: 0 0 12px #f59e0b; }
            75%  { box-shadow: 0 0 12px #ef4444; }
            100% { box-shadow: 0 0 12px #6366f1; }
          }

          .glow-card {
            animation: glow 3s infinite ease-in-out;
            border-radius: 1rem;
          }
        `}
      </style>

      {/* 🧭 Hero Section - Introduction to the platform */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        {/* Left: Text content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-4">
            Track, Improve & Showcase Your Coding Journey with{" "}
            <span className="text-indigo-500">CodeTracker</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            A complete developer toolkit to stay consistent, solve challenges,
            and visualize your growth in real time.
          </p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition duration-200 rounded-lg font-semibold text-white">
            🚀 Get Started
          </button>
        </div>

        {/* Right: Hero image */}
        <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in-up">
          <img
            src={heroImage}
            alt="Code Tracker Preview"
            className="rounded-xl w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
      </section>

      {/* ⭐ Features Section - Highlight platform capabilities */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <Card
              key={idx}
              className="bg-[#1e293b] glow-card hover:scale-105 transition-transform duration-300"
            >
              <CardBody className="flex flex-col items-center justify-between p-6 h-full text-center">
                {/* Feature image */}
                <img
                  src={item.img}
                  alt={`${item.title} visual`}
                  className="h-36 w-36 object-contain mb-4"
                />
                {/* Feature text */}
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">{item.text}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* 📢 Call-to-Action Section - Encourage user sign-up */}
      <section className="mt-28 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Level Up Your Coding Journey?
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Join 1000+ developers using CodeTracker to build consistency,
          confidence and career-readiness.
        </p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition duration-200 rounded-lg font-semibold text-white">
          🌟 Join the Community
        </button>
      </section>
    </div>
  );
};

export default Body;
