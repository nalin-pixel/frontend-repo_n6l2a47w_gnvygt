import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SourceDump from './components/SourceDump';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ErrorBoundary>
        <main>
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Resume />
          <Contact />
          <SourceDump />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
