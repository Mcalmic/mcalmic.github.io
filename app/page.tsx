'use client'

import Head from 'next/head';


export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col items-center p-8">
      <Head>
        <title>Michael&apos;s Personal Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-200">
            Hi, I&apos;m <span className="text-violet-400">Michael</span>
          </h1>
        </header>
        <div className = "justify-center">
        <h2 className="text-3xl font-semibold text-neutral-200 mb-4">About Me</h2>
        <p className="text-2xl text-neutral-200">
          I&apos;m a college student studying Computer Science, Math, and Linguistics. I&apos;m passionate about making good frontend, developing fun games, cooking, the Oxford comma, and teaching. I also play Pokémon Cards pretty well.
        </p>
        </div>

        <footer className="mt-12 text-gray-500 text-center absolute bottom-10">
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://github.com/mcalmic" target="_blank" rel="noopener noreferrer" className="p-5 bg-gray-500 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300">
              <img src="/images/github.png" alt="GitHub" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://twitter.com/themcalmic" target="_blank" rel="noopener noreferrer" className="p-5 bg-neutral-600 rounded-full shadow-lg hover:bg-gray-500 transition-all duration-300">
              <img src="/images/twitter.png" alt="Twitter" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="p-5 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300">
              <img src="/images/linkedin-transparent.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
