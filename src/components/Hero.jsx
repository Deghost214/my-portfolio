import { useState, useEffect } from "react";
import { Terminal, ArrowUpRight, Award, ChevronRight, BarChart3, Database, Code, Sparkles, Binary, CheckCircle } from "lucide-react";
import professionalAvatar from "../assets/images/harsh_vardhan.jpg";

export default function Hero() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const specialties = [
    "Data Analyst",
    "Machine Learning Engineer",
  ];

  useEffect(() => {
    let timer;
    const currentSpecialty = specialties[typedIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentSpecialty.substring(0, text.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(currentSpecialty.substring(0, text.length + 1));
      }, 100);
    }

    if (!isDeleting && text === currentSpecialty) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTypedIndex((prev) => (prev + 1) % specialties.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, typedIndex]);

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent overflow-hidden"
    >
      {/* Premium background mesh lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center space-x-2.5 bg-indigo-950/40 border border-indigo-800/50 px-4 py-2 rounded-full text-indigo-300 text-xs font-semibold tracking-wide shadow-lg shadow-indigo-950/50" id="hero-badge">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              <span>Available for Associate Roles & Internships</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]" id="hero-title">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">Harsh Vardhan</span>
              </h1>
              <h2 className="font-sans font-medium text-2xl sm:text-3xl text-slate-300 h-10 flex items-center" id="hero-specialties">
                <span>A passionate </span>
                <span className="text-emerald-400 font-extrabold border-r-2 border-emerald-400 ml-2 px-1 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>

            <p className="text-slate-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed" id="hero-description">
              Pursuing my B.Tech in Computer Science and Engineering at AKTU Lucknow. I specialize in translating complex business datasets into structured relational SQL schemas and highly-accurate predictive Machine Learning models.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-4 py-2" id="hero-stats">
              <div className="bg-slate-900/40 hover:bg-slate-900/60 transition-colors border border-slate-800/60 p-4 rounded-2xl flex flex-col justify-center items-start shadow-xl">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-indigo-400">300+</span>
                <span className="text-xs text-slate-400 font-medium mt-1">LeetCode Solved</span>
              </div>
              <div className="bg-slate-900/40 hover:bg-slate-900/60 transition-colors border border-slate-800/60 p-4 rounded-2xl flex flex-col justify-center items-start shadow-xl">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">250+</span>
                <span className="text-xs text-slate-400 font-medium mt-1">GFG Solved</span>
              </div>
              <div className="bg-slate-900/40 hover:bg-slate-900/60 transition-colors border border-slate-800/60 p-4 rounded-2xl flex flex-col justify-center items-start shadow-xl">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">7.2</span>
                <span className="text-xs text-slate-400 font-medium mt-1">B.Tech CGPA</span>
              </div>
            </div>

            {/* Core Credentials Badges */}
            <div className="flex flex-wrap gap-2 pt-1" id="hero-credentials">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs text-slate-300 font-mono shadow-md">
                <Award className="h-3.5 w-3.5 text-amber-500" />
                <span>Google Cybersecurity Cert</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs text-slate-300 font-mono shadow-md">
                <Code className="h-3.5 w-3.5 text-indigo-500" />
                <span>MySQL Developer</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs text-slate-300 font-mono shadow-md">
                <BarChart3 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Python Data Analytics</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4" id="hero-actions">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>View Portfolio Projects</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#ai-twin"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Terminal className="h-4 w-4 mr-2 text-indigo-400" />
                <span>Interview My AI Twin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-avatar-container">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[360px] lg:w-[400px] lg:h-[440px] group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={professionalAvatar}
                  alt="Harsh Vardhan Tiwari Professional Corporate Headshot"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="avatar-img"
                />
                
                {/* Visual Glassmorphism Overlays */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/70 backdrop-blur-md border border-slate-800/80 rounded-xl p-3.5 flex items-center space-x-3 shadow-2xl">
                  <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30">
                    <BarChart3 className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Current Focus</p>
                    <p className="text-sm text-white font-extrabold font-sans">Data & Predictive ML</p>
                  </div>
                </div>
              </div>

              {/* Decorative floating badges */}
              <div className="absolute -top-4 -right-4 bg-indigo-950/90 border border-indigo-800 rounded-2xl p-3 shadow-2xl hidden sm:flex items-center space-x-2 animate-bounce" style={{ animationDuration: '6s' }}>
                <Sparkles className="h-4.5 w-4.5 text-amber-400 animate-pulse" />
                <span className="text-xs text-white font-extrabold font-mono">Top Ranked</span>
              </div>

              <div className="absolute bottom-20 -left-10 bg-slate-900/90 border border-slate-800 rounded-2xl p-3 shadow-2xl hidden sm:flex items-center space-x-2">
                <Binary className="h-4.5 w-4.5 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span className="text-xs text-slate-200 font-mono font-bold">94% Model Accuracy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
