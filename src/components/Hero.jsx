import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-[90vh] overflow-hidden">
      {/* Interactive Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            MS Data Science • AI • Analytics
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">a Data Scientist</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            I craft end‑to‑end data products — from wrangling and feature engineering to modeling,
            MLOps, and elegant visualizations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/10 ring-1 ring-white/10 transition hover:translate-y-[-2px]"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
            >
              My Toolkit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
