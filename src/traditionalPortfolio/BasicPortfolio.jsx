import React from 'react';
import { About } from './components/about';
import { Certifications } from './components/certifications';
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Education } from './components/education';
import { Footer } from './components/footer';
const Portfolio = ({ darkMode }) => {
  return (
    <div className="min-h-screen  text-white font-sans w-full">


      {/* About Section */}
      <About darkMode={darkMode} />
      {/* Experience Section */}
      <Experience darkMode={darkMode} />
      {/* Education Section */}
      <Education darkMode={darkMode} />
      {/* Skills Section */}
      <Skills darkMode={darkMode} />
      {/* Projects Section */}
      <Projects darkMode={darkMode} />
      {/* Certifications Section */}
      <Certifications darkMode={darkMode} />
      {/* Contact Section */}
      <Contact darkMode={darkMode} />
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;