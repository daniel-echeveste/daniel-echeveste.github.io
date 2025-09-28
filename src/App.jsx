import { useState, useEffect } from "react";
import "./styles/style.css";
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
import PortfolioHorizontal from "./traditionalPortfolio/BasicPortfolioHorizontal.jsx";
import NavigationBar from "./traditionalPortfolio/components/portfolioNavBar";
import { LanguageProvider } from "./hooks/languageContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import WebglPlaceholder from "./3D assets/WEBGLPlaceholder.jsx";


export default function App() {
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
      document.body.style.overflow = "auto";
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
              
              <WebglPlaceholder
                toggleWebGL={setIsWebGL} 
              />

              {/* IFRAME  */}
              {/* <iframe
                src="/WEBGL"
                className="w-full h-full"
                style={{ border: "none" }}
                title="3D Portfolio"
              /> */}
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
