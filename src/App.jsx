import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState } from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import { Leva } from "leva";
import NavBar from "./NavBar.jsx";
import Portfolio from "./BasicPortfolio.jsx";

export default function App() {
  const [develop, setDevelop] = useState(false); // For canvas/3D view
  const [portfolio, setPortfolio] = useState(false); // For traditional portfolio
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check URL hash on mount
    if (window.location.hash === "#develop") {
      setDevelop(true);
      setPortfolio(false);
    } else if (window.location.hash === "#portfolio") {
      setDevelop(false);
      setPortfolio(true);
    }

    // Check if the user prefers dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in the preference
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNavClick = (section) => {
    if (section === "canvas") {
      setDevelop(true);
      setPortfolio(false);
    } else if (section === "portfolio") {
      setDevelop(false);
      setPortfolio(true);
    } else {
      setDevelop(false);
      setPortfolio(false); // Reset to default if not canvas or portfolio
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {(develop || portfolio) && (
        <>
          <Canvas
            className={`transition-all duration-600 ease-linear fixed inset-0 ${
              develop ? "opacity-100" : "opacity-100 pointer-events-none"
            }`}
            id="canvas"
            shadows
            camera={{
              fov: 60,
              near: 0.1,
              far: 500,
              position: [200, 15, 150],
            }}
          >
            <Experience />
          </Canvas>
          <div
            className={`fixed inset-0 transition-transform duration-500 ease-in-out  ${
              portfolio ? "translate-y-0 opacity-90" : "translate-y-full opacity-0 pointer-events-none"
            }`}
            style={{ zIndex: 50 }}
          >
            <div className="absolute inset-0 overflow-y-auto ">
              <Portfolio />
            </div>
          </div>
          <NavBar
            onNavClick={handleNavClick}
            isPortfolioExpanded={portfolio}
            darkMode={isDarkMode}
            onDarkModeToggle={toggleDarkMode}
          />
          <Leva collapsed />
        </>
      )}
      {!develop && !portfolio && <WorkingPlaceholder />}
    </>
  );
}