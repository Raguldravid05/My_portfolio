import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: <Mail className="text-cyan-400" size={20} />,
    label: 'Email Address',
    value: 'raguldravid.it27@gmail.com',
    link: 'mailto:raguldravid.it27@gmail.com',
  },
  {
    icon: <FaLinkedin className="text-blue-400" size={20} />,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/raguldravid',
    link: 'https://linkedin.com',
  },
  {
    icon: <FaGithub className="text-purple-400" size={20} />,
    label: 'GitHub Profile',
    value: 'github.com/raguldravid',
    link: 'https://github.com',
  },
  {
    icon: <MapPin className="text-rose-400" size={20} />,
    label: 'Current Location',
    value: 'Tamil Nadu, India',
    link: 'https://maps.google.com/?q=Tamil+Nadu,+India',
  },
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please fill in all mandatory fields.');
      return;
    }

    setStatus('loading');

    // EmailJS Keys Configuration (Recruiters can easily wire this up!)
    // For demo purposes, we will simulate the send to prevent crashes, but write the template code.
    const serviceID = 'default_service';
    const templateID = 'template_portfolio';
    const publicKey = 'user_key';

    const isKeysConfigured = publicKey !== 'user_key' && publicKey !== '';

    if (isKeysConfigured && formRef.current) {
      try {
        const result = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
        if (result.text === 'OK') {
          setStatus('success');
          setStatusMsg('Thank you! Your message was sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Email delivery failed.');
        }
      } catch (err: any) {
        setStatus('error');
        setStatusMsg(err.message || 'An error occurred while sending your message.');
      }
    } else {
      // Sandbox Simulated Send (Incredibly fluid visual simulation for recruiter review!)
      setTimeout(() => {
        setStatus('success');
        setStatusMsg('Message sent successfully! (Sandbox Simulated Mode)');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Aurora glow filter */}
      <div className="absolute top-[20%] right-[30%] w-96 h-96 rounded-full bg-accent/5 filter blur-[100px] pointer-events-none" />

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
            Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                Let's discuss a project!
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                Whether you are looking to hire an intern, discuss AI agent implementation, 
                design dashboards, or just say hello, feel free to reach out. I will respond to your inquiry as soon as possible.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl glass-card border border-white/5 group hover:border-indigo-500/20"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {info.label}
                    </h4>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form 
              ref={formRef} 
              onSubmit={handleSendMessage}
              className="p-6 md:p-8 rounded-2xl glass-card border border-white/5 text-left space-y-5"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400">Name <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                    className="w-full bg-slate-950/60 border border-white/5 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address <span className="text-rose-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                    className="w-full bg-slate-950/60 border border-white/5 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full bg-slate-950/60 border border-white/5 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message <span className="text-rose-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message here..."
                  required
                  className="w-full bg-slate-950/60 border border-white/5 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:from-indigo-500 hover:to-purple-600 text-white font-semibold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/25 cursor-pointer transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status !== 'idle' && status !== 'loading' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border text-xs ${
                      status === 'success'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                    }`}
                  >
                    {status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    <span>{statusMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
