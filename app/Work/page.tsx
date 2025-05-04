export default function Work() {
    return (
        <div className="bg-neutral-950 min-h-screen p-8 text-white flex justify-center">
            <div className="fixed top-1/2 right-12">
                {/*there's a docx but its ugly and id ont have word :( */}
                <a href="/resume.pdf" download>
                    <button className="bg-gray-600 hover:bg-gray-400 text-white font-bold p-5 py-2 px-4 rounded duration-300 ease-in-out">
                        Download .pdf
                    </button>
                </a>
            </div>
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-center">Michael Zheng</h1>
                <hr/>
                <p className="mt-2 text-center">
                    El Dorado Hills, California • &nbsp;
                    <a href="mailto:themcalmic@gmail.com" className="underline">themcalmic@gmail.com</a> • &nbsp;
                    {/*(801)-505-2701 • &nbsp;*/}
                    <a href="https://mcalmic.github.io/" className="underline">mcalmic.github.io</a>
                </p>
                
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-center text-violet-400">Education</h2>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className="font-semibold">Folsom Lake College</h3>
                            <p className="text-white">Computer Science, 4.0 GPA</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">Folsom, CA</p>
                            <p className="text-white">2024-Present</p>
                        </div>
                    </div>
                    <p>Studying to transfer to a 4-year university in one year; intended majors of Computer Science and Math.</p>
                    <p>Relevant Coursework: Computer Architecture and Assembly Language, Data Structures, Discrete Structures, Calculus III, Linear Algebra, Object-Oriented Programming in C++</p>
                    <br/>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">Oak Ridge High School</h3>
                            <p className="text-white">Graduated in 3 years, 4.3 GPA, 36 ACT</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">El Dorado Hills, CA </p>
                            <p className="text-white">2021-2024</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-center text-violet-400">Experience</h2>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">Feed Sacramento Homeless</h3>
                            <p className="text-white"> Volunteer Web Developer </p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">Sacramento, CA</p>
                            <p className="text-white">2024-Present</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Responsible for updating the website with current information</li>
                        <li>Improved user experience by adding intuitive features and reducing redundancy</li>
                        <li>Communicated with leadership to implement necessary changes</li>
                    </ul>
                    <br/>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">Teaching</h3>
                            <p className="text-white">Tutor/Coach</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">El Dorado Hills, CA</p>
                            <p className="text-white">2021-Present</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Worked and volunteered as an academic tutor, including for math and standardized test preparation</li>
                        <li>Consistently increased student grades by at least a letter</li>
                        <li>Coached younger competitive Pokemon card game players to international success</li>
                    </ul>
                </div>
                
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-center text-violet-400">Projects & Leadership</h2>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">FLC++</h3>
                            <p className="text-white">President</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">Folsom, CA</p>
                            <p className="text-white">2024-Present</p>
                        </div>
                    </div>
                    <br/>
                    <ul className="list-disc list-inside">
                        <li>Elected as the president of Folsom Lake College’s Programming club</li>
                        <li>Updated and wrote documentation for Folsom Lake College’s official Discord Bot using Python</li>
                        <li>Led club initiatives and projects, such as creating a club website and a Chrome extension</li>
                        <li>Managed meetings and led an advertising campaign to grow club membership</li>
                    </ul>
                    <br/>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">Independent Game Development</h3>
                            <p className="text-white">Programmer, Designer</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white"></p>
                            <p className="text-white">2023-Present</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Collaborated remotely to create games in a group and published solo projects</li>
                        <li>Gained experience in C# and its use in the Unity Game Engine</li>
                        <li>Learned to web scrape and process data using Python</li>
                    </ul>
                    <br/>
                    <div className="flex justify-between items-start w-full pb-2">
                        <div>
                            <h3 className=" font-semibold">Personal Website</h3>
                            <p className="text-white">Programmer, Designer</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white">2023-Present</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Learned React and Next.js to implement frontend and using Firebase to develop backend</li>
                        <li>Transferred web games previously developed for Javascript and HTML into React framework</li>
                    </ul>
                </div>
                
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-center text-violet-400">Skills & Interests</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Technical:</strong> Python, C, C++, C#, HTML/CSS, Git, PC Building and Repair</li>
                        <li><strong>Languages:</strong> Bilingual Proficiency in English and Mandarin. B2 in French.</li>
                        <li><strong>Interests:</strong> Competitive Pokemon Cards, Drumming, Linguistics, Perfecting my Egg Curry recipe, Teaching</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
