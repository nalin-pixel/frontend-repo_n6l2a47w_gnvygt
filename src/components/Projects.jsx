import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Predictive Maintenance with Time Series',
    desc: 'End-to-end pipeline predicting equipment failure using sensor streams. Feature store, model registry, and dashboard.',
    tags: ['Python', 'XGBoost', 'MLflow', 'Plotly'],
    link: '#',
  },
  {
    title: 'Customer Churn Modeling',
    desc: 'Built interpretable churn model with SHAP explanations and automated data quality checks.',
    tags: ['Scikit-learn', 'SHAP', 'Airflow'],
    link: '#',
  },
  {
    title: 'NLP: Topic Discovery at Scale',
    desc: 'Large corpus topic modeling with transformer embeddings and interactive visualization.',
    tags: ['PyTorch', 'Transformers', 'UMAP', 'HDBSCAN'],
    link: '#',
  },
];

const Tag = ({ children }) => (
  <span className="text-xs text-white/70 rounded-full border border-white/10 bg-white/5 px-2 py-1">
    {children}
  </span>
);

const ProjectCard = ({ title, desc, tags, link }) => (
  <motion.a
    href={link}
    whileHover={{ y: -6 }}
    className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur shadow-sm transition hover:shadow-cyan-500/10"
  >
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-white/70" />
    </div>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <p className="text-white/60 mt-1">A selection of things I’ve built and shipped.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
