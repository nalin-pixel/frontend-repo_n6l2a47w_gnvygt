import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Data Science Portfolio</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#home" className="text-white/80 hover:text-white">Home</a>
          <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
