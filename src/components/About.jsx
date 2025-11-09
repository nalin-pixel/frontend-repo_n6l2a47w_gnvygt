import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          <p className="text-white/75 leading-relaxed">
            I’m a data scientist focused on building robust, human‑centered AI systems. I enjoy
            exploring datasets, prototyping solutions quickly, and delivering maintainable pipelines
            that scale. Currently pursuing an MS in Data Science.
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Open to remote & hybrid roles</li>
            <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> MS Data Science (in progress)</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Contact: your.email@example.com</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
        >
          <h3 className="font-semibold">What I’m exploring now</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-white/70 space-y-1">
            <li>Productionizing LLM features with retrieval and evaluation loops</li>
            <li>Feature stores and experiment tracking at scale</li>
            <li>Modern data apps with streaming analytics</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
