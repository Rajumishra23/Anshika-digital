import React from "react";
import { motion } from "framer-motion";

import Footer from "../components/Footer";

const About = () => {
  return (
    <div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-gray-700 text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to Anshika Digital! We provide high-quality courses in Graphic Designing, Video Editing, Digital Marketing, and more. Our mission is to help students gain practical skills and achieve career growth.
        </motion.p>

        <br />

        {/* Animated Video Section */}
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-xl mx-auto w-full max-w-3xl sm:max-w-4xl md:max-w-5xl"
          style={{ width: '80%', paddingTop: '45%' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            src="/Video/frontvideo2.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
