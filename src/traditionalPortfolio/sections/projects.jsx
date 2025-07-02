import { Gallery } from './Gallery';
import { motion } from "framer-motion";
export function Projects({ darkMode }) {
  return (<>
    {/* Projects Section */}
    <section id="projects" className="py-20 text-amber-950 min-h-screen max-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-15 text-amber-950"
        >
          Projects
        </motion.h2>

        <Gallery
          axis="y"
          projects={[
            {
              title: "Portfolio 3D",
              description: "Sitio interactivo en Three.js + React",
              technologies: ["React", "Three.js", "GSAP"],
              image: "/projects/portfolio.jpg",
              link: "https://miportafolio.com",
              github: "https://github.com/miusuario/portfolio",
            },
            {
              title: "Blog Jamstack",
              description: "Blog optimizado con contenido en markdown.",
              technologies: ["Next.js", "Tailwind", "Vercel"],
              image: "/projects/blog.jpg",
              link: "https://blogjam.com",
            },
            {
              title: "Blog Jamstack",
              description: "Blog optimizado con contenido en markdown.",
              technologies: ["Next.js", "Tailwind", "Vercel"],
              image: "/projects/blog.jpg",
              link: "https://blogjam.com",
            },
            {
              title: "Blog Jamstack",
              description: "Blog optimizado con contenido en markdown.",
              technologies: ["Next.js", "Tailwind", "Vercel"],
              image: "/projects/blog.jpg",
              link: "https://blogjam.com",
            },
            {
              title: "Blog Jamstack",
              description: "Blog optimizado con contenido en markdown.",
              technologies: ["Next.js", "Tailwind", "Vercel"],
              image: "/projects/blog.jpg",
              link: "https://blogjam.com",
            },
            {
              title: "Blog Jamstack",
              description: "Blog optimizado con contenido en markdown.",
              technologies: ["Next.js", "Tailwind", "Vercel"],
              image: "/projects/blog.jpg",
              link: "https://blogjam.com",
            },
            // ...
          ]}
        />
      </div>


    </section>
  </>)
}