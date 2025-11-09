import React from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition-colors">Data Science Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            <Mail className="inline w-4 h-4 mr-1" /> Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
