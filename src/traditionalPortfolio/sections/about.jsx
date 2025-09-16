import RoundImage from "../components/roundImage";
import { motion } from "framer-motion";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";

export function About({ darkMode, isHorizontal, onSectionChange }) {
    const scrollToSection = (sectionId) => {
        if (isHorizontal) {
            onSectionChange(sectionId);
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const { lang, toggleLang } = useLanguage();
   

    return (
        <section
            id="about"
            className={`min-h-screen flex items-center justify-center pt-16 px-4 md:px-20 xl:px-80 ${
                darkMode ? "bg-gray-900 text-white" : "bg-amber-200 text-yellow-950"
            } transition-colors duration-600`}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // 👈 solo una vez, cuando el 30% sea visible
                className="flex flex-col md:flex-row gap-10 w-full h-full"
            >
                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-1/3 h-full mt-10 flex justify-center md:justify-start"
                >
                    <RoundImage
                        src1="/imgs/mebg.jpg"
                        src2="/imgs/menobg.png"
                        alt=""
                        strength={6}
                        parallax={true}
                        darkMode={darkMode}
                    />
                </motion.div>

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-2/3 h-full p-5 transition-all duration-300"
                >
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                           { lang=="en" ?  
                             translations.About.Intro.en
                           :   translations.About.Intro.es}
                        </h1>
                    </div>

                    <div className="h-full hover:scale-100 transition-all duration-300">
                        <p className="text-xl md:text-2xl mb-6 font-bold text-center md:text-left">
                            Full Stack Developer | Frontend Developer
                        </p>
                        <p className="text-lg leading-relaxed mb-10 p-2 text-center md:text-left">
                           { lang=="en" ?  
                             translations.About.Text.en
                           :   translations.About.Text.es}
                        </p>

                        {/* Links */}
                        <div className="flex justify-center md:justify-start gap-4 mb-10">
                            <a
                                href="https://www.linkedin.com/in/daniel-echeveste-gonz%C3%A1lez/"
                                target="_blank"
                            >
                                <img
                                    src={
                                        darkMode
                                            ? "/icons/linkedin-white.svg"
                                            : "/icons/linkedin-brown2.svg"
                                    }
                                    className="w-10 transition-all duration-300"
                                />
                            </a>
                            <a href="https://github.com/daniel-echeveste" target="_blank">
                                <img
                                    src={
                                        darkMode
                                            ? "/icons/github-white2.svg"
                                            : "/icons/github-brown.svg"
                                    }
                                    className="w-10 transition-all duration-300"
                                />
                            </a>
                        </div>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ml-[50%] translate-x-[-50%] md:translate-x-0 ${
                                darkMode
                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                    : "bg-amber-800 hover:bg-amber-700 text-amber-100"
                            }`}
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
