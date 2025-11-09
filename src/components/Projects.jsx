import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useProjectModal } from './ProjectModals';

const projects = [
  {
    title: 'Time Series Forecasting',
    desc: 'End-to-end demand forecasting with feature stores and model monitoring.',
    tags: ['Python', 'XGBoost', 'MLFlow'],
    demo: 'https://example.com/forecasting-demo',
    code: 'https://github.com/yourname/forecasting',
  },
  {
    title: 'NLP Topic Modeling',
    desc: 'Interactive topic exploration using BERTopic and dashboards.',
    tags: ['BERTopic', 'Plotly', 'FastAPI'],
    demo: 'https://example.com/topic-modeling',
    code: 'https://github.com/yourname/topic-modeling',
  },
  {
    title: 'Recommender System',
    desc: 'Hybrid collaborative + content-based recommender with A/B evaluation.',
    tags: ['Pandas', 'LightGBM', 'Docker'],
    demo: 'https://example.com/recommender',
    code: 'https://github.com/yourname/recommender',
  },
];

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs text-white/80 border border-white/10">{children}</span>
);

const Projects = () => {
  const { open, Modal } = useProjectModal();

  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => open({ title: p.title, desc: p.desc, tech: p.tags, demo: p.demo, code: p.code })}
              className="text-left group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-white/70">{p.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Modal />
    </section>
  );
};

export default Projects;
