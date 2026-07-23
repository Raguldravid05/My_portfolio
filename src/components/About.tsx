import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Sparkles, 
  BarChart3, 
  MapPin, 
  Rocket 
} from 'lucide-react';

const infoCards = [
  {
    icon: <GraduationCap className="text-indigo-400" size={24} />,
    title: 'B.Tech IT',
    value: 'CSI College of Engineering',
    detail: 'Expected Graduation: 2027',
  },
  {
    icon: <Sparkles className="text-purple-400" size={24} />,
    title: 'Academic CGPA',
    value: '7.32 / 10',
    detail: 'Till 5th Semester',
  },
  {
    icon: <Code className="text-cyan-400" size={24} />,
    title: 'Programming',
    value: 'Python & SQL',
    detail: 'Git & GitHub Version Control',
  },
  {
    icon: <BarChart3 className="text-amber-400" size={24} />,
    title: 'Data Analysis',
    value: 'Pandas, NumPy, Excel',
    detail: 'MySQL & AI Applications',
  },
  {
    icon: <Rocket className="text-emerald-400" size={24} />,
    title: 'Special Tool',
    value: 'Antigravity',
    detail: 'Advanced AI & Coding Workflow',
  },
  {
    icon: <MapPin className="text-rose-400" size={24} />,
    title: 'Location',
    value: 'Tamil Nadu, India',
    detail: 'Open to Opportunities',
  },
];

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 border-b border-white/5 bg-slate-950/20"
    >
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/5 filter blur-[70px] pointer-events-none" />

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
            Profile
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[340px]">
              {/* Animated outer blur glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 opacity-70 group-hover:opacity-100 blur-xl transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/15 p-2">
                <img 
                  src="/profile.png" 
                  alt="Ragul Dravid" 
                  className="w-full h-full object-cover rounded-xl transition duration-500 scale-100 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Tech overlays inside card */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/5 text-left select-none">
                  <div className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">Candidate Profile</div>
                  <div className="text-white text-xs font-semibold mt-0.5">R. Ragul Dravid</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">B.Tech IT @ CSI College of Engineering (2027)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Description & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                Final-Year B.Tech IT Student | Data Analytics & AI
              </h3>
              <p className="text-muted leading-relaxed text-base font-light">
                Final-year <span className="text-white font-medium">B.Tech Information Technology</span> student at <span className="text-white font-medium">CSI College of Engineering, Ketti</span> with a strong foundation in <span className="text-white font-medium">Python, SQL, Artificial Intelligence, and Data Analytics</span>.
              </p>
              <p className="text-muted leading-relaxed text-base font-light">
                Passionate about analyzing data, solving real-world problems, and developing innovative technology solutions through academic projects. Familiar with <span className="text-white font-medium">Git/GitHub</span> and continuously learning modern technologies to build a successful career in Data Analytics and Artificial Intelligence.
              </p>
            </div>

            {/* Quick Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start space-x-4 p-4 rounded-xl glass-card relative overflow-hidden group"
                >
                  {/* Subtle inner background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon Wrapper with glowing background */}
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    {card.icon}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {card.title}
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted">
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
