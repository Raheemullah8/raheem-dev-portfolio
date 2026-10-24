"use client";

import { ExternalLink, Terminal } from "lucide-react";

interface GitHubSectionProps {
  opacity: number;
  translateY: number;
}

export default function GitHubSection({
  opacity,
  translateY,
}: GitHubSectionProps) {
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-orange-400 block mb-1">
              ✦ Open Source &amp; Contributions
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-6xl uppercase tracking-wide text-white leading-tight">
              Live GitHub Activity
            </h2>
          </div>
          <a
            href="https://github.com/Raheemullah8"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-3 py-1.5 rounded-full glass-pill hover:bg-orange-500/20 text-xs font-mono text-orange-300 border border-orange-500/40 flex items-center gap-1.5 transition-all"
          >
            <span>github.com/Raheemullah8</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          <div className="md:col-span-6 p-2.5 sm:p-3 rounded-2xl glass-panel border border-white/10 flex flex-col justify-center items-center overflow-hidden">
            <img
              src="https://github-readme-stats.vercel.app/api?username=raheemullah8&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=f97316&icon_color=fb923c&text_color=e4e4e7&rank_icon=github"
              alt="Raheem Ullah GitHub Stats"
              className="w-full h-auto max-h-36 sm:max-h-48 object-contain"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-6 p-2.5 sm:p-3 rounded-2xl glass-panel border border-white/10 flex flex-col justify-center items-center overflow-hidden">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=raheemullah8&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=f97316&text_color=e4e4e7"
              alt="Raheem Ullah Top Languages"
              className="w-full h-auto max-h-36 sm:max-h-48 object-contain"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-6 p-2.5 sm:p-3 rounded-2xl glass-panel border border-white/10 flex flex-col justify-center items-center overflow-hidden">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=raheemullah8&theme=tokyonight&hide_border=true&background=00000000&ring=f97316&fire=fbbf24&currStreakLabel=f97316&sideLabels=a1a1aa&currStreakNum=ffffff&sideNums=ffffff&dates=71717a"
              alt="Raheem Ullah GitHub Streak"
              className="w-full h-auto max-h-36 sm:max-h-48 object-contain"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-6 p-3 sm:p-4 rounded-2xl glass-panel border border-orange-500/30 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span>Contribution Grid Snake</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                Active Commits
              </span>
            </div>
            <div className="w-full overflow-hidden flex items-center justify-center py-1 sm:py-2">
              <img
                src="https://raw.githubusercontent.com/Raheemullah8/Raheemullah8/output/github-contribution-grid-snake-dark.svg"
                alt="Raheem Ullah GitHub Contribution Snake"
                className="w-full h-auto max-h-24 sm:max-h-28 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[10px] text-zinc-500 font-mono text-center">
              Daily commits &amp; open source tracking from github.com/Raheemullah8
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
