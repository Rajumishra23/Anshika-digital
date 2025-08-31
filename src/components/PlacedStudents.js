import React, { useEffect, useRef } from "react";

const placedStudents = [
  {
    name: "Akil",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "Akil.webp",
  },
  {
    name: "Aman",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "Aman.webp",
  },
  {
    name: "Amit",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "amit.webp",
  },
  {
    name: "Arjun",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "arjun.webp",
  },
  {
    name: "Bhavna",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "bhavna.webp",
  },
  {
    name: "Mansi",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "mansi.webp",
  },
  {
    name: "Karan",
    role: "Graphic Designer",
    company: "Adwemy Motor Pvt. Ltd.",
    image: "karan.webp",
  },
];

const RecentlyPlaced = () => {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll function
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our <span className="text-purple-600">Recently Placed</span> Students
        </h2>

        {/* Wrapper for buttons + slider */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟨
          </button>

          {/* Sliding Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-10"
          >
            {placedStudents.map((student, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center flex-shrink-0"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-purple-300"
                />
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-700 mb-1">{student.role}</p>
                <p className="text-xs text-gray-500">{student.company}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟩
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPlaced;
