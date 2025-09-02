import React from 'react';

const HeroWithVideo = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* Mobile Branding Banner */}
      <div className="bg-[#6a0dad] text-white px-4 py-3 flex justify-between items-center md:hidden">
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-2">
          {/* Three-line icon */}
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </div>
          {/* Stylized Brand Name */}
          <h2 className="text-lg font-bold tracking-wide">
            <span className="text-white">ans</span>
            <span className="text-pink-300">hi</span>
            <span className="text-white">ka</span>
          </h2>
        </div>

        {/* Contact Info */}
        <div className="text-xs font-semibold">
          Call <span className="text-yellow-300">9958890093</span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Visuals */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <img
            src="bag.webp"
            alt="Handbag & Accessories"
            className="rounded-lg shadow-lg w-full max-w-xs"
          />
          <img
            src="head.webp"
            alt="Person with Headphones"
            className="rounded-lg shadow-lg w-full max-w-xs"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:col-span-1">
          <h1
            className="font-extrabold leading-snug text-lg sm:text-xl md:text-2xl"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <span className="text-black block text-sm sm:text-base">Best</span>
            <span className="text-black block text-2xl sm:text-3xl md:text-5xl">Institute for</span>
            <span className="text-[#6a0dad] block text-lg sm:text-xl md:text-2xl">Graphic Designing,</span>
            <span className="text-pink-500 block text-lg sm:text-xl md:text-2xl">Digital Marketing</span>
            <span className="text-[#6A0DAD] block text-lg sm:text-xl md:text-2xl">&</span>
            <span className="text-blue-500 block text-lg sm:text-xl md:text-2xl">Video Editing</span>
            <span className="text-black block text-lg sm:text-xl md:text-2xl">Courses in Delhi</span>
          </h1>

          <p
            className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700 px-2"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
          </p>

          <button
            className="mt-8 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group mx-auto"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundImage: "url('bgbtn.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Free Career Counselling
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                <path d="M10 5l7 7-7 7V5z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Right Visual */}
        <div className="space-y-6 flex flex-col items-center md:items-end">
          <img
            src="fe7.webp"
            alt="Model with Flowers"
            className="rounded-lg shadow-lg w-full max-w-xs"
          />
          <div className="text-sm text-center text-[#FFB3D0] font-semibold">
            #FFB3D0
          </div>
        </div>
      </div>

      {/* Video Placeholder Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-xl bg-gray-200 flex items-center justify-center"
          style={{ paddingTop: '56.25%' }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-600 text-lg font-semibold">
            VIDEO AUTO PLAY (Placeholder)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;