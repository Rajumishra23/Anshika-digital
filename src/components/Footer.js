import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Career CTA Banner */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Let’s Talk for Career</h2>
            <p className="text-sm">
              Speak with our career counsellors and unlock your path to becoming a creative professional.
            </p>
          </div>
          <a
            href="tel:+91XXXXXXXXXX"
            className="mt-4 md:mt-0 bg-yellow-300 text-purple-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Anshika Digital Media Pvt. Ltd.
            </h3>
            <p className="text-sm">
              Empowering creative careers in digital media, graphic design, marketing & more since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Connect With Us</h4>
            <div className="flex space-x-4 text-white text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 Designify Bigdesign Software technologies. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;