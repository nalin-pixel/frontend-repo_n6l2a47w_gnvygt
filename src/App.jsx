import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black text-white selection:bg-cyan-200 selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Your Name — Data Science Portfolio
          </p>
          <p>
            Built with React, Tailwind, and a live Spline scene.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
