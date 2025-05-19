import React from "react";

export default function WorkingPlaceholder() {
  const handleClick = (section) => {
    window.location.hash = section;
    window.location.reload(); // Recarga la página para aplicar el cambio
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-yellow-400">
          We're working hard to bring something amazing!
        </h1>
        <p className="text-xl">
          This page is under construction. Please check back soon!
        </p>
        <div className="space-y-4 space-x-8">
          <img
            src="/imgs/working-on-it.gif"
            alt="Working on it"
            className="mx-auto animate-pulse"
          />
          <button
            onClick={() => handleClick("#portfolio")}
            className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all"
          >
             Portfolio Progress
          </button>
          <button
            onClick={() => handleClick("#shaders")}
            className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all"
          >
             Shaders Gallery
          </button>
          <button
            onClick={() => handleClick("#experience")}
            className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all"
          >
             3D Portfolio Progress
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-8">
          © 2025 Daniel-Echeveste-Developer.
        </p>
      </div>
    </div>
  );
}
