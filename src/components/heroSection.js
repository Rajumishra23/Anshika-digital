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
            className="hidden md:block rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-xs"
          />
          <img
            src="head.webp"
            alt="Person with Headphones"
            className="hidden md:block rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-xs"
          />
        </div>

        {/* Center Content */}
        <div className="text-center text-3xl md:col-span-1">
          <h1
            className="font-extrabold leading-snug space-y-1"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <span className="block text-3xl sm:text-4xl md:text-4xl text-black">Best</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-black">Institute for</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-[#6a0dad]">Graphic Designing,</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-pink-500">Digital Marketing</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-[#6A0DAD]">&</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-blue-500">Video Editing</span>
            <span className="block text-2xl sm:text-3xl md:text-3xl text-black">Courses in Delhi</span>
          </h1>

          <p
            className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 px-2"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
          </p>

          <button
            className="mt-6 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundImage: "url('bgbtn.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Free Career Counselling →
          </button>

          {/* Stable Dropdown */}
          <div className="relative mt-6 inline-block text-left group">
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Digital Marketing</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Graphic Designing</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Video Editing</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
              </ul>
            </div>
          </div>
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

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="relative overflow-hidden rounded-xl shadow-xl mx-auto" style={{ width: '70%', paddingTop: '45%' }}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            src="/Video/frontvideo2.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;
