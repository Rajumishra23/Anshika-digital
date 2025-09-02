import React from 'react';

const HeroWithVideo = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Visuals */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <img
            src="bag.webp"
            alt="Handbag & Accessories"
            className="rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-xs"
          />
          <img
            src="head.webp"
            alt="Person with Headphones"
            className="rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-xs"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:col-span-1">
          <h1
            className="font-extrabold leading-snug text-base sm:text-lg md:text-2xl space-y-1"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <span className="text-black block text-sm sm:text-base">Best</span>
            <span className="text-black block text-xl sm:text-2xl md:text-4xl">Institute for</span>
            <span className="text-[#6a0dad] block text-base sm:text-lg md:text-xl">Graphic Designing,</span>
            <span className="text-pink-500 block text-base sm:text-lg md:text-xl">Digital Marketing</span>
            <span className="text-[#6A0DAD] block text-base sm:text-lg md:text-xl">&</span>
            <span className="text-blue-500 block text-base sm:text-lg md:text-xl">Video Editing</span>
            <span className="text-black block text-base sm:text-lg md:text-xl">Courses in Delhi</span>
          </h1>

          <p
            className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 px-2"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
          </p>

          <button
            className="mt-6 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group mx-auto"
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
            className="rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-xs"
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
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-600 text-sm sm:text-base font-semibold text-center px-4">
            VIDEO AUTO PLAY (Placeholder)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;