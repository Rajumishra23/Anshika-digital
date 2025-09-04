import React from "react";
import { motion } from "framer-motion";
import Demo from "../components/Demo";
import {
  FaBullhorn, FaLaptopCode, FaSearch, FaGoogle, FaFacebookF,
  FaEnvelope, FaFileAlt, FaVideo, FaMobileAlt, FaRegImages,
  FaChartLine, FaPercentage, FaUserShield, FaHandshake,
  FaShoppingCart, FaUserFriends, FaProjectDiagram, FaUserTie
} from "react-icons/fa";
import Footer from "../components/Footer";

const modules = [
  { title: "Introduction of Digital Marketing", icon: <FaBullhorn /> },
  { title: "Website Design & Development", icon: <FaLaptopCode /> },
  { title: "Search Engine Optimization (SEO)", icon: <FaSearch /> },
  { title: "Pay-Per-Click Advertising (PPC)", icon: <FaGoogle /> },
  { title: "Social Media Marketing", icon: <FaFacebookF /> },
  { title: "Email Marketing", icon: <FaEnvelope /> },
  { title: "Content Marketing", icon: <FaFileAlt /> },
  { title: "Video Marketing", icon: <FaVideo /> },
  { title: "Mobile Marketing", icon: <FaMobileAlt /> },
  { title: "Display Marketing", icon: <FaRegImages /> },
  { title: "Analytics & Data Interpretation", icon: <FaChartLine /> },
  { title: "Conversion Rate Optimization", icon: <FaPercentage /> },
  { title: "Online Reputation Management", icon: <FaUserShield /> },
  { title: "Affiliate Marketing", icon: <FaHandshake /> },
  { title: "E-commerce Marketing", icon: <FaShoppingCart /> },
  { title: "Influencer Marketing", icon: <FaUserFriends /> },
  { title: "Digital Strategy & Planning", icon: <FaProjectDiagram /> },
  { title: "Interview Preparation", icon: <FaUserTie /> },
];

const DigitalMarketing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white text-black min-h-[100vh] px-4 pt-8">

      {/* Top Section */}
      <motion.div className="text-center mb-16 max-w-3xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <h1 className="font-extrabold leading-snug space-y-1 text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          <span className="block text-black">Best</span>
          <span className="block text-black">Institute for</span>
          <span className="block text-pink-500">Digital Marketing</span>
          <span className="block text-black">Courses in Delhi</span>
        </h1>

        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed px-2">
          Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
        </p>

        <button
          className="mt-6 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundImage: "url('bgbtn.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Free Career Counselling →
        </button>
      </motion.div>
        <div className="relative overflow-hidden rounded-xl shadow-xl mx-auto" style={{ width: '70%', paddingTop: '45%' }}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            src="/Video/frontvideo2.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

      {/* Demo Section */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Demo />
      </motion.div>

      {/* Middle Section */}
      <motion.div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 mt-20"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src="Digital.webp"
            alt="Anshika Training Session"
            className="w-[36rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center border-2 border-purple-600 rounded-xl p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-4">
            Why Choose Anshika Digital Media?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
            Anshika Digital Media is not just an ordinary training institute — we’re a full-scale advertising agency. This unique position allows us to train our students with a hands-on, industry-level approach, working directly on real client projects.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            By giving learners exposure to actual market demands and professional workflows, we ensure they gain practical skills that employers truly value. As a result, we have a 100% job placement success rate — making our training not just educational, but career-focused.
          </p>

          <button
            className="text-white text-sm sm:text-base md:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundImage: "url('bgbtn.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Enroll Now →
          </button>
        </div>
      </motion.div>

      {/* Curriculum Section */}
      <motion.div className="bg-white text-black py-16 px-4 mt-20 border-2 border-blue-600 rounded-t-3xl"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-600 mb-6">
            50+ Modules of Digital Marketing
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Master every aspect of digital marketing with our industry-leading curriculum. From SEO to AI-driven marketing, we've got it all covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl mb-4 text-blue-500">
                  {React.cloneElement(module.icon, {
                    className: "w-10 h-10 text-blue-500 group-hover:text-cyan-400 transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{module.title}</h3>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Read More »
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <button
              className="text-white text-center text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                backgroundImage: "url('bgbtn.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Download Course Syllabus →
            </button>
          </div>
        </div>
      </motion.div>
      <br></br>
      <Footer/>
    </section>
  );
};

export default DigitalMarketing;
