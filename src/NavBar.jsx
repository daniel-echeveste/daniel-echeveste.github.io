import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cameraIntro, cameraToShaders, lookDown, lookBack, lookUp } from "./camera/CameraControls";

const NavBar = ({ onNavClick, isPortfolioExpanded: parentPortfolioExpanded, darkMode, onDarkModeToggle }) => {
  const [localIsPortfolioExpanded, setLocalIsPortfolioExpanded] = useState(parentPortfolioExpanded || false);

  useEffect(() => {
    setLocalIsPortfolioExpanded(parentPortfolioExpanded);
  }, [parentPortfolioExpanded]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const moveCameraTo = (section) => {
    console.log(section + ' clicked');
    switch (section) {
      case "home":
        cameraIntro()
        break;
      case "projects":
        cameraToShaders()
        break;
      default:
        break;
    }
  };
  const handleNavBarClick = (e, section) => {

    e.preventDefault();
    if (onNavClick) {
      if (section === "traditional portfolio") {
        onNavClick("portfolio"); // Tell App to show portfolio
      } else if (section === "canvas") {
        onNavClick("canvas"); // Tell App to show canvas
      } else if (section === "shaders") {
        onNavClick("shaders"); // Tell App to show canvas
      } else {
        if (localIsPortfolioExpanded) {
          scrollToSection(section); // Handle other sections like home, about, etc.
        } else {
          moveCameraTo(section);
        }
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans z-100">
      {/* Navbar */}
      <nav
        className={`fixed top-0 bg-gray-800/80 backdrop-blur-sm z-100 transition-all duration-700 ${localIsPortfolioExpanded ? "w-full" : "rounded-br-2xl w-1/4"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-x-6 mx-auto">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => handleNavBarClick(event, "home")}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => handleNavBarClick(event, "about")}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => handleNavBarClick(event, "projects")}
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => handleNavBarClick(event, "shaders")}
            >
              Shaders
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => handleNavBarClick(event, "contact")}
            >
              Contact
            </a>
            {localIsPortfolioExpanded && (
              <>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-blue-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "canvas")}
                >
                  3D Portfolio
                </motion.a>
                <motion.a
                  target="_blank"
                  href="files/DanielEcheCVeng.pdf"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-blue-300 transition-colors"
                >
                  Download Resume
                </motion.a>
              </>
            )}

            {!localIsPortfolioExpanded && (
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="hover:text-blue-400 transition-colors"
                onClick={(event) => handleNavBarClick(event, "traditional portfolio")}
              >
                Traditional Portfolio
              </motion.a>
            )}
          </div>
        </div>
      </nav>
      <button
        onClick={() => {
          onDarkModeToggle(!darkMode)
          console.log(darkMode ? 'light' : 'dark');

        }}
        className="fixed top-1 right-4 px-4 py-2 bg-gray-700 text-white rounded-full shadow-md z-100 hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default NavBar;