"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (progress: number) => void;
  activeSection?: string;
}

export default function Navbar({
  scrollToSection,
  activeSection = "about",
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About", progress: 0.02, num: "01" },
    { id: "experience", label: "FBR Experience", progress: 0.28, num: "02" },
    { id: "github", label: "GitHub Stats", progress: 0.52, hasDot: true, num: "03" },
    {
      id: "projects",
      label: "Featured Projects",
      progress: 0.74,
      badge: "FBR & MERN",
      num: "04",
    },
    { id: "contact", label: "Contact", progress: 0.94, num: "05" },
  ];

  // Close mobile menu on Esc key or when resizing to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (progress: number) => {
    scrollToSection(progress);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-0 w-full z-40 px-3.5 sm:px-8 md:px-10 flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick(0)}
          className="flex items-center gap-2 group transition-transform active:scale-95"
          aria-label="Raheem Ullah Home"
        >
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <span className="font-display text-lg text-orange-400 font-bold tracking-wider">
              R
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-extrabold tracking-tight text-white text-xs sm:text-base group-hover:text-orange-400 transition-colors">
              RAHEEM ULLAH
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-orange-400/90 hidden xs:inline">
              Full Stack Developer
            </span>
          </div>
        </button>

        {/* Mobile Active Section Pill (Compact) */}
        <div className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill border border-orange-500/30 text-[10px] font-mono text-orange-400">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider max-w-[110px] truncate">
            {navItems.find((item) => item.id === activeSection)?.label ||
              activeSection}
          </span>
        </div>

        {/* Desktop Quick Nav Links with Active State Highlighting */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill shadow-lg shadow-black/40 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.progress)}
                className={`relative px-3 py-1 text-xs rounded-full transition-all duration-300 flex items-center gap-1.5 border ${isActive
                    ? "bg-orange-500/20 border-orange-500/50 text-white font-semibold shadow-[0_0_15px_rgba(249,115,22,0.35)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent font-medium"
                  }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                )}
                <span>{item.label}</span>
                {item.hasDot && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold transition-colors ${isActive
                        ? "bg-orange-500 text-white"
                        : "bg-white/10 text-orange-300"
                      }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Hub & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Social Links - Desktop & Tablets */}
          <a
            href="https://github.com/Raheemullah8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-8 h-8 rounded-full glass-pill items-center justify-center text-zinc-300 hover:text-white hover:border-orange-500/50 transition-all active:scale-95"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <a
            href="https://pk.linkedin.com/in/raheemullah8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-8 h-8 rounded-full glass-pill items-center justify-center text-zinc-300 hover:text-white hover:border-orange-500/50 transition-all active:scale-95"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Desktop Contact CTA */}
          <button
            onClick={() => handleNavClick(0.94)}
            className="hidden sm:flex relative group px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 transition-all items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* MOBILE TOGGLE BUTTON (Hamburger / Close) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-9 h-9 rounded-full glass-pill border border-orange-500/40 text-orange-400 flex items-center justify-center hover:bg-orange-500/20 active:scale-95 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-orange-300 animate-in spin-in-90 duration-200" />
            ) : (
              <Menu className="w-5 h-5 text-orange-400" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/85 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-8 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                <span className="font-display text-lg text-orange-400 font-bold">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-sm">RAHEEM ULLAH</span>
                <span className="text-[10px] font-mono text-orange-400">Full Stack Developer</span>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full glass-pill border border-white/20 text-zinc-300 hover:text-white flex items-center justify-center active:scale-90 transition-transform"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items List */}
          <nav className="my-auto flex flex-col gap-2 py-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-1">
              ✦ Navigation Sections
            </span>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.progress)}
                  className={`group w-full p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${isActive
                      ? "bg-gradient-to-r from-orange-500/25 to-amber-500/10 border-orange-500/60 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                      : "bg-white/[0.03] border-white/10 hover:border-orange-500/40 hover:bg-white/[0.06]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold ${isActive ? "text-orange-400" : "text-zinc-500"
                        }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-base font-heading font-semibold transition-colors ${isActive
                          ? "text-white text-glow-orange"
                          : "text-zinc-300 group-hover:text-white"
                        }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/30 text-orange-300 border border-orange-500/40">
                        {item.badge}
                      </span>
                    )}
                    {item.hasDot && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Bottom Drawer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/Raheemullah8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-orange-500/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-200 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-orange-400" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://pk.linkedin.com/in/raheemullah8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-orange-500/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-200 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-orange-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={() => handleNavClick(0.94)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-heading font-bold text-sm shadow-[0_0_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              <span>Get in Touch &amp; Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
