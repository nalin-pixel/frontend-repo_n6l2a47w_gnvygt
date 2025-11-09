import React, { useMemo } from 'react';
import { Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Resume = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const handleDownload = () => {
    const content = `Name: Your Name\nRole: Data Scientist\nEmail: you@example.com\n\nSummary\n———\nPragmatic data scientist with experience across ML, analytics, and MLOps.\n\nSkills\n———\n• Machine Learning: scikit-learn, XGBoost, LightGBM\n• Data: SQL, pandas, Airflow, dbt\n• MLOps: Docker, FastAPI, CI/CD\n\nExperience\n———\n• Company – Data Scientist (20XX–Present)\n\nEducation\n———\n• B.S./M.S. in Statistics / Computer Science`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" ref={sectionRef} className="relative bg-black text-white py-20">
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Resume</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold">Download a quick summary</h3>
            <p className="mt-2 text-white/70 max-w-2xl">Grab a concise, one-page snapshot of my background, recent work, and skills. I can tailor a version for specific roles on request.</p>
          </div>
          <button onClick={handleDownload} className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
