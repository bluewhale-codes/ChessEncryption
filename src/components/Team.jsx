import React from "react";

const teamMembers = [
  {
    name: "Vishal Shakya",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/114689405?s=400&u=f1eaaaee58dcd5d07c6aa993fb8cda1d1e3d417d&v=4",
  },
  {
    name: "Rishu",
    role: "AI/ML Engineer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/598803761_2035479967028310_336338257558101916_n.jpg?ccb=11-4&oh=01_Q5Aa3gEZj-vaEHHsuSAZS996Ed-Tie_nTuhuaV2xFRtKq9vIRw&oe=697CE998&_nc_sid=5e03e0&_nc_cat=106",
  },
  {
    name: "Pranya Tiwari",
    role: "UI/UX Developer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/584761403_2397587887362995_2541309544580023844_n.jpg?ccb=11-4&oh=01_Q5Aa3gHu-dTaNhzkP8G54x3lci91h4D8doreU-YZ5fQxSeDGqw&oe=697CEFD9&_nc_sid=5e03e0&_nc_cat=104",
  },
  {
    name: "Rishav",
    role: "Backend Developer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/595397826_1750449185879357_2218176121703144496_n.jpg?ccb=11-4&oh=01_Q5Aa3gF8jxc9JuSyp3oGRjxsM-ic6CJShHTXEKIGOlWQ0TbANg&oe=697D03E6&_nc_sid=5e03e0&_nc_cat=106",
  },
  {
    name: "Ashutosh Thakur",
    role: "AI/ML Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
         
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Meet Our Hackathon Team
          </h2>
          

          <div className="mt-6 flex justify-center gap-4">
            
            <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
              Connect With Us
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 p-4 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-64 w-full rounded-xl object-cover grayscale transition group-hover:grayscale-0"
              />

              <div className="mt-4 rounded-xl bg-white px-4 py-3 shadow">
                <h3 className="text-sm font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
