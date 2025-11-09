import React from 'react';
import { Brain, Database, LineChart, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-white/70 leading-relaxed">{items}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard icon={Brain} title="Machine Learning" items="Scikit-learn, XGBoost, LightGBM, Feature Engineering, Model Interpretability" />
          <SkillCard icon={Database} title="Data Engineering" items="SQL, Pandas, Airflow, dbt, APIs, ETL, Data Quality" />
          <SkillCard icon={LineChart} title="Visualization" items="Plotly, Altair, Tableau, Dashboards, Storytelling" />
          <SkillCard icon={Terminal} title="MLOps" items="Docker, GitHub Actions, FastAPI, CI/CD, Monitoring" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
