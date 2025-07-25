import { Gallery } from './Gallery';
import { motion } from "framer-motion";
export function Projects({darkMode}) {
    return(<>
    {/* Projects Section */}
    <section id="projects" className="py-20">
     
    
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12  text-amber-950"
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
            link: "https://daniel-echeveste.github.io/ShaderLab",
            github: "https://github.com/miusuario/portfolio",
          },
          {
            title: "Blog Jamstack",
            description: "Blog optimizado con contenido en markdown.",
            technologies: ["Next.js", "Tailwind", "Vercel"],
            image: "/projects/blog.jpg",
            link: "https://daniel-echeveste.github.io/ShaderLab",
          },
          {
            title: "Blog Jamstack",
            description: "Blog optimizado con contenido en markdown.",
            technologies: ["Next.js", "Tailwind", "Vercel"],
            image: "/projects/blog.jpg",
            link: "https://daniel-echeveste.github.io/ShaderLab",
          },
          {
            title: "Blog Jamstack",
            description: "Blog optimizado con contenido en markdown.",
            technologies: ["Next.js", "Tailwind", "Vercel"],
            image: "/projects/blog.jpg",
            link: "https://daniel-echeveste.github.io/ShaderLab",
          },
          {
            title: "Blog Jamstack",
            description: "Blog optimizado con contenido en markdown.",
            technologies: ["Next.js", "Tailwind", "Vercel"],
            image: "/projects/blog.jpg",
            link: "https://daniel-echeveste.github.io/ShaderLab",
          },
          {
            title: "Blog Jamstack",
            description: "Blog optimizado con contenido en markdown.",
            technologies: ["Next.js", "Tailwind", "Vercel"],
            image: "/projects/blog.jpg",
            link: "https://daniel-echeveste.github.io/ShaderLab",
          },
          // ...
        ]}
      />
      </section>
    </>)
}