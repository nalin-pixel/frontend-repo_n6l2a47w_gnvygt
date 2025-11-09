import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">About</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-white/80">
              I’m a data scientist focused on building production-ready ML systems and compelling data stories.
              My work bridges analytics, engineering, and user-centered delivery.
            </p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Based wherever great problems are.</li>
              <li className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Background in statistics and computer science.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">Focus Areas</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Forecasting and experimentation</li>
              <li>LLM-powered analytics and retrieval</li>
              <li>Metric design and decision science</li>
              <li>End-to-end product thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
