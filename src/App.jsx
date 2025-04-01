import "./styles/style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState} from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import {  Leva } from "leva";
import Menu from "./HtmlElements.jsx";
import NavBar from "./NavBar.jsx"
import Portfolio from "./BasicPortfolio.jsx";
import OverlayTransition from "./overlayExample.jsx";


export default function App() {
  const [develop, setDevelop] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#develop") {
      setDevelop(true);
    } else if (window.location.hash === "#portfolio") {
      setPortfolio(true);
    }
    // Check if the user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in the preference
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    console.log(isDarkMode);
    
    // Cleanup the event listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return (
    <>
      <OverlayTransition></OverlayTransition>
    </>
  );
}
