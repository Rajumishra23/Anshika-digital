import React, { useRef } from "react";

const PlacementCompanies = () => {
  const companies = [
    { name: "AANS Infosys", image: "brand.webp" },
    { name: "TechAlpha", image: "taca.webp" },
    { name: "Scorp", image: "scorp.webp" },
    { name: "International Education Overseas", image: "Edu.webp" },
    { name: "TopGro", image: "top.webp" },
    { name: "ND Solutions", image: "N.webp" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // kitna scroll ho
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Some of Our <span className="text-purple-600">Students</span> Got the{" "}
          <span className="text-blue-600">Placement</span> in these{" "}
          <span className="text-green-600">Companies</span>
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-100 z-10"
        >
          ⟨
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-100 z-10"
        >
          ⟩
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-10 scroll-smooth scrollbar-hide mb-10"
        >
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-purple-500"
              />
              <p className="text-gray-700 font-medium text-center">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition text-sm font-semibold mb-4"
        >
          Enroll Now
        </a>

        {/* Contact Info */}
        <div className="text-sm text-gray-600 text-center space-y-1">
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="underline">
              info@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919017654260" className="underline">
              +91 9017654260
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementCompanies;
