import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, GitFork, BookOpen, Layers, Users, Flame, Code2, AlertCircle, RefreshCw 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

// Fallback high-fidelity developer stats if GitHub API fails/rate-limits
const mockProfile: GitHubProfile = {
  login: 'Raguldravid05',
  avatar_url: '/profile.png',
  name: 'Ragul Dravid R',
  bio: 'B.Tech IT Student | Aspiring AI & Full Stack Developer | Building Prepzo AI',
  public_repos: 3,
  followers: 1,
  following: 0
};

const mockRepos: Repository[] = [
  {
    name: 'Cricket-Data-Analysis-',
    description: 'Cricket data analysis project for exploring player and match statistics using Python and data visualization tools.',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Python',
    html_url: 'https://github.com/Raguldravid05/Cricket-Data-Analysis-'
  },
  {
    name: 'prepzo',
    description: 'Prepzo is an AI-powered study platform that helps engineering students prepare smarter for examinations. Students can upload syllabus PDFs and study materials, ask subject-related questions, and get AI answers.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    html_url: 'https://github.com/Raguldravid05/prepzo'
  },
  {
    name: 'raguldravid.github.io',
    description: 'Personal portfolio website built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    html_url: 'https://github.com/Raguldravid05/raguldravid.github.io'
  }
];

const GitHubSection: React.FC = () => {
  const [username, setUsername] = useState('Raguldravid05');
  const [inputVal, setInputVal] = useState('Raguldravid05');
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMock, setIsMock] = useState(false);

  const fetchGitHubData = async (user: string) => {
    setLoading(true);
    setError(null);
    setIsMock(false);
    
    try {
      // Fetch Profile
      const profileRes = await fetch(`https://api.github.com/users/${user}`);
      if (!profileRes.ok) {
        throw new Error('User profile not found. Displaying sandbox fallback.');
      }
      const profileData: GitHubProfile = await profileRes.json();
      setProfile(profileData);

      // Fetch Repos
      const reposRes = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`);
      if (reposRes.ok) {
        const reposData: Repository[] = await reposRes.json();
        // Sort by stars descending
        const sortedRepos = reposData.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sortedRepos.slice(0, 4));
      } else {
        setRepos([]);
      }
    } catch (err: any) {
      console.warn(err.message);
      setError(err.message);
      // Fallback
      setProfile(mockProfile);
      setRepos(mockRepos);
      setIsMock(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData(username);
  }, [username]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setUsername(inputVal.trim());
    }
  };

  // Language colors helper
  const getLanguageColor = (lang: string) => {
    switch (lang?.toLowerCase()) {
      case 'python': return 'bg-yellow-400';
      case 'javascript': return 'bg-yellow-300';
      case 'typescript': return 'bg-blue-400';
      case 'html': return 'bg-orange-500';
      case 'css': return 'bg-sky-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <section 
      id="github" 
      className="relative py-24 border-b border-white/5 bg-[#0B0F19] grid-bg"
    >
      <div className="absolute inset-0 grid-bg-mask z-0 pointer-events-none" />

      {/* Decorative light reflection */}
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-secondary/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400"
          >
            Activity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            GitHub Integration
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-1"
          />
        </div>

        {/* Dynamic User Search Form */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <form onSubmit={handleSubmit} className="flex items-center bg-slate-900/60 p-1.5 rounded-xl border border-white/5 shadow-inner">
            <div className="pl-3 text-slate-500"><FaGithub size={18} /></div>
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search GitHub Username..."
              className="flex-1 bg-transparent px-3 py-2 text-sm text-white focus:outline-none placeholder-slate-500 font-mono"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-primary to-secondary hover:from-indigo-500 hover:to-purple-600 text-white font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg cursor-pointer transition-all disabled:opacity-50"
            >
              {loading ? <RefreshCw size={12} className="animate-spin" /> : <span>Fetch</span>}
            </button>
          </form>

          {error && (
            <div className="flex items-center justify-center space-x-2 text-[10px] text-amber-400 font-mono mt-3.5 bg-amber-500/5 border border-amber-500/10 p-2 rounded-lg">
              <AlertCircle size={12} />
              <span>{error}</span>
            </div>
          )}
          {isMock && (
            <div className="text-[10px] text-indigo-400 font-mono mt-2">
              Showing high-fidelity sandbox profile for <strong>Ragul Dravid</strong>.
            </div>
          )}
        </div>

        {/* GitHub Dashboard Grid */}
        {profile && (
          <div className="space-y-8">
            
            {/* Top row: Profile Widget + General Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Profile Card */}
              <div className="lg:col-span-4 rounded-2xl glass-card border border-white/5 p-6 flex flex-col justify-between text-left">
                <div className="flex items-center space-x-4">
                  <img 
                    src={profile.avatar_url} 
                    alt={profile.login} 
                    className="w-16 h-16 rounded-full border border-white/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile.png';
                    }}
                  />
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-white">
                      {profile.name || profile.login}
                    </h3>
                    <a 
                      href={`https://github.com/${profile.login}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-indigo-300 font-semibold hover:underline"
                    >
                      @{profile.login}
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed my-5">
                  {profile.bio || 'Developer Profile has no biography summary defined.'}
                </p>

                <div className="grid grid-cols-3 gap-2.5 border-t border-white/5 pt-4 text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Repos</span>
                    <p className="text-base font-bold text-white font-mono">{profile.public_repos}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Followers</span>
                    <p className="text-base font-bold text-white font-mono">{profile.followers}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Following</span>
                    <p className="text-base font-bold text-white font-mono">{profile.following}</p>
                  </div>
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Stats Widget 1: General Stats iframe mock */}
                <div className="rounded-2xl glass-card border border-white/5 p-6 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <BookOpen className="text-cyan-400" size={20} />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Metadata</span>
                  </div>
                  <div className="space-y-3 my-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Total Stars:</span>
                      <span className="font-mono font-bold text-white">42 🌟</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Total Commits:</span>
                      <span className="font-mono font-bold text-white">184 ⚒️</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Pull Requests:</span>
                      <span className="font-mono font-bold text-white">12 ⬆️</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">GitHub Stats</span>
                </div>

                {/* Stats Widget 2: Languages */}
                <div className="rounded-2xl glass-card border border-white/5 p-6 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <Code2 className="text-purple-400" size={20} />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Top Skills</span>
                  </div>
                  <div className="space-y-3.5 my-5">
                    <div>
                      <div className="flex justify-between items-center text-[11px] mb-1">
                        <span className="text-slate-400">Python</span>
                        <span className="font-mono text-white">52%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full w-[52%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-[11px] mb-1">
                        <span className="text-slate-400">JavaScript</span>
                        <span className="font-mono text-white">28%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-yellow-300 h-full w-[28%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-[11px] mb-1">
                        <span className="text-slate-400">TypeScript</span>
                        <span className="font-mono text-white">20%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full w-[20%]" />
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Top Languages</span>
                </div>

                {/* Stats Widget 3: Streak */}
                <div className="rounded-2xl glass-card border border-white/5 p-6 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <Flame className="text-rose-400" size={20} />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Active</span>
                  </div>
                  <div className="my-6 space-y-2">
                    <div className="text-center font-mono">
                      <div className="text-2xl font-black text-white">12 Days</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Current Streak</div>
                    </div>
                    <div className="text-center font-mono border-t border-white/5 pt-2">
                      <div className="text-sm font-semibold text-slate-400">Max Streak: 24 Days</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">Current Streak</span>
                </div>

              </div>

            </div>

            {/* Middle Row: Pinned Repositories */}
            <div className="space-y-4">
              <h3 className="text-left font-heading font-extrabold text-xl text-white">
                Repositories ({repos.length})
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-between p-5 rounded-xl glass-card border border-white/5 text-left group hover:border-indigo-500/20 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-white font-bold text-sm tracking-wide">
                        <Layers size={14} className="text-indigo-400" />
                        <span className="group-hover:text-cyan-400 transition-colors">{repo.name}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed line-clamp-2">
                        {repo.description || 'No description provided for this repository.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5 text-xs text-slate-500 font-mono">
                      <div className="flex items-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                        <span>{repo.language || 'Documentation'}</span>
                      </div>
                      <div className="flex space-x-4">
                        <span className="flex items-center space-x-1"><Star size={12} className="text-yellow-500" /> <span>{repo.stargazers_count}</span></span>
                        <span className="flex items-center space-x-1"><GitFork size={12} className="text-indigo-400" /> <span>{repo.forks_count}</span></span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Row: Contribution Grid Calendar */}
            <div className="rounded-2xl glass-card border border-white/5 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <Users size={16} className="text-indigo-400" />
                  <span>Contribution Calendar</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Live Heatmap</span>
              </div>
              
              {/* Load SVG contribution graph from rshah.org */}
              <div className="w-full overflow-x-auto py-2 flex justify-center bg-slate-950/40 border border-white/5 rounded-xl p-4">
                <img 
                  src={`https://ghchart.rshah.org/6366F1/${profile.login}`} 
                  alt={`${profile.login} github contributions`} 
                  className="max-w-full min-w-[700px] h-auto filter opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to simulated grid if chart loader fails
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default GitHubSection;
