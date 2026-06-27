import { useState } from "react";
import { BarChart3, Brain, Database, Binary, Info, CheckCircle2 } from "lucide-react";
import { SKILLS_DATA } from "../data";

export default function Skills() {
  const [selectedSkillName, setSelectedSkillName] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className="h-5 w-5 text-indigo-400" />;
      case "Brain":
        return <Brain className="h-5 w-5 text-emerald-400" />;
      case "Database":
        return <Database className="h-5 w-5 text-cyan-400" />;
      case "Binary":
        return <Binary className="h-5 w-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="skills-header">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950 border border-indigo-800 text-indigo-400 text-xs font-semibold tracking-wider uppercase rounded-full">
            <Binary className="h-3 w-3" />
            <span>Inventory Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Technical <span className="text-indigo-400">Skill Competencies</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Structured skillsets categorized across data structures, machine learning pipelines, and database query languages. Tap any skill to reveal specialized details and practical usage!
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-categories">
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-850 p-6 sm:p-8 rounded-2xl space-y-6 hover:border-slate-750 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 border-b border-slate-900 pb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-lg font-bold font-sans text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4.5 flex-grow">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => setSelectedSkillName(selectedSkillName === skill.name ? null : skill.name)}
                    className="space-y-1.5 cursor-pointer group"
                  >
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans">
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors flex items-center gap-1">
                        {skill.name}
                        <Info className="h-3 w-3 text-slate-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="font-mono font-bold text-indigo-400 group-hover:text-indigo-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-850/60">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500 group-hover:from-indigo-400 group-hover:to-emerald-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Toggleable detail sub-panel */}
                    {selectedSkillName === skill.name && skill.info && (
                      <div className="p-2.5 bg-slate-950/80 border border-slate-850 rounded-lg text-xs text-slate-400 font-sans leading-relaxed animate-fadeIn">
                        {skill.info}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
