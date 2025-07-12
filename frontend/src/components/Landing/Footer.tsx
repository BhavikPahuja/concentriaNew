// Landing/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#f3f4f6] to-[#eaeef2] py-10 mt-10">
      <div className="w-full mx-auto px-6 text-center text-sm text-gray-600">
        <p className="mb-2">
          Made with 💡 by <span className="font-semibold text-gray-800">The Marvels</span> – Chandigarh University
        </p>
        <p className="mb-2">
          Contact us at:{" "}
          <a
            href="mailto:bhavikpahuja0@gmail.com"
            className="text-[#00bcd4] hover:underline"
          >
            bhavikpahuja0@gmail.com
          </a>
        </p>
        <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} Concentria. All rights reserved.</p>
      </div>
    </footer>
  );
}
