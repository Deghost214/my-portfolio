import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Bot, User, Sparkles, RefreshCw, AlertCircle, HelpCircle } from "lucide-react";

export default function AiTwin() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Harsh's AI Twin. I have been trained on his resume, projects, and work experiences. Ask me anything about his technical background, projects, or why he is the perfect fit for your team!",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What are your core database skills?",
    "Explain the Anemia prediction project.",
    "Tell me about your internship at QSpiders.",
    "Are you available for relocation?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);
    setError(null);

    try {
      // Package chat history for context mapping on server
      const chatHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
        }),
      });

      if (!res.ok) {
        throw new Error("Server responded with error status.");
      }

      const data = await res.json();
      
      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("AI Twin Error:", err);
      setError("Failed to query my AI twin. Server is running in mock fallback mode.");
      
      // Offline simulation fallback
      setTimeout(() => {
        const fallbacks = {
          "database": "My database skills include MySQL and PostgreSQL. I specialize in designing normalized schemas, index tuning, and writing complex CTEs/joins. At QSpiders Noida, I compose advanced queries daily to extract business insights.",
          "anemia": "The Anemia prediction system is a machine learning tool built in Python using clinical blood parameters (Hb, MCV, MCH, MCHC) achieving 94% accuracy with an ensemble classifier. You can try a live simulation of it in the Projects section above!",
          "internship": "At QSpiders, Noida, I focus on Data Analytics, transforming transactional logs with advanced SQL (joins, window functions, CTEs) and utilizing Python (Pandas/NumPy) to design automated ETL pipelines and sales analytics reports.",
          "relocation": "Yes, I am fully available for relocation! I would love to join your team in Delhi NCR, Noida, Gurgaon, Bangalore, or work remotely. I am highly flexible and eager to start.",
          "sales": "The Kaggle Sales EDA project is an end-to-end data pipeline. I cleaned and transformed raw Superstore retail transactions using Python Pandas and NumPy, ran relational SQL metrics, plotted monthly trends via Seaborn, and designed interactive Power BI/Excel dashboards.",
          "kaggle": "The Kaggle Sales EDA project is an end-to-end data pipeline. I cleaned and transformed raw Superstore retail transactions using Python Pandas and NumPy, ran relational SQL metrics, plotted monthly trends via Seaborn, and designed interactive Power BI/Excel dashboards.",
          "power bi": "I designed interactive Power BI dashboards and automated Excel spreadsheets for our Kaggle retail dataset analysis, exposing regional sales patterns, seasonality spikes, and product discounting structures.",
          "excel": "I designed interactive Power BI dashboards and automated Excel spreadsheets for our Kaggle retail dataset analysis, exposing regional sales patterns, seasonality spikes, and product discounting structures."
        };

        const lowercaseInput = textToSend.toLowerCase();
        let matchedReply = "Thanks for asking! I am currently pursuing my B.Tech in CSE (CGPA 7.2), have solved 300+ LeetCode problems, and hold a Google Cybersecurity Certification. How else can I help you today?";
        
        for (const [key, val] of Object.entries(fallbacks)) {
          if (lowercaseInput.includes(key)) {
            matchedReply = val;
            break;
          }
        }

        const assistantMsgFallback = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: matchedReply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMsgFallback]);
        setError(null);
      }, 700);

    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Hello! I am Harsh's AI Twin. I have been trained on his resume, projects, and work experiences. Ask me anything about his technical background, projects, or why he is the perfect fit for your team!",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  };

  return (
    <section id="ai-twin" className="py-20 bg-transparent border-y border-slate-900/40 text-left relative">
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" id="ai-twin-header">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950 border border-indigo-800 text-indigo-400 text-xs font-semibold tracking-wider uppercase rounded-full">
            <Sparkles className="h-3 w-3 text-indigo-400 animate-pulse" />
            <span>Gemini AI Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Interview My <span className="text-indigo-400">AI Twin</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Can't wait to schedule a call? Ask my virtual twin any technical question. It handles follow-up dialogues, project descriptions, and credentials mapping using server-side Gemini 3.5.
          </p>
        </div>

        {/* Chat Interface Console */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]" id="chat-console">
          
          {/* Console Header */}
          <div className="bg-slate-900/80 px-4 sm:px-6 py-4 border-b border-slate-850 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg border border-indigo-800/30">
                <Bot className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white font-sans">HARSH_AI_TWIN_V1.5</h3>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono">Status: Connected to Server-Side LLM</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-slate-800 rounded-lg transition-colors text-xs font-mono flex items-center gap-1 border border-transparent hover:border-slate-750"
              title="Reset Chat history"
              id="reset-chat-btn"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset Context</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4" id="messages-log">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse text-right" : "mr-auto text-left"
                }`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                    msg.role === "user"
                      ? "bg-slate-900 border-slate-800 text-indigo-400"
                      : "bg-indigo-950/60 border-indigo-800 text-emerald-400"
                  }`}
                >
                  {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                {/* Dialog Bubble */}
                <div className="space-y-1">
                  <div
                    className={`rounded-xl p-3 text-sm font-sans leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none text-left"
                        : "bg-slate-900 text-slate-300 border border-slate-850 rounded-tl-none text-left"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                  <span className="text-[9px] text-slate-600 block font-mono">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 max-w-[85%] mr-auto text-left">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                </div>
                <div className="bg-slate-900 border border-slate-850 rounded-xl rounded-tl-none p-3.5 flex items-center space-x-2 text-xs font-mono text-slate-500">
                  <span>AI Twin thinking...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-amber-950/30 border border-amber-900/60 rounded-xl text-amber-300 text-xs font-mono flex items-center gap-2 max-w-xl mx-auto">
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-400" />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Presets panel */}
          <div className="px-4 py-2 border-t border-slate-850 bg-slate-950/50 text-left flex gap-2 overflow-x-auto shrink-0 scrollbar-none" id="chat-presets">
            <span className="text-[10px] font-mono text-slate-600 shrink-0 self-center uppercase tracking-wide mr-1 flex items-center gap-1">
              <HelpCircle className="h-3 w-3 text-slate-500" />
              Ask:
            </span>
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full text-[11px] font-sans font-semibold border bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all shrink-0 whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Form Action input footer */}
          <div className="p-4 border-t border-slate-850 bg-slate-900/30 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="flex gap-2.5"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={loading}
                placeholder="Type your question about Harsh's database expertise, projects, education..."
                className="flex-grow px-4 py-3 bg-slate-950 text-slate-300 text-sm font-sans border border-slate-850 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 disabled:text-slate-600 transition-all"
                id="chat-input"
              />
              <button
                type="submit"
                disabled={loading || !inputText.trim()}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-950 disabled:text-slate-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-indigo-500/10 flex items-center gap-1.5 shrink-0"
              >
                <span>Send</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
