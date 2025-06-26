


import RoundImage from "./roundImage";
export function About({ darkMode }) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (<>
    
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-amber-200 px-80">
            <div className="bg-amber-200 w-full h-full flex gap-10 ">
                {/* Image Section */}
                <div className="w-1/3 h-full mt-10">
                    <RoundImage
                        src1="/imgs/mebg.jpg"
                        src2="/imgs/menobg.png"
                        alt=""
                        strength={6}
                        parallax={true}
                    />
                </div>

                {/* Text Section */}
                <div className="w-2/3 h-full p-5  transition-all duration-300 ">

                    <div className="text-left bg-amber-200 h-full">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in ">
                            Hi, I'm <br></br>Daniel Echeveste
                        </h1>
                    </div>
                    {/* // hover:scale-100 transition-all duration-300  to remove the footprints  */}
                    <div className=" bg-amber-200 h-full hover:scale-100  transition-all duration-300 "> 
                        <p className="text-xl md:text-2xl mb-6 text-amber-950 font-bold">
                            Full Stack Developer | Frontend Developer
                        </p>
                        <p className=" text-lg leading-relaxed mb-10  text-amber-950  transition-all duration-300 rounded-xl p-2">
                            I am passionate about  creative and interactives sites/apps and I enjoy working on them, using my skills in traditional development plus my knowledge in <span className="text-amber-950 font-bold">WEBGL</span> and <span className="text-amber-950 font-bold">SHADERS</span>,
                            to create <span className="text-amber-950 font-bold">unique</span> and <span className="text-amber-950 font-bold">engaging</span> experiences for users.
                            I have experience in creating responsive and user-friendly <span className="text-amber-950 font-bold"> interfaces</span> as well as working in <span className="text-amber-950 font-bold">backend development</span> for web and mobile applications.
                            I am also a <span className="text-amber-950 font-bold">team player</span> and I enjoy working in a collaborative environment, <span className="text-amber-950 font-bold">quick learner</span> and I am always looking for new challenges to improve my skills.
                        </p>
                        {/* Links  */}
                        <div className="flex gap-4 mb-10">
                            <a href="https://www.linkedin.com/in/daniel-echeveste-gonz%C3%A1lez/" target="_blank">
                                <img src="/icons/linkedin-brown.svg" className="w-10 transition-colors" />
                            </a>
                            <a href="https://github.com/daniel-echeveste" target="_blank">
                                <img src="/icons/github-brown.svg" className="w-10 transition-colors" />
                            </a>
                        </div>
                        <button onClick={() => scrollToSection("contact")} className="bg-amber-800 hover:bg-amber-700 px-6 py-3 rounded-full text-lg transition-colors ml-[50%] translate-x-[-50%] ">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
