import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckSquare, X, ShieldCheck, Download } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  provider: string;
  date: string;
  credentialId: string;
  skillsVerified: string[];
  iconColor: string;
  bgColor: string;
}

const certificationsData: Certificate[] = [
  {
    id: 1,
    title: 'Data Analytics Certification',
    provider: 'Professional Certification & Workshop',
    date: '2025 - 2026',
    credentialId: 'DA-CERT-2025-RD',
    skillsVerified: ['Data Analytics', 'Data Visualization', 'Python', 'Power BI', 'Tableau'],
    iconColor: 'text-[#4285F4]',
    bgColor: 'rgba(66, 133, 244, 0.1)',
  },
  {
    id: 2,
    title: 'Python Certification',
    provider: 'Data Science Bootcamp & Training',
    date: '2025',
    credentialId: 'PY-DS-2025-RD',
    skillsVerified: ['Python', 'Pandas', 'NumPy', 'OOPs', 'Exploratory Data Analysis'],
    iconColor: 'text-[#3776AB]',
    bgColor: 'rgba(55, 118, 171, 0.1)',
  },
  {
    id: 3,
    title: 'SQL Certification',
    provider: 'Database Specialization',
    date: '2025',
    credentialId: 'SQL-ADV-2025-RD',
    skillsVerified: ['SQL', 'MySQL', 'Database Design', 'Joins & Window Functions', 'Query Optimization'],
    iconColor: 'text-[#00758F]',
    bgColor: 'rgba(0, 117, 143, 0.1)',
  },
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section 
      id="certifications" 
      className="relative py-24 border-b border-white/5 bg-slate-950/20"
    >
      {/* Background radial shine */}
      <div className="absolute top-[20%] left-[30%] w-96 h-96 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />

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
            Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="cert-card flex flex-col justify-between p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden group hover:border-indigo-500/20"
            >
              {/* Radial glow reflection */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-xl pointer-events-none" />

              <div className="space-y-4">
                {/* Icon & Provider */}
                <div className="flex items-start justify-between">
                  <div 
                    className="p-3 rounded-xl border border-white/10" 
                    style={{ backgroundColor: cert.bgColor }}
                  >
                    <Award className={cert.iconColor} size={24} />
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500 text-xs font-semibold">
                    <Calendar size={12} className="text-cyan-400" />
                    <span>{cert.date.split(' ')[0]} {cert.date.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Title & Provider details */}
                <div className="text-left space-y-1">
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {cert.provider}
                  </p>
                </div>

                {/* Verified Skills */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 text-left">Verified Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsVerified.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[9px] font-medium bg-white/5 px-2 py-0.5 rounded text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Button */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9.5px] font-mono text-slate-500">ID: {cert.credentialId}</span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center space-x-1.5 text-xs font-bold text-indigo-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>View Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Digital Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Certificate Template Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl rounded-2xl border-4 border-double border-slate-700 bg-stone-900 p-8 md:p-12 shadow-2xl z-10 overflow-hidden text-center text-stone-200"
            >
              {/* Traditional framing borders */}
              <div className="absolute inset-2 border border-slate-800 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-400 hover:text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="space-y-6 md:space-y-8 my-4">
                
                {/* Certificate Header logo */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                    <Award size={36} className="animate-pulse" />
                  </div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-extrabold">
                    Certificate of Competency
                  </h4>
                </div>

                {/* Certificate Title */}
                <div className="space-y-3">
                  <p className="text-xs italic text-stone-400">This credential certifies that</p>
                  <h2 className="text-3xl md:text-4xl font-heading font-black tracking-wide text-white uppercase decoration-indigo-500/50 underline underline-offset-8 decoration-2">
                    Ragul Dravid R
                  </h2>
                  <p className="text-xs italic text-stone-400">has successfully completed all requirements for</p>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-yellow-400 uppercase tracking-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-stone-400">
                    offered by <span className="font-semibold text-stone-300">{selectedCert.provider}</span>
                  </p>
                </div>

                {/* Verification detail */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-stone-950/60 border border-slate-800 text-left space-y-2">
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Verified Topics & Syllabus:</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {selectedCert.skillsVerified.map((sk) => (
                      <div key={sk} className="flex items-center space-x-1.5 text-[11px] text-stone-400">
                        <CheckSquare size={10} className="text-yellow-500" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom signatures and seal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-6 border-t border-slate-800/80">
                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <span className="font-mono text-xs text-stone-500">ISSUED ON</span>
                    <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider">{selectedCert.date}</span>
                  </div>
                  
                  {/* Digital Stamp Seal */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full border border-dashed border-yellow-500/40 flex items-center justify-center relative p-1.5">
                      <div className="w-full h-full rounded-full border border-yellow-500/20 bg-yellow-500/5 flex flex-col items-center justify-center text-[7px] font-bold text-yellow-500 tracking-tighter uppercase leading-none">
                        <ShieldCheck size={14} className="mb-0.5" />
                        <span>VERIFIED</span>
                        <span>SECURE</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <span className="font-mono text-xs text-stone-500">CREDENTIAL ID</span>
                    <span className="text-[10px] font-mono font-semibold text-stone-300">{selectedCert.credentialId}</span>
                  </div>
                </div>

                {/* Simulated Download button */}
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      alert('Downloading high-resolution certificate copy...');
                    }}
                    className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest bg-yellow-500 hover:bg-yellow-600 text-stone-950 font-bold px-4 py-2.5 rounded-lg cursor-pointer transition-colors"
                  >
                    <Download size={12} />
                    <span>Download Copy (PDF)</span>
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;
