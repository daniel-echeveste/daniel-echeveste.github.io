export function Experience({darkMode}) {
    return(<>
    <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((project) => (
                        <div key={project} className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="h-48 bg-gray-700" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                                <p className="text-gray-300 mb-4">
                                    A brief description of the project goes here.
                                </p>
                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>)
}