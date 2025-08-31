import React from "react";

const teamMembers = [
  {
    name: "Ankit KK",
    role: "Founder",
    image: "Ankit.webp",
  },
  {
    name: "Sulekha",
    role: "Founder",
    image: "sulekha.webp",
  },
  {
    name: "Pooja",
    role: "Admin Dept.",
    image: "pooja1.webp",
  },
  {
    name: "Ananya Mukhi",
    role: "HR",
    image: "Ananya.webp",
  },
];

const CreativeTeam = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet Our <span className="text-purple-600">Creative Team</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-400">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-700 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;