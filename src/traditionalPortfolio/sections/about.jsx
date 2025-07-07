import RoundImage from "../components/roundImage";
import { motion } from "framer-motion";
export function About({ darkMode, isHorizontal }) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (<>

        {/* Hero Section */}
        <section
            id="about"
            className={`min-h-screen flex items-center justify-center pt-16 px-4 md:px-20 xl:px-80 ${darkMode ? "bg-gray-900 text-white" : "bg-amber-200 text-yellow-950"
                } transition-colors duration-600`}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-10 w-full h-full"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/3 h-full mt-10 flex justify-center md:justify-start">
                    <RoundImage
                        src1="/imgs/mebg.jpg"
                        src2="/imgs/menobg.png"
                        alt=""
                        strength={6}
                        parallax={true}
                        darkMode={darkMode}
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 h-full p-5 transition-all duration-300">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                            Hi, I'm <br />Daniel Echeveste
                        </h1>
                    </div>

                    <div className="h-full hover:scale-100 transition-all duration-300">
                        <p className="text-xl md:text-2xl mb-6 font-bold text-center md:text-left">
                            Full Stack Developer | Frontend Developer
                        </p>
                        <p className="text-lg leading-relaxed mb-10 transition-all duration-300 rounded-xl p-2 text-center md:text-left">
                            I am passionate about creative and interactive sites/apps and I enjoy
                            working on them, using my skills in traditional development plus my
                            knowledge in <span className="font-bold">WEBGL</span> and{" "}
                            <span className="font-bold">SHADERS</span>, to create{" "}
                            <span className="font-bold">unique</span> and{" "}
                            <span className="font-bold">engaging</span> experiences for users.
                            <br />
                            I have experience in creating responsive and user-friendly{" "}
                            <span className="font-bold">interfaces</span> as well as working in{" "}
                            <span className="font-bold">backend development</span> for web and
                            mobile applications.
                            <br />
                            I am also a <span className="font-bold">team player</span> and enjoy
                            working in a collaborative environment,{" "}
                            <span className="font-bold">quick learner</span>, and always looking
                            for new challenges to improve my skills.
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
                            className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ml-[50%] translate-x-[-50%]  md:translate-x-0 ${darkMode
                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                    : "bg-amber-800 hover:bg-amber-700 text-amber-100"
                                }`}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    </>);
}
