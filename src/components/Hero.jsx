import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ParallaxRibbons from './ParallaxRibbons';
import MagneticButton from './MagneticButton';

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
  // System-provided Spline asset (dark, futuristic animation)
  const sceneUrl = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode';

  return (
    <section id="home" className="relative h-[85vh] sm:h-[90vh] bg-black text-white overflow-hidden">
      <SafeSpline url={sceneUrl} />

      {/* Parallax ambient ribbons */}
      <ParallaxRibbons />

      {/* Tint overlay that doesn't block pointer events */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/20 backdrop-blur"
        >
          Data • AI • Visualization
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          Interactive Data Science Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-xl text-white/80"
        >
          Exploring machine learning, analytics, and compelling visual narratives. Built with React, Tailwind, and a real-time 3D cover.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex items-center gap-3"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact" className="bg-transparent text-white border hover:bg-white/10">Contact</MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
