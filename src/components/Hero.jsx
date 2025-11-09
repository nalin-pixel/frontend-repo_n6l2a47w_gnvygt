import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

// Fallback hero that doesn't crash if Spline fails
function SafeSpline({ url }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Interactive scene unavailable</h2>
          <p className="text-white/70 mt-2">We couldn't load the 3D asset right now. Enjoy the portfolio content below.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Spline
        scene={url}
        style={{ width: '100%', height: '100%' }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Hero() {
  const sceneUrl = 'https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode';

  return (
    <section id="home" className="relative h-[85vh] sm:h-[90vh] bg-black text-white overflow-hidden">
      <SafeSpline url={sceneUrl} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/20 backdrop-blur">Data • AI • Visualization</span>
        <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Interactive Data Science Portfolio</h1>
        <p className="mt-4 max-w-xl text-white/80">Exploring machine learning, analytics, and compelling visual narratives. Built with React, Tailwind, and a real-time 3D cover.</p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 text-white">Contact</a>
        </div>
      </div>
    </section>
  );
}
