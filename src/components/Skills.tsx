import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { 
  Database, Table, Cpu, Grid, 
  Server, CheckCircle2, Rocket 
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'Programming' | 'Version Control' | 'Databases' | 'Data Analysis & Visualization' | 'Tools';
  icon: React.ReactNode;
  level: number;
  color: string;
  details: string[];
}

const skillsData: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', icon: <FaPython className="text-[#3776AB]" size={28} />, level: 92, color: 'hover:shadow-blue-500/20 hover:border-blue-500/30', details: ['Data analysis', 'Automation scripts', 'OOPs', 'Data frames'] },
  { name: 'SQL', category: 'Programming', icon: <Database className="text-[#00758F]" size={28} />, level: 88, color: 'hover:shadow-cyan-500/20 hover:border-cyan-500/30', details: ['Aggregations', 'Window functions', 'Joins', 'Schema design'] },

  // Version Control
  { name: 'Git', category: 'Version Control', icon: <FaGitAlt className="text-[#F05032]" size={28} />, level: 88, color: 'hover:shadow-red-500/20 hover:border-red-500/30', details: ['Branch management', 'Version tracking', 'Commits', 'Reverting'] },
  { name: 'GitHub', category: 'Version Control', icon: <FaGithub className="text-white" size={28} />, level: 88, color: 'hover:shadow-white/10 hover:border-white/20', details: ['Repositories', 'Pull requests', 'Collaborative workflow', 'Actions'] },

  // Databases
  { name: 'MySQL', category: 'Databases', icon: <Server className="text-[#00758F]" size={28} />, level: 86, color: 'hover:shadow-cyan-500/20 hover:border-cyan-500/30', details: ['Relational design', 'Query optimization', 'Indexes', 'Views'] },

  // Data Analysis & Visualization
  { name: 'Pandas', category: 'Data Analysis & Visualization', icon: <Table className="text-[#150458]" size={28} />, level: 90, color: 'hover:shadow-indigo-500/20 hover:border-indigo-500/30', details: ['Dataframes', 'Data cleaning', 'Grouping', 'Merging'] },
  { name: 'NumPy', category: 'Data Analysis & Visualization', icon: <Cpu className="text-[#013243]" size={28} />, level: 85, color: 'hover:shadow-sky-500/20 hover:border-sky-500/30', details: ['Multi-dimensional arrays', 'Vectorization', 'Mathematical stats', 'Linear algebra'] },
  { name: 'Excel', category: 'Data Analysis & Visualization', icon: <Grid className="text-[#107C41]" size={28} />, level: 88, color: 'hover:shadow-green-500/20 hover:border-green-500/30', details: ['VLOOKUP/XLOOKUP', 'Pivot tables', 'Power Query', 'Formulas'] },

  // Tools
  { name: 'Antigravity', category: 'Tools', icon: <Rocket className="text-[#10B981]" size={28} />, level: 95, color: 'hover:shadow-emerald-500/20 hover:border-emerald-500/30', details: ['Agentic AI coding', 'Autonomous workflow', 'Full-stack prototyping', 'AI collaboration'] }
];

const categories = ['All', 'Programming', 'Version Control', 'Databases', 'Data Analysis & Visualization', 'Tools'] as const;

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section 
      id="skills" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute top-[30%] right-[5%] w-80 h-80 rounded-full bg-indigo-500/5 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
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
            My Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-900/40 p-2 rounded-2xl border border-white/5 max-w-5xl mx-auto backdrop-blur-md">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 border border-indigo-500/20 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`group flex flex-col p-6 rounded-2xl glass-card border border-white/5 ${skill.color} transition-all duration-500 relative overflow-hidden`}
              >
                {/* Micro-glow background on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 filter blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header: Icon & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-heading font-bold text-white text-base tracking-wide">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Skill level badge */}
                  <span className="text-xs font-bold font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 px-2 py-0.5 rounded-md">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Animation */}
                <div className="w-full bg-slate-950/80 rounded-full h-1.5 mb-5 border border-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  />
                </div>

                {/* Detailed Subskills list */}
                <div className="mt-auto space-y-1.5 border-t border-white/5 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 text-left">Scope & Focus</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {skill.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-1.5 text-xs text-muted text-left">
                        <CheckCircle2 size={11} className="text-indigo-400 flex-shrink-0" />
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
