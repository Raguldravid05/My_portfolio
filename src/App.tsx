import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHubSection';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home', 
      'about', 
      'skills', 
      'projects', 
      'experience', 
      'certifications', 
      'github', 
      'achievements', 
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F9FAFB] antialiased overflow-x-hidden">
      {/* Global Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Cursor Spotlight Glow */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Layout */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
