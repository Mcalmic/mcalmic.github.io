export function WorkSection() {
    return (
        <section id="work" className="scroll-section min-h-screen bg-neutral-950 p-8 text-white flex items-center justify-center overflow-y-auto">
            <div className="max-w-2xl w-full text-center space-y-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">
                    Work & Resume
                </h1>   

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                    <a
                        href="/resume.pdf"
                        download
                        rel="noopener noreferrer"
                        className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                    >
                        Download Resume (PDF)
                    </a>

                    <a
                        href="https://linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg flex items-center gap-2"
                    >
                        <img src="/images/linkedin-transparent.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                        Connect with me!
                    </a>
                </div>
            </div>
        </section>
    );
}
