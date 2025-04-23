import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const activities = [
  { problem: "Two Sum", status: "Solved", time: "2 hours ago" },
  { problem: "Palindrome Check", status: "Failed", time: "5 hours ago" },
  { problem: "Zig-Zag Traversal", status: "Solved", time: "1 day ago" },
  { problem: "Min Steps to One", status: "Failed", time: "2 days ago" },
];

function RecentActivity() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">🕒 Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition"
          >
            {/* Problem Info */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{activity.problem}</span>
              <span className="text-sm text-slate-400 flex items-center gap-1">
                <FaClock className="text-yellow-400" />
                {activity.time}
              </span>
            </div>

            {/* Status Badge */}
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1
                ${activity.status === "Solved"
                  ? "bg-green-600 text-green-100"
                  : "bg-red-600 text-red-100"}
              `}
            >
              {activity.status === "Solved" ? (
                <FaCheckCircle />
              ) : (
                <FaTimesCircle />
              )}
              {activity.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
