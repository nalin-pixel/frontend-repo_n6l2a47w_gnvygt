import React from 'react';

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
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Selected analyses and systems that combine robust modeling with clean presentation.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
