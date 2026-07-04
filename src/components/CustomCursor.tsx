import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Cursor position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const spotlightConfig = { damping: 50, stiffness: 150, mass: 0.8 };
  
  const dotX = useSpring(cursorX, { damping: 10, stiffness: 1000 });
  const dotY = useSpring(cursorY, { damping: 10, stiffness: 1000 });
  
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);
  
  const glowX = useSpring(cursorX, spotlightConfig);
  const glowY = useSpring(cursorY, spotlightConfig);

  useEffect(() => {
    // Only enable on desktop/pointer-capable devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.skill-card') ||
        target.closest('.project-card') ||
        target.closest('.cert-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic Cursor Spotlight (Behind Content, Z-Index 0) */}
      <motion.div
        className="fixed top-0 left-0 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0 mix-blend-screen opacity-15 filter blur-[90px]"
        style={{
          x: glowX,
          y: glowY,
          background: isHovered 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)' 
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.1) 60%, transparent 100%)',
        }}
      />

      {/* Cursor Target Dot (Top Z-Index) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full pointer-events-none z-9999"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#06b6d4' : '#6366f1',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      />

      {/* Cursor Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-indigo-400/50 rounded-full pointer-events-none z-9999 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#06b6d4' : 'rgba(99, 102, 241, 0.5)',
          borderWidth: isHovered ? '2px' : '1px',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;
