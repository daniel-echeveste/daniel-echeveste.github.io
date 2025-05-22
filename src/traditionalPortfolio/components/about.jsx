

export function About({darkMode}) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    

    return (<>
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-amber-200 px-80">
            <div className="bg-amber-100 w-full h-full flex gap-10">
                <div className="w-1/2 h-full bg-amber-500">
                    {/* image container */}
                    <div className="h-full w-full bg-amber-600">
                        <img src="/imgs/Concho-Pijama.jpeg" alt="" />
                    </div>
                </div>
                <div className="w-1/2 h-full bg-amber-600 ">
                    <div className="text-left bg-amber-300 h-full">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in ">
                            Hi, I'm <br></br>Daniel Echeveste
                        </h1>                       
                    </div>
                    <div className="text-center bg-amber-600 h-full">
                        <p className="text-xl md:text-2xl text-gray-300 mb-6">
                            Web & Mobile Application Developer
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With experience in Web and Mobile Application Development, I'm passionate
                            about creating quality work and exploring all aspects of being a developer.
                        </p>
                        <button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg transition-colors">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>);
}