import React from "react";
import { Link } from "react-router-dom";
// import { useUserData } from "../hooks/useUserData"; // Assuming you have a hook to fetch user data

const Dashboard = () => {
  const { userStats, recentActivity, rankInfo } = useUserData();

  return (
    <div className="dashboard">
      <div className="user-info">
        <h2>Welcome, {userStats.username}</h2>
        <p>Rank: {rankInfo.rank}</p>
        <p>Streak: {userStats.streak} days</p>
      </div>

      <div className="stats">
        <h3>Stats</h3>
        <p>Total Problems Solved: {userStats.totalSolved}</p>
        <p>Accuracy: {userStats.accuracy}%</p>
        <p>Average Solving Time: {userStats.avgTime}</p>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivity.map((activity, idx) => (
            <li key={idx}>
              {activity.problem} - {activity.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <p>Your Rank: {rankInfo.rank}</p>
        <Link to="/leaderboard">View Full Leaderboard</Link>
      </div>

      <div className="contests">
        <h3>Upcoming Contests</h3>
        <ul>
          {rankInfo.contests.map((contest, idx) => (
            <li key={idx}>{contest.name} - {contest.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
