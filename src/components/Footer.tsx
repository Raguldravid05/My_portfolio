import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-12 md:py-16 overflow-hidden">
      
      {/* Decorative backing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 rounded-full bg-primary/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
        
        {/* Branding & Description */}
        <div className="flex flex-col text-center md:text-left space-y-2">
          <span className="font-heading font-black text-lg tracking-wider text-white">
            RAGUL DRAVID R
          </span>
          <p className="text-xs text-slate-500 font-light max-w-sm leading-relaxed">
            B.Tech Information Technology Student. Developing AI pipelines, 
            interactive dashboards, and responsive web applications.
          </p>
        </div>

        {/* Social Quick-actions */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:raguldravid.it27@gmail.com"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          
          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-indigo-500 hover:to-purple-600 text-white shadow-lg cursor-pointer transition-transform hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      {/* Tech badges and Copyright details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4 select-none relative z-10">
        <div className="text-center sm:text-left space-y-1">
          <p>© 2026 Ragul Dravid R. All rights reserved.</p>
          <p className="text-[10px] text-slate-600">Designed & Developed by Ragul Dravid</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">React 19</span>
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Vite</span>
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Tailwind CSS v4</span>
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Framer Motion</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
