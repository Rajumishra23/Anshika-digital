import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const StudentFeedback = () => {
  const [showForm, setShowForm] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    if (!accepted) {
      alert("Please accept the terms before submitting.");
      return;
    }
    alert("Form submitted successfully!");
    setShowForm(false);
    setCaptchaValue(null);
    setAccepted(false);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Student <span className="text-purple-600">Feedback</span>
        </h2>

        {/* Video Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-black rounded-lg h-64 flex items-center justify-center text-white text-sm">
            Thumbnail / Image
          </div>
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
          <div className="bg-purple-700 rounded-lg h-64 flex items-center justify-center text-white text-sm">
            Thumbnail / Image
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm font-semibold"
        >
          Download Course Brochure
        </button>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>
              <h3 className="text-xl font-semibold mb-4">Download Brochure</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border px-3 py-2 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="border px-3 py-2 rounded-md"
                />

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>

                {/* I Accept Checkbox */}
                <label className="flex items-center gap-2 mt-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="h-4 w-4"
                  />
                  I accept the terms and conditions
                </label>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentFeedback;
