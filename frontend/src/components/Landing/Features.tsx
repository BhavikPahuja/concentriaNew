// Landing/Features.tsx
import { FaLock, FaUserShield, FaEye } from "react-icons/fa";

const features = [
  {
    icon: <FaLock className="text-3xl text-[#00fff7]" />,
    title: "Privacy First",
    description: "Your data is protected with advanced permission logic and transparency.",
  },
  {
    icon: <FaUserShield className="text-3xl text-[#ff4ecd]" />,
    title: "Consent Engine",
    description: "Set rules on how and when your data is shared across services.",
  },
  {
    icon: <FaEye className="text-3xl text-[#c084fc]" />,
    title: "Real-Time Monitoring",
    description: "Track who accesses what in real-time via Chrome Extension.",
  },
];

export default function Features() {
  return (
    <section className="w-full flex items-center py-20 bg-[#f9fafb]">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-[Orbitron] mb-12">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
