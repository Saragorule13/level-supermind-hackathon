import React from "react";

const DashboardHome = () => {
  return (
    <section id="dashboard" className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Horoscope Card */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-purple-700">Daily Horoscope</h3>
            <span className="text-sm text-neutral-500">Today</span>
          </div>
          <p className="text-neutral-600 mb-4">
            Your spiritual energy is aligned with success today. Focus on meditation and inner peace.
          </p>
          <a href="#horoscope" className="text-purple-600 text-sm hover:text-purple-700 transition-colors">
            View Full Horoscope →
          </a>
        </div>

        {/* Meditation Timer */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-purple-700">Daily Meditation</h3>
            <span className="text-sm text-neutral-500">20 mins</span>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-purple-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-700">20:00</span>
            </div>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Start Session
          </button>
        </div>

        {/* Gemstone Recommendation */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-purple-700 mb-4">Recommended Gemstone</h3>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Blue Sapphire</h4>
              <p className="text-sm text-neutral-500">For Saturn's Influence</p>
            </div>
          </div>
          <a href="#recommendations" className="text-purple-600 text-sm hover:text-purple-700 transition-colors">
            View Details →
          </a>
        </div>

        {/* Upcoming Rituals */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-purple-700 mb-4">Today's Rituals</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-neutral-600">Morning Meditation - 6:00 AM</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-neutral-600">Evening Prayer - 6:30 PM</span>
            </li>
          </ul>
        </div>

        {/* Birth Chart Overview */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-purple-700 mb-4">Birth Chart Highlights</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-600">Rising Sign</span>
              <span className="font-medium">Leo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Moon Sign</span>
              <span className="font-medium">Pisces</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Sun Sign</span>
              <span className="font-medium">Virgo</span>
            </div>
          </div>
          <a
            href="#birthchart"
            className="mt-4 inline-block text-purple-600 text-sm hover:text-purple-700 transition-colors"
          >
            View Full Chart →
          </a>
        </div>

        {/* AI Chat Quick Access */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-purple-700 mb-4">Spiritual Guide</h3>
          <div className="bg-purple-50 rounded-lg p-4 mb-4">
            <p className="text-neutral-600 text-sm">
              Ask me anything about your spiritual journey or daily guidance.
            </p>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Start Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
