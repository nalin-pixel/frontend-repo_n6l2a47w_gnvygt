import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxRibbons() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollY, [0, 600], [0, 80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  const rotate = useTransform(scrollY, [0, 600], [0, 8]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y: y1, rotate }} className="absolute -top-24 -left-1/4 w-[140%] h-48 bg-gradient-to-r from-fuchsia-600/30 via-violet-500/20 to-cyan-400/30 blur-2xl" />
      <motion.div style={{ y: y2, rotate }} className="absolute top-40 -right-1/4 w-[120%] h-40 bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-fuchsia-600/30 blur-2xl" />
    </div>
  );
}
