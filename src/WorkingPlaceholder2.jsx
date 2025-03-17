import React from "react";

export default function WorkingPlaceholder2() {
  // Single handler function using parameter for better maintainability
  const handleNavigation = (section) => {
    window.location.hash = section;
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="m-auto max-w-2xl px-4 text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 animate-fade-in">
          We're crafting something extraordinary!
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          This page is under active development. Stay tuned!
        </p>
        
        <div className="space-y-6">
          <img
            src="/imgs/working-on-it.gif"
            alt="Under Construction Animation"
            className="mx-auto w-64 h-64 object-contain animate-pulse"
            onError={(e) => {
              e.target.src = "/imgs/fallback-construction.png"; // Fallback image
            }}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigation("#develop")}
              className="px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold
                hover:bg-yellow-500 hover:scale-105 focus:ring-2 focus:ring-yellow-300
                transition-all duration-200"
            >
              3D Portfolio Progress
            </button>
            <button
              onClick={() => handleNavigation("#portfolio")}
              className="px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold
                hover:bg-yellow-500 hover:scale-105 focus:ring-2 focus:ring-yellow-300
                transition-all duration-200"
            >
              Traditional Portfolio
            </button>
          </div>
        </div>

        <footer className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Daniel-Echeveste-Developer
        </footer>
      </div>
    </div>
  );
}