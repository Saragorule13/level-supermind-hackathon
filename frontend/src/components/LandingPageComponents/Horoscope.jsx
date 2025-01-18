import React from "react";

const HoroscopeSection = () => {
  return (
    <section id="horoscope" className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4">Daily Horoscope &amp; Birth Chart Analysis</h2>
          <p className="text-xl text-gray-300">
            Discover your cosmic blueprint with our detailed astrological insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Form Section */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-neutral-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Enter Your Birth Details</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time of Birth</label>
                    <input
                      type="time"
                      className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <select className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <input
                      type="text"
                      className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                      placeholder="Your State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                      placeholder="Your City"
                    />
                  </div>
                </div>
                <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  Generate Horoscope
                </button>
              </form>
            </div>
          </div>

          {/* Right Information Section */}
          <div className="animate__animated animate__fadeInRight">
            <div className="space-y-8">
              <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-violet-500/20 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-violet-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">Birth Chart Analysis</h4>
                </div>
                <p className="text-gray-300">
                  Complete analysis of all 12 houses revealing insights about your life path.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-violet-500/20 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-violet-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">Daily Predictions</h4>
                </div>
                <p className="text-gray-300">
                  Personalized daily and monthly horoscope predictions based on your chart.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-violet-500/20 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-violet-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">Detailed Reports</h4>
                </div>
                <p className="text-gray-300">
                  Comprehensive reports on career, relationships, and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeSection;
