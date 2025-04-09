import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen  text-white font-sans w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm Daniel
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Web & Mobile Application Developer
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg transition-colors">
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-300 text-lg leading-relaxed">
                With experience in Web and Mobile Application Development, I'm passionate
                about creating quality work and exploring all aspects of being a developer.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <ul className="grid grid-cols-2 gap-4 text-gray-300">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Mobile Dev</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Experience Section */}
<section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700" /> {/* Placeholder for image */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project goes here.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
<section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700" /> {/* Placeholder for image */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project goes here.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* skills Section */}
<section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700" /> {/* Placeholder for image */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project goes here.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* certifications Section */}
<section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700" /> {/* Placeholder for image */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project goes here.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700" /> {/* Placeholder for image */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project goes here.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 border-t border-gray-800">
        <p className="text-gray-400">
          © {new Date().getFullYear()} 
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;