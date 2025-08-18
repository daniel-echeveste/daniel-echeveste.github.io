import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { log } from "three/src/nodes/TSL.js";
// import { cameraIntro, cameraToShaders, lookDown, lookBack, lookUp } from "./camera/CameraControls";

export default function NavigationBar({
  darkMode,
  isPortfolioExpanded,
  isExperienceExpanded,
  onDarkModeToggle,
  isWebgl,
  onWebGLToggle,
}) {
  const [localIsPortfolioExpanded, setLocalIsPortfolioExpanded] = useState(
    isPortfolioExpanded || false
  );

  const [localIsExperienceExpanded, setLocalIsExperienceExpanded] = useState(
    isExperienceExpanded || false
  );

  useEffect(() => {
    setLocalIsPortfolioExpanded(isPortfolioExpanded);
  }, [isPortfolioExpanded]);

 

  useEffect(() => {
    setLocalIsExperienceExpanded(isExperienceExpanded);
  }, [isExperienceExpanded]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavBarClick = (e, section) => {
    e.preventDefault();
    if (section == "canvas") 
        log("WebGL mode toggled");
        // onWebGLToggle(); // Toggle WebGL mode
        
    }
    if (localIsPortfolioExpanded) {
      scrollToSection(section); // Handle other sections like home, about, etc.
    } else {
      moveCameraTo(section);
    }
  };

  return (
    <div className="bg-amber-950 text-white font-sans z-100  text-lg ">
      {/* Navbar */}
      <nav
        className={`fixed top-0 bg-amber-950/80 backdrop-blur-sm z-100 transition-all duration-1000 ${
          !localIsExperienceExpanded ? "w-full" : "rounded-br-2xl w-1/4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-x-6 mx-auto">
            {(localIsPortfolioExpanded || localIsExperienceExpanded) && (
              <>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "about")}
                >
                  About
                </motion.a>
              </>
            )}
            {localIsPortfolioExpanded && (
              <>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "experience")}
                >
                  Experience
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "education")}
                >
                  Education
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "projects")}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "skills")}
                >
                  Skills
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) =>
                    handleNavBarClick(event, "certifications")
                  }
                >
                  Certifications
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
                className="hover:text-amber-400 transition-colors"
                onClick={(event) =>
                  handleNavBarClick(event, "traditional portfolio")
                }
              >
                Traditional Portfolio
              </motion.a>
            )}
            {!localIsExperienceExpanded && (
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="hover:text-amber-400 transition-colors"
                onClick={(event) => handleNavBarClick(event, "canvas")}
              >
                3D Portfolio
              </motion.a>
            )}
            {(localIsPortfolioExpanded || localIsExperienceExpanded) && (
              <>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-amber-400 transition-colors"
                  onClick={(event) => handleNavBarClick(event, "contact")}
                >
                  Contact
                </motion.a>
              </>
            )}
          </div>
        </div>
      </nav>
      <button
        onClick={() => {
          onDarkModeToggle(!darkMode);
          console.log(darkMode ? "light" : "dark");
        }}
        className={`fixed ${
          localIsExperienceExpanded
            ? "transition-all duration-1000  top-4 right-1/2 translate-x-1/2"
            : "transition-all duration-1000 top-2 right-4 "
        }  px-4 py-2 bg-gray-700 text-white rounded-full shadow-md z-100 hover:bg-gray-600 transition opacity-95`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
