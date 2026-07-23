import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, BarChart3, Database, Play, X, Check, Award, Cpu
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  themeColor: string; // Used for border & glow
  visualType: 'cricket' | 'sales' | 'prepzo';
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Cricket Analytics',
    shortDesc: 'Analyzed 5,000+ match records using Python and Pandas to evaluate player performance metrics.',
    description: 'Analyzed 5,000+ match records using Python and Pandas to evaluate player performance metrics, then distilled the findings into clear, actionable insights for strategic decision-making and consistency tracking.',
    highlights: [
      'Analyzed 5,000+ historical cricket match records',
      'Evaluated key player performance metrics and strike rates',
      'Distilled statistical findings into actionable team insights',
      'Cleansed data and structured historical performance trends'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Analysis'],
    githubUrl: 'https://github.com/Raguldravid05/Cricket-Analytics',
    demoUrl: '#',
    icon: <Cpu className="text-cyan-400" size={32} />,
    themeColor: 'rgba(6, 182, 212, 0.3)',
    visualType: 'cricket'
  },
  {
    id: 2,
    title: 'Sales Data Dashboard',
    shortDesc: 'Interactive Power BI and Tableau dashboard on 10,000+ rows of sales data.',
    description: 'Designed an interactive Power BI and Tableau dashboard on 10,000+ rows of sales data, presenting trends and KPIs in an accessible format for business decision-making and performance monitoring.',
    highlights: [
      'Designed interactive Power BI and Tableau dashboards',
      'Analyzed 10,000+ rows of complex sales transaction data',
      'Presented geographical trends and KPIs in accessible formats',
      'Enabled data-driven executive decision-making'
    ],
    tech: ['Power BI', 'Tableau', 'SQL', 'DAX Formulas', 'Excel Data Models', 'KPI Analysis'],
    githubUrl: 'https://github.com/Raguldravid05/Sales-Dashboard',
    demoUrl: '#',
    icon: <BarChart3 className="text-indigo-400" size={32} />,
    themeColor: 'rgba(99, 102, 241, 0.3)',
    visualType: 'sales'
  },
  {
    id: 3,
    title: 'Prepzo',
    shortDesc: 'AI-powered study platform generating exam answers from syllabus PDFs.',
    description: 'AI-powered study platform for engineering students that enables users to upload syllabus PDFs and study materials, ask subject-related questions, and generate exam-oriented 2-mark, 8-mark, and 13-mark answers using AI.',
    highlights: [
      'AI study platform tailored for engineering curriculum',
      'Upload syllabus PDFs and study materials for RAG indexing',
      'Ask subject-related queries with instant contextual retrieval',
      'Generate structured 2-mark, 8-mark, and 13-mark exam answers'
    ],
    tech: ['Python', 'FastAPI', 'RAG', 'LLM Orchestration', 'Vector Databases', 'AI Assistants'],
    githubUrl: 'https://github.com/Raguldravid05/Prepzo',
    demoUrl: '#',
    icon: <Database className="text-purple-400" size={32} />,
    themeColor: 'rgba(139, 92, 246, 0.3)',
    visualType: 'prepzo'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Cricket chart values
  const [cricketChartType, setCricketChartType] = useState<'runs' | 'strikeRate'>('runs');
  // Sales chart values
  const [salesCategory, setSalesCategory] = useState<'north' | 'south' | 'east'>('north');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = -((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`;
    
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(99, 102, 241, 0.12), transparent 80%)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.background = 'transparent';
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full bg-cyan-500/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 filter blur-[100px] pointer-events-none" />

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
            Data Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Projects Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                  setHoveredIndex(null);
                }}
                className={`project-card relative flex flex-col justify-between rounded-2xl glass-card border cursor-pointer overflow-hidden transition-all duration-300 ${
                  isHovered ? 'border-white/20 shadow-xl shadow-indigo-500/10' : 'border-white/5'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Radial Spotlight overlay */}
                <div className="card-glow absolute inset-0 pointer-events-none transition-all duration-300" />
                
                {/* Glowing top line tag */}
                <div 
                  className="absolute top-0 inset-x-0 h-[3px] opacity-35 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ backgroundColor: project.themeColor.split(',')[0].replace('rgba', 'rgb') + ')' }}
                />

                {/* PROJECT THUMBNAIL (Premium Interactive SVG / CSS charts) */}
                <div className="relative aspect-video bg-slate-950/80 border-b border-white/5 flex items-center justify-center overflow-hidden p-4 group select-none">
                  
                  {project.visualType === 'cricket' && (
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                        <span>Batsman Profile Index</span>
                        <div className="flex space-x-1.5 font-mono">
                          <span className={cricketChartType === 'runs' ? 'text-cyan-400' : ''} onClick={(e) => { e.stopPropagation(); setCricketChartType('runs'); }}>Runs</span>
                          <span className={cricketChartType === 'strikeRate' ? 'text-indigo-400' : ''} onClick={(e) => { e.stopPropagation(); setCricketChartType('strikeRate'); }}>SR</span>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-around h-16 pt-2">
                        {cricketChartType === 'runs' ? (
                          [34, 56, 12, 78, 90, 45, 67, 102].map((runs, i) => (
                            <div key={i} className="flex flex-col items-center w-6">
                              <div className="w-2.5 bg-gradient-to-t from-cyan-600/30 to-cyan-400 rounded-t-sm" style={{ height: `${runs / 1.5}px` }} />
                              <span className="text-[6px] text-slate-500 mt-1 font-mono">I{i+1}</span>
                            </div>
                          ))
                        ) : (
                          [110, 145, 95, 160, 210, 120, 135, 185].map((sr, i) => (
                            <div key={i} className="flex flex-col items-center w-6">
                              <div className="w-2.5 bg-gradient-to-t from-indigo-600/30 to-indigo-400 rounded-t-sm" style={{ height: `${sr / 2.5}px` }} />
                              <span className="text-[6px] text-slate-500 mt-1 font-mono">I{i+1}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                  {project.visualType === 'sales' && (
                    <div className="w-full h-full flex flex-col justify-between text-left">
                      <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                        <span>Regional Transaction KPIs</span>
                        <div className="flex space-x-1">
                          {['north', 'south', 'east'].map((r) => (
                            <span 
                              key={r} 
                              className={`${salesCategory === r ? 'text-indigo-400 font-black' : ''} cursor-pointer`}
                              onClick={(e) => { e.stopPropagation(); setSalesCategory(r as any); }}
                            >
                              {r[0].toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-3 gap-2 items-center text-center">
                        <div className="p-1 bg-slate-900/60 border border-white/5 rounded">
                          <span className="text-[6px] uppercase text-slate-500">Gross Sales</span>
                          <div className="text-[10px] font-black text-white mt-0.5">
                            {salesCategory === 'north' ? '$48,290' : salesCategory === 'south' ? '$39,120' : '$54,340'}
                          </div>
                        </div>
                        <div className="p-1 bg-slate-900/60 border border-white/5 rounded">
                          <span className="text-[6px] uppercase text-slate-500">Margin</span>
                          <div className="text-[10px] font-black text-emerald-400 mt-0.5">
                            {salesCategory === 'north' ? '42.5%' : salesCategory === 'south' ? '39.8%' : '44.1%'}
                          </div>
                        </div>
                        <div className="p-1 bg-slate-900/60 border border-white/5 rounded">
                          <span className="text-[6px] uppercase text-slate-500">Refunds</span>
                          <div className="text-[10px] font-black text-rose-400 mt-0.5">
                            {salesCategory === 'north' ? '1.2%' : salesCategory === 'south' ? '0.9%' : '2.1%'}
                          </div>
                        </div>
                      </div>

                      {/* Mini line visualization */}
                      <div className="h-6 w-full flex items-end">
                        <svg className="w-full h-full text-indigo-400" viewBox="0 0 100 20">
                          <path 
                            d={salesCategory === 'north' 
                              ? "M0,15 Q25,5 50,12 T100,2" 
                              : salesCategory === 'south' 
                              ? "M0,18 Q25,12 50,8 T100,5" 
                              : "M0,10 Q25,18 50,6 T100,8"
                            } 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                          />
                          <circle cx="100" cy={salesCategory === 'north' ? '2' : salesCategory === 'south' ? '5' : '8'} r="2" fill="#06B6D4" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.visualType === 'prepzo' && (
                    <div className="w-full h-full flex flex-col justify-between text-left">
                      <div className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                        <span>Prepzo RAG AI Q&A Engine</span>
                      </div>

                      <div className="flex-1 flex items-center justify-between px-2 font-mono text-[9px] text-slate-400 relative">
                        {/* Node 1: PDF Syllabus */}
                        <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-white/5 z-10">
                          <Database size={12} className="text-cyan-400 mb-0.5" />
                          <span>PDF Syllabus</span>
                        </div>
                        
                        {/* Connecting Path */}
                        <div className="flex-1 h-[2px] bg-slate-800 relative mx-1">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-pulse w-full" />
                        </div>

                        {/* Node 2: RAG Vector Store */}
                        <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-white/5 z-10">
                          <Cpu size={12} className="text-indigo-400 mb-0.5" />
                          <span>RAG Index</span>
                        </div>

                        {/* Connecting Path */}
                        <div className="flex-1 h-[2px] bg-slate-800 relative mx-1">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse w-full" />
                        </div>

                        {/* Node 3: Exam Answers */}
                        <div className="flex flex-col items-center p-1.5 rounded bg-slate-900 border border-white/5 z-10">
                          <Award size={12} className="text-purple-400 mb-0.5" />
                          <span>Exam Answers</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[7px] text-slate-500 font-mono">
                        <span>Mode: 2M / 8M / 13M Answers</span>
                        <span className="text-emerald-400 font-bold">AI Active</span>
                      </div>
                    </div>
                  )}

                  {/* Glass reveal details button */}
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white flex items-center space-x-1.5 shadow-lg">
                      <Play size={10} fill="white" />
                      <span>Explore Case Study</span>
                    </span>
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Header detailing: Title & Tech badges */}
                    <div className="text-left space-y-1.5">
                      <h3 className="font-heading font-black text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted font-light leading-relaxed h-12 overflow-hidden line-clamp-3">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {project.tech.slice(0, 4).map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400">
                          +{project.tech.length - 4} More
                        </span>
                      )}
                    </div>

                  </div>

                  {/* CARD FOOTER LINKS */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-indigo-300 font-semibold select-none">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                      <span>Specifications</span>
                      <Play size={10} className="ml-1" />
                    </button>
                    
                    <div className="flex space-x-3.5" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 text-slate-500 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={15} />
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CASE STUDY MODAL DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/90 p-6 md:p-8 shadow-2xl z-10 overflow-hidden text-left"
            >
              
              {/* Glowing visual backdrop */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full filter blur-[60px] opacity-15 pointer-events-none" 
                style={{ backgroundColor: selectedProject.themeColor.split(',')[0].replace('rgba', 'rgb') + ')' }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
                aria-label="Close Case Study"
              >
                <X size={16} />
              </button>

              <div className="space-y-6">
                
                {/* Header title */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-white/10">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-2xl md:text-3xl text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-0.5 flex items-center gap-1">
                      <Award size={10} />
                      <span>Case Study Specifications</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Overview</h4>
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Highlights list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Accomplishments</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2 text-xs text-slate-400">
                        <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Tech Stack & Library Scope</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <FaGithub size={15} />
                    <span>View Repository</span>
                  </a>

                  {selectedProject.demoUrl !== '#' && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demonstration</span>
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
