import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, BrainCircuit, Film, ShieldAlert, BarChart3, X, Check, Play
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  themeColor: string; // Used for styling the border & glow
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Prepzo AI',
    description: 'An AI-powered academic preparation platform leveraging Retrieval-Augmented Generation (RAG) to help students learn complex engineering concepts and prepare for exams.',
    features: ['PDF Study Material Upload', 'Context-Aware AI Chatbot', 'Exam Answer & Question Generator', 'Secure User Authentication', 'Highly Responsive Dashboard'],
    tech: ['React', 'FastAPI', 'Python', 'MongoDB', 'Tailwind CSS', 'RAG', 'LlamaIndex'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.prepzo.ai',
    icon: <BrainCircuit className="text-cyan-400" size={32} />,
    themeColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    id: 2,
    title: 'Movie Recommendation System',
    description: 'A machine learning system providing personalized movie recommendations by processing user watch history and collaborative filtering techniques.',
    features: ['Content-Based Filtering', 'Collaborative Filtering Engine', 'Real-time Similarity Scoring', 'Dataset Preprocessing Pipelines'],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Cosine Similarity'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    icon: <Film className="text-[#8B5CF6]" size={32} />,
    themeColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    id: 3,
    title: 'Fraud Detection System',
    description: 'A high-accuracy machine learning classification model designed to detect and flag fraudulent transactions in real-time, preventing financial risks.',
    features: ['Anomaly Detection', 'Supervised Classification Models', 'Feature Scaling & Selection', 'Model Evaluation & Confusion Matrix'],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Jupyter'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    icon: <ShieldAlert className="text-rose-400" size={32} />,
    themeColor: 'rgba(244, 63, 94, 0.3)',
  },
  {
    id: 4,
    title: 'Vehicle Data Analysis Dashboard',
    description: 'An interactive, analytical dashboard created to visualize automobile sales metrics, performance parameters, and key dealership growth trends.',
    features: ['Custom SQL Query Warehousing', 'Interactive KPI Panels', 'Sleek Navigation Dashboards', 'Sales Funnel Funneling Charts'],
    tech: ['Power BI', 'SQL', 'Excel', 'DAX Formulas'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    icon: <BarChart3 className="text-amber-400" size={32} />,
    themeColor: 'rgba(245, 158, 11, 0.3)',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Custom 3D tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6; // max 6 degrees tilt
    const rotateY = -((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
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
      className="relative py-24 border-b border-white/5 bg-slate-950/20"
    >
      {/* Background aurora */}
      <div className="absolute bottom-0 left-[20%] w-[350px] h-[350px] rounded-full bg-secondary/5 filter blur-[90px] pointer-events-none" />

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
            Showcase
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
              className="project-card relative flex flex-col justify-between p-8 rounded-2xl glass-card border border-white/5 cursor-pointer overflow-hidden transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Interactive Radial Spotlight */}
              <div className="card-glow absolute inset-0 pointer-events-none transition-all duration-300" />
              
              {/* Subtle top indicator border */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ backgroundColor: project.themeColor.split(',')[0].replace('rgba', 'rgb') + ')' }}
              />

              <div className="space-y-6">
                
                {/* Card Header: Icon & Tech Count */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">
                    {project.tech.length} Tech stack tags
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 text-left">
                  <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Highlights Summary */}
                <ul className="space-y-2 text-left">
                  {project.features.slice(0, 2).map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 text-xs text-slate-400">
                      <Check size={14} className="text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Card Footer: Tech Badges & CTA */}
              <div className="mt-8 space-y-4">
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 justify-start">
                  {project.tech.slice(0, 4).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
                      +{project.tech.length - 4} More
                    </span>
                  )}
                </div>

                {/* Interaction Overlay Banner */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-indigo-300 font-semibold group">
                  <span className="flex items-center space-x-1 hover:text-white transition-colors">
                    <span>Learn More & View Specs</span>
                    <Play size={12} className="ml-1 animate-pulse" />
                  </span>
                  <div className="flex space-x-3">
                    <span className="p-1 text-slate-500 hover:text-white"><FaGithub size={16} /></span>
                    <span className="p-1 text-slate-500 hover:text-white"><ExternalLink size={16} /></span>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Detail View Overlay / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/90 p-6 md:p-8 shadow-2xl z-10 overflow-hidden text-left"
            >
              
              {/* Color gradient background highlight */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full filter blur-[60px] opacity-15 pointer-events-none" 
                style={{ backgroundColor: selectedProject.themeColor.split(',')[0].replace('rgba', 'rgb') + ')' }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                
                {/* Header Section */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-2xl md:text-3xl text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-0.5">
                      Case Study
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Summary</h4>
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2 text-xs text-slate-400">
                        <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Technologies Utilized</h4>
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

                {/* Call-to-actions */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                  </a>

                  {selectedProject.demoUrl !== '#' && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/25 transition-all cursor-pointer"
                    >
                      <ExternalLink size={16} />
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
