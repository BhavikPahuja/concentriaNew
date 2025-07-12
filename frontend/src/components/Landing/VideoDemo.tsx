// Landing/VideoDemo.tsx
export default function VideoDemo() {
  return (
    <section className="w-full py-20 bg-[#f9fafb]">
      <div className="w-full mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold font-[Orbitron] mb-10">
          📽️ Intro Video
        </h2>
        <div className="relative w-full max-w-11/12 h-auto mx-auto rounded-2xl overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/RoitOTJOT1w?si=I5Xh7kE5oyIzflCh"
            title="Intro to Concentria"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Introducing Concentria, the platform that revolutionizes how you
          manage your data privacy. Watch our trailer to see it in action.
        </p>
      </div>
    </section>
  );
}