import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#6a0dad] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-start">
        {/* ✅ Hamburger (Mobile Only - Left) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden mr-3 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>

        {/* ✅ Logo + Tagline (Center in mobile, left in desktop) */}
        <div className="flex flex-col items-center md:items-start flex-grow md:flex-grow-0">
          <div className="relative flex items-center">
            <h1 className="text-xl font-bold leading-tight text-white relative z-10">
              an<span className="relative z-10">sh</span>
              <span className="relative z-10">ika</span>
            </h1>
            <div className="absolute left-[28px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 z-0"></div>
          </div>
          <p className="text-xs text-white/80">Digital Media Pvt. Ltd.</p>
        </div>

        {/* ✅ Call Number (Right) */}
        <div className="ml-auto md:hidden">
          <span className="text-sm font-semibold">
            Call <span className="text-yellow-300">9958890093</span>
          </span>
        </div>

        {/* ✅ Desktop Search + Nav */}
        <div className="hidden md:flex flex-1 mx-6 items-center bg-[#6a0dad] border border-white/30 rounded-full px-3 py-1">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
            />
          </svg>
        </div>

        {/* ✅ Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <div className="relative group">
              <button className="hover:underline flex items-center">
                Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-40 hidden group-hover:block z-10">
                <a href="#web" className="block px-4 py-2 hover:bg-gray-100">
                  Graphic Designing
                </a>
                <a href="#uiux" className="block px-4 py-2 hover:bg-gray-100">
                  Video Editing
                </a>
                <a href="#frontend" className="block px-4 py-2 hover:bg-gray-100">
                  Digital Marketing
                </a>
              </div>
            </div>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>

          <button className="ml-4 bg-white text-[#6a0dad] font-semibold px-4 py-1 rounded-full hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#6a0dad] px-4 pb-4 space-y-2 text-sm font-medium">
          <a href="#about" className="block py-2 border-b border-white/20">About</a>
          <details className="group">
            <summary className="py-2 cursor-pointer border-b border-white/20">Courses</summary>
            <div className="pl-4 space-y-1 mt-1">
              <a href="#web" className="block">Graphic Designing</a>
              <a href="#uiux" className="block">Video Editing</a>
              <a href="#frontend" className="block">Digital Marketing</a>
            </div>
          </details>
          <a href="#contact" className="block py-2 border-b border-white/20">Contact</a>
          <button className="w-full bg-white text-[#6a0dad] font-semibold py-2 rounded-full mt-2">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
