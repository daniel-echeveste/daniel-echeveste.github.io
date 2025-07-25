import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Gallery({ projects = [], showGitHub = true, darkMode }) {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    // Función para cambiar la dirección según el ancho
    const updateDirection = () => {
      if (window.innerWidth < 768) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    };

    updateDirection(); // Ejecutar al cargar

    window.addEventListener("resize", updateDirection); // Ejecutar al redimensionar
    return () => window.removeEventListener("resize", updateDirection); // Limpiar
  }, []);

  return (

    <div
      
      className="w-full max-w-6xl px-4 py-12 mx-auto ">

      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Parallax, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        parallax={true}
        direction={direction}
        slidesPerView={direction === "vertical" ? 1.2 : 3}
        loop={true}
        navigation={direction === "horizontal"}
        pagination={{ clickable: true }}
        speed={2000}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true, // Se detiene cuando el usuario interactúa
          stopOnLastSlide: true,     // O puedes ponerlo en true si quieres que pare tras mostrar 1 vuelta
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className={`w-full ${direction === "vertical" ? "h-[70vh]" : "h-[500px]"
          } overflow-visible relative ${darkMode ? "" : "light"}`}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className={`w-80 rounded-xl p-4 shadow-lg flex flex-col justify-between ${darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-amber-900 hover:bg-amber-600"
              } overflow-hidden`}
          >
            <img
              src={project.image}
              alt={project.title}
              data-swiper-parallax="-10%"
              className="w-full h-40 scale-125 rounded parallax-bg object-cover object-top mb-10"
            />
            <div className="mt-3">
              <h3
                className={`text-xl font-semibold mb-1 ${darkMode ? "text-white" : "text-amber-100"
                  }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm opacity-90 ${darkMode ? "text-white" : "text-amber-100"
                  }`}
              >
                {project.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3" data-swiper-parallax="100">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline text-sm ${darkMode ? "text-white" : "text-amber-100"
                  }`}
              >
                Ver proyecto
              </a>
              {showGitHub && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline text-sm ${darkMode ? "text-white" : "text-amber-100"
                    }`}
                >
                  GitHub
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
