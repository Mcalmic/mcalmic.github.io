'use client'

import { useRef } from 'react';
import Link from 'next/link';
import { Project } from '../lib/projects';

const sizeClass = {
  normal: 'col-span-1 row-span-1',
  wide: 'col-span-2 row-span-1',
  full: 'col-span-2 row-span-2',
};

const aspectClass = {
  normal: 'aspect-square',
  wide: 'aspect-[2/1]',
  full: 'aspect-square',
};

// 'half': overlay slides up to 50% of card height on hover
// 'full': overlay stays fixed at bottom, only description text expands inside it
const overlayClass = {
  half: 'flex flex-col justify-end max-h-20 group-hover:max-h-[50%] transition-[max-height] duration-300 ease-out overflow-hidden',
  full: 'flex flex-col justify-end max-h-20 group-hover:max-h-full transition-[max-height] duration-300 ease-out overflow-hidden',
};

export function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={sizeClass[project.size]}>
      <Link href={project.link}>
        <div
          className={`group relative w-full ${aspectClass[project.size]} cursor-pointer border-2 border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-violet-400`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${project.videoUrl ? 'group-hover:opacity-0' : ''}`}
          />

          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Always-visible bottom gradient + title */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 ${overlayClass[project.hoverStyle]}`}>
            {project.highlight && (
              <div className="text-yellow-400 text-xs font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.highlight}
              </div>
            )}
            <div className="text-white font-bold text-lg drop-shadow-lg">
              {project.title}
            </div>
            <div className="text-gray-300 text-sm mt-0.5 max-h-0 overflow-hidden opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
              {project.description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
