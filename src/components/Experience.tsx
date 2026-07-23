import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Filter, BarChart3, Cloud, 
  ArrowRight, Play, RefreshCw, Layers
} from 'lucide-react';

interface Responsibility {
  id: number;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  tools: string[];
  longDesc: string;
  interactiveType: 'clean' | 'transform' | 'dashboard' | 'visualize' | 'cloud';
}

const responsibilities: Responsibility[] = [
  {
    id: 1,
    title: 'Dataset Cleaning & Transformation',
    shortDesc: 'Cleaned, transformed, and visualized real-world datasets to generate actionable insights.',
    icon: <Filter size={20} />,
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    tools: ['Python', 'Pandas', 'NumPy', 'Data Cleaning'],
    longDesc: 'At Cloud Institution, cleaned, transformed, and visualized real-world datasets using Python and Pandas to uncover statistical anomalies, handle missing fields, and generate actionable insights for strategic decision-making.',
    interactiveType: 'clean'
  },
  {
    id: 2,
    title: 'Dashboard & Report Engineering',
    shortDesc: 'Built dashboards and reports that translated complex analysis into clear insights.',
    icon: <Database size={20} />,
    color: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    tools: ['Power BI', 'Tableau', 'DAX Formulas', 'KPI Tracking'],
    longDesc: 'Designed and deployed interactive dashboards and structured reports at Cloud Institution that translated complex multi-dimensional data analysis into clear, accessible business narratives and executive metrics.',
    interactiveType: 'dashboard'
  },
  {
    id: 3,
    title: 'Cloud Analytics Workflows',
    shortDesc: 'Gained hands-on exposure to cloud-based analytics tools and workflows.',
    icon: <Cloud size={20} />,
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    tools: ['Cloud Analytics', 'BigQuery', 'SQL Pipelines', 'Remote Querying'],
    longDesc: 'Gained hands-on exposure to cloud-based analytics tools and modern enterprise workflows at Cloud Institution, managing remote query ingestion loops to keep reporting metrics in sync with live transactional databases.',
    interactiveType: 'cloud'
  },
  {
    id: 4,
    title: 'Cloud & AI Applications',
    shortDesc: 'Worked with cloud computing and AI services to build practical applications.',
    icon: <Layers size={20} />,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    tools: ['Cloud Computing', 'AI Services', 'Python', 'FastAPI'],
    longDesc: 'At Featurgen Company, worked extensively with cloud computing infrastructure and cutting-edge artificial intelligence services to architect and build practical, real-world AI-powered applications.',
    interactiveType: 'transform'
  },
  {
    id: 5,
    title: 'AI Deployment & Storage Solutions',
    shortDesc: 'Gained hands-on experience with cloud deployment, storage, and AI-powered solutions.',
    icon: <BarChart3 size={20} />,
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    tools: ['Cloud Deployment', 'Object Storage', 'RAG Pipelines', 'LLMs'],
    longDesc: 'At Featurgen Company, gained hands-on experience deploying scalable services to cloud environments, managing cloud storage architectures, and integrating modern AI-powered solutions like RAG pipelines.',
    interactiveType: 'visualize'
  }
];

const Experience: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isRunningDemo, setIsRunningDemo] = useState<boolean>(false);
  const [demoState, setDemoState] = useState<any>({
    clean: { rowsBefore: 5410, rowsAfter: 5410, status: 'Ready to Process' },
    transform: { queryRun: false, status: 'Idle', schema: 'Raw Schema' },
    dashboard: { activeKpi: 'sales', value: '$124,500', growth: '+12.4%' },
    visualize: { category: 'Q1', data: [45, 60, 75, 90] },
    cloud: { syncStatus: 'Synced', latency: '42ms' }
  });

  const runInteractiveDemo = () => {
    setIsRunningDemo(true);
    if (activeStep === 1) {
      // Data Cleaning Demo
      setTimeout(() => {
        setDemoState((prev: any) => ({
          ...prev,
          clean: { rowsBefore: 5410, rowsAfter: 5000, status: 'Duplicates & Nulls Dropped (410 records filtered)' }
        }));
        setIsRunningDemo(false);
      }, 1800);
    } else if (activeStep === 2) {
      // Data Transformation Demo
      setTimeout(() => {
        setDemoState((prev: any) => ({
          ...prev,
          transform: { queryRun: true, status: 'ETL Mapping Complete', schema: 'Optimized Star-Schema' }
        }));
        setIsRunningDemo(false);
      }, 1500);
    } else if (activeStep === 3) {
      // Dashboard KPI Demo
      let count = 0;
      const interval = setInterval(() => {
        setDemoState((prev: any) => ({
          ...prev,
          dashboard: {
            activeKpi: prev.dashboard.activeKpi,
            value: prev.dashboard.activeKpi === 'sales' ? `$${(124500 + Math.random() * 1000).toFixed(0)}` : `${(230 + Math.random() * 5).toFixed(0)}`,
            growth: prev.dashboard.growth
          }
        }));
        count++;
        if (count > 5) {
          clearInterval(interval);
          setIsRunningDemo(false);
        }
      }, 300);
    } else if (activeStep === 4) {
      // Visualize Filter Demo
      setTimeout(() => {
        setDemoState((prev: any) => ({
          ...prev,
          visualize: {
            category: prev.visualize.category === 'Q1' ? 'Q2' : 'Q1',
            data: prev.visualize.category === 'Q1' ? [65, 80, 55, 110] : [45, 60, 75, 90]
          }
        }));
        setIsRunningDemo(false);
      }, 800);
    } else if (activeStep === 5) {
      // Cloud Sync Demo
      setTimeout(() => {
        setDemoState((prev: any) => ({
          ...prev,
          cloud: { syncStatus: 'Synchronized & Optimizing Indexes', latency: '12ms' }
        }));
        setIsRunningDemo(false);
      }, 2000);
    }
  };

  const resetInteractiveDemo = () => {
    setDemoState({
      clean: { rowsBefore: 5410, rowsAfter: 5410, status: 'Ready to Process' },
      transform: { queryRun: false, status: 'Idle', schema: 'Raw Schema' },
      dashboard: { activeKpi: 'sales', value: '$124,500', growth: '+12.4%' },
      visualize: { category: 'Q1', data: [45, 60, 75, 90] },
      cloud: { syncStatus: 'Synced', latency: '42ms' }
    });
  };

  const currentResp = responsibilities.find(r => r.id === activeStep) || responsibilities[0];

  return (
    <section 
      id="experience" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Ambient glowing blobs */}
      <div className="absolute top-[20%] left-[5%] w-80 h-80 rounded-full bg-cyan-500/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 filter blur-[110px] pointer-events-none" />

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
            Professional Practice
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Internship Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Internship Main Card */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl glass-card border border-white/10 bg-slate-950/40 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
            <div className="text-left">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {activeStep <= 3 ? 'Cloud Institution (30.06.2025 - 30.07.2025)' : 'Featurgen Company'}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white mt-1">
                {activeStep <= 3 ? 'Data Analytics Intern' : 'Cloud & AI Intern'}
              </h3>
              <p className="text-sm text-slate-400 font-light mt-0.5">
                {activeStep <= 3 
                  ? 'Cleaned datasets, built interactive dashboards, and gained exposure to cloud analytics.' 
                  : 'Worked with cloud computing and AI services to build practical AI-powered applications.'}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right text-xs text-indigo-400 font-bold uppercase tracking-wider font-mono">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                {activeStep <= 3 ? 'Cloud Institution • Internship' : 'Featurgen Company • Internship'}
              </span>
              <span className="text-slate-500 mt-2">
                {activeStep <= 3 ? '30.06.2025 – 30.07.2025' : 'Cloud & AI Solutions'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Timeline Navigation (Left) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 text-left mb-2">
                Internship Core Responsibilities
              </div>

              {responsibilities.map((resp) => {
                const isActive = activeStep === resp.id;
                return (
                  <button
                    key={resp.id}
                    onClick={() => {
                      setActiveStep(resp.id);
                      resetInteractiveDemo();
                    }}
                    className={`relative p-4 rounded-xl text-left border flex items-center justify-between group transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-slate-900 border-indigo-500/40 shadow-lg shadow-indigo-500/5' 
                        : 'bg-transparent border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      {/* Icon with glowing active badge */}
                      <div className={`p-2.5 rounded-lg border transition-all ${
                        isActive 
                          ? 'bg-indigo-500/20 border-indigo-500/40 text-cyan-300 shadow-md shadow-indigo-500/10' 
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}>
                        {resp.icon}
                      </div>

                      <div className="space-y-0.5 max-w-[200px] md:max-w-xs">
                        <h4 className={`text-sm font-extrabold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                          {resp.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-light truncate group-hover:text-slate-400 transition-colors">
                          {resp.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight 
                      size={14} 
                      className={`text-slate-600 transition-all ${
                        isActive ? 'text-cyan-400 translate-x-1.5' : 'group-hover:text-slate-400'
                      }`} 
                    />
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Sandbox / Showcase (Right) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/5 relative overflow-hidden">
              
              {/* Top ambient color reflection */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full filter blur-[70px] opacity-20 pointer-events-none transition-all duration-700" 
                style={{ backgroundColor: currentResp.glowColor.replace('0.25', '1') }}
              />

              <div className="space-y-6 text-left relative z-10">
                
                {/* Header detail */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 font-mono">
                      Responsibility Module {currentResp.id} of 5
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-white mt-0.5">
                      {currentResp.title}
                    </h3>
                  </div>

                  {/* Tools badges */}
                  <div className="flex flex-wrap gap-1">
                    {currentResp.tools.map((t) => (
                      <span key={t} className="text-[9px] font-bold font-mono uppercase bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                  {currentResp.longDesc}
                </p>

                {/* Interactive Demo Sandbox */}
                <div className="p-5 rounded-xl border border-white/5 bg-slate-950/70 relative">
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Interactive Sandbox Simulation</span>
                    </span>

                    {/* Reset buttons */}
                    <button 
                      onClick={resetInteractiveDemo}
                      className="text-[10px] text-indigo-400 hover:text-white uppercase font-bold tracking-wider cursor-pointer transition-colors"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Sandboxes content mapping */}
                  <AnimatePresence mode="wait">
                    {currentResp.interactiveType === 'clean' && (
                      <motion.div
                        key="clean"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="bg-slate-900 p-3 rounded-lg border border-white/5 text-[11px] text-slate-400 leading-relaxed">
                          <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br />
                          df = pd.read_csv(<span className="text-green-300">"raw_sales_logs.csv"</span>)<br />
                          <span className="text-slate-500"># Remove rows with null items & duplicates</span><br />
                          df_cleaned = df.dropna().drop_duplicates()
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-slate-900 border border-white/5 rounded-lg text-center">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Uncleaned Records</span>
                            <div className="text-lg font-black text-white mt-1">{demoState.clean.rowsBefore}</div>
                          </div>
                          <div className="p-3 bg-slate-900 border border-white/5 rounded-lg text-center">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Cleaned Records</span>
                            <div className={`text-lg font-black mt-1 transition-colors duration-500 ${demoState.clean.rowsAfter < 5410 ? 'text-emerald-400' : 'text-white'}`}>
                              {demoState.clean.rowsAfter}
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] text-slate-500 flex items-center justify-between">
                          <span>Status: <strong className="text-slate-300">{demoState.clean.status}</strong></span>
                        </div>
                      </motion.div>
                    )}

                    {currentResp.interactiveType === 'transform' && (
                      <motion.div
                        key="transform"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="bg-slate-900 p-3 rounded-lg border border-white/5 text-[11px] text-slate-400 leading-relaxed">
                          <span className="text-purple-400">SELECT</span> DATE_TRUNC(<span className="text-green-300">'month'</span>, sale_date) <span className="text-purple-400">AS</span> sale_month,<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUM(revenue) <span className="text-purple-400">AS</span> total_revenue<br />
                          <span className="text-purple-400">FROM</span> sales_fact<br />
                          <span className="text-purple-400">GROUP BY</span> 1 <span className="text-purple-400">ORDER BY</span> 1;
                        </div>

                        <div className="p-3 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">SQL Pipeline Schema</span>
                            <div className="text-sm font-bold text-white mt-0.5">{demoState.transform.schema}</div>
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${demoState.transform.queryRun ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-white/5 border border-white/10 text-slate-500'}`}>
                            {demoState.transform.status}
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {currentResp.interactiveType === 'dashboard' && (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            onClick={() => setDemoState((prev: any) => ({ ...prev, dashboard: { activeKpi: 'sales', value: '$124,500', growth: '+12.4%' } }))}
                            className={`p-3 border rounded-lg text-left transition-all ${
                              demoState.dashboard.activeKpi === 'sales'
                                ? 'bg-indigo-950/20 border-indigo-500/30'
                                : 'bg-slate-900 border-white/5 hover:border-white/10'
                            }`}
                          >
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Calculated Measure 1</span>
                            <div className="text-xs font-bold text-white mt-1">Total Sales (DAX)</div>
                          </button>

                          <button
                            onClick={() => setDemoState((prev: any) => ({ ...prev, dashboard: { activeKpi: 'transactions', value: '2,301', growth: '+8.7%' } }))}
                            className={`p-3 border rounded-lg text-left transition-all ${
                              demoState.dashboard.activeKpi === 'transactions'
                                ? 'bg-indigo-950/20 border-indigo-500/30'
                                : 'bg-slate-900 border-white/5 hover:border-white/10'
                            }`}
                          >
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Calculated Measure 2</span>
                            <div className="text-xs font-bold text-white mt-1">Transactions Count</div>
                          </button>
                        </div>

                        <div className="p-4 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Metric Result</span>
                            <div className="text-2xl font-black text-white mt-1">{demoState.dashboard.value}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">YoY Growth</span>
                            <div className="text-sm font-black text-emerald-400 mt-1">{demoState.dashboard.growth}</div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentResp.interactiveType === 'visualize' && (
                      <motion.div
                        key="visualize"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        {/* Dynamic SVG chart simulation */}
                        <div className="bg-slate-900 p-4 rounded-lg border border-white/5 flex flex-col justify-between h-28">
                          <div className="flex items-end justify-around h-20 w-full pt-4">
                            {demoState.visualize.data.map((val: number, idx: number) => (
                              <div key={idx} className="flex flex-col items-center w-8">
                                <motion.div 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${val / 1.5}px` }}
                                  className="w-4 rounded-t bg-gradient-to-t from-primary to-accent" 
                                />
                                <span className="text-[8px] text-slate-500 mt-1.5">M{idx+1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center justify-between">
                          <span>Filtering: <strong className="text-cyan-400">Quarter View: {demoState.visualize.category}</strong></span>
                          <span>Click run to toggle quarter filters</span>
                        </div>
                      </motion.div>
                    )}

                    {currentResp.interactiveType === 'cloud' && (
                      <motion.div
                        key="cloud"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="p-3 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Cloud Data Warehouse</span>
                            <div className="text-xs font-semibold text-white">Google BigQuery Instance</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[9px] uppercase font-bold font-mono border border-cyan-500/25">Active</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-slate-900 border border-white/5 rounded-lg">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Ingestion Status</span>
                            <div className="text-xs font-bold text-slate-300 mt-1.5 truncate">{demoState.cloud.syncStatus}</div>
                          </div>
                          <div className="p-3 bg-slate-900 border border-white/5 rounded-lg">
                            <span className="text-[9px] uppercase text-slate-500 font-bold">Execution Latency</span>
                            <div className="text-xs font-bold text-emerald-400 mt-1.5">{demoState.cloud.latency}</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <p className="text-[10px] text-slate-500 font-light max-w-xs text-left">
                  Click 'Simulate Process' to trigger a live execution of the {currentResp.title.toLowerCase()} module.
                </p>

                <button
                  onClick={runInteractiveDemo}
                  disabled={isRunningDemo}
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-[10px] uppercase tracking-widest px-4.5 py-3 rounded-xl shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isRunningDemo ? (
                    <>
                      <RefreshCw size={12} className="animate-spin" />
                      <span>Executing...</span>
                    </>
                  ) : (
                    <>
                      <Play size={12} />
                      <span>Simulate Process</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
