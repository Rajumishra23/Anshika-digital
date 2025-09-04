import React, { useRef } from "react";

const courses = [
  { title: "Graphic Designing Course", image: "course.webp" },
  { title: "Video Editing Course", image: "course.webp" },
  { title: "Digital Marketing Course", image: "course.webp" },
  { title: "UI/UX Designing Course", image: "course.webp" },
  { title: "Motion Graphics Course", image: "course.webp" },
  { title: "Photography Masterclass", image: "course.webp" },
  { title: "3D Animation Course", image: "course.webp" },
  { title: "Social Media Strategy", image: "course.webp" },
  { title: "Content Writing Course", image: "course.webp" },
  { title: "Branding & Identity Design", image: "course.webp" },
  { title: "Web Development Bootcamp", image: "course.webp" },
  { title: "Illustration & Sketching", image: "course.webp" },
];

const CourseSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left flex-1">
    Select Your <span className="text-purple-600">Course</span>
  </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
            >
              ◀
            </button>
            <button
              onClick={scrollRight}
              className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Courses Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-xl shadow-md transition duration-300 p-4 inline-flex flex-col items-center text-center min-w-[220px] sm:min-w-[256px]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 sm:h-40 object-contain mb-4"
                />
                <h3 className="text-sm sm:text-base font-semibold text-purple-800 mb-2">
                  {course.title}
                </h3>
                <button className="mt-auto bg-purple-600 text-white text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition">
                  Download Brochure
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;