"use client";

import { Sparkles, ArrowUp, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  opacity: number;
  translateY: number;
  scrollToSection: (progress: number) => void;
}

export default function ProjectsSection({
  opacity,
  translateY,
  scrollToSection,
}: ProjectsSectionProps) {
  return (
    <section
      className="absolute inset-0 z-30 flex flex-col justify-center px-3.5 sm:px-8 md:px-14 pt-16 sm:pt-0 pointer-events-none transition-all duration-300"
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="w-full max-w-7xl mx-auto max-h-[85vh] sm:max-h-none overflow-y-auto sm:overflow-visible overscroll-contain py-2 pr-1 sm:pr-0">
        {/* Tech Marquee Strip (No AI references in FBR context) */}
        <div className="w-full overflow-hidden py-1.5 sm:py-2 bg-orange-950/30 border-y border-orange-500/30 backdrop-blur-md mb-3 sm:mb-4">
          <div className="flex whitespace-nowrap animate-pulse text-[10px] sm:text-xs font-mono tracking-widest text-orange-300 justify-around gap-4">
            <span>✦ ENTERPRISE FBR E-INVOICING</span>
            <span>✦ CLIENT TEMPLATE CUSTOMIZATION</span>
            <span>✦ MERN STACK &amp; RTK QUERY</span>
            <span>✦ NEXT.JS &amp; OAUTH 2.0</span>
            <span>✦ EJS &amp; TAX COMPLIANCE</span>
            <span>✦ BULK CSV INGESTION</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4">
          <div>
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-orange-400 mb-1">
              ✦ Enterprise Solutions &amp; Web Applications
            </p>
            <h3 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
              Featured Projects
            </h3>
          </div>
          <div className="mt-1 sm:mt-0 text-[11px] sm:text-xs text-zinc-400 font-mono">
            Live B2B &amp; Full-Stack Systems
          </div>
        </div>

        {/* 4 Flagship Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* 1. ENTERPRISE FBR E-INVOICING & COMPLIANCE SYSTEM */}
          <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-orange-500/70 glow-orange hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-bl-lg shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>ENTERPRISE FBR</span>
            </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                Fintech / Tax Compliance
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">01</span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
              Enterprise FBR E-Invoicing &amp; Compliance System
            </h4>
            <p className="text-[11px] text-zinc-200 mt-1.5 leading-relaxed">
              Building and customizing B2B invoice generation systems compliant
              with Federal Board of Revenue (FBR) real-time digital submission
              standards.
            </p>
            <div className="mt-2 text-[10px] text-zinc-400 space-y-1">
              <p>• EJS pixel-perfect client templates &amp; business logic</p>
              <p>• Rigorous NTN/STRN tax calculations &amp; validation</p>
              <p>
                • Node.js/Express real-time FBR API pipelines &amp; CSV ingestion
              </p>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "React.js",
                "EJS",
                "REST APIs",
              ].map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollToSection(0.28)}
            className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-semibold tracking-wide shadow-md shadow-orange-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>View FBR Architecture Details</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2. Blog Application & CMS (From Resume) */}
        <div className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                MERN • RTK Query • DaisyUI
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">02</span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
              Full-Stack Blog &amp; CMS Platform
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
              Full-stack blog with admin panel, secure authentication, post
              management, and comments. Built with React.js, DaisyUI, Redux
              Toolkit (RTK Query), and Context API.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {["React.js", "Express", "Node.js", "MongoDB", "Redux"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          <a
            href="https://blog-app-frontend-zeta-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500 text-orange-300 hover:text-white text-xs font-semibold tracking-wide border border-orange-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3. Event Management Platform (From Resume) */}
        <div className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Next.js • OAuth 2.0 • Tailwind
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">03</span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
              Event Management Application
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
              Modern event management platform to create, update, and manage
              events. Implemented secure OAuth 2.0 authentication, responsive UI
              with Tailwind CSS, and MongoDB.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {["Next.js", "Tailwind CSS", "MongoDB", "OAuth 2.0"].map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://findyourfrainds.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500 text-orange-300 hover:text-white text-xs font-semibold tracking-wide border border-orange-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4. Employee Task Management System */}
        <div className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                React.js • LocalStorage
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">04</span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
              Employee Task Management System
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
              Comprehensive task management system built with React.js featuring
              persistent data storage, intuitive UI dashboard, and efficient
              task tracking workflows.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {[
                "React.js",
                "LocalStorage",
                "State Management",
                "Tailwind",
              ].map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://employee-management-system-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500 text-orange-300 hover:text-white text-xs font-semibold tracking-wide border border-orange-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
}
