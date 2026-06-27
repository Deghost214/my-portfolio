import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import AiTwin from "./components/AiTwin";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import { Terminal, Github, Linkedin, Award, Cpu, Server } from "lucide-react";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative" id="portfolio-app-root">
      
      {/* Dynamic Interactive Animated Background */}
      <AnimatedBackground />
      {/* Dynamic Sticky Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero & Credentials Section */}
        <Hero />

        {/* Dynamic Project Profiles & Clinical Simulators */}
        <Projects />

        {/* Formal Internship Milestones Timeline */}
        <Experience />

        {/* Skill Category Inventory Board */}
        <Skills />

        {/* Gemini AI Recruiter AssistantTwin Chat */}
        <AiTwin />

        {/* Working Form Submission Contact Module */}
        <Contact />

      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12" id="portfolio-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Branding Column */}
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-white">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <Terminal className="h-4.5 w-4.5 text-indigo-100" />
                </div>
                <span className="font-sans font-bold text-base tracking-tight">
                  HARSH<span className="text-indigo-400 font-normal">.analytics</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans max-w-xs leading-relaxed mx-auto md:mx-0">
                Data Analyst & Machine Learning Engineer portfolio. Building modular statistical queries and predictive pipelines.
              </p>
            </div>

            {/* Quick Links / Navigation Column */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#ai-twin" className="hover:text-white transition-colors">AI Twin</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Social handles links column */}
            <div className="flex justify-center md:justify-end items-center space-x-4">
              <a
                href="https://github.com/Deghost214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-850 rounded-xl text-slate-400 hover:text-white transition-all shadow-md"
                aria-label="GitHub Link"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/harsh-vardhan-tiwari-6432a9250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-850 rounded-xl text-slate-400 hover:text-white transition-all shadow-md"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://leetcode.com/u/codewith_harsh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-850 rounded-xl text-slate-400 hover:text-white transition-all shadow-md"
                aria-label="LeetCode Link"
              >
                <Award className="h-4.5 w-4.5 text-amber-500" />
              </a>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-mono">
            <div>
              &copy; {currentYear} Harsh Vardhan Tiwari. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Cpu className="h-3 w-3 text-indigo-500" />
                Vite React 19
              </span>
              <span className="flex items-center gap-1">
                <Server className="h-3 w-3 text-emerald-500" />
                Express + Gemini Core
              </span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
