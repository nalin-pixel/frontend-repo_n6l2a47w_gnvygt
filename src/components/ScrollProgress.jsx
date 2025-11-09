import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 24, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-[3px] origin-left z-50 bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400"
    />
  );
}
