import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline scene as the full-background canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6v6z8wz3f3UQXyC6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-24 top-0 h-56 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Data Science, done with craft.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          I build reliable ML systems, insightful analytics, and delightful visualizations. Explore my skills and projects below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">View Projects</a>
          <a href="#skills" className="px-5 py-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition">My Skills</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
