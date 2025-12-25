'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import { HomeSection } from './components/HomeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkSection } from './components/WorkSection';

export default function Home() {
  // Handle hash navigation on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="scroll-container">
      <Head>
        <title>Michael&apos;s Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection />
      <ProjectsSection />
      <WorkSection />
    </div>
  );
}
