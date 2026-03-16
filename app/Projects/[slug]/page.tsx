import { projects } from '../../lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects
    .filter(p => p.slug)
    .map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Hero */}
      <div className="relative w-full aspect-video max-h-[50vh] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      <div className="max-w-screen-md mx-auto px-8 py-10 xl:max-w-screen-lg">
        <Link
          href="/#projects"
          className="text-violet-400 hover:text-violet-300 text-sm transition-colors"
        >
          ← Back to Projects
        </Link>

        <div className="mt-6">
          {project.highlight && (
            <p className="text-yellow-400 text-sm font-semibold mb-2">{project.highlight}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-violet-400">{project.title}</h1>
          <p className="text-gray-400 text-lg mt-2">{project.description}</p>
        </div>

        <hr className="border-gray-700 my-8" />

        {project.extendedDescription && (
          <div className="mb-8 text-gray-300 leading-relaxed whitespace-pre-line">
            {project.extendedDescription}
          </div>
        )}

        {project.externalLink && (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Play →
          </a>
        )}
      </div>
    </div>
  );
}
