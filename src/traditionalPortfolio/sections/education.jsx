export function Education({ darkMode, isHorizontal }) {
    return (<>
        {/* Education Section */}
        <section id="education" className={`py-20 text-amber-950 ${isHorizontal ? "min-h-screen ":""} max-h-screen ${darkMode ? "text-white" : "text-amber-950"}`}>
            <div className="max-w-6xl mx-auto px-4 pt-20">
                <h2 className={`text-4xl font-bold text-center mb-20 `}>Education</h2>

                <div className={`rounded-lg overflow-hidden  hover:scale-105 transition-all duration-300 mb-10 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-amber-500 hover:bg-amber-600"}`}>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Estudios de Grado en Ingeniería Informática</h3>
                        <div className="flex items-center gap-2"><span> <img src={darkMode ? "/icons/college-white.svg" : "/icons/college-brown.svg"} className="w-6" /></span> Universidad de Las Palmas de Gran Canaria</div>
                        <div className="flex items-center gap-2"><span> <img src={darkMode ? "/icons/calendar-white.svg" : "/icons/calendar-brown.svg"} className="w-4" /></span>2017 - 2019 </div>
                        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-amber-800"}`}>
                            A brief description of the project goes here.
                        </p>
                    </div>
                </div>
                <div className={`rounded-lg overflow-hidden  hover:scale-105 transition-all duration-300 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-amber-500 hover:bg-amber-600"}`}>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Desarrollo de Applicaciones Multiplataforma</h3>
                        <div className="flex items-center gap-2"><span> <img src={darkMode ? "/icons/college-white.svg" : "/icons/college-brown.svg"} className="w-6" /></span>IES El Rincón</div>
                        <div className="flex items-center gap-2"><span> <img src={darkMode ? "/icons/calendar-white.svg" : "/icons/calendar-brown.svg"} className="w-4" /></span>2019 - 2022 </div>
                        <p className={` mb-4 ${darkMode ? "text-gray-300" : "text-amber-800"}`}>
                            A brief description of the project goes here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}