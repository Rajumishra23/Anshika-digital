import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ReviewSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Reviews
        </h2>

        {/* Top Review Logos */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
  {/* Google */}
  <div className="flex items-center gap-2">
    <img
      src="/Image/Asset35.svg"
      alt="Google Review"
      className="w-[180px] h-[60px] object-contain rounded-md shadow"
    />
    <span className="text-black font-semibold text-lg">5.0</span>
  </div>

  {/* Divider */}
  <div className="w-px h-8 bg-gray-400"></div>

  {/* Justdial */}
  <div className="flex items-center gap-2">
    <img
      src="/Image/Asset36.svg"
      alt="Justdial Review"
      className="w-[180px] h-[60px] object-contain rounded-md shadow"
    />
    <span className="text-black font-semibold text-lg">4.9</span>
  </div>
</div>


        {/* Buttons + Icon Dropdown */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 relative">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
            Students Reviews
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
            Student Work
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition">
            Upcoming Batch
          </button>

          {/* Dropdown Icon */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
            >
              <FaChevronDown className="text-gray-700" />
            </button>

            {/* Dropdown Content */}
            {showDropdown && (
              <div className="absolute top-12 right-0 bg-white border rounded-md shadow px-4 py-2 text-sm z-10">
                <span className="text-gray-700 cursor-pointer hover:underline">
                  Learn&nbsp;more
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Expanded Image Section + Software Covered */}
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 mb-10">
  <img
    src="/Image/gOFofM.svg"
    alt="Review Banner"
    className="w-full max-w-[1000px] h-auto object-contain rounded-lg mb-6 mx-auto"
  />

          {/* Software Covered Section Inside Same Box */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Software Covered
          </h3>

        <div className="space-y-6">
  {/* Photoshop */}
<div className="flex items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4">
  <img
    src="/Image/sjcRYS.svg"
    alt="Photoshop"
    className="w-[250px] h-[150px] object-contain mr-4"
  />
  <div className="flex flex-col justify-center">
    <h4 className="text-[30px] font-semibold text-gray-800 leading-tight">
      Photoshop
    </h4>
    <button className="mt-2 inline-block px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition w-auto">
      Read More
    </button>
  </div>
</div>

{/* Premiere Pro */}
<div className="flex flex-row-reverse items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4">
  <img
    src="/Image/ynQkii.svg"
    alt="Premiere Pro"
    className="w-[250px] h-[150px] object-contain ml-4"
  />
  <div className="flex flex-col justify-center text-right">
    <h4 className="text-[30px] font-semibold text-gray-800 leading-tight">
      Premiere Pro
    </h4>
    <button className="mt-2 inline-block px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition w-auto">
      Read More
    </button>
  </div>
</div>

{/* After Effects */}
<div className="flex items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4">
  <img
    src="/Image/VrybWN.svg"
    alt="After Effects"
    className="w-[250px] h-[150px] object-contain mr-4"
  />
  <div className="flex flex-col justify-center">
    <h4 className="text-[30px] font-semibold text-gray-800 leading-tight">
      After Effects
    </h4>
    <button className="mt-2 inline-block px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition w-auto">
      Read More
    </button>
  </div>
</div>

</div>


        </div>
      </div>
    </section>
  );
};

export default ReviewSection;