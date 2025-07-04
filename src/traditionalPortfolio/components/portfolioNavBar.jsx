import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { cameraIntro, cameraToShaders, lookDown, lookBack, lookUp } from "./camera/CameraControls";

export default function NavigationBar({ darkMode, onDarkModeToggle, isHorizontal, onHorizontalToggle, currentSection, onSectionChange }) {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    const handleNavBarClick = (e, section) => {
        e.preventDefault();
        if (isHorizontal) {
            onSectionChange(section);
        } else {
            scrollToSection(section);
        }
    };

    return (
        <div className={`text-white font-sans text-lg ${darkMode ? "bg-gray-900" : "bg-amber-950"}`}>
            <nav
                className={`fixed top-0 w-full flex justify-between items-center transition-all duration-1000 
      ${darkMode ? "bg-gray-900/80 drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]" : "bg-amber-950/80 drop-shadow-[0_2px_20px_#461901]"} 
       z-[100]`}
            >
                <motion.a
                    href="/#experience"
                    target="_blank"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1 }}
                    className="hover:text-amber-400 transition-colors ml-10"
                >
                    3D Portfolio
                </motion.a>

                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="space-x-6 mx-auto">
                        {["about", "experience", "education", "projects", "skills", "certifications", "contact"].map((section) => (
                            <motion.a
                                key={section}
                                href="#"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 1 }}
                                onClick={(event) => handleNavBarClick(event, section)}
                                className={` transition-colors rounded-xl py-3 px-2 ${darkMode ? (isHorizontal && currentSection === section ? "hover:bg-gray-800 hover:text-amber-300 text-amber-400 " : "hover:bg-gray-800 hover:text-white text-white/80") : (isHorizontal && currentSection === section ? "hover:bg-amber-700 hover:text-amber-400 text-amber-400" : "hover:bg-amber-700 hover:text-white text-amber-50/80")} `}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Botón modo oscuro */}
            <button
                onClick={() => onDarkModeToggle(!darkMode)}
                className={`fixed top-2 right-4 px-4 py-4 w-10 h-10 flex items-center justify-center 
      text-white rounded-full shadow-md z-[100] transition duration-300 opacity-95 overflow-hidden
      ${darkMode ? "bg-gray-900 border-gray-500 hover:border-2" : "bg-[#96d1ff] border-[#3daaff] hover:border-2"}`}
            >
                <AnimatePresence mode="wait" initial={true}>
                    {!darkMode ? (
                        <motion.span
                            key="sun"
                            initial={{ x: -30, y: 6, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                            exit={{ x: 30, y: 12, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            style={{ position: "absolute" }}
                        >
                            ☀️
                        </motion.span>
                    ) : (
                        <motion.span
                            key="moon"
                            initial={{ x: -30, y: 6, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                            exit={{ x: 30, y: 12, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            style={{ position: "absolute" }}
                        >
                            🌙
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            {/* Botón para cambiar entre horizontal/vertical */}
            <button
                onClick={() => onHorizontalToggle(!isHorizontal)}
                className={`${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-amber-800 hover:bg-amber-700"} fixed top-2 right-20 px-4 py-2 bg-amber-800 text-white rounded-full shadow-md z-[100] hover:bg-amber-700 transition duration-300 opacity-95`}
            >
                {isHorizontal ? "Horizontal" : "Vertical"}
            </button>

            {/* Botón para descargar el CV */}
            <motion.a
                target="_blank"
                href="files/DanielEcheCVeng.pdf"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1 }}
                className={`${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-amber-800 hover:bg-amber-700"} fixed top-2 right-60 z-[100] hover:bg-amber-700 rounded-2xl px-4 py-2 inline-flex items-center transition-all duration-300 hover:opacity-100`}
            >
                Download Resume <img src="/icons/download-white.svg" className="w-6 ml-2" />
            </motion.a>
        </div>
    )
}