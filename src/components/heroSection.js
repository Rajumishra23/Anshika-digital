import React from 'react';

const HeroWithVideo = () => {
  return (
    <section className="bg-[#f5f5f5] text-gray-900">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Visuals */}
        <div className="space-y-4">
          <img src="bag.webp" alt="Handbag & Accessories" className="rounded-lg shadow-md" />
          <img src="head.webp" alt="Person with Headphones" className="rounded-lg shadow-md" />
        </div>

        {/* Center Content */}
        <div className="text-center md:col-span-1">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#6a0dad]">
            Best Institute for Graphic Designing, Digital Marketing & Video Editing Courses in Delhi
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
          </p>
          <button className="mt-6 bg-[#6a0dad] text-white px-6 py-2 rounded-full hover:bg-[#5a0099] transition">
            Get Free Career Counselling
          </button>
        </div>

        {/* Right Visual */}
        <div className="space-y-4">
          <img src="fe7.webp" alt="Model with Flowers" className="rounded-lg shadow-md" />
          <div className="text-sm text-center text-[#FFB3D0] font-semibold">#FFB3D0</div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
          {/* 👇 Paste your iframe here 👇 */}
          <iframe
            src="/Video/frontvideo1.mp4"
            title="Institute Promo Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;