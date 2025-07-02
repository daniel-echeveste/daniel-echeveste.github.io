import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { About } from './sections/about';
import { Certifications } from './sections/certifications';
import { Experience } from './sections/experience';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { Education } from './sections/education';
import { FootprintTrail } from './components/footprints/footprintTrail';
import { ContactForm } from './sections/contact';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio({ darkMode }) {
  const sections = [
    { id: 'about', component: <About darkMode={darkMode} /> },
    { id: 'experience', component: <Experience darkMode={darkMode} /> },
    { id: 'education', component: <Education darkMode={darkMode} /> },
    { id: 'skills', component: <Skills darkMode={darkMode} /> },
    { id: 'projects', component: <Projects darkMode={darkMode} /> },
    { id: 'certifications', component: <Certifications darkMode={darkMode} /> },
    { id: 'contact', component: <ContactForm darkMode={darkMode} /> },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const prevSection = () => {
    setDirection(-1);
    setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const nextSection = () => {
    setDirection(1);
    setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

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

  return (
    <div className="min-h-screen text-white font-sans w-full bg-amber-200 relative overflow-hidden">
      {/* <FootprintTrail /> */}

      {/* Botones navegación */}
      <button
        onClick={prevSection}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSection}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Sección activa con animación */}
      <div className="relative min-h-screen">
        <AnimatePresence custom={direction} mode="wait">
          <div className="w-full">
            {sections[currentSection].component}
          </div>
        </AnimatePresence>
        
      </div>
     
    </div>
  );
}
