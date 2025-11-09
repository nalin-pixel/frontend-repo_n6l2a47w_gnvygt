import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './SectionReveal';

const projects = [
  {
    title: 'Churn Prediction',
    desc: 'Binary classifier with feature importance and SHAP explanations.',
    tags: ['XGBoost', 'SHAP', 'MLOps'],
    link: '#',
  },
  {
    title: 'Demand Forecasting',
    desc: 'Multi-step time series forecasting with model ensembling.',
    tags: ['Prophet', 'LSTM', 'Python'],
    link: '#',
  },
  {
    title: 'NLP Topic Modeling',
    desc: 'Discover latent themes across millions of documents.',
    tags: ['BERTopic', 'spaCy', 'Vector DB'],
    link: '#',
  },
];

function Tag({ children }) {
  return (
    <span className="px-2 py-0.5 rounded-md text-xs bg-white/10 border border-white/10 text-white/80">{children}</span>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Projects" subtitle="Selected analyses and systems that combine robust modeling with clean presentation." />

        <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
            >
              <div className="p-5">
                <motion.h3 className="text-lg font-semibold group-hover:text-white" layout>{p.title}</motion.h3>
                <motion.p className="mt-2 text-sm text-white/70" layout>{p.desc}</motion.p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
