import { Gallery } from './Gallery';
import { motion } from "framer-motion";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";
export function Projects({ darkMode, isHorizontal }) {
  const { lang } = useLanguage();
  return (<>
    {/* Projects Section */}
    <section id="projects" className={`py-20 text-amber-950 ${isHorizontal ? "min-h-screen ":""}  max-h-screen ${darkMode ? "text-white" : "text-amber-950"}`}>
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold text-center md:mb-15 mb-5 ${darkMode ? "text-white" : "text-amber-950"} `}
        >
           {lang === "en" ? translations.Projects.en : translations.Projects.es}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >

        <Gallery
          darkMode={darkMode}
          axis="y"
          projects={translations.Projects.ProjectList}
          
        />
          </motion.div>
      </div>


    </section>
  </>)
}