"use client";

import { useEffect, useState } from "react";
import { Terminal, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  loadProgress: number;
}

export default function LoadingScreen({ loadProgress }: LoadingScreenProps) {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
    if (loadProgress >= 100) {
      // Small delay to allow the user to see 100% completion
      const timer = setTimeout(() => {
        setIsDone(true);
      }, 400);

      // Remove from DOM after fade out transition completes
      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1200);

      return () => {
        clearTimeout(timer);
        clearTimeout(unmountTimer);
      };
    }
  }, [loadProgress]);

  if (!shouldRender) return null;

  // Dynamic status text according to progress
  const getStatusText = (progress: number) => {
    if (progress < 25) return "Initializing 3D visual canvas...";
    if (progress < 60) return "Preloading interactive frames...";
    if (progress < 90) return "Buffering high-resolution sequence...";
    if (progress < 100) return "Finalizing workspace...";
    return "Experience ready";
  };

  const clampedProgress = Math.min(100, Math.max(0, loadProgress));

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06070a] text-white transition-all duration-700 ease-out select-none ${
        isDone
          ? "opacity-0 pointer-events-none scale-105 backdrop-blur-0"
          : "opacity-100 pointer-events-auto scale-100 backdrop-blur-2xl"
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute w-96 h-96 -top-20 -left-20 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        {/* Animated Futuristic Loader Ring */}
        <div className="relative w-24 h-24 mb-7 flex items-center justify-center">
          {/* Subtle Outer Pulsing Halo */}
          <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping" />

          {/* Outer Spin Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />

          {/* Inner Counter-Spin Ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-emerald-500/15 border-b-emerald-400"
            style={{ animation: "spin 2.5s linear infinite reverse" }}
          />

          {/* Center Glowing Icon */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-orange-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.4)]">
            <Terminal className="w-6 h-6 text-orange-400 animate-pulse" />
          </div>
        </div>

        {/* Branding & Subtitle */}
        <div className="space-y-1 mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
            RAHEEM ULLAH
          </h2>
          <p className="text-xs text-zinc-400 font-mono tracking-wider">
            Full Stack Developer &amp; Fintech Automation
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2.5">
          <div className="h-1.5 w-full bg-zinc-900/90 rounded-full overflow-hidden border border-white/10 p-[1px] relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 transition-all duration-300 ease-out shadow-[0_0_14px_rgba(249,115,22,0.8)] relative"
              style={{ width: `${clampedProgress}%` }}
            >
              {/* Shimmer light bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Progress Details Row */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-zinc-300 truncate">
                {getStatusText(clampedProgress)}
              </span>
            </span>
            <span className="text-orange-400 font-bold ml-2 tabular-nums">
              {String(clampedProgress).padStart(2, "0")}%
            </span>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
          Loading 300 Interactive Frames
        </div>
      </div>
    </div>
  );
}
