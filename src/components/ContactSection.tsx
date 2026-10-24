"use client";

import {
  Bot,
  Code2,
  GraduationCap,
  MessageSquare,
  Mail,
  ArrowUp,
} from "lucide-react";

interface ContactSectionProps {
  opacity: number;
  translateY: number;
  scrollToSection: (progress: number) => void;
  copiedEmail: boolean;
  copyEmailToClipboard: () => void;
}

export default function ContactSection({
  opacity,
  translateY,
  scrollToSection,
  copiedEmail,
  copyEmailToClipboard,
}: ContactSectionProps) {
  return (
    <section
      className="absolute inset-0 z-30 flex flex-col items-center justify-center px-3.5 sm:px-10 pt-16 sm:pt-0 text-center pointer-events-none transition-all duration-300"
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="max-w-4xl mx-auto w-full max-h-[85vh] sm:max-h-none overflow-y-auto sm:overflow-visible overscroll-contain py-2 pr-1 sm:pr-0">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-orange-400 mb-1.5 sm:mb-2 block">
          ✦ Academic Background &amp; Connect
        </span>

        <h2 className="font-display text-2xl sm:text-4xl md:text-6xl uppercase tracking-wide text-white leading-tight drop-shadow-[0_5px_30px_rgba(249,115,22,0.35)] mb-4 sm:mb-6">
          Education &amp; Let&apos;s Connect
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-5 text-left">
          <div className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-emerald-500/40 glow-orange">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2">
              <Bot className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-bold text-white">
                Agentic AI (Currently Learning)
              </h4>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                Learning
              </span>
            </div>
            <p className="text-[11px] text-orange-300 mt-0.5">
              Saylani Mass IT Training (SMIT)
            </p>
            <span className="text-[10px] font-mono text-zinc-400">
              Currently Enrolled Student
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-2">
              <Code2 className="w-4 h-4 text-orange-400" />
            </div>
            <h4 className="text-xs font-bold text-white">
              Certified MERN Stack Developer
            </h4>
            <p className="text-[11px] text-orange-300 mt-0.5">
              Saylani Mass IT Training
            </p>
            <span className="text-[10px] font-mono text-zinc-400">
              2023 – 2025
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-2">
              <GraduationCap className="w-4 h-4 text-orange-400" />
            </div>
            <h4 className="text-xs font-bold text-white">
              ADSE, Computer Science
            </h4>
            <p className="text-[11px] text-orange-300 mt-0.5">APTECH Learning</p>
            <span className="text-[10px] font-mono text-zinc-400">
              2021 – 2025
            </span>
          </div>
        </div>

        {/* Direct Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-lg sm:max-w-none mx-auto">
          <a
            href="https://wa.me/923243560928"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp / +92 324 3560928</span>
          </a>

          <button
            onClick={copyEmailToClipboard}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>
              {copiedEmail ? "✓ Email Copied!" : "raheem3434a@gmail.com"}
            </span>
          </button>

          <button
            onClick={() => scrollToSection(0)}
            className="px-4 py-2.5 rounded-full glass-pill hover:bg-white/10 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </section>
  );
}
