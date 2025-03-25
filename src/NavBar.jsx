import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Smooth scroll function
  const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // Handle navbar expansion and scroll unlock
  const handleNavBarClick = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    var isPortfolioSpanding = false;
    if (section == "traditional portfolio") {
      setIsPortfolioExpanded(true);
      isPortfolioSpanding = true;
      section = "home";
      const body = document.querySelector("body");
      const root = document.querySelector("#root");
      const canvas = document.querySelector("#canvas");
      root?.classList.remove("fixed");
      //   canvas?.classList.add('hidden')
    } else if (section == "canvas") {
      setIsPortfolioExpanded(false);
      const canvas = document.querySelector("#canvas");
      const root = document.querySelector("#root");
      // root?.classList.add('fixed')
      // canvas?.classList.remove('hidden')
    }
    if (isPortfolioExpanded || isPortfolioSpanding) {
      goToSection(section);
    } else {
      handleAnimation(section);
    }
  };

  const goToSection = (section) => {
    console.log(isPortfolioExpanded);
    console.log(`scrolling to ${section}`);
    const element = document.querySelector(`#${section}`);
    if (element) {
      // Prevent default anchor behavior
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 60; // Adjust for fixed nav height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Section #${section} not found`);
    }
  };
  const handleAnimation = (section) => {
    console.log(`Moving camera to ${section}`);
  };
  return (
    <div className=" bg-gray-900 text-white font-sans ">
      {/* Navbar */}
      <nav
        className={`fixed top-0  bg-gray-800/80 backdrop-blur-sm z-10 transition-all duration-700   ${
          isPortfolioExpanded ? "w-full" : " rounded-br-2xl w-1/4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-x-6 mx-auto ">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => {
                handleNavBarClick(event, "home");
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => {
                handleNavBarClick(event, "about");
              }}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => {
                handleNavBarClick(event, "projects");
              }}
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              onClick={(event) => {
                handleNavBarClick(event, "contact");
              }}
            >
              Contact
            </a>
            {isPortfolioExpanded && (
              <>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="hover:text-blue-400 transition-colors"
                  onClick={(event) => {
                    handleNavBarClick(event, "canvas");
                  }}
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
                  className="hover:text-blue-300 transition-colors "
                >
                  Download Resume
                </motion.a>
              </>
            )}

            {!isPortfolioExpanded && (
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="hover:text-blue-400 transition-colors"
                onClick={(event) => {
                  handleNavBarClick(event, "traditional portfolio");
                }}
              >
                Traditional Portfolio
              </motion.a>
            )}
           
          </div>
        </div>
        
      </nav>
      <button
              onClick={() => setDarkMode(!darkMode)}
              className="fixed top-1 right-4 px-4 py-2 bg-gray-700 text-white rounded-full shadow-md z-100 hover:bg-gray-600 transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
    </div>
  );
};
export default NavBar;
