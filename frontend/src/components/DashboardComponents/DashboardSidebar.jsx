import React from "react";

const Sidebar = () => {
  return (
    <nav className="fixed h-screen w-64 bg-white border-r border-neutral-200/20 hidden lg:block" id="el-lnvdy2ys">
      <div className="px-6 py-4" id="el-ouvgvtec">
        <h1 className="text-2xl font-bold text-indigo-600" id="el-nco9chi9">SoulBuddy</h1>
      </div>
      <div className="px-2" id="el-qgxw9wsd">
        <a
          href="#dashboard"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all active bg-indigo-50 text-indigo-600"
          id="el-oqoj2qyb"
        >
          Dashboard
        </a>
        <a
          href="#birth-chart"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          id="el-rw186wrl"
        >
          Kundali
        </a>
        <a
          href="#horoscope"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          id="el-vnebzwmq"
        >
          Horoscope
        </a>
        <a
          href="#spiritual"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          id="el-vjblos1h"
        >
          Spiritual
        </a>
        <a
          href="#meditation"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          id="el-v01v4y1t"
        >
          Meditate
        </a>
        <a
          href="#chatbot"
          className="flex items-center px-4 py-2 mb-1 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          id="el-wjp32nno"
        >
          Chat
        </a>
      </div>
      <div className="absolute bottom-0 w-full p-4 border-t border-neutral-200/20" id="el-tfzge5h2">
        <div className="flex items-center gap-3" id="el-taio770z">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="User"
            className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100"
            loading="lazy"
            id="el-so50v6ig"
          />
          <div id="el-nldjaya1">
            <p className="text-sm font-medium text-gray-700" id="el-kfq88efc">John Doe</p>
            <p className="text-xs text-gray-500" id="el-7psyoat8">john@example.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
