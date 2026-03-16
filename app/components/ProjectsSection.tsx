import { projects } from '../lib/projects';
import { ProjectCard } from './ProjectCard';

const sections = [
  { id: 'game', label: 'Games' },
  { id: 'web', label: 'Web Projects' },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-section min-h-screen bg-neutral-950 flex flex-col items-center p-8 overflow-y-auto">
      <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">
          Projects
        </h1>
        <br /><hr />

        {sections.map(section => {
          const filtered = projects.filter(p => p.category === section.id);
          return (
            <div key={section.id} className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">{section.label}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {filtered.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
