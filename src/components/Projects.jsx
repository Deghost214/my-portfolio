import { useState } from "react";
import { Code, Layers, Sparkles, Sliders, Play, TrendingUp, AlertTriangle, CheckCircle, Info, HeartPulse } from "lucide-react";
import { PROJECTS_DATA } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Anemia Predictor State
  const [hb, setHb] = useState(12.4);
  const [mcv, setMcv] = useState(85.0);
  const [mch, setMch] = useState(29.5);
  const [mchc, setMchc] = useState(33.2);

  // Sales ETL Pipeline Simulator State
  const [ingestedRecords, setIngestedRecords] = useState(1500);
  const [anomalyRate, setAnomalyRate] = useState(4.2);

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  // In-JS Clinical Anemia Decision Tree Predictor
  const predictAnemia = () => {
    let riskScore = 0;
    let diagnosis = "Normal Health profile detected.";
    let notes = "All blood parameters are within normal clinical thresholds.";
    let type = "Healthy";

    // Standard clinical thresholds
    // Low Hemoglobin is the primary diagnostic marker for anemia
    if (hb < 11.5) {
      riskScore += 60;
      if (hb < 9.0) riskScore += 25;
      
      // Classify Anemia types based on MCV
      if (mcv < 80) {
        type = "Microcytic Anemia";
        diagnosis = "Microcytic Hypochromic Anemia Risk detected.";
        notes = "Characterized by abnormally small red blood cells, commonly resulting from classic iron deficiency or thalassemia traits.";
      } else if (mcv > 100) {
        type = "Macrocytic Anemia";
        diagnosis = "Macrocytic Megaloblastic Anemia Risk detected.";
        notes = "Characterized by abnormally enlarged red blood cells, frequently associated with Vitamin B12 or Folate deficiencies.";
      } else {
        type = "Normocytic Anemia";
        diagnosis = "Normocytic Normochromic Anemia Risk detected.";
        notes = "Red blood cells are normal in volume, but count is low. Often points towards chronic inflammatory conditions or acute blood depletion.";
      }
    } else if (hb >= 11.5 && hb < 13.0) {
      // Borderline
      riskScore += 25;
      if (mcv < 82 || mch < 27) {
        type = "Borderline Microcytic";
        diagnosis = "Borderline Latent Iron Deficiency suspected.";
        notes = "Early stages of iron exhaustion. Red blood cell indicators are starting to compress before deep anemia registers.";
      } else {
        type = "Mild Anemia";
        diagnosis = "Mild Borderline Anemia detected.";
        notes = "Slight reduction in oxygen carriers. Recommend hydration, iron-rich diet review, and follow-up screening.";
      }
    }

    // Secondary indicators
    if (mch < 27) riskScore += 10;
    if (mchc < 32) riskScore += 5;

    const riskPercent = Math.min(riskScore, 100);

    return {
      riskPercent,
      type,
      diagnosis,
      notes,
    };
  };

  const { riskPercent, type, diagnosis, notes } = predictAnemia();

  // Sales ETL Pipeline & Report Analysis Calculations
  const getPipelineAnalysis = () => {
    const quarantined = Math.round(ingestedRecords * (anomalyRate / 100));
    const validated = ingestedRecords - quarantined;
    const avgTicket = 78.50;
    const grossSales = validated * avgTicket;
    const leakageMitigated = quarantined * avgTicket;
    const integrity = (100 - anomalyRate).toFixed(1);

    return {
      quarantined,
      validated,
      grossSales: `$${grossSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      leakageMitigated: `$${leakageMitigated.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      integrityScore: `${integrity}%`,
    };
  };

  const pipelineMetrics = getPipelineAnalysis();

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 animate-fadeIn" id="projects-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-indigo-950/50 border border-indigo-800/60 text-indigo-300 text-xs font-semibold tracking-wider uppercase rounded-full shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
            <span>Showcase & Interactive Simulators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight">
            Data & AI <span className="text-indigo-400 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Project Portfolio</span>
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Engineered real-world applications structured with professional metric frameworks. Click through filter tabs or engage with the real-time clinical diagnostics and automated ETL pipeline simulators below!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-14" id="projects-filter-bar">
          {["All", "Data Analytics", "Machine Learning", "NLP / AI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl border tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] scale-[1.03]"
                  : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" id="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/40 border border-slate-850/80 rounded-2xl overflow-hidden hover:border-slate-700/60 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left"
            >
              {/* Card Header & category */}
              <div className="p-6 border-b border-slate-850 bg-slate-900/20 flex justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                    {project.title}
                  </h3>
                </div>
                {project.interactiveSim && (
                  <span className="px-2.5 py-1 bg-emerald-950/80 text-emerald-400 text-[10px] font-extrabold rounded-lg border border-emerald-800 uppercase font-mono tracking-wider shrink-0 flex items-center gap-1.5 shadow-sm animate-pulse">
                    <Sliders className="h-3.5 w-3.5" />
                    Interactive
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  {project.description}
                </p>

                {/* KPI Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2 bg-slate-950/60 p-3 rounded-xl border border-slate-850/70">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center border-r last:border-r-0 border-slate-800/60">
                      <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                        Impact metric
                      </span>
                      <span className="block font-mono text-xs sm:text-sm font-extrabold text-emerald-400 mt-1 leading-none">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-sans font-medium text-slate-400">
                    <strong className="text-slate-200 uppercase text-[10px] tracking-widest block mb-1">Core Tech Stack</strong>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono font-bold text-slate-300 bg-slate-950/80 rounded-lg border border-slate-850"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project structured specifications tabs */}
                <div className="pt-4 border-t border-slate-850/60 grid grid-cols-1 gap-4.5">
                  <div className="text-xs">
                    <span className="font-bold text-rose-400 uppercase text-[9px] tracking-wider block mb-1">Problem Context</span>
                    <span className="text-slate-300 leading-relaxed block">{project.problem}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-emerald-400 uppercase text-[9px] tracking-wider block mb-1">Engineered Solution</span>
                    <span className="text-slate-300 leading-relaxed block">{project.solution}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-cyan-400 uppercase text-[9px] tracking-wider block mb-1">Business Outcome</span>
                    <span className="text-slate-300 leading-relaxed block">{project.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Simulators injected inside cards directly */}
              {project.interactiveSim && project.id === "anemia-analytics" && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-850 bg-slate-900/20">
                  <div className="bg-slate-950 border border-slate-850/80 rounded-2xl p-5 space-y-5 shadow-inner">
                    
                    {/* Simulator Header */}
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 border-b border-slate-900 pb-3">
                      <HeartPulse className="h-4 w-4 text-emerald-400 animate-pulse" />
                      <span>CLINICAL ANEMIA RISK EVALUATOR (DECISION TREE)</span>
                    </div>

                    {/* Sliders Block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Hemoglobin */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Hemoglobin (Hb)</span>
                          <span className="text-indigo-400 font-extrabold font-mono">{hb} g/dL</span>
                        </div>
                        <input
                          type="range"
                          min="5.0"
                          max="18.0"
                          step="0.1"
                          value={hb}
                          onChange={(e) => setHb(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <span className="text-[9px] text-slate-500 font-sans block">Norm: 12.0 - 16.0</span>
                      </div>

                      {/* MCV */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Cell Volume (MCV)</span>
                          <span className="text-indigo-400 font-extrabold font-mono">{mcv} fL</span>
                        </div>
                        <input
                          type="range"
                          min="50.0"
                          max="120.0"
                          step="0.5"
                          value={mcv}
                          onChange={(e) => setMcv(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <span className="text-[9px] text-slate-500 font-sans block">Norm: 80 - 100 fL</span>
                      </div>

                      {/* MCH */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Mean Cell Hb (MCH)</span>
                          <span className="text-indigo-400 font-extrabold font-mono">{mch} pg</span>
                        </div>
                        <input
                          type="range"
                          min="15.0"
                          max="45.0"
                          step="0.2"
                          value={mch}
                          onChange={(e) => setMch(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <span className="text-[9px] text-slate-500 font-sans block">Norm: 27 - 33 pg</span>
                      </div>

                      {/* MCHC */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Cell Hb Conc (MCHC)</span>
                          <span className="text-indigo-400 font-extrabold font-mono">{mchc} g/dL</span>
                        </div>
                        <input
                          type="range"
                          min="25.0"
                          max="40.0"
                          step="0.2"
                          value={mchc}
                          onChange={(e) => setMchc(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <span className="text-[9px] text-slate-500 font-sans block">Norm: 32 - 36 g/dL</span>
                      </div>
                    </div>

                    {/* Classifier Output Indicator */}
                    <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col sm:flex-row gap-5 items-center justify-between text-left">
                      {/* Risk Dial percentage */}
                      <div className="relative w-22 h-22 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="44" cy="44" r="34" className="stroke-slate-800 stroke-2 fill-none" />
                          <circle
                            cx="44"
                            cy="44"
                            r="34"
                            className={`stroke-3 fill-none transition-all duration-500 ${
                              riskPercent > 50 ? "stroke-rose-500" : riskPercent > 20 ? "stroke-amber-500" : "stroke-emerald-500"
                            }`}
                            strokeDasharray={`${2 * Math.PI * 34}`}
                            strokeDashoffset={`${2 * Math.PI * 34 * (1 - riskPercent / 100)}`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="font-mono text-lg font-black text-white">{riskPercent}%</span>
                          <span className="text-[7px] font-mono font-bold text-slate-500 tracking-widest uppercase">Risk Dial</span>
                        </div>
                      </div>

                      {/* Diagnostic details */}
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex items-center gap-2">
                          <span className={`h-2.5 w-2.5 rounded-full animate-pulse ${riskPercent > 50 ? "bg-rose-500 shadow-[0_0_10px_#f43f5e]" : riskPercent > 20 ? "bg-amber-500 shadow-[0_0_10px_#f59e0b]" : "bg-emerald-500 shadow-[0_0_10px_#10b981]"}`} />
                          <span className="text-xs font-mono font-black text-white uppercase tracking-wider">{type}</span>
                        </div>
                        <p className="text-xs text-slate-200 font-semibold leading-relaxed">{diagnosis}</p>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{notes}</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {project.interactiveSim && project.id === "sales-etl-pipeline" && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-850 bg-slate-900/20">
                  <div className="bg-slate-950 border border-slate-850/80 rounded-2xl p-5 space-y-5 shadow-inner">
                    
                    {/* Header */}
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 border-b border-slate-900 pb-3">
                      <Layers className="h-4 w-4 text-indigo-400 animate-pulse" />
                      <span>KAGGLE SALES DATASET ETL & INTERACTIVE REPORT ANALYZER</span>
                    </div>
 
                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Kaggle Raw Transactions</span>
                          <span className="text-indigo-400 font-bold font-mono">{ingestedRecords} rows</span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="5000"
                          step="100"
                          value={ingestedRecords}
                          onChange={(e) => setIngestedRecords(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                      </div>
 
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-slate-400 font-medium">Nulls & Missing values (Pandas)</span>
                          <span className="text-rose-400 font-bold font-mono">{anomalyRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="15.0"
                          step="0.1"
                          value={anomalyRate}
                          onChange={(e) => setAnomalyRate(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                        />
                      </div>
                    </div>
 
                    {/* Pipeline & Report Analysis Logs + Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Pipeline Terminal Logs */}
                      <div className="bg-slate-950/85 border border-slate-900 rounded-xl p-4 font-mono text-[10px] space-y-2 text-left shadow-inner">
                        <p className="text-slate-500 border-b border-slate-900 pb-1.5 font-bold uppercase tracking-wider text-[8px]">Python Data Pipeline & Seaborn Plot Logs</p>
                        <p className="text-indigo-400 animate-fadeIn">
                          <span className="text-slate-600">[pandas.read_csv]</span> Ingested <span className="text-white font-extrabold">{ingestedRecords}</span> raw lines from Kaggle Superstore retail dataset.
                        </p>
                        <p className="text-indigo-400 animate-fadeIn">
                          <span className="text-slate-600">[numpy.where]</span> Imputed and cleaned <span className="text-rose-400 font-extrabold">{pipelineMetrics.quarantined}</span> missing or corrupted discount records.
                        </p>
                        <p className="text-indigo-400 animate-fadeIn">
                          <span className="text-slate-600">[mysql.connector]</span> Populated <span className="text-emerald-400 font-extrabold">{pipelineMetrics.validated}</span> cleaned rows into relational SQL sales metrics tables.
                        </p>
                        <p className="text-emerald-400 animate-fadeIn font-semibold">
                          <span className="text-slate-600">[seaborn.heatmap]</span> Plotted monthly sales correlation matrix and exported live tables to Power BI & Excel!
                        </p>
                      </div>
 
                      {/* Key Aggregated Analytics Dashboard */}
                      <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex flex-col justify-between text-left">
                          <span className="text-slate-500 font-sans text-[8px] font-bold uppercase tracking-wider">Cleaned Rows</span>
                          <span className="text-indigo-300 font-extrabold text-sm mt-1">{pipelineMetrics.validated}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5">Sourced from raw {ingestedRecords}</span>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex flex-col justify-between text-left">
                          <span className="text-slate-500 font-sans text-[8px] font-bold uppercase tracking-wider">Data Integrity</span>
                          <span className="text-emerald-400 font-extrabold text-sm mt-1">{pipelineMetrics.integrityScore}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5">Acceptable standard &gt;95%</span>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex flex-col justify-between text-left">
                          <span className="text-slate-500 font-sans text-[8px] font-bold uppercase tracking-wider">Gross Revenue (Excel)</span>
                          <span className="text-cyan-400 font-extrabold text-xs mt-1">{pipelineMetrics.grossSales}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5">Calculated Average Order</span>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex flex-col justify-between text-left">
                          <span className="text-slate-500 font-sans text-[8px] font-bold uppercase tracking-wider">Leakage Flagged</span>
                          <span className="text-rose-400 font-extrabold text-xs mt-1">{pipelineMetrics.leakageMitigated}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5">Anomalies caught via pandas</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
