import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
