// DigitalMarketing.jsx
import React from "react";
import Footer from "../components/Footer"; // optional

const VideoEditing = () => {
  return (
    <div className="p-6">
      {/* Video Editing Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-600">Video Editing Course</h2>
        <p className="text-gray-700 mb-6">
          Learn professional video editing with industry-standard tools like Adobe Premiere Pro and Final Cut Pro. 
          Master editing techniques, transitions, color grading, and audio editing to create stunning videos.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default VideoEditing;
