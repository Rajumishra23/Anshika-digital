import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const courseHighlights = [
  {
    title: "100% Job Placement",
    subtitle: "Assistance after Course Completion",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Career Opportunities:",
    subtitle: [
      "Corporate Companies, MNCs",
      "News Channels, YouTubers",
      "Gaming Industry",
      "Ad Agencies & more",
    ],
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Course Duration:",
    subtitle: "3-4 Months",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Class Timings:",
    subtitle: "1.5 Hours",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Fees",
    subtitle: [
      "One Time Submit",
      "Extra Discount",
      "EMI also Available",
      "3–6 Months",
    ],
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Alternative Days Class",
    subtitle: ["M W F", "M W F"],
    bg: "/Image/Asset32.svg",
  },
];

export default function CourseHighlight() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth + 16;
      const { scrollLeft } = sliderRef.current;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 relative">
      {/* Heading + Arrows */}
      <div className="flex justify-center items-center mb-5 relative">
        <h2 className="text-black text-2xl sm:text-3xl font-bold">Course Highlight</h2>
        <div className="absolute right-0 flex gap-2">
          <button
            className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>
          <button
            className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
      >
        {courseHighlights.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[90vw] sm:min-w-[400px] md:min-w-[500px] flex-shrink-0 rounded-lg px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-8 text-center text-white flex flex-col justify-center items-center overflow-hidden"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
            }}
          >
            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight z-10">
              {item.title}
            </h3>

            {/* Subtitle */}
            {Array.isArray(item.subtitle) ? (
              <div className="space-y-1 z-10">
                {item.subtitle.map((line, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-lg md:text-xl font-medium leading-snug tracking-wide"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-base sm:text-lg md:text-xl font-medium leading-snug tracking-wide z-10">
                {item.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}