import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const roles = [
  'Data Analytics & AI Aspirant',
  'Python & SQL Developer',
  'B.Tech IT @ CSI College',
  'AI Solutions Developer',
  'Data Analyst & Visualizer',
];

const floatingBadges = [
  { name: 'Python', color: 'from-yellow-400/20 to-yellow-500/10 border-yellow-400/30 text-yellow-300', x: -80, y: -120, delay: 0 },
  { name: 'SQL', color: 'from-cyan-400/20 to-cyan-500/10 border-cyan-400/30 text-cyan-300', x: 190, y: -140, delay: 0.5 },
  { name: 'Antigravity', color: 'from-emerald-400/20 to-emerald-500/10 border-emerald-400/30 text-emerald-300', x: -180, y: -20, delay: 1 },
  { name: 'Pandas', color: 'from-indigo-400/20 to-indigo-500/10 border-indigo-400/30 text-indigo-300', x: 220, y: -40, delay: 0.2 },
  { name: 'NumPy', color: 'from-sky-500/20 to-sky-600/10 border-sky-500/30 text-sky-300', x: -140, y: 120, delay: 0.8 },
  { name: 'Power BI', color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400', x: 180, y: 100, delay: 1.2 },
  { name: 'Tableau', color: 'from-orange-400/20 to-orange-500/10 border-orange-400/30 text-orange-300', x: -60, y: 190, delay: 0.4 },
  { name: 'FastAPI', color: 'from-emerald-400/20 to-emerald-500/10 border-emerald-400/30 text-emerald-300', x: 90, y: 200, delay: 0.7 },
  { name: 'LLMs', color: 'from-purple-400/20 to-purple-500/10 border-purple-400/30 text-purple-300', x: -200, y: -100, delay: 1.5 },
  { name: 'RAG', color: 'from-rose-400/20 to-rose-500/10 border-rose-400/30 text-rose-300', x: 210, y: 180, delay: 1.1 },
];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const activeRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === activeRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : activeRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    const content = `R. RAGUL DRAVID
raguldravid0509@gmail.com | 8807739465 | Tamil Nadu, India
GitHub: https://github.com/Raguldravid05 | LinkedIn: https://www.linkedin.com/in/ragul-dravid-7410742a5/

OBJECTIVE
Final-year B.Tech Information Technology student with a strong foundation in Python, SQL, Artificial Intelligence, and Data Analytics. Passionate about analyzing data, solving real-world problems, and developing innovative technology solutions through academic projects. Familiar with Git/GitHub and continuously learning modern technologies to build a successful career in Data Analytics and Artificial Intelligence.

EDUCATION
B.Tech in Information Technology — CSI College of Engineering, Ketti Expected 2027
CGPA: 7.32 (till 5th Semester)

TECHNICAL SKILLS
Programming: Python, SQL
Version Control: Git, GitHub
Databases: MySQL
Data Analysis&Visualization: Pandas, NumPy, Excel
Tools: Antigravity

INTERNSHIP EXPERIENCE
Data Analytics Intern — Cloud Institution (30.06.2025 - 30.07.2025)
• Cleaned, transformed, and visualized real-world datasets to generate actionable insights
• Built dashboards and reports that translated complex analysis into clear
• Gained hands-on exposure to cloud-based analytics tools and workflows

Cloud&AI Intern — Featurgen Company
• Worked with cloud computing and AI services to build practical applications.
• Gained hands-on experience with cloud deployment, storage, and AI-powered solutions.

PROJECTS
Cricket Analytics
• Analyzed 5,000+ match records using Python and Pandas to evaluate player performance metrics, then distilled the findings into clear, actionable insights
Sales Data Dashboard
• Designed an interactive Power BI and Tableau dashboard on 10,000+ rows of sales data, presenting trends and KPIs in an accessible format for business decision-making
. Prepzo
• AI-powered study platform for engineering students that enables users to upload syllabus PDFs and study materials, ask subject related questions, and generate exam-oriented 2-mark, 8-mark, and 13-mark answers using AI.

SOFT SKILLS
• Communication Skills
• Teamwork and Collaboration
• Analytical Thinking
• Adaptability

CERTIFICATIONS
• Data Analytics Certification
• Python Certification
• SQL Certification`;
    const blob = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = 'R_Ragul_Dravid_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Background radial fade for the grid lines */}
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />
      
      {/* Three.js interactive canvas particle background */}
      <ThreeBackground />

      {/* Decorative Aurora Glowing Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/15 filter blur-[80px] animate-aurora pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accent/10 to-primary/15 filter blur-[90px] animate-aurora pointer-events-none z-0" style={{ animationDelay: '-5s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Typography & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Welcome Tag */}
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Open to Opportunities
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h2 className="text-muted font-medium text-lg md:text-xl uppercase tracking-[0.2em]">
              Welcome to my portfolio
            </h2>
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                R. Ragul Dravid
              </span>
            </h1>
            
            {/* Dynamic Typewriter text */}
            <div className="h-10 flex items-center">
              <span className="text-lg md:text-2xl font-bold font-heading text-cyan-300 mr-1.5">
                ✦
              </span>
              <span className="text-lg md:text-2xl font-bold font-heading text-white">
                {currentText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-[3px] h-6 md:h-8 bg-cyan-400 inline-block ml-1"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl font-light">
            I am a final-year <span className="text-white font-semibold">B.Tech Information Technology</span> student at <span className="text-white font-semibold">CSI College of Engineering, Ketti</span> with a strong foundation in <span className="text-white font-semibold">Python</span>, <span className="text-white font-semibold">SQL</span>, <span className="text-white font-semibold">Artificial Intelligence</span>, and <span className="text-white font-semibold">Data Analytics</span>. Passionate about solving real-world problems and creating impactful data and AI solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="group flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:from-indigo-500 hover:to-purple-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <FileText size={18} className="text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center space-x-2 text-indigo-300 hover:text-white font-semibold px-5 py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Coding IDE Workspace & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center h-[420px]"
        >
          {/* Glowing Aura backdrop under the IDE */}
          <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/15 filter blur-[60px] pointer-events-none" />

          {/* Floating Technology Badges */}
          {floatingBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ x: badge.x * 0.8, y: badge.y * 0.8 }}
              animate={{ 
                x: badge.x, 
                y: badge.y,
                translateY: [0, -10, 0]
              }}
              transition={{
                x: { duration: 1, delay: 0.1 * index },
                y: { duration: 1, delay: 0.1 * index },
                translateY: {
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: badge.delay
                }
              }}
              className={`absolute px-3 py-1.5 rounded-xl border text-[11px] font-bold tracking-wider uppercase bg-gradient-to-b ${badge.color} shadow-lg shadow-black/25 pointer-events-none backdrop-blur-md`}
            >
              {badge.name}
            </motion.div>
          ))}

          {/* Mock IDE Code Editor */}
          <motion.div 
            whileHover={{ rotateY: 5, rotateX: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden text-left"
          >
            {/* Window controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-muted font-mono select-none">
                <Code2 size={13} className="text-cyan-400" />
                <span>prepzo_rag_engine.py</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Editor Content */}
            <div className="p-5 font-mono text-[11px] md:text-xs leading-relaxed overflow-x-auto text-slate-300">
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">1</span>
                <span><span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, UploadFile</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">2</span>
                <span><span className="text-purple-400">from</span> llama_index.core <span className="text-purple-400">import</span> VectorStoreIndex</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">3</span>
                <span><span className="text-purple-400">import</span> uvicorn</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">4</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">5</span>
                <span>app = FastAPI(title=<span className="text-green-300">"PrepzoAI"</span>)</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">6</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">7</span>
                <span><span className="text-indigo-400">@app.post</span>(<span className="text-green-300">"/api/chat-rag"</span>)</span>
              </div>
              <div className="flex col">
                <span className="w-8 text-slate-600 select-none text-right pr-3">8</span>
                <span><span className="text-purple-400">async def</span> <span className="text-blue-400">query_index</span>(pdf: UploadFile, query: str):</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">9</span>
                <span>    <span className="text-slate-500"># Initializing RAG Pipeline</span></span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">10</span>
                <span>    docs = load_document(pdf.file)</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">11</span>
                <span>    index = VectorStoreIndex.from_documents(docs)</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">12</span>
                <span>    </span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">13</span>
                <span>    engine = index.as_query_engine()</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">14</span>
                <span>    res = engine.query(query)</span>
              </div>
              <div className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">15</span>
                <span>    <span className="text-purple-400">return</span> &#123;<span className="text-green-300">"status"</span>: <span className="text-green-300">"success"</span>, <span className="text-green-300">"data"</span>: res.response&#125;</span>
              </div>
            </div>
            
            {/* Status bar */}
            <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono select-none">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1"><Terminal size={11} className="text-indigo-400" /> <span>Python 3.11</span></span>
                <span className="flex items-center space-x-1"><Cpu size={11} className="text-cyan-400" /> <span>FastAPI Backend</span></span>
              </div>
              <div className="flex items-center space-x-1 text-emerald-400">
                <CheckCircle2 size={11} />
                <span>Connected</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
