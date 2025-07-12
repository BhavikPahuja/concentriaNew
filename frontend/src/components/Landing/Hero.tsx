import { Link } from "react-router-dom";

// Landing/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full h-screen flex justify-center items-center py-20 bg-gradient-to-br from-yellow-200 via-[#f4f7fa] to-yellow-100">
      <div className="w-full mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold font-[Orbitron] text-gray-900 mb-6">
          Welcome to <span className="text-[#00fff7]">Concentria</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          The futuristic platform that puts <span className="text-[#ff4ecd] font-semibold">your data</span> under your control.
        </p>
        <Link to="/dashboard" className="px-6 py-3 text-white font-semibold border-2 border-[#00fff7] rounded-xl hover:bg-[#00fff7] hover:text-gray-900 transition-all duration-300">
          🚀 Get Started
        </Link>
      </div>
    </section>
  );
}