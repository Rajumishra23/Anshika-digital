import React from "react";

const courses = [
  { title: "Graphic Designing Course", image: "course.webp" },
  { title: "Video Editing Course", image: "course.webp" },
  { title: "Digital Marketing Course", image: "course.webp" },
  { title: "UI/UX Designing Course", image: "course.webp" },
  { title: "Motion Graphics Course", image: "course.webp" },
  { title: "Photography Masterclass", image: "course.webp" },
  { title: "3D Animation Course", image: "course.webp"},
  { title: "Social Media Strategy", image: "course.webp"},
  { title: "Content Writing Course", image: "course.webp" },
  { title: "Branding & Identity Design", image: "course.webp"},
  { title: "Web Development Bootcamp", image: "course.webp"},
  { title: "Illustration & Sketching", image: "course.webp" },
];

const CourseSection = () => {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Select Your <span className="text-purple-600">Course</span>
        </h2>

        {/* Auto-Sliding Container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {courses.concat(courses).map((course, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center w-64 flex-shrink-0"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-220 h-200 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  {course.title}
                </h3>
                <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
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
