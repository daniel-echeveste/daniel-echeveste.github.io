export function Education({ darkMode }) {
    return (<>
        {/* Education Section */}
        <section id="education" className="py-20 text-amber-950">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

                <div className="bg-amber-500 rounded-lg overflow-hidden  hover:scale-105 transition-all duration-300 mb-10">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Estudios de Grado en Ingeniería Informática</h3>
                        <div className="flex items-center gap-2"><span> <img src="/icons/college-svgrepo-com.svg" className="w-6" /></span> Universidad de Las Palmas de Gran Canaria</div>
                        <div className="flex items-center gap-2"><span> <img src="/icons/calendar-svgrepo-com.svg" className="w-4" /></span>2017 - 2019 </div>
                        <p className="text-gray-300 mb-4">
                            A brief description of the project goes here.
                        </p>
                    </div>
                </div>
                <div className="bg-amber-500 rounded-lg overflow-hidden  hover:scale-105 transition-all duration-300">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Desarrollo de Applicaciones Multiplataforma</h3>
                        <div className="flex items-center gap-2"><span> <img src="/icons/college-svgrepo-com.svg" className="w-6" /></span>IES El Rincón</div>
                        <div className="flex items-center gap-2"><span> <img src="/icons/calendar-svgrepo-com.svg" className="w-4" /></span>2019 - 2022 </div>
                        <p className="text-gray-300 mb-4">
                            A brief description of the project goes here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}