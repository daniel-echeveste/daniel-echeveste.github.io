import React from 'react';
import { About } from './components/about';
import { Certifications } from './components/certifications';
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Education } from './components/education';
import { Footer } from './components/footer';
import { FootprintTrail } from './components/footprints/footprintTrail';
import { ContactForm } from './components/contact';

export default function Portfolio({ darkMode }) {
  return (

    <div className="min-h-screen  text-white font-sans w-full bg-amber-200">

      {/* <FootprintTrail /> */}
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
      <ContactForm darkMode={darkMode} />
      {/* Globe Section */}
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};
