import { motion } from "framer-motion";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";

export function Certifications({ darkMode, isHorizontal }) {
  const certifications = [
    {
      name: "THREE.JS",
      issuer: "Bruno Simon",
      date: "Jun 2025",
      url: "https://threejs-journey.com/certificate/view/41769",
    },

  ];
  const { lang } = useLanguage();
  return (
    <section
      id="certifications"
      className={`py-20 ${darkMode ? "text-white" : "text-neutral-950"} ${isHorizontal ? "min-h-screen" : ""} max-h-screen`}
    >
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {lang == "en" ? translations.Certifications.en : translations.Certifications.es}
        </motion.h2>
        <div className="w-full h-full">
          <div className="max-w-6xl mx-auto px-4 pb-30">
            {/* Tabla con grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden  transition-transform duration-300 ${darkMode ? "bg-gray-950" : "bg-neutral-100"} `}
            >
              {/* Encabezado */}
              <div className={`grid grid-cols-4 gap-4 p-4 font-semibold text-center text-white ${darkMode ? "bg-gray-950 text-white" : "bg-neutral-500 text-neutral-100"}`}>
                <p> {lang == "en" ? translations.Certifications.cert.en : translations.Certifications.cert.es} </p>
                <p>{lang == "en" ? translations.Certifications.issuer.en : translations.Certifications.issuer.es}</p>
                <p>{lang == "en" ? translations.Certifications.date.en : translations.Certifications.date.es}</p>
                <p>{lang == "en" ? translations.Certifications.ver.en : translations.Certifications.ver.es}</p>
              </div>

              {/* Filas dinámicas con animación */}
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className={`grid grid-cols-4 gap-4 p-4 text-center cursor-pointer  hover:scale-101 shadow-[10px_10px_15px_-3px_rgb(0,0,0,0.1)]
                    ${index % 2 === 0
                      ? (darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-neutral-200 hover:bg-neutral-100  ")
                      : (darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-neutral-200  hover:bg-neutral-100  ")
                    }`}
                >
                  <p>{cert.name}</p>
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={darkMode
                      ? "text-blue-300 underline hover:text-blue-400 transition"
                      : "text-blue-800 underline hover:text-blue-900 transition"}
                  >
                    Verify
                  </a>
                </motion.div>
                
              ))}
              <div className={`${(darkMode ? "bg-gray-800 " : "bg-neutral-300   ")} h-4`}></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
