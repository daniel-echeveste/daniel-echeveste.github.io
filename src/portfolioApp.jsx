import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./styles/style.css";
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
import PortfolioHorizontal from "./traditionalPortfolio/BasicPortfolioHorizontal.jsx";
import NavigationBar from "./traditionalPortfolio/components/portfolioNavBar";
import { LanguageProvider } from "./hooks/languageContext.jsx";


import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";
import { motion, AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <PortfolioApp></PortfolioApp>
  </>
);
export default function PortfolioApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isWEBGL, setIsWebGL] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleHorizontal = () => {
    setIsHorizontal(!isHorizontal);
  };
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  useEffect(() => {
    if (isWEBGL) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isWEBGL]);
  return (
    <>
      <LanguageProvider>
        <NavigationBar
          darkMode={isDarkMode}
          onDarkModeToggle={toggleDarkMode}
          isHorizontal={isHorizontal}
          onHorizontalToggle={toggleHorizontal}
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
          isWEBGL={isWEBGL}
          onWebGLToggle={() => setIsWebGL(!isWEBGL)}
        />

        <AnimatePresence>
          {isWEBGL && (
            <motion.div
              key="webgl"
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              exit={{ clipPath: "circle(0% at 50% 50%)" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen h-screen z-10 bg-black"
              style={{ overflow: "hidden" }}
            >
              <Canvas
                className="w-full h-full"
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
                  onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
                />
              </Canvas>
            </motion.div>
          )}
        </AnimatePresence>

        {isHorizontal ? (
          <PortfolioHorizontal
            darkMode={isDarkMode}
            currentSection={currentSection}
            isHorizontal={isHorizontal}
            onSectionChange={handleSectionChange}
          />
        ) : (
          <Portfolio
            darkMode={isDarkMode}
            currentSection={currentSection}
            isHorizontal={isHorizontal}
          />
        )}
      </LanguageProvider>
    </>
  );
}
