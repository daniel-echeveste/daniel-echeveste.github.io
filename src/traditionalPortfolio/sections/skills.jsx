import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  frontend: [["React", "2 years"], ["Tailwind CSS", "2 years"], ["JavaScript", "2 years"], ["HTML5", "2 years"], ["CSS3", "2 years"]],
  backend: [["Node.js", "2 years"], ["Express", "2 years"], ["MongoDB", "2 years"], ["SQL", "2 years"], ["REST APIs", "2 years"]],
  soft: [["Comunicación", "2 years"], ["Trabajo en equipo", "2 years"], ["Gestión del tiempo", "2 years"], ["Resolución de problemas", "2 years"]],
};

export function Skills({ darkMode, isHorizontal }) {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = {
    frontend: "Frontend",
    backend: "Backend",
    soft: "Soft Skills",
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className={`py-20 ${isHorizontal ? "min-h-screen" : ""} max-h-screen ${darkMode ? "text-white" : "text-amber-950"}`}>
      <div className="max-w-6xl mx-auto px-4 pt-20">
        {/* Título con animación scroll */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center mb-20"
        >
          Skills
        </motion.h2>

        {/* Card contenedora */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`max-w-6xl mx-auto mt-10 p-4 ${darkMode ? "bg-gray-700" : "bg-amber-800"} shadow-lg hover:scale-100 hover:shadow-xl transition-all duration-300 rounded-xl`}
        >
          {/* Tabs */}
          <div className="flex justify-center mb-5">
            {Object.entries(tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 mx-4 rounded-full font-semibold transition ${activeTab === key
                  ? (darkMode ? "bg-gray-950 text-gray-100" : "bg-amber-600 text-amber-100")
                  : (darkMode ? "bg-gray-800 text-gray-100 hover:bg-gray-950" : "bg-amber-950 text-amber-100 hover:bg-amber-600")
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Cabecera de columnas */}
          <div className={`w-full flex justify-between mb-4 font-bold pl-5 ${darkMode ? "text-white" : "text-amber-100"}`}>
            <div className="w-1/2">Skill</div>
            <div className="w-1/2">Experience</div>
          </div>

          {/* Lista animada */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`pl-5 space-y-2 ${darkMode ? "text-white" : "text-amber-100"}`}
            >
              {skillsData[activeTab].map(([skill, years], index) => (
                <motion.li
                  variants={itemVariants}
                  key={skill}
                  className={`flex justify-between ${darkMode ? "text-white" : "text-amber-100"}`}
                >
                  <div className="w-1/2">{skill}</div>
                  <div className="w-1/2">{years}</div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
