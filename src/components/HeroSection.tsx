"use client";

import {
  Sparkles,
  ArrowDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Copy,
  Zap,
  FileSpreadsheet,
  Workflow,
  Globe,
  Bot,
} from "lucide-react";

interface HeroSectionProps {
  opacity: number;
  translateY: number;
  scrollToSection: (progress: number) => void;
  copiedPhone: boolean;
  copiedEmail: boolean;
  copiedSnippet: boolean;
  copyPhoneToClipboard: () => void;
  copyEmailToClipboard: () => void;
  copySnippetToClipboard: () => void;
}

export default function HeroSection({
  opacity,
  translateY,
  scrollToSection,
  copiedPhone,
  copiedEmail,
  copiedSnippet,
  copyPhoneToClipboard,
  copyEmailToClipboard,
  copySnippetToClipboard,
}: HeroSectionProps) {
  return (
    <section
      className="absolute inset-0 z-30 flex items-center justify-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-24 pb-4 sm:pb-6 pointer-events-none transition-all duration-300"
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full max-w-7xl mx-auto max-h-[85vh] sm:max-h-none overflow-y-auto sm:overflow-visible overscroll-contain py-2 pr-1 sm:pr-0">
        {/* Left Column: Direct explanation of what Raheem does & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full glass-pill border-orange-500/30">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider sm:tracking-widest text-orange-300">
                Junior Full Stack Developer • Innovative Network
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full glass-pill border-emerald-500/30 bg-emerald-500/10">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-300">
                Learning Agentic AI @ SMIT
              </span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] sm:leading-[0.98] text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            Raheem Ullah
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-2xl sm:text-4xl md:text-5xl xl:text-6xl block sm:inline mt-0.5 sm:mt-0">
              Full Stack Developer &amp; Fintech Automation
            </span>
          </h1>

          {/* Developer-Focused Bio */}
          <p className="mt-2.5 sm:mt-4 text-zinc-200 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-xl">
            Junior Full Stack Developer specializing in the{" "}
            <strong className="text-white font-semibold">MERN stack</strong>,{" "}
            high-precision financial engines, and automation. Currently
            engineering scalable web applications and compliant enterprise
            e-invoicing pipelines at{" "}
            <strong className="text-orange-400 font-semibold">
              Innovative Network Pvt Ltd
            </strong>
            .
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => scrollToSection(0.74)}
              className="flex-1 sm:flex-initial justify-center px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection(0.94)}
              className="flex-1 sm:flex-initial justify-center px-4 sm:px-5 py-2.5 rounded-full glass-pill hover:bg-white/10 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Direct Contact Badges */}
          <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={copyPhoneToClipboard}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl glass-panel border border-white/10 hover:border-orange-500/40 text-[11px] sm:text-xs font-mono text-zinc-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
              <span>{copiedPhone ? "✓ Copied!" : "+92 316 8062937"}</span>
            </button>

            <button
              onClick={copyEmailToClipboard}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl glass-panel border border-white/10 hover:border-orange-500/40 text-[11px] sm:text-xs font-mono text-zinc-300 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
              <span>{copiedEmail ? "✓ Copied!" : "raheem3434a@gmail.com"}</span>
            </button>

            <div className="px-2.5 sm:px-3 py-1.5 rounded-xl glass-panel border border-white/10 text-[11px] sm:text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Terminal + Core Capabilities & SMIT Agentic AI */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 justify-center">
          {/* Code Snippet Terminal */}
          <div className="rounded-2xl glass-panel border border-orange-500/30 shadow-[0_0_35px_rgba(249,115,22,0.2)] overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-3.5 py-2 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-1.5 text-[11px] text-zinc-400">raheemullah.ts</span>
              </div>
              <button
                onClick={copySnippetToClipboard}
                className="text-[10px] text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                {copiedSnippet ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Check className="w-3 h-3" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </span>
                )}
              </button>
            </div>

            <div className="p-3.5 bg-[#0d1117]/85 text-zinc-300 leading-relaxed text-[11px]">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">raheemullah</span> = &#123;
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">role</span>:{" "}
                <span className="text-emerald-400">
                  &quot;Junior Full Stack Developer&quot;
                </span>
                ,
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">company</span>:{" "}
                <span className="text-emerald-400">
                  &quot;Innovative Network Pvt Ltd&quot;
                </span>
                ,
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">fbrProductWork</span>:{" "}
                <span className="text-amber-300">
                  &quot;Client Invoice Template &amp; Field Integration&quot;
                </span>
                ,
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">stack</span>: [
                <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Express.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;MongoDB&quot;</span>,{" "}
                <span className="text-amber-300">&quot;React.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;EJS&quot;</span>],
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">currentlyLearning</span>:{" "}
                <span className="text-emerald-300">
                  &quot;Agentic AI @ SMIT (Saylani)&quot;
                </span>
                ,
              </p>
              <p className="pl-3.5">
                <span className="text-orange-300">contact</span>:{" "}
                <span className="text-emerald-400">
                  &quot;raheem3434a@gmail.com&quot;
                </span>
                ,
              </p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Core Capabilities / Mera Kaam Kya Kya Aata Hai */}
          <div className="p-3 rounded-2xl glass-panel border border-white/10 bg-black/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                <span>Core Skills &amp; Capabilities</span>
              </span>
              <span className="text-[9px] font-mono text-zinc-400">FBR • Web • AI</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2 rounded-xl bg-black/50 border border-orange-500/30">
                <span className="text-orange-400 font-semibold text-[11px] flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>FBR Invoicing Templates</span>
                </span>
                <span className="text-[10px] text-zinc-300 leading-tight block mt-0.5">
                  EJS customization, branding &amp; FBR submission.
                </span>
              </div>

              <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                <span className="text-orange-300 font-semibold text-[11px] flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-orange-300 shrink-0" />
                  <span>Fields &amp; API Integration</span>
                </span>
                <span className="text-[10px] text-zinc-300 leading-tight block mt-0.5">
                  NTN/STRN tax logic &amp; CSV ingestion pipelines.
                </span>
              </div>

              <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                <span className="text-orange-300 font-semibold text-[11px] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-orange-300 shrink-0" />
                  <span>Full-Stack MERN</span>
                </span>
                <span className="text-[10px] text-zinc-300 leading-tight block mt-0.5">
                  React, Next.js, Node.js &amp; MongoDB systems.
                </span>
              </div>

              <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
                <span className="text-emerald-400 font-semibold text-[11px] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Learning Agentic AI</span>
                  </span>
                  <span className="text-[8px] font-mono text-emerald-300 bg-emerald-500/20 px-1 py-0.2 rounded font-semibold">
                    Learning @ SMIT
                  </span>
                </span>
                <span className="text-[10px] text-zinc-300 leading-tight block mt-0.5">
                  Currently learning LLM fundamentals, prompt design &amp; tool-calling.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
