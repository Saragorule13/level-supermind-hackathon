import React from "react";

const Sidebar = () => {
  return (
    <nav className="fixed h-screen w-[30vh] bg-white border-r border-neutral-200 hidden lg:block">
      {/* Brand */}
      <div className="p-4 border-b border-neutral-200">
        <h1 className="text-2xl font-bold text-indigo-600">SoulBuddy</h1>
      </div>

      {/* Navigation Links */}
      <div className="py-4">
        <a
          href="#dashboard"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 active"
        >
          <span className="material-icons mr-3">dashboard</span>
        </a>
        <a
          href="#birth_chart"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        >
          <span className="material-icons mr-3">Birth Chart</span>
          
        </a>
        <a
          href="#horoscope"
          className="flex items-center px-4 py-3 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 bg-indigo-50 text-indigo-600"
        >
          <span className="material-icons mr-3">Horoscope</span>
          
        </a>
        <a
          href="#spiritual"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        >
          <span className="material-icons mr-3">Insights</span>
        </a>
        <a
          href="#meditation"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        >
          <span className="material-icons mr-3">Meditation</span>
      
        </a>
        <a
          href="#chat"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        >
          <span className="material-icons mr-3">Chatbot</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
