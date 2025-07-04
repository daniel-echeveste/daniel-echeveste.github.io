import { motion } from "framer-motion";

export function Certifications({ darkMode, isHorizontal }) {
  const certifications = [
    {
      name: "THREE.JS",
      issuer: "Bruno Simon",
      date: "Jun 2025",
      url: "https://threejs-journey.com/certificate/view/41769",
    },
    {
      name: "THREE.JS",
      issuer: "Bruno Simon",
      date: "Jun 2025",
      url: "https://threejs-journey.com/certificate/view/41769",
    },
    {
      name: "THREE.JS",
      issuer: "Bruno Simon",
      date: "Jun 2025",
      url: "https://threejs-journey.com/certificate/view/41769",
    },

    // Añade más aquí si quieres
  ];

  return (
    <section
      id="certifications"
      className={`py-20 ${darkMode ? "text-white" : "text-amber-950"} ${isHorizontal ? "min-h-screen ":""} max-h-screen `}
    >
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>
        <div className="w-full h-full ">
          <div className="max-w-6xl mx-auto px-4">

        
            {/* Tabla con grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${darkMode ? "bg-gray-950" : "bg-amber-500"}`}
            >
              {/* Encabezado */}
              <div className={`grid grid-cols-4 gap-4 p-4 font-semibold text-center  text-white ${darkMode ? "bg-gray-950 text-white" : "bg-amber-600 text-amber-100"}`}>
                <p>Certification</p>
                <p>Issuer</p>
                <p>Date</p>
                <p>Verify</p>
              </div>

              {/* Filas dinámicas */}
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 p-4 text-center ${index % 2 === 0 ? (darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-amber-400 hover:bg-amber-200") : (darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-amber-300 hover:bg-amber-200")
                    }`}
                >
                  <p>{cert.name}</p>
                  <p>{cert.issuer}</p> 
                  <p>{cert.date}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className= {darkMode ? "text-blue-300 underline hover:text-blue-400 transition" : "text-blue-800 underline hover:text-blue-900 transition"}
                  >
                    Verify
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
