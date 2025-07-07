import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { About } from './sections/about';
import { Certifications } from './sections/certifications';
import { Experience } from './sections/experience';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { Education } from './sections/education';
import { ContactForm } from './sections/contact';


export default function Portfolio({ darkMode, currentSection, isHorizontal, onSectionChange }) {
  const sections = [
    { id: 'about', component: <About darkMode={darkMode} isHorizontal={isHorizontal} onSectionChange={onSectionChange} /> },
    { id: 'experience', component: <Experience darkMode={darkMode} isHorizontal={isHorizontal}  /> },
    { id: 'education', component: <Education darkMode={darkMode} isHorizontal={isHorizontal}  /> },
    { id: 'skills', component: <Skills darkMode={darkMode} isHorizontal={isHorizontal}  /> },
    { id: 'projects', component: <Projects darkMode={darkMode} isHorizontal={isHorizontal} /> },
    { id: 'certifications', component: <Certifications darkMode={darkMode} isHorizontal={isHorizontal} /> },
    { id: 'contact', component: <ContactForm darkMode={darkMode} isHorizontal={isHorizontal} /> },
  ];
  let sectionIndex = sections.findIndex((section) => section.id === currentSection) ;
  
  const slideVariants = {
    initial: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
    }),
    animate: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      position: 'absolute',
    }),
  };

  
  console.log(darkMode);
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-amber-200"} text-white font-sans w-full  relative overflow-hidden transition-colors duration-600`}>
      {/* <FootprintTrail /> */}
      {/* Sección activa con animación */}
     
        {/* <AnimatePresence custom={direction} mode="wait"> */}
          <div className={`w-full`}>
            {sections[sectionIndex].component}
          </div>
        {/* </AnimatePresence> */}
      
     
    </div>
  );
}
