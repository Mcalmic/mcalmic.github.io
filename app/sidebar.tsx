// components/Sidebar.js
'use client'
import { useState, useEffect } from 'react';

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      const sections = ['home', 'projects', 'work'];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }, []);

    return (
      <div className="w-48 flex-shrink-0 border-r border-gray-300 dark:border-gray-700">
        <div className="sticky top-1/2 -translate-y-1/2 pr-12">
          <div className="mb-6 pb-6 border-b border-gray-300 dark:border-gray-700">
            <div className="text-lg font-semibold">Michael&apos;s Website</div>
          </div>

          <nav className="flex flex-col space-y-4 mb-6 pb-6 border-b border-gray-300 dark:border-gray-700">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`cursor-pointer hover:underline transition-colors ${
                activeSection === 'home' ? 'text-violet-400 font-semibold' : ''
              }`}
            >
              Home
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`cursor-pointer hover:underline transition-colors ${
                activeSection === 'projects' ? 'text-violet-400 font-semibold' : ''
              }`}
            >
              Projects
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`cursor-pointer hover:underline transition-colors ${
                activeSection === 'work' ? 'text-violet-400 font-semibold' : ''
              }`}
            >
              Work and Resume
            </a>
          </nav>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/linkedin-transparent.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://mcalmic.itch.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/itchiowhite.svg" alt="Itch.io" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://github.com/mcalmic" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/github.png" alt="GitHub" className="w-6 h-6 object-contain" />
            </a>            
            <a href="https://twitter.com/themcalmic" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    );
  };