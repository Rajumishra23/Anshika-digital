import React from "react";

const founders = [
  {
    name: "Ankit KK",
    image: "ankit.webp",
  },
  {
    name: "Anshika Kumar Kushwaha",
    image: "sulekha.webp",
  },
];

const InstituteIntro = () => {
  return (
    <section className="bg-white-to-r from-purple-700 via-purple-600 to-purple-500 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Right: Founder Images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {founders.map((person, index) => (
            <div
              key={index}
              className="border-4 border-purple-300 rounded-full overflow-hidden w-40 h-40 shadow-lg"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
         {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Building Creative Careers Since <span className="text-yellow-300">2018</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            <strong>Anshika Digital Media</strong> is a Pvt. Ltd. company and a leading training institute for Digital Marketing, Graphic Designing, UI/UX, and Video Editing. Established in 2018 by <strong>Ankit KK</strong>, the company has grown into a hub for creative professionals.
          </p>
          <p className="mb-6 text-sm text-black-100">
            <strong>Anshika Kumar Kushwaha</strong> brings 12+ years of hands-on experience in Graphic Design and Video Editing. He has worked with top-tier agencies and led campaigns for:
          </p>
          <ul className="list-disc list-inside text-sm text-black-100 space-y-1">
            <li>Indian Oil, GAIL, ONGC, NHPC, Income Tax, PNB</li>
            <li>Maruti, Campus Shoes, Delhi Metro, IRCTC</li>
            <li>12+ Years of Excellence in Design & Education</li>
          </ul>
          <button className="mt-6 bg-yellow-300 text-purple-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstituteIntro;