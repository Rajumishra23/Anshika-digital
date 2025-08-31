import React from "react";

const StudentFeedback = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Student <span className="text-purple-600">Feedback</span>
        </h2>

        {/* Video Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Left Panel (Placeholder or Thumbnail) */}
          <div className="bg-black rounded-lg h-64 flex items-center justify-center text-white text-sm">
            Thumbnail / Image
          </div>

          {/* Center Panel (Embedded Video) */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="256"
              src="https://www.youtube.com/embed/YIzzlIoVsTY"
              title="Student Testimonials | Computer Technician Programme"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right Panel (Placeholder or Thumbnail) */}
          <div className="bg-purple-700 rounded-lg h-64 flex items-center justify-center text-white text-sm">
            Thumbnail / Image
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4 4m0 0l4-4m-4 4V4" />
          </svg>
          Download Course Brochure
        </a>
      </div>
    </section>
  );
};

export default StudentFeedback;