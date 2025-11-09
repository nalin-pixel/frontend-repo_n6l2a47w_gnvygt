import React from 'react';
import { motion } from 'framer-motion';

// Generic section wrapper with reveal-on-enter and subtle perspective
export function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`relative bg-black text-white py-20 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-white/70 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
