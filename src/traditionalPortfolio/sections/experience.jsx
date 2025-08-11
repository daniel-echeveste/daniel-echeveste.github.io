import { motion } from "framer-motion";
import RoundImage from "../components/roundImage";

export function Experience({ darkMode, isHorizontal }) {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="experience"
            className={`py-20 ${isHorizontal ? "min-h-screen" : ""} ${darkMode ? "text-white" : "text-amber-950"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 pt-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl font-bold text-center mb-20"
                >
                    Experience
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-10"
                >
                    {/* CARD 1 */}
                    <motion.div variants={cardVariants} className="w-full">
                        <div className="w-full flex flex-col md:flex-row items-center md:items-start p-4 gap-6">
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
                                    Worked as a Full Stack Developer at Ovan Gmbh, where I
                                    developed and maintained web applications. 
                                    Collaborated with cross-functional teams to design and implement new features,
                                    optimized application performance, and ensured code quality through 
                                    code reviews. Contributed to the development of a scalable and secure   
                                    web application that improved user experience and increased customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div variants={cardVariants} className="w-full">
                        <div className="w-full flex flex-col md:flex-row items-center md:items-start p-4 gap-6">
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

                            <div
                                className={`w-full md:w-5/6 hover:scale-105 transition-all duration-300 p-4 rounded-2xl ${darkMode
                                        ? "bg-gray-800 hover:bg-gray-700"
                                        : "hover:bg-amber-600"
                                    }`}
                            >
                                <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                                <div className="flex justify-between text-sm md:text-base mt-1 mb-2">
                                    <h4>Worldsatnet</h4>
                                    <p>2022 - 2022</p>
                                </div>
                                <p className="text-sm md:text-base leading-relaxed">
                                    Created a comprehensive web application for a
                                    telecommunications company, enabling the countant to
                                    manage customer accounts, track payments, and generate
                                    invoices.  improved customer service, and enhanced financial management.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
