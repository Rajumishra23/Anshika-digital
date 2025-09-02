import React from "react";

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
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Select Your <span className="text-purple-600">Course</span>
        </h2>

        {/* Auto-Sliding Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div
            className="flex gap-4 sm:gap-6 px-2 sm:px-0 animate-scroll snap-x"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {courses.concat(courses).map((course, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center min-w-[220px] sm:min-w-[256px] flex-shrink-0 snap-start"
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