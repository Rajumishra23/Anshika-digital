import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#6a0dad] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start space-y-1">
          <div className="relative">
            <h1 className="text-xl font-bold leading-tight text-white">
              an<span className="relative z-10">sh</span>
              <span className="relative z-10">ika</span>
            </h1>
            <div className="absolute top-0 left-[28px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 z-0"></div>
          </div>
          <p className="text-xs text-white/80 ml-1">Digital Media Pvt. Ltd.</p>
        </div>

        {/* Search Bar with Purple Background */}
        <div className="flex-1 mx-6 hidden md:flex items-center bg-[#6a0dad] border border-white/30 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 text-sm text-white placeholder-white/80 bg-transparent outline-none"
            aria-label="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-7 text-white/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
          </svg>
        </div>

        {/* Nav Links + Sign In */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
              About
            </a>
            <div className="relative group">
              <button
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-40 hidden group-hover:block z-10">
                <a href="#web" className="block px-4 py-2 hover:bg-gray-100">Graphic Designing</a>
                <a href="#uiux" className="block px-4 py-2 hover:bg-gray-100">Video Editing</a>
                <a href="#frontend" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</a>
              </div>
            </div>
            <a href="#contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <button
            className="ml-4 bg-white text-[#6a0dad] font-semibold px-4 py-1 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;