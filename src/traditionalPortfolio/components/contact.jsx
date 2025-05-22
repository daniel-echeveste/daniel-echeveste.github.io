export function Contact({ darkMode }) {
    return (<>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                <form className="max-w-lg mx-auto space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    </>)
}

