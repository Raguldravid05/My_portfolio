import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setMobileMenuOpen(false);
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  const triggerResumeDownload = () => {
    // Generate a simple simulated PDF resume or alert, but let's make it download a mockup file
    // In a real scenario, this would be a PDF in the public folder. Let's direct it to '/resume.pdf'
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Ragul_Dravid_Resume.pdf');
    // For demo purposes, we will trigger a elegant browser notification or download a mockup blob
    const content = 'Ragul Dravid R - B.Tech Information Technology Student & Aspiring Software/AI/Frontend Developer';
    const blob = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = 'Ragul_Dravid_Resume_Mock.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-navbar py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group"
          >
            <span className="font-heading font-black text-xl md:text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300 group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
              RAGUL DRAVID
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-bold -mt-0.5 group-hover:text-indigo-400 transition-colors duration-300">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={triggerResumeDownload}
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 hover:text-white px-4 py-2.5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-950/20 transition-all duration-300 cursor-pointer"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary hover:from-indigo-500 hover:to-purple-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-400 p-2 rounded-lg border border-white/5 bg-white/5 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden p-6 mx-4 rounded-2xl glass-navbar border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-white border border-primary/20'
                        : 'text-muted hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerResumeDownload();
                  }}
                  className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-300 py-3.5 rounded-xl border border-indigo-500/20 bg-indigo-950/20 cursor-pointer"
                >
                  <Download size={14} />
                  <span>Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary py-3.5 rounded-xl text-white shadow-lg cursor-pointer"
                >
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
