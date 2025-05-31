import React from 'react';

function OurVision() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">🌟 Our Vision</h1>
        <p className="text-lg text-gray-300">
          At <span className="font-semibold text-indigo-300">CodeTracker</span>, we believe in empowering developers to grow through consistency, clarity, and community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Vision Card 1 */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">🎯 Purpose-Driven Learning</h3>
          <p className="text-gray-300">
            Our platform is built to guide learners from basics to advanced topics with a clear, structured path tailored to real-world goals.
          </p>
        </div>

        {/* Vision Card 2 */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">🌍 Community-Powered Growth</h3>
          <p className="text-gray-300">
            We envision a connected network of learners helping each other thrive, compete, and celebrate every win—big or small.
          </p>
        </div>

        {/* Vision Card 3 */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">📊 Data-Driven Insights</h3>
          <p className="text-gray-300">
            CodeTracker provides visual progress, actionable feedback, and smart suggestions to help learners focus where it matters most.
          </p>
        </div>

        {/* Vision Card 4 */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">🚀 Preparing Future Developers</h3>
          <p className="text-gray-300">
            Whether it's cracking interviews or building solid portfolios, we aim to prepare every user to become confident and industry-ready.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-2">Together, let’s build a future-ready coding community. 💻</h2>
        <p className="text-gray-400">Your journey starts here. Code daily. Learn deeply. Grow confidently.</p>
      </div>
    </div>
  );
}

export default OurVision;
