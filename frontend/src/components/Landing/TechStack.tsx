// Landing/TechStack.tsx
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGooglechrome,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <SiReact />, color: "bg-[#e0f7fa] text-[#007b8f]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "bg-[#e3f2fd] text-[#1565c0]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-[#f1f8e9] text-[#33691e]" },
  { name: "Firebase", icon: <SiFirebase />, color: "bg-[#fff3e0] text-[#ef6c00]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "bg-[#e8f5e9] text-[#2e7d32]" },
  { name: "Express.js", icon: <SiExpress />, color: "bg-[#ede7f6] text-[#512da8]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "bg-[#f0f4c3] text-[#827717]" },
  { name: "Extension", icon: <SiGooglechrome />, color: "bg-[#fce4ec] text-[#c2185b]" },
];

export default function TechStack() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-[Orbitron] mb-10">Tech Stack</h2>
        <div className="ml-10 grid grid-cols-2 gap-y-10 gap-x-4 lg:gap-y-20 lg:gap-x-30 mt-10">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className={`w-9/12 flex items-center gap-2 px-4 py-2 rounded-full hover:scale-110 hover:shadow-2xl cursor-pointer transition-all duration-300 font-medium lg:text-4xl shadow-sm ${tech.color}`}
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
