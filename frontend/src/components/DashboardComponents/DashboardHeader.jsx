import React, { useState, useRef, useEffect } from "react";
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { signOut } = useClerk();
  const navigate = useNavigate();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-10 bg-neutral-900 border-b border-neutral-200/20 px-6 py-4" id="el-q0w35w3l">
      <div className="flex items-center justify-between" id="el-ac2mmji5">
        <h2 className="text-xl font-semibold text-white" id="el-lfo7gfy5">Dashboard</h2>
        <div className="flex items-center gap-4" id="el-5xfudyiq">
          <button className="p-2 text-white hover:text-gray-900" id="el-sglr6qfo">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="el-7go2oqwf"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                id="el-07cxcslv"
              ></path>
            </svg>
          </button>
          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center gap-2" 
              id="el-g1tenzfg"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img 
                src="https://avatar.iran.liara.run/public" 
                alt="Profile" 
                className="w-8 h-8 rounded-full transition-opacity duration-300 opacity-100" 
                loading="lazy" 
                id="el-sfajirc9" 
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-neutral-700 transition-colors"
                    role="menuitem"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
