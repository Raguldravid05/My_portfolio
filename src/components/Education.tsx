import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Glow highlight */}
      <div className="absolute top-[40%] right-[15%] w-72 h-72 rounded-full bg-indigo-500/5 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-cyan-500/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400"
          >
            Academic Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical line indicator */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary to-accent opacity-20 -translate-x-[1px]" />

          <div className="space-y-16">
            
            {/* Timeline Node 1: College */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between">
              
              {/* Timeline Center Bullet */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500/50 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-indigo-500/20">
                <GraduationCap className="text-cyan-400" size={14} />
              </div>

              {/* Space filler for layout on large screens */}
              <div className="hidden md:block w-[calc(50%-32px)]" />

              {/* College Card (Right on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[calc(50%-32px)] pl-12 md:pl-10 text-left"
              >
                <div className="p-6 md:p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden group hover:border-indigo-500/20">
                  {/* Glowing background spotlight on hover */}
                  <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary/10 filter blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md mb-4 text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span>Undergraduate Degree</span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-heading font-black text-xl md:text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                    B.Tech Information Technology
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400 mt-1 flex items-center gap-1.5">
                    <span>CSI College of Engineering, Ketti</span>
                  </p>

                  <div className="flex flex-wrap gap-y-2 gap-x-4 my-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>Expected Graduation: 2027</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-rose-400" />
                      <span>The Nilgiris, Tamil Nadu</span>
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Academic Score</span>
                      <span className="text-xl font-black text-white mt-0.5">7.32 <span className="text-xs font-medium text-slate-400">/ 10</span></span>
                      <span className="text-[9px] text-cyan-400 font-semibold mt-0.5 uppercase tracking-wide">Till 5th Semester</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Core Focus</span>
                      <span className="text-xs font-semibold text-white mt-1.5 truncate">Data Analytics</span>
                      <span className="text-[9px] text-indigo-300 font-medium uppercase tracking-wide">SQL, Python, ETL</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Relevant Studies</h4>
                    <p className="text-xs text-muted leading-relaxed font-light">
                      Pursuing foundational and practical courses in Relational Databases (DBMS), Data Structures, 
                      Object-Oriented Programming, and Data Mining. Actively designing analytics pipelines and 
                      database structures.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Timeline Node 2: Schooling / Secondary Education */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between">
              
              {/* Timeline Center Bullet */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500/50 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/20">
                <BookOpen className="text-cyan-400" size={14} />
              </div>

              {/* School Card (Left on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 md:pr-10 text-left md:text-right"
              >
                <div className="p-6 md:p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden group hover:border-cyan-500/20">
                  {/* Glowing background spotlight on hover */}
                  <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-cyan-500/5 filter blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md mb-4 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                    <span>Higher Secondary</span>
                  </div>

                  {/* Title & School */}
                  <h3 className="font-heading font-black text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                    HSC & SSLC Education
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-1">
                    Tamil Nadu State Board
                  </p>

                  <div className="flex flex-wrap md:justify-end gap-y-2 gap-x-4 my-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>Completed: 2023</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={13} className="text-amber-400" />
                      <span>Focused: Math & Computer Science</span>
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed font-light">
                    Built a strong foundation in Mathematics, Statistics, and basic Programming concepts, 
                    facilitating an analytical approach to solving computational and business problems.
                  </p>
                </div>
              </motion.div>

              {/* Space filler for layout on large screens */}
              <div className="hidden md:block w-[calc(50%-32px)]" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
