import React, { useState } from "react";

const courses = ["Graphic Designing", "Video Editing", "Digital Marketing"];
const upcomingBatches = {
  "Graphic Designing": [
    {
      title: "Graphic Design - Morning (Weekday)",
      batchStart: "17 July, August",
      time: "Morning 11:00",
      mode: "Offline and Online (Hybrid)",
    },
    {
      title: "Graphic Design - Weekend",
      batchStart: "17 July, August",
      time: "Evening 4:00 PM",
      mode: "Offline Only",
    },
    {
      title: "Graphic Design - Morning (Weekday)",
      batchStart: "17 July, August",
      time: "Morning 11:00",
      mode: "Offline and Online (Hybrid)",
    },
  ],
  "Video Editing": [
    {
      title: "Video Editing - Weekend",
      batchStart: "24 August",
      time: "Evening 5:00 PM",
      mode: "Offline Only",
    },
    {
      title: "Video Editing - Weekday",
      batchStart: "26 August",
      time: "Morning 10:00 AM",
      mode: "Online Only",
    },
  ],
  "Digital Marketing": [
    {
      title: "Digital Marketing - Morning (Weekday)",
      batchStart: "1 September",
      time: "Morning 9:30 AM",
      mode: "Offline and Online (Hybrid)",
    },
    {
      title: "Digital Marketing - Weekend",
      batchStart: "7 September",
      time: "Evening 6:00 PM",
      mode: "Offline Only",
    },
  ],
};

const UpcomingBatches = () => {
  const [selectedCourse, setSelectedCourse] = useState("Graphic Designing");

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Upcoming <span className="text-purple-600">Batches</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                selectedCourse === course
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Batch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {upcomingBatches[selectedCourse].length > 0 ? (
            upcomingBatches[selectedCourse].map((batch, index) => (
              <div
                key={index}
                className={`border rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition duration-300 text-left ${
                  batch.title.includes("Weekend")
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-purple-200 bg-purple-50"
                }`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 mb-2">
                  {batch.title}
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Batch Start:</strong> {batch.batchStart}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Time:</strong> {batch.time}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Class Mode:</strong> {batch.mode}
                </p>
                <button className="bg-purple-600 text-white text-sm sm:text-base px-4 py-2 rounded hover:bg-purple-700 transition w-full">
                  Enroll Now →
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No batches available for {selectedCourse} yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;