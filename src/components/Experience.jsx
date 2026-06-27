import { Calendar, MapPin, Briefcase, Award, CheckCircle2 } from "lucide-react";
import { EXPERIENCES_DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent border-y border-slate-900/40 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="experience-header">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950 border border-indigo-800 text-indigo-400 text-xs font-semibold tracking-wider uppercase rounded-full">
            <Briefcase className="h-3 w-3" />
            <span>Professional Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Work & <span className="text-indigo-400">Internship Timeline</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Gaining hands-on enterprise business experience. Specialized in managing relational database queries, formulating Python data prep packages, and validating predictive machine learning models.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 max-w-5xl mx-auto space-y-12" id="experience-timeline">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Spinning Timeline Node Bullet */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Box Layout */}
              <div className="bg-slate-950 border border-slate-850 hover:border-slate-750 p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-900 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 font-sans mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3.5 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-sans mb-5 font-normal">
                  {exp.description}
                </p>

                {/* Achievements bullets */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Key Performance Indicators & Output Accomplishments
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-300 font-sans">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills gained micro badges */}
                <div className="mt-6 pt-5 border-t border-slate-900">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Core Technical Assets Acquired
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-900/40 text-indigo-300 text-xs font-mono rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
