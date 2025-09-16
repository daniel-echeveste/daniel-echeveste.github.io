import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./styles/style.css";
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
import PortfolioHorizontal from "./traditionalPortfolio/BasicPortfolioHorizontal.jsx";
import NavigationBar from "./traditionalPortfolio/components/portfolioNavBar";

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
    </>
  );
}
