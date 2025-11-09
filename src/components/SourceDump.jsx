import React, { useMemo, useState } from 'react';

// Import file sources as raw text using Vite's ?raw modifier
import appCode from '../App.jsx?raw';
import navbarCode from './Navbar.jsx?raw';
import heroCode from './Hero.jsx?raw';
import skillsCode from './Skills.jsx?raw';
import projectsCode from './Projects.jsx?raw';
import aboutCode from './About.jsx?raw';
import resumeCode from './Resume.jsx?raw';
import contactCode from './Contact.jsx?raw';
import projectModalsCode from './ProjectModals.jsx?raw';

const SourceDump = () => {
  const [expanded, setExpanded] = useState(false);

  const combined = useMemo(() => {
    const parts = [
      ['src/App.jsx', appCode],
      ['src/components/Navbar.jsx', navbarCode],
      ['src/components/Hero.jsx', heroCode],
      ['src/components/Skills.jsx', skillsCode],
      ['src/components/Projects.jsx', projectsCode],
      ['src/components/ProjectModals.jsx', projectModalsCode],
      ['src/components/About.jsx', aboutCode],
      ['src/components/Resume.jsx', resumeCode],
      ['src/components/Contact.jsx', contactCode],
    ];
    return parts
      .map(([name, code]) => `/*================ ${name} ================*/\n${code}\n`)
      .join('\n');
  }, []);

  return (
    <section id="source" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Source Code</h2>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            {expanded ? 'Hide' : 'Show'}
          </button>
        </div>
        {expanded && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <textarea
              readOnly
              value={combined}
              className="w-full h-[60vh] bg-black text-green-200 font-mono text-xs p-4 rounded-lg border border-white/10"
            />
            <p className="mt-3 text-white/70 text-sm">
              This read-only view is generated at runtime using Vite raw imports. Copy any section you need.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SourceDump;
