function Index() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">About CodeTracker</h2>
        <p className="text-lg text-gray-300">
          CodeTracker is more than just a platform—it's your coding companion. Whether you're preparing for coding interviews, brushing up your DSA skills, or simply tracking progress, we've got you covered.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
        <div className="bg-[#1e293b] p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-indigo-400">🎯 Our Mission</h3>
          <p className="text-gray-300">
            To empower aspiring developers by providing a centralized platform to learn, practice, and master programming through consistent daily tracking and personalized content.
          </p>
        </div>
        <div className="bg-[#1e293b] p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-indigo-400">🚀 Our Vision</h3>
          <p className="text-gray-300">
            We envision a world where every developer has access to the right tools and insights to grow into the best version of themselves.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-indigo-400 mb-8">Core Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📈",
              title: "Progress Tracking",
              desc: "Monitor your daily coding activity, streaks, and submissions over time.",
            },
            {
              icon: "🧠",
              title: "Learning Roadmaps",
              desc: "Follow curated DSA and development paths with recommended problems.",
            },
            {
              icon: "🏆",
              title: "Global Ranking",
              desc: "See how you stack up with others through a competitive leaderboard.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="mt-24 text-center">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
          Built by developers, for developers.
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At CodeTracker, we understand the challenges of staying consistent with learning. Our goal is to make the process engaging, insightful, and rewarding.
        </p>
      </section>
    </div>
  );
}

export default Index;
