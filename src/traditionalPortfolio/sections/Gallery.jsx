// Carrusel de proyectos usando Swiper.js con efecto coverflow
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Gallery({ projects = [], showGitHub = true }) {
  return (
    <div className="w-full max-w-6xl px-4 py-12 mx-auto">
     

      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-full h-[500px]"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="w-80 bg-white dark:bg-amber-900 rounded-xl p-4 shadow-lg flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-3">
              <h3 className="text-xl font-semibold mb-1 text-amber-100">{project.title}</h3>
              <p className="text-sm text-amber-100 dark:text-amber-100 opacity-90">
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
            <div className="mt-4 flex gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:underline text-sm"
              >
                Ver proyecto
              </a>
              {showGitHub && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:underline text-sm"
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