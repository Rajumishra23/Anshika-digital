import React from "react";
import { motion } from "framer-motion";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

// Dummy software logos — replace with actual image paths
const softwares = [
  { name: "Adobe Illustrator", short: "Ai", gradient: "from-orange-500 to-purple-600", logo: "ai.png" },
  { name: "Adobe Photoshop", short: "Ps", gradient: "from-blue-900 to-black", logo: "ps.png" },
  { name: "Adobe InDesign", short: "Id", gradient: "from-pink-500 to-red-500", logo: "id.png" },
  { name: "CorelDRAW", short: "Corel", gradient: "from-green-500 to-teal-500", logo: "cd.png" },
];

const GraphicDesigning = () => {
  return (
    <section className="bg-white text-black min-h-[100vh] px-4 pt-8">
      {/* Top Section */}
      <motion.div
        className="text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-extrabold leading-snug space-y-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <span className="block text-black">Best</span>
          <span className="block text-black">Institute for</span>
          <span className="block text-indigo-500">Graphic Designing</span>
          <span className="block text-black">Courses in Delhi</span>
        </h1>

        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
        </p>

        <button
          className="mt-6 text-white text-sm sm:text-base md:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundImage: "url('bgbtn.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Free Career Counselling →
        </button>

        {/* Animated Video Section */}
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-xl mx-auto mt-8 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl"
          style={{width:"80%", paddingTop: "45%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            src="/Video/frontvideo2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Demo />
      </motion.div>

      {/* Software Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-6 px-2">
          Become a Professional Graphic Designer in 4 Software
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-2 sm:px-4">
          {softwares.map((software, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 text-white shadow-lg flex flex-col items-center justify-center bg-gradient-to-br ${software.gradient} transition-transform transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={software.logo}
                alt={software.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{software.name}</h3>
              <button className="bg-black text-white text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Read More »
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </section>
  );
};

export default GraphicDesigning;
