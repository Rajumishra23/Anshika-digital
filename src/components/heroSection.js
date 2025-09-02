import React from 'react';

const HeroWithVideo = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Visuals */}
        <div className="space-y-6">
          <img
            src="bag.webp"
            alt="Handbag & Accessories"
            className="rounded-lg shadow-lg"
          />
          <img
            src="head.webp"
            alt="Person with Headphones"
            className="rounded-lg shadow-lg"
          />
        </div>

      {/* Center Content */}
<div className="text-center md:col-span-1">
  <h1
    className="font-extrabold leading-snug"
    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
  >
    <span className="text-black text-sm md:text-base">Best </span>
    <span className="text-black text-3xl md:text-5xl">Institute for </span>
    <span className="text-[#6a0dad] text-lg md:text-2xl">
      Graphic Designing,
    </span>{" "}
    <span className="text-pink-500 text-lg md:text-2xl">
      Digital Marketing
    </span>{" "}
    <span className="text-[#6A0DAD] text-lg md:text-2xl">&</span>{" "}
    <span className="text-blue-500 text-lg md:text-2xl">
      Video Editing
    </span>{" "}
    <span className="text-black-500 text-lg md:text-2xl">
      Courses in Delhi
    </span>
  </h1>


  <p
    className="mt-5 text-[18px] leading-relaxed text-gray-700"
    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
  >
    Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
  </p>
<button
  className="mt-8 text-white text-[16px] font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
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
        <div className="space-y-6">
          <img
            src="fe7.webp"
            alt="Model with Flowers"
            className="rounded-lg shadow-lg"
          />
          <div className="text-sm text-center text-[#FFB3D0] font-semibold">
            #FFB3D0
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-xl"
          style={{ paddingTop: '56.25%' }}
        >
          <video
            src="/Video/frontvideo1.mp4"
            title="Institute Promo Video"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWithVideo;