import React from 'react';
import { About } from './sections/about';
import { Certifications } from './sections/certifications';
import { Experience } from './sections/experience';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { Education } from './sections/education';
import { Footer } from './sections/footer';
import { ContactForm } from './sections/contact';

export default function Portfolio({ darkMode,isHorizontal }) {
  return (

    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-amber-200"} text-white font-sans w-full`}>

      {/* <FootprintTrail /> */}
      {/* About Section */}
      <About darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Experience Section */}
      <Experience darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Education Section */}
      <Education darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Skills Section */}
      <Skills darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Projects Section */}
      <Projects darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Certifications Section */}
      <Certifications darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Contact Section */}
      <ContactForm darkMode={darkMode} isHorizontal={isHorizontal} />
      {/* Globe Section */}
      {/* Footer */}
      <Footer darkMode={darkMode} isHorizontal={isHorizontal} />
    </div>
  );
};
