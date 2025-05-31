import { Link } from "react-router-dom";
import image from "../../assets/images/image1.jpg"; // Replace with your own image

function Home() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-indigo-500">CodeTracker</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Track your daily progress, practice problems, build your profile, and level up your DSA & development journey.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              to="/home/dashboard"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold transition"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg text-white font-medium transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt="Illustration"
            className="rounded-xl shadow-xl w-full object-cover max-h-[400px]"
          />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="mt-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "📊 Track Progress",
            desc: "See your daily problem-solving streak, accuracy, and submission history.",
          },
          {
            title: "🧠 Learn DSA",
            desc: "Built-in roadmap and curated challenges to master Data Structures & Algorithms.",
          },
          {
            title: "🏆 Get Ranked",
            desc: "Compete in contests, view your leaderboard rank, and earn badges.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-28 text-center">
        <h2 className="text-3xl font-bold">Start building your coding journey today</h2>
        <p className="mt-2 text-gray-400">Join hundreds of developers leveling up with CodeTracker.</p>
        <Link
          to="/signup"
          className="inline-block mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition"
        >
          Create Your Free Account
        </Link>
      </section>
    </div>
  );
}

export default Home;
