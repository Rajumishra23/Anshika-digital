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
              Speak with our career counsellors and unlock your path to becoming
              a creative professional.
            </p>
          </div>
          <a
            href="tel:+919958890093"
            className="mt-4 md:mt-0 bg-yellow-300 text-purple-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ✅ Logo + Company Info */}
          <div>
            <div className="relative inline-block mb-3">
              <h1 className="text-2xl font-bold leading-tight text-white relative z-10">
                an<span className="relative z-10">sh</span>
                <span className="relative z-10">ika</span>
              </h1>
              <div className="absolute top-0 left-[28px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 z-0"></div>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Digital Media Pvt. Ltd.
            </p>
            <p className="text-sm">
              Empowering creative careers in digital media, graphic design,
              marketing & more since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-md font-semibold text-white mb-2">
              Connect With Us
            </h4>
            <div className="flex space-x-4 text-white text-lg">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 Anshika Digital Media Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
