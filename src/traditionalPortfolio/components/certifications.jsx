import { motion } from "framer-motion";

export function Certifications({ darkMode }) {
  const certifications = [
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
      className={`py-20 ${darkMode ? "text-white" : "text-amber-950"} bg-transparent`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        {/* Tabla con grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-amber-500 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          {/* Encabezado */}
          <div className="grid grid-cols-4 gap-4 p-4 font-semibold text-center bg-amber-600 text-white">
            <p>Certification</p>
            <p>Issuer</p>
            <p>Date</p>
            <p>Verify</p>
          </div>

          {/* Filas dinámicas */}
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 gap-4 p-4 text-center ${
                index % 2 === 0 ? "bg-amber-400" : "bg-amber-300"
              }`}
            >
              <p>{cert.name}</p>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline hover:text-blue-900 transition"
              >
                Verify
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
