import RoundImage from "../components/roundImage";

export function Experience({ darkMode, isHorizontal }) {
    return (
        <section
            id="experience"
            className={`py-20 ${isHorizontal ? "min-h-screen" : ""} ${darkMode ? "text-white" : "text-amber-950"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 pt-20">
                <h2 className="text-4xl font-bold text-center mb-20">Experience</h2>

                {/* CARD 1 */}
                <div className="w-full mb-10">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-start p-4 gap-6">
                        {/* Image */}
                        <div className="w-full md:w-1/6 flex justify-center md:justify-center md:mt-10">
                            <div className="w-20 h-20 rounded-full overflow-hidden">
                                <RoundImage
                                    src1="/imgs/ovan_gmbh_logo.jpeg"
                                    src2="/imgs/ovan_gmbh_logo.jpeg"
                                    alt=""
                                    strength={3}
                                    parallax={true}
                                    darkMode={darkMode}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div
                            className={`w-full md:w-5/6 hover:scale-105 transition-all duration-300 p-4 rounded-2xl ${darkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "hover:bg-amber-600"
                                }`}
                        >
                            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                            <div className="flex justify-between text-sm md:text-base mt-1 mb-2">
                                <h4>Ovan Gmbh</h4>
                                <p>2022 - 2025</p>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed">
                                Assist students in mastering core web development technologies.
                                Guiding them by troubleshooting technical challenges, deepening
                                their understanding of course material, and offering
                                comprehensive recaps of their assignments. Encourage
                                problem-solving skills and critical thinking by mentoring
                                students through complex projects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="w-full mb-10">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-start p-4 gap-6">
                        {/* Image */}
                        <div className="w-full md:w-1/6 flex justify-center md:justify-center md:mt-10">
                            <div className="w-20 h-20 rounded-full overflow-hidden">
                                <RoundImage
                                    src1="/imgs/worldsatnet_logo.jpeg"
                                    src2="/imgs/worldsatnet_logo.jpeg"
                                    alt=""
                                    strength={3}
                                    parallax={true}
                                    darkMode={darkMode}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div
                            className={`w-full md:w-5/6 hover:scale-105 transition-all duration-300 p-4 rounded-2xl ${darkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "hover:bg-amber-600"
                                }`}
                        >
                            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                            <div className="flex justify-between text-sm md:text-base mt-1 mb-2">
                                <h4>Worldsatnet</h4>
                                <p>2022 - 2025</p>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed">
                                Assist students in mastering core web development technologies.
                                Guiding them by troubleshooting technical challenges, deepening
                                their understanding of course material, and offering
                                comprehensive recaps of their assignments. Encourage
                                problem-solving skills and critical thinking by mentoring
                                students through complex projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
