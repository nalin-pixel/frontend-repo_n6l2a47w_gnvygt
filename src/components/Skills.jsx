import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, LineChart, Code2, Brain } from 'lucide-react';

const skills = [
  { icon: Brain, label: 'Machine Learning', items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Time Series'] },
  { icon: Cpu, label: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'Transformers', 'CV/NLP'] },
  { icon: Database, label: 'Data Engineering', items: ['SQL', 'Spark', 'Airflow', 'dbt'] },
  { icon: Code2, label: 'Programming', items: ['Python', 'R', 'SQL', 'Bash'] },
  { icon: LineChart, label: 'Visualization', items: ['Plotly', 'Tableau', 'Altair', 'Power BI'] },
];

const SkillCard = ({ icon: Icon, label, items }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur shadow-sm hover:shadow-cyan-500/10 transition"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/10 p-2">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <h3 className="text-white font-semibold">{label}</h3>
    </div>
    <div className="mt-3 text-sm text-white/70">
      {items.join(' • ')}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Toolkit</h2>
          <p className="text-white/60 mt-1">Technologies I use to build data-driven products.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <SkillCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
