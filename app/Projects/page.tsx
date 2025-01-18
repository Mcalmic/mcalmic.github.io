import Link from 'next/link';
const projects = [
    {
      title: 'Limitlessdle',
      imageUrl: '/images/limitlessdle.png',
      link: '/Projects/Limitlessdle'
    },
    {
        title: 'Itch.io',
        imageUrl: '/images/itchio.svg',
        link: 'https://mcalmic.itch.io/'
      },
    {
      title: 'Swiss Calculator',
      imageUrl: '/images/none.png',
      link: '/Projects/SwissCalc'
    },
    {
      title: 'Rxknephew Lyric Picker',
      imageUrl: '/images/rxknephew.png',
      link: '/Projects/LyricRandomizer'
    },


  ];

export default function Projects() {
    return (
        <div className="bg-neutral-950 min-h-screen flex flex-col items-center p-8">
        <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">
                Projects
            </h1>
            <br/><hr/><br/>
            {/* Grid with 2 items per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <Link key={index} href={project.link}>
                <div className="relative w-full aspect-video cursor-pointer border-4 border-gray-300 rounded-lg overflow-hidden">
                    <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {project.title}
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
        </div>
    );
}
  
  