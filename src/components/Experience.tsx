import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Cpu, Code, Database, Users } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  bulletPoints: string[];
  techTags: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'AI Application Developer',
    organization: 'Academic Projects & Self-Led Research',
    duration: '2025 - Present',
    icon: <Cpu className="text-cyan-400" size={20} />,
    description: 'Spearheading the integration of large language models and vector embedding architectures to solve practical knowledge search problems.',
    bulletPoints: [
      'Engineered a Retrieval-Augmented Generation (RAG) assistant (Prepzo AI) enabling instantaneous PDF-based document query responses.',
      'Developed REST APIs using FastAPI and Pydantic validation schemas to pipeline document ingestion, indexing, and chat history.',
      'Integrated OpenAI and open-source models using LlamaIndex orchestration and ChromaDB vector indexing.'
    ],
    techTags: ['Python', 'FastAPI', 'LlamaIndex', 'Vector Databases', 'Prompt Engineering']
  },
  {
    id: 2,
    role: 'Data Analytics Internship / Projects',
    organization: 'Data Domain Exploration',
    duration: '2025',
    icon: <Database className="text-amber-400" size={20} />,
    description: 'Gained hands-on expertise in aggregating, cleaning, and visualizing key enterprise metrics to drive strategic decision making.',
    bulletPoints: [
      'Designed and published a comprehensive Vehicle Data Analysis Dashboard using Power BI, aggregating sales funnel analytics.',
      'Conducted Exploratory Data Analysis (EDA) on large-scale datasets using Python, Pandas, and NumPy to clean anomalies.',
      'Authored complex SQL queries (joins, aggregations, subqueries) to extract performance indicators from relational schemas.'
    ],
    techTags: ['Power BI', 'SQL', 'Pandas', 'NumPy', 'Excel', 'Data Modeling']
  },
  {
    id: 3,
    role: 'Frontend Development',
    organization: 'Web UI/UX Projects & Freelance',
    duration: '2024 - Present',
    icon: <Code className="text-indigo-400" size={20} />,
    description: 'Crafting responsive, high-fidelity user experiences targeting optimal performance and accessible semantic structures.',
    bulletPoints: [
      'Built multi-page client websites and internal SaaS dashboards using React and Vite, achieving high Lighthouse performance scores.',
      'Styled layouts with modern Tailwind CSS utilities, maintaining responsive breakpoints and custom theme configurations.',
      'Integrated Framer Motion and GSAP libraries to execute micro-animations, transitions, and mouse-glow spotlights.'
    ],
    techTags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive Web Design']
  },
  {
    id: 4,
    role: 'Academic Projects & Core IT Studies',
    organization: 'B.Tech Information Technology Student',
    duration: '2023 - Present',
    icon: <GraduationCap className="text-emerald-400" size={20} />,
    description: 'Acquiring theoretical fundamentals and building engineering prototypes as part of college coursework.',
    bulletPoints: [
      'Studying core structures including Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), and Relational Database Systems.',
      'Collaborated on classroom prototypes implementing basic MVC architectures, REST routes, and relational database migrations.'
    ],
    techTags: ['Object-Oriented Programming', 'Data Structures', 'Database Management System', 'Java', 'Python']
  },
  {
    id: 5,
    role: 'Open Source Learning & Tech Communities',
    organization: 'Developer Ecosystem Contributor',
    duration: '2023 - Present',
    icon: <Users className="text-rose-400" size={20} />,
    description: 'Actively participating in modern coding forums, reading technical logs, and contributing documentation patches.',
    bulletPoints: [
      'Maintaining active code logs on GitHub to demonstrate progression in data structures and backend frameworks.',
      'Participated in tech webinars, hackathons, and open workshops regarding AI, DevOps, and cloud systems.'
    ],
    techTags: ['Git', 'GitHub', 'Open Source', 'Technical Writing', 'Developer Communities']
  }
];

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-cyan-500/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400"
          >
            Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Middle vertical line (Only on md+ screens) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-20 -translate-x-[1px]" />

          {/* Timeline items mapping */}
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Symbol */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500/50 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-primary/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Section */}
                  <div className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-10 text-left md:text-right' : 'md:pl-10 text-left'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden group hover:border-indigo-500/20"
                    >
                      {/* Date details */}
                      <div className={`flex items-center space-x-2 text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2.5 ${
                        isEven ? 'md:justify-end' : 'justify-start'
                      }`}>
                        <Calendar size={13} className="text-cyan-400" />
                        <span>{item.duration}</span>
                      </div>

                      {/* Title and Organization */}
                      <div className="space-y-1 mb-4">
                        <h3 className="font-heading font-black text-xl text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-cyan-300 font-medium tracking-wide">
                          {item.organization}
                        </p>
                      </div>

                      {/* Brief overview */}
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Detail points */}
                      <ul className={`space-y-2 text-xs text-muted font-light leading-relaxed mb-5 ${
                        isEven ? 'md:text-right md:list-none' : 'text-left list-none'
                      }`}>
                        {item.bulletPoints.map((bullet, idx) => (
                          <li key={idx} className="flex items-start md:inline-block">
                            <span className="text-cyan-400 mr-2 font-bold inline-block md:hidden">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'md:justify-end' : 'justify-start'
                      }`}>
                        {item.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
