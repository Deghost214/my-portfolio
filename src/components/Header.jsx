import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "AI Twin", href: "#ai-twin" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
      id="portfolio-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="flex items-center space-x-2.5 text-white group"
            id="brand-logo"
          >
            <div className="p-2 bg-indigo-600 rounded-xl group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Terminal className="h-4.5 w-4.5 text-indigo-100" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight">
              HARSH<span className="text-indigo-400 font-normal">.analytics</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 hover:border hover:border-slate-800/40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#ai-twin"
              className="ml-4 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-1.5"
            >
              <Terminal className="h-4 w-4" />
              <span>Ask My AI Twin</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-850 hover:border-slate-750 transition-all"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl" id="mobile-nav-panel">
          <div className="px-3 pt-2 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-1">
              <a
                href="#ai-twin"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center px-4 py-3.5 rounded-xl text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/20"
              >
                <Terminal className="h-5 w-5" />
                <span>Chat with AI Twin</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
