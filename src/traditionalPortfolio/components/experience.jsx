import RoundImage from "./roundImage";
export function Experience({ darkMode }) {
    return (<>
        <section id="experience" className="py-20 text-amber-950">

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
                <div className="w-full  h-70 mb-10">
                    <div className="w-full flex h-full p-4">

                        <div className="w-1/8 rounded-full h-20">
                            <div className="w-16 mx-auto h-16 mt-15  rounded-full">
                                <RoundImage src1="/imgs/ovan_gmbh_logo.jpeg" src2="/imgs/ovan_gmbh_logo.jpeg" alt="" strength={3} parallax={true} />
                            </div>
                        </div>
                        <div className="w-7/8  hover:bg-amber-500 hover:scale-105 transition-all duration-300 h-full p-4 rounded-2xl">
                            <h3 className="text-2xl font-bold " >Full Stack Developer</h3>
                            <div className="flex justify-between px-4">
                                <h4>Ovan Gmbh</h4>
                                <p>2022 - 2025</p>
                            </div>
                            <p>
                                Assist students in mastering core web development technologies.
                                Guiding them by troubleshooting technical challenges, deepening their understanding of course material,
                                and oﬀering comprehensive recaps of their assignments. Encourage problem-solving skills and critical thinking by mentoring students
                                through complex projects
                            </p>

                        </div>
                    </div>
                </div>
                <div className="w-full  h-70 mb-10">
                    <div className="w-full flex h-full p-4">

                        <div className="w-1/8 rounded-full h-20">
                            <div className="w-16 mx-auto h-16 mt-15  rounded-full">
                                <RoundImage src1="/imgs/worldsatnet_logo.jpeg" src2="/imgs/worldsatnet_logo.jpeg" alt="" strength={3} parallax={true} />
                            </div>
                        </div>
                        <div className="w-7/8  hover:bg-amber-500 hover:scale-105 transition-all duration-300 h-full p-4 rounded-2xl">
                            <h3 className="text-2xl font-bold " >Full Stack Developer</h3>
                            <div className="flex justify-between px-4">
                                <h4>Ovan Gmbh</h4>
                                <p>2022 - 2025</p>
                            </div>
                            <p>
                                Assist students in mastering core web development technologies.
                                Guiding them by troubleshooting technical challenges, deepening their understanding of course material,
                                and oﬀering comprehensive recaps of their assignments. Encourage problem-solving skills and critical thinking by mentoring students
                                through complex projects
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}