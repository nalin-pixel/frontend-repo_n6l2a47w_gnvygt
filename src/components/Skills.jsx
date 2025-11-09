import React from 'react';
import { Brain, Database, LineChart, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './SectionReveal';

const SkillCard = ({ icon: Icon, title, items, i }) => (
  <motion.div
    className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-white/70 leading-relaxed">{items}</p>
  </motion.div>
);

const Skills = () => {
  const cards = [
    { icon: Brain, title: 'Machine Learning', items: 'Scikit-learn, XGBoost, LightGBM, Feature Engineering, Model Interpretability' },
    { icon: Database, title: 'Data Engineering', items: 'SQL, Pandas, Airflow, dbt, APIs, ETL, Data Quality' },
    { icon: LineChart, title: 'Visualization', items: 'Plotly, Altair, Tableau, Dashboards, Storytelling' },
    { icon: Terminal, title: 'MLOps', items: 'Docker, GitHub Actions, FastAPI, CI/CD, Monitoring' },
  ];

  return (
    <Section id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <SkillCard key={c.title} icon={c.icon} title={c.title} items={c.items} i={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
