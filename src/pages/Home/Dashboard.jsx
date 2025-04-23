import React from "react";
import { Link } from "react-router-dom";
import { FaMedal, FaCheckCircle, FaTimesCircle, FaBolt, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const userStats = {
    username: "Prem015",
    totalSolved: 325,
    streak: 12,
    accuracy: 87,
    avgTime: "35m",
  };

  const recentActivity = [
    { problem: "Problem 1", status: "Solved" },
    { problem: "Problem 2", status: "Failed" },
    { problem: "Problem 3", status: "Solved" },
  ];

  const rankInfo = {
    rank: "Gold",
    contests: [
      { name: "Contest 1", date: "2025-04-25" },
      { name: "Contest 2", date: "2025-05-05" },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen p-6 text-slate-100">
      {/* Header */}
      <div className="text-center space-y-1 mb-8">
        <h1 className="text-4xl font-bold tracking-wide text-blue-400 drop-shadow-lg">Welcome, {userStats.username}</h1>
        <p className="text-xl text-slate-300">🏅 Rank: <span className="text-yellow-400 font-semibold">{rankInfo.rank}</span></p>
        <p className="text-lg text-slate-400">🔥 Streak: {userStats.streak} days</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-700 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition">
          <FaCheckCircle className="mx-auto text-green-400 text-3xl mb-2" />
          <p className="text-xl font-semibold">{userStats.totalSolved}</p>
          <p className="text-sm text-slate-300">Total Solved</p>
        </div>
        <div className="bg-slate-700 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition">
          <FaChartLine className="mx-auto text-cyan-400 text-3xl mb-2" />
          <p className="text-xl font-semibold">{userStats.accuracy}%</p>
          <p className="text-sm text-slate-300">Accuracy</p>
        </div>
        <div className="bg-slate-700 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition">
          <FaBolt className="mx-auto text-yellow-300 text-3xl mb-2" />
          <p className="text-xl font-semibold">{userStats.avgTime}</p>
          <p className="text-sm text-slate-300">Avg Time</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">📊 Recent Activity</h2>
        <ul className="space-y-3">
          {recentActivity.map((item, i) => (
            <li key={i} className="flex justify-between items-center text-lg border-b border-slate-700 pb-2">
              <span>{item.problem}</span>
              <span className={`font-semibold flex items-center gap-2 ${item.status === "Solved" ? "text-green-400" : "text-red-400"}`}>
                {item.status === "Solved" ? <FaCheckCircle /> : <FaTimesCircle />}
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Leaderboard */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">🏆 Leaderboard</h2>
        <p className="mb-2 text-lg">Current Rank: <span className="text-yellow-400 font-medium">{rankInfo.rank}</span></p>
        <Link to="/leaderboard" className="text-blue-400 hover:underline font-semibold">
          View Full Leaderboard →
        </Link>
      </div>

      {/* Contests */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">📅 Upcoming Contests</h2>
        <ul className="space-y-2 text-lg">
          {rankInfo.contests.map((contest, i) => (
            <li key={i} className="text-slate-200">
              <span className="font-medium text-white">{contest.name}</span> — <span className="text-slate-400">{contest.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
