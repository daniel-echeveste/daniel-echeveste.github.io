import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
} from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import translations from "./translations";
import { useLanguage } from "../../hooks/languageContext";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Gallery({ projects = [], showGitHub = true, darkMode }) {
  const [Mobile, setMobile] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    // Función para cambiar la dirección según el ancho
    const updateDirection = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    updateDirection(); // Ejecutar al cargar

    window.addEventListener("resize", updateDirection); // Ejecutar al redimensionar
    return () => window.removeEventListener("resize", updateDirection); // Limpiar
  }, []);

  return (
    <div className="w-full max-w-6xl px-4 py-12 mx-auto ">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Parallax, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        parallax={true}
        direction="horizontal"
        slidesPerView={Mobile ? 1.2 : 3}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        speed={2000}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true, // Se detiene cuando el usuario interactúa
          stopOnLastSlide: true, // O puedes ponerlo en true si quieres que pare tras mostrar 1 vuelta
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className={`w-full ${
          Mobile ? "h-[70vh]" : "h-[500px]"
        } overflow-visible relative ${darkMode ? "" : "light"}`}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className={`w-80 rounded-xl p-4 shadow-lg flex flex-col justify-between ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-neutral-900 hover:bg-neutral-600"
            } overflow-hidden`}
          >
            {({ isActive }) => (
              <>
              <img
                src={isActive ? project.gif : project.image}
                alt={project.title}
                data-swiper-parallax="-10%"
                className="w-full h-40 scale-150 rounded parallax-bg object-cover object-top mb-10"
              />
               {/* <img
              src={centertab? project.gif : project.image}
              alt={project.title}
              data-swiper-parallax="-10%"
              className="w-full h-40 scale-150 rounded parallax-bg object-cover object-top mb-10"
            /> */}
            <div className="mt-6 pt-2 ">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-neutral-100"
                }`}
              >
                {project.title}
              </h3>
               {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline text-sm ${
                  darkMode ? "text-white" : "text-neutral-100"
                }`}
              >
                {lang === "en"
                  ? translations.Projects.SeeMore.en
                  : translations.Projects.SeeMore.es}
              </a>
               )}
              <p
                className={`text-sm opacity-90 overflow-auto max-h-30  ${
                  darkMode ? "text-white scrollbar-blue" : "text-neutral-100 scrollbar-light"
                }`}
              >
                {lang === "en"
                  ? project.description.en
                  : project.description.es}
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
           
              </>
              
            )}
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
