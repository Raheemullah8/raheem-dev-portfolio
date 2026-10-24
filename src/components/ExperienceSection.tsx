"use client";

import { useState } from "react";
import {
  Building2,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
  Database,
  Code2,
  Bot,
} from "lucide-react";

interface ExperienceSectionProps {
  opacity: number;
  translateY: number;
}

export default function ExperienceSection({
  opacity,
  translateY,
}: ExperienceSectionProps) {
  const [mobileTab, setMobileTab] = useState<"fbr" | "zerovertical">("fbr");

  return (
    <section
      className="absolute inset-0 z-30 flex flex-col justify-center px-3.5 sm:px-10 md:px-16 pt-16 sm:pt-0 pointer-events-none transition-all duration-300"
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto w-full max-h-[85vh] sm:max-h-none overflow-y-auto sm:overflow-visible overscroll-contain py-2 pr-1 sm:pr-0">
        <div className="mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-orange-400 block mb-1">
            ✦ Enterprise Solutions &amp; Career
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-6xl uppercase tracking-wide text-white leading-tight">
            Professional Experience &amp; Engineering
          </h2>
        </div>

        {/* Mobile Tab Control (Visible on phones & tablets < lg) */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-black/60 border border-white/10 mb-3 text-xs font-mono">
          <button
            onClick={() => setMobileTab("fbr")}
            className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all truncate ${
              mobileTab === "fbr"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md shadow-orange-500/20"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            ✦ Innovative Network (FBR)
          </button>
          <button
            onClick={() => setMobileTab("zerovertical")}
            className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all truncate ${
              mobileTab === "zerovertical"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md shadow-orange-500/20"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            ✦ Zerovertical &amp; SMIT AI
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Primary Experience Card: Innovative Network Pvt Ltd (Junior Full Stack Developer) */}
          <div
            className={`lg:col-span-7 p-4 sm:p-5 rounded-2xl glass-panel border border-orange-500/50 glow-orange flex-col justify-between ${
              mobileTab === "fbr" ? "flex" : "hidden lg:flex"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="px-2 sm:px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Oct 2025 – Present • Full-time
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      Fintech / Tax Compliance
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Junior Full Stack Developer
                  </h3>
                  <p className="text-xs font-semibold text-orange-400">
                    Innovative Network Pvt Ltd • Karachi, Pakistan
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed mb-3">
                Core engineer driving client implementations for the enterprise
                B2B E-Invoicing platform. Responsible for architecting dynamic,
                pixel-perfect templates (EJS/HTML/CSS), engineering custom data
                schemas, and enforcing real-time FBR tax calculations alongside
                rigorous NTN/STRN validations.
              </p>

              {/* 4 Key Highlights */}
              <div className="space-y-2 text-xs">
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-orange-400 text-[11px] mb-0.5 flex items-center gap-1.5 font-bold">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-orange-400" />
                    <span>Client-Specific Template Architecture</span>
                  </strong>
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 block">
                    Designed dynamic, pixel-perfect invoice templates
                    (EJS/HTML/CSS) tailored to unique enterprise business logic
                    and branding requirements.
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-orange-400 text-[11px] mb-0.5 flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>FBR Compliance &amp; Validation</span>
                  </strong>
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 block">
                    Implemented rigorous data validation pipelines to verify NTN,
                    STRN, item-level sales tax calculations, and discount
                    structures prior to submission.
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-orange-400 text-[11px] mb-0.5 flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real-time Data Processing</span>
                  </strong>
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 block">
                    Engineered robust Node.js/Express backend services to handle
                    automated JSON invoice payload generation and seamless API
                    integration with FBR portals.
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-orange-400 text-[11px] mb-0.5 flex items-center gap-1.5 font-bold">
                    <Database className="w-3.5 h-3.5 text-orange-400" />
                    <span>Bulk Operations &amp; CSV Ingestion</span>
                  </strong>
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 block">
                    Configured automated CSV ingestion and data parsing modules
                    to support high-volume transaction processing for corporate
                    clients.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 sm:pt-2.5 border-t border-white/10 flex flex-wrap gap-1 sm:gap-1.5">
              {[
                "MERN Stack",
                "FBR Integration",
                "EJS",
                "REST APIs",
                "Tax Compliance",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React.js",
              ].map((t) => (
                <span
                  key={t}
                  className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Column: Zerovertical Labs + Active Agentic AI Section */}
          <div
            className={`lg:col-span-5 flex-col justify-between gap-3 h-full ${
              mobileTab === "zerovertical" ? "flex" : "hidden lg:flex"
            }`}
          >
            {/* Zerovertical Labs */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-2.5">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      Mar 2025 – Aug 2025 • 6 Months
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      Full Stack Developer
                    </h3>
                    <p className="text-xs font-semibold text-orange-400">
                      Zerovertical Labs • Karachi, Pakistan
                    </p>
                  </div>
                  <Code2 className="w-5 h-5 text-orange-400" />
                </div>
                <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed list-disc list-inside">
                  <li>
                    Built <strong>Mali</strong>, a Linktree-style web app using
                    Next.js, TypeScript, &amp; PostgreSQL.
                  </li>
                  <li>
                    Improved mobile usability by 35% and reduced load time by
                    20% through responsive UI &amp; SSR.
                  </li>
                  <li>
                    Developed RESTful APIs and optimized PostgreSQL queries in
                    an agile CI/CD team.
                  </li>
                </ul>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "REST APIs",
                  "CI/CD",
                  "Git",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* DEDICATED AGENTIC AI LEARNING SECTION (SMIT) */}
            <div className="p-4.5 rounded-2xl glass-panel border border-emerald-500/40 bg-emerald-950/20 glow-orange flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Currently Learning Agentic AI
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                    Learning @ SMIT
                  </span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed mb-3">
                  Currently enrolled student in the Agentic AI program at Saylani
                  Mass IT Training (SMIT). Actively learning LLM fundamentals,
                  prompt design, tool-calling concepts, and studying how
                  autonomous agent architectures operate.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-emerald-300">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-emerald-500/30">
                  AI Fundamentals
                </span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-emerald-500/30">
                  Tool Calling Concepts
                </span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-emerald-500/30">
                  LLM Workflows
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
