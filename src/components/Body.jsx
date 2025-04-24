// src/components/Body.jsx
import React from "react";
import image1 from "../assets/images/image1.jpg";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

const Body = () => {
  return (
    <div className="w-full min-h-screen px-6 py-12 bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-snug">
            Track, Improve & Showcase Your Coding Journey with{" "}
            <span className="text-indigo-400">CodeTracker</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            An all-in-one platform to visualize progress, solve challenges, and stay consistent on your learning path.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition">
            Get Started
          </button>
        </div>
        <div className="shadow-lg rounded-xl overflow-hidden">
          <img src={image1} alt="Code Tracker Demo" className="rounded-xl w-full h-full object-cover" />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            title: "Daily Practice",
            text: "Maintain your coding streak, daily XP and habits.",
            img:  "https://heroui.com/images/hero-card-complete.jpeg",
          },
          {
            title: "Progress Reports",
            text: "Visualize performance over time using elegant charts.",
            img: "https://heroui.com/images/card-bar.png",
          },
          {
            title: "Community Rank",
            text: "Track your standing on the leaderboard globally.",
            img: "https://heroui.com/images/card-pie.png",
          },
        ].map((item, idx) => (
          <Card key={idx} className="shadow-md bg-[#1e293b] text-white">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <p className="text-sm uppercase font-bold text-indigo-400">{item.title}</p>
              <small className="text-sm text-gray-400">{item.text}</small>
            </CardHeader>
            <CardBody className="py-4 flex justify-center">
              <Image
                alt={`${item.title} visual`}
                className="object-cover rounded-xl"
                src={item.img}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Ready to level up your coding journey?</h2>
        <p className="text-lg text-gray-300">
          Join thousands of developers using CodeTracker to become consistent, confident and career-ready!
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition">
          Join the Community
        </button>
      </div>
    </div>
  );
};

export default Body;
