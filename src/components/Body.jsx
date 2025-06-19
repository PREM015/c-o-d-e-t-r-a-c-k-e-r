// src/components/Body.jsx
import React from "react";
import heroImage from "../assets/images/herosection.jpg"; // Hero section image
import dailypractice from "../assets/images/dailypractice.png";
import progressreport from "../assets/images/progressreport.png";
import CommunityRank from "../assets/images/communityrank.png";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";

const Body = () => {
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
      img: CommunityRank,
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-16 bg-[#0f172a] text-white font-sans">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
        <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in-up">
          <img
            src={heroImage}
            alt="Code Tracker Preview"
            className="rounded-xl w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
      </section>

      {/* 🔹 Features */}
      <section className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <Card
              key={idx}
              className="bg-[#1e293b] hover:shadow-xl transition-all duration-300 border border-indigo-500/10"
            >
              <CardHeader className="pb-2 pt-4 px-5">
                <p className="uppercase text-indigo-400 text-sm font-bold">
                  {item.title}
                </p>
                <small className="text-gray-400">{item.text}</small>
              </CardHeader>
              <CardBody className="flex justify-center p-4">
                <Image
                  alt={`${item.title} visual`}
                  className="rounded-xl object-cover"
                  src={item.img}
                  width={270}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="mt-28 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Level Up Your Coding Journey?
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Join 1000+ developers using CodeTracker to build consistency, confidence and career-readiness.
        </p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition duration-200 rounded-lg font-semibold text-white">
          🌟 Join the Community
        </button>
      </section>
    </div>
  );
};

export default Body;
