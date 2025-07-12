// Landing/Team.tsx
const teamMembers = [
  {
    name: "Bhavik Pahuja",
    role: "👨‍💻 Project Leader & Extension Developer",
    description:
      "Led project vision, developed Chrome Extension, and contributed to frontend & demo.",
  },
  {
    name: "Aditya Pratap Singh",
    role: "🎨 Frontend Developer",
    description:
      "Built the React + TypeScript UI, auth pages, dashboard components, and styling.",
  },
  {
    name: "Ashish Singh",
    role: "🔧 Backend Developer",
    description:
      "Created backend APIs, handled database logic, JWT, and Firebase integration.",
  },
];

export default function Team() {
  return (
    <section className="w-full py-20 bg-[#f3f4f6]">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-[Orbitron] mb-10">👥 Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
