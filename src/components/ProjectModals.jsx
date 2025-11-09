import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition">
    <ExternalLink className="w-4 h-4" /> {children}
  </a>
);

const CodeLink = ({ href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white text-sm border border-white/10 hover:bg-white/15 transition">
    <Github className="w-4 h-4" /> Source
  </a>
);

export const useProjectModal = () => {
  const [active, setActive] = useState(null); // {title, desc, tech, demo, code}
  const open = (project) => setActive(project);
  const close = () => setActive(null);
  const Modal = () => (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="relative z-[61] w-full max-w-2xl rounded-2xl border border-white/10 bg-black p-6 shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="mt-1 text-white/70">{active.desc}</p>
              </div>
              <button onClick={close} className="text-white/60 hover:text-white">✕</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.tech?.map((t) => (
                <span key={t} className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs text-white/80 border border-white/10">{t}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              {active.demo && <DemoLink href={active.demo}>Live demo</DemoLink>}
              {active.code && <CodeLink href={active.code} />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return { open, close, Modal };
};
