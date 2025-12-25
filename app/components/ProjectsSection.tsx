import Link from 'next/link';

const projects = [
    {
      title: 'spotcheck.lol',
      description: 'Daily TFT Puzzles',
      imageUrl: '/images/spotcheck.png',
      link: 'https://spotcheck.lol/'
    },
    {
      title: 'Lyin\' Jack',
      description: 'GCC Summer Jam Winner | Blackjack with the Devil',
      imageUrl: '/images/lyinjack.png',
      link: 'https://mcalmic.itch.io/lyin-jack'
    },
    {
      title: '5 Second Rule',
      description: 'Ludum Dare 58 | Kebab-based horde fighter',
      imageUrl: '/images/5secondrule.png',
      link: 'https://mcalmic.itch.io/5-second-rule'
    },
    {
      title: 'Pokedrafter',
      description: 'Fantasy Sports for Pokemon TCG',
      imageUrl: '/images/pokedrafter.png',
      link: 'https://pokedrafter.vercel.app/'
    },
    {
      title: 'Limitlessdle',
      description: 'Guessing game for Pokemon TCG Cards',
      imageUrl: '/images/limitlessdle.png',
      link: '/Projects/Limitlessdle'
    },
    /*
    {
      title: 'Swiss Calculator',
      imageUrl: '/images/swisscalc.png',
      link: '/Projects/SwissCalc'
    },
    */
    /*
    {
      title: 'Rxknephew Lyric Picker',
      imageUrl: '/images/rxknephew.png',
      link: '/Projects/LyricRandomizer'
    },
    */
  ];

export function ProjectsSection() {
    return (
      <section id="projects" className="scroll-section min-h-screen bg-neutral-950 flex flex-col items-center p-8 overflow-y-auto">
        <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">
              Projects
          </h1>
          <br/><hr/><br/>
          {/* Grid with 2 items per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
              <Link key={index} href={project.link}>
              <div className="group relative w-full aspect-video cursor-pointer border-4 border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-violet-400">
                  <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-400/20 backdrop-blur-sm py-3 px-4 transition-all duration-300 group-hover:bg-gray-800/90 group-hover:py-6">
                    <div className="text-white font-bold text-lg drop-shadow-lg">
                      {project.title}
                    </div>
                    <div className="text-gray-200 text-sm mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20">
                      {project.description}
                    </div>
                  </div>
              </div>
              </Link>
          ))}
          </div>
        </div>
      </section>
    );
}
