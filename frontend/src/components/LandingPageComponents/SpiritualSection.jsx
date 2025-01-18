import React from 'react';

const SpiritualContent = () => {
  return (
    <section id="spiritualcontent" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Personalized Spiritual Content</h2>
          <p className="text-xl text-gray-300">Curated content tailored to your spiritual journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Meditation Card */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <div className="bg-violet-500/10 rounded-lg p-4 mb-6">
              <svg className="w-10 h-10 text-violet-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Meditation Guidance</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Personalized meditation techniques
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Guided sessions based on mood
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Progress tracking
              </li>
            </ul>
            <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition duration-300">
              Start Meditation
            </button>
          </div>

          {/* Wellness Routines */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-violet-500/10 rounded-lg p-4 mb-6">
              <svg className="w-10 h-10 text-violet-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Wellness Routines</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Customized workout plans
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Yoga recommendations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Energy balancing exercises
              </li>
            </ul>
            <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition duration-300">
              View Routines
            </button>
          </div>

          {/* Sleep Wellness */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-violet-500/10 rounded-lg p-4 mb-6">
              <svg className="w-10 h-10 text-violet-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Sleep Wellness</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Bedtime meditation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Calming sounds
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-violet-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Sleep cycle analysis
              </li>
            </ul>
            <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition duration-300">
              Explore Sleep Content
            </button>
          </div>
        </div>

        {/* Content Preview */}
        <div className="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeIn">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Daily Spiritual Practice Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-violet-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Morning Meditation</h4>
                  <p className="text-gray-400">10-minute energy alignment</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-violet-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Midday Practice</h4>
                  <p className="text-gray-400">Mindful stretching and journaling</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-violet-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Evening Ritual</h4>
                  <p className="text-gray-400">Guided relaxation for restful sleep</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-violet-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sleep Preparation</h4>
                  <p className="text-gray-400">Soothing sounds and reflection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualContent;
