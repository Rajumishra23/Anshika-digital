import React, { useRef } from "react";

const placedStudents = [
  { name: "Akil", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Akil.webp" },
  { name: "Aman", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Aman.webp" },
  { name: "Amit", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "amit.webp" },
  { name: "Arjun", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "arjun.webp" },
  { name: "Bhavna", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "bhavna.webp" },
  { name: "Mansi", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "mansi.webp" },
  { name: "Karan", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "karan.webp" },
];

const RecentlyPlaced = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Our <span className="text-purple-600">Recently Placed</span> Students
        </h2>

        {/* Wrapper for buttons + slider */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟨
          </button>

          {/* Sliding Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide scroll-smooth px-2 sm:px-10 snap-x"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {placedStudents.map((student, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[220px] bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 sm:p-6 text-center flex-shrink-0 snap-start"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover mb-3 sm:mb-4 border-4 border-purple-300"
                />
                <h3 className="text-base sm:text-lg font-semibold text-purple-800 mb-1 sm:mb-2">
                  {student.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-1">{student.role}</p>
                <p className="text-xs text-gray-500">{student.company}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟩
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPlaced;