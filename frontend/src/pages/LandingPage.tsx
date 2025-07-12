import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import ConsentEngine from "../components/Landing/ConsentEngine";
import TechStack from "../components/Landing/TechStack";
import VideoDemo from "../components/Landing/VideoDemo";
import Team from "../components/Landing/Team";
import Footer from "../components/Landing/Footer";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-[#f4f7fa] to-[#eaeef2] text-gray-900 font-[Inter]">
      <Hero />
      <Features />
      <ConsentEngine />
      <TechStack />
      <VideoDemo />
      <Team />
      <Footer />
    </div>
  );
}