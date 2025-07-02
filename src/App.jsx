import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";
import { useEffect, useState } from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import { Leva } from "leva";
import NavBar from "./NavBar.jsx";
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
import PortfolioHorizontal from "./traditionalPortfolio/BasicPortfolioHorizontal.jsx";
import Shaders from "./Shaders.jsx";
import CameraControls from "./camera/CameraControls";
import ControlsManager from './LevaControls';
import NavigationBar from "./NavigationBar";

export default function App() {

  const [experience, setExperience] = useState(false); // For canvas/3D view
  const [portfolio, setPortfolio] = useState(false); // For traditional portfolio
  const [shaders, setShaders] = useState(false); // For traditional shaders
  // const controls = ControlsManager();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check URL hash on mount
    if (window.location.hash === "#experience") {
      setExperience(true);
      setPortfolio(false);
      setShaders(false);
    } else if (window.location.hash === "#portfolio") {
      setExperience(false);
      setPortfolio(true);
      setShaders(false);
    } else if (window.location.hash === "#shaders") {
      setShaders(true);
      setExperience(false);
      setPortfolio(false);
    }

    // Check if the user prefers dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // setIsDarkMode(mediaQuery.matches);
    setIsDarkMode(true);
    // Listen for changes in the preference
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNavClick = (section) => {
    if (section === "canvas") {
      setExperience(true);
      setPortfolio(false);
      setShaders(false);
    } else if (section === "portfolio") {
      setExperience(false);
      setPortfolio(true);
      setShaders(false);
    } else if (section === "shaders") {
      setExperience(false);
      setPortfolio(false);
      setShaders(true); // Reset to default if not canvas or portfolio
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {(experience || portfolio || shaders) && (
        <>
          {/* <NavBar
                onNavClick={handleNavClick}
                isPortfolioExpanded={portfolio}
                darkMode={isDarkMode}
                onDarkModeToggle={toggleDarkMode}
              /> */}
          <NavigationBar
            onNavClick={handleNavClick}
            isPortfolioExpanded={portfolio}
            isShadersExpanded={shaders}
            isExperienceExpanded={experience}
            darkMode={isDarkMode}
            onDarkModeToggle={toggleDarkMode}
          />
          {(experience) && (
            <>

              <Canvas
                className={`transition-all duration-600 ease-linear fixed inset-0 ${experience ? "opacity-100" : "opacity-100 pointer-events-none"
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
                <Experience
                  darkMode={isDarkMode}
                  onDarkModeToggle={toggleDarkMode}
                />
                {/* <CameraControls controls={controls} /> */}
              </Canvas>
            </>
          )}
          {(!experience && !portfolio && shaders) && (
            <>
              <Canvas
                className={`transition-all duration-600 ease-linear fixed inset-0 ${experience ? "opacity-100" : "opacity-100 pointer-events-none"
                  }`}
                id="canvas"
                shadows
                camera={{
                  fov: 60,
                  near: 0.1,
                  far: 500,
                  position: [0, 2, 10],
                }}
              >
                <Shaders />
              </Canvas>
            </>


          )}
          {(portfolio) && (
            <>
              <div
                className={`fixed inset-0 transition-transform duration-500 ease-in-out  ${portfolio
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0 pointer-events-none"
                  }`}
                style={{ zIndex: 50 }}
              >
                <div className="absolute inset-0 overflow-y-auto ">
                  <PortfolioHorizontal/>
                </div>
              </div>
            </>
          )}


        </>
      )}
      {!experience && !portfolio && !shaders && <WorkingPlaceholder />}
    </>
  );
}
