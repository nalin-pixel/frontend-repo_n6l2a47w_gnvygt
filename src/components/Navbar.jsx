import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">Data Science Portfolio</a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">GitHub</a>
        </div>
      </nav>
    </header>
  );
}
