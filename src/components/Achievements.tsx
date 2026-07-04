import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Laptop, BarChart3, Binary, Flame } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  detail: string;
  icon: React.ReactNode;
  theme: string;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: 'Built AI-powered applications',
    detail: 'Successfully constructed Prepzo AI, an exam assistant utilizing Retrieval-Augmented Generation (RAG) to query complex technical textbooks instantly.',
    icon: <Cpu className="text-cyan-400" size={24} />,
    theme: 'hover:shadow-cyan-500/10 hover:border-cyan-500/25',
  },
  {
    id: 2,
    title: 'Developed responsive web applications',
    detail: 'Crafted modern, fluid single-page and multi-page user interfaces with React, Vite, and Tailwind CSS, focusing on performance optimization.',
    icon: <Laptop className="text-indigo-400" size={24} />,
    theme: 'hover:shadow-indigo-500/10 hover:border-indigo-500/25',
  },
  {
    id: 3,
    title: 'Created interactive dashboards',
    detail: 'Designed visual business dashboards using Power BI and SQL database backends to map operational sales pipelines and transaction metrics.',
    icon: <BarChart3 className="text-amber-400" size={24} />,
    theme: 'hover:shadow-amber-500/10 hover:border-amber-500/25',
  },
  {
    id: 4,
    title: 'Hands-on experience with Data Analytics',
    detail: 'Processed, parsed, and performed statistical analysis on raw telemetry datasets using Python, Pandas, NumPy, and Scikit-Learn libraries.',
    icon: <Binary className="text-purple-400" size={24} />,
    theme: 'hover:shadow-purple-500/10 hover:border-purple-500/25',
  },
  {
    id: 5,
    title: 'Passionate about solving real-world problems',
    detail: 'Applying software engineering principles, machine learning integration, and clean UX designs to build tools that simplify learning and business tasks.',
    icon: <Flame className="text-rose-400" size={24} />,
    theme: 'hover:shadow-rose-500/10 hover:border-rose-500/25',
  },
];

const Achievements: React.FC = () => {
  return (
    <section 
      id="achievements" 
      className="relative py-24 border-b border-white/5 bg-slate-950/20"
    >
      {/* Decorative Blob */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Key Achievements
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden group flex flex-col justify-between ${item.theme}`}
            >
              {/* Inner ambient light overlay */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-xl pointer-events-none" />

              <div className="space-y-4">
                {/* Checkmark icon + Category icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 text-cyan-400">
                    {item.icon}
                  </div>
                  <CheckCircle2 className="text-emerald-400 animate-pulse" size={20} />
                </div>

                {/* Text elements */}
                <div className="space-y-2 text-left">
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </div>

              {/* Bottom tag decoration */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[9px] uppercase tracking-wider text-slate-500 font-bold text-left select-none">
                ✓ Verified Competence
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
