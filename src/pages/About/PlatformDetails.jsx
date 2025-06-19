import React from "react";

// 📦 This component describes features and benefits of the CodeTracker platform
function PlatformDetails() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      
      {/* 🧱 Header Section: Page Title & Description */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">🧱 Platform Details</h1>
        <p className="text-lg text-gray-300">
          CodeTracker is your ultimate companion to help you become a better programmer through structured practice, intelligent insights, and community support.
        </p>
      </div>

      {/* 🧩 Feature Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* 📊 Feature 1: Progress Tracking */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">📊 Progress Tracking</h2>
          <p className="text-gray-300">
            Automatically monitor your solved problems, time spent, difficulty level, and overall accuracy. Stay on top of your learning journey.
          </p>
        </div>

        {/* 📅 Feature 2: Daily Streak System */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">📅 Daily Streak System</h2>
          <p className="text-gray-300">
            Keep your momentum with streak tracking. Earn XP for every consistent coding day and maintain long-term discipline.
          </p>
        </div>

        {/* 📈 Feature 3: Performance Analytics */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">📈 Performance Analytics</h2>
          <p className="text-gray-300">
            Get insights on your strengths and weaknesses through detailed analytics—know exactly where to improve next.
          </p>
        </div>

        {/* 🏆 Feature 4: Leaderboards & Competitions */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">🏆 Leaderboards & Competitions</h2>
          <p className="text-gray-300">
            Compete with peers, climb the leaderboard, and participate in weekly challenges to boost your rank and earn badges.
          </p>
        </div>

        {/* 💼 Feature 5: Project Tracker */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">💼 Project Tracker</h2>
          <p className="text-gray-300">
            Manage your portfolio projects inside CodeTracker. Set milestones, track timelines, and share your work with recruiters.
          </p>
        </div>

        {/* 🌐 Feature 6: Community & Resources */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">🌐 Community & Resources</h2>
          <p className="text-gray-300">
            Engage with a growing developer community, access curated learning resources, and ask for help when stuck.
          </p>
        </div>
      </div>

      {/* ✅ Final CTA Statement */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
          Built for developers, by developers. 💻
        </h3>
        <p className="text-gray-400">
          From beginners to experts, CodeTracker adapts to every journey. Start yours today!
        </p>
      </div>
    </div>
  );
}

export default PlatformDetails;
