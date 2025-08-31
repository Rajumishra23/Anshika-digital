import React from "react";

const DemoSection = () => {
  return (
    <section className="bg-purple-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Online and Offline Classes 
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Demo Form */}
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
              Book Free Demo Session
            </h2>
            <form className="space-y-7 ">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select Course</option>
                <option>Graphic Designing</option>
                <option>Video Editing</option>
                <option>Digital Marketing</option>
                <option>UI/UX Design</option>
                <option>Photography</option>
                <option>3D Animation</option>
              </select>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-800 transition"
              >
                Send OTP
              </button>
            </form>
          </div>

          {/* Right Side: Credentials */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              Become a <span className="text-yellow-300">Professional</span> and Certified
            </h2>
            <p className="mb-6 text-lg">
              ✅ Verified with Multi-Factor  
              <br />
              ✅ Approved with 100% Authenticated
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-purple-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">1.</h3>
                <p>11 Years of excellence in computer education</p>
              </div>
              <div className="bg-purple-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">2.</h3>
                <p>Institute registered Ministry of MSME Govt of India</p>
              </div>
              <div className="bg-purple-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">3.</h3>
                <p>11 Years of excellence in computer education</p>
              </div>
              <div className="bg-purple-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">4.</h3>
                <p>ISO Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
