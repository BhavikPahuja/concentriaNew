// Landing/ConsentEngine.tsx
export default function ConsentEngine() {
  return (
    <section className="w-full flex items-center justify-center py-20 bg-[#f3f4f6]">
      <div className="w-full mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold font-[Orbitron] mb-10">
          Consent Engine
        </h2>
        <div className="w-auto max-w-9/12 bg-white rounded-2xl p-6 shadow-md text-left font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-auto">
          <pre className="text-gray-700">
            {`if (user.grantsPermission(\"camera\")) {
  allowAccess();
} else {
  denyAccess();
}

track(\"clipboard\").logToDashboard();
limit(\"location\", { frequency: \"onceDaily\" });`}
          </pre>
        </div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          Define and visualize consent rules easily. Our engine ensures
          transparency in how, when, and where your data is accessed or
          restricted.
        </p>
      </div>
    </section>
  );
}
