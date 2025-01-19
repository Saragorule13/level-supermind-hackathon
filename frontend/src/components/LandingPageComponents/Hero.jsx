import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

const Hero = () => {

  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const handleNavigate = (route) => {
    if (isSignedIn) {
      navigate(route);
    } else {
      navigate('/sign-in');
    }
  };


  return (
    <BackgroundBeamsWithCollision>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Hero Text and Buttons */}
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-violet-500">AI-Powered</span> Spiritual Guidance for Your Soul
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Discover personalized spiritual insights through advanced astrology and numerology. Let our AI guide you on your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>handleNavigate('/chatbot')} className="bg-violet-500 hover:bg-violet-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Chat with AI
              </button>
              <button onClick={()=>handleNavigate('/dashboard')} className="border border-violet-500 hover:bg-violet-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Dashboard
              </button>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 opacity-75 blur"></div>
              <div className="relative bg-neutral-800 rounded-lg p-8">
                <div className="space-y-6">
                  {/* Personalized Insights Feature */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Personalized Insights</h3>
                      <p className="text-gray-400">Based on your birth details</p>
                    </div>
                  </div>

                  {/* Daily Horoscopes Feature */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Daily Horoscopes</h3>
                      <p className="text-gray-400">Accurate predictions</p>
                    </div>
                  </div>

                  {/* AI Recommendations Feature */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Recommendations</h3>
                      <p className="text-gray-400">Customized spiritual guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-800 to-transparent"></div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
