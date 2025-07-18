import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  frontend: [["React","2 years"], ["Tailwind CSS","2 years"], ["JavaScript","2 years"], ["HTML5","2 years"], ["CSS3","2 years"]],
  backend: [["Node.js","2 years"], ["Express","2 years"], ["MongoDB","2 years"], ["SQL","2 years"], ["REST APIs","2 years"]],
  soft: [["Comunicación", "2 years"], ["Trabajo en equipo", "2 years"], ["Gestión del tiempo", "2 years"], ["Resolución de problemas", "2 years"]],
};


export function Skills({ darkMode }) {

  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = {
    frontend: "Frontend",
    backend: "Backend",
    soft: "Soft Skills",
  };
  return (<>
    {/* skills Section */}
    <section id="skills" className="py-20 text-amber-950">
    <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-6xl mx-auto mt-10 p-4 bg-amber-200 shadow-lg hover:scale-100 hover:shadow-xl transition-all duration-300 rounded-xl">
        {/* Tabs */}
        <div className="flex justify-center mb-5">
          {Object.entries(tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 mx-4 rounded-full font-semibold transition ${activeTab === key
                  ? "bg-amber-950 text-amber-100"
                  : "bg-amber-300 text-amber-950"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="w-full  flex justify-between mb-4 font-bold pl-5" > 
          <div className="w-1/2"> Skill  </div>
          <div className="w-1/2"> Experience </div>
        </div>
        {/* Skills list with animation */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="list-disc pl-5   text-amber-950"
          >
            
            {skillsData[activeTab].map((skill, index) => (
              <motion.li

                key={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-1 flex justify-between"
              >
                <div className="w-1/2">{skill[0]}</div>
                <div className="w-1/2">{skill[1]}</div>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>

  </>)
}