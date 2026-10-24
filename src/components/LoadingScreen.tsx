"use client";

import { useEffect, useState } from "react";
import { Terminal, Sparkles, ArrowRight } from "lucide-react";

interface LoadingScreenProps {
  loadProgress: number;
  isInitialReady?: boolean;
}

export default function LoadingScreen({
  loadProgress,
  isInitialReady = false,
}: LoadingScreenProps) {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [displayProgress, setDisplayProgress] = useState<number>(10);
  const [showSkip, setShowSkip] = useState<boolean>(false);

  // Fast simulated progress from 0% to 100% in ~1.2s once initial canvas frame is ready
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Accelerate smoothly
        const increment = isInitialReady
          ? Math.floor(Math.random() * 12) + 10
          : Math.floor(Math.random() * 6) + 4;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [isInitialReady]);

  // When progress reaches 100%, trigger smooth fade out
  useEffect(() => {
    if (displayProgress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
      }, 250);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 950);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [displayProgress]);

  // Show quick "Enter Portfolio" skip option after 800ms
  useEffect(() => {
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 800);
    return () => clearTimeout(skipTimer);
  }, []);

  // Hard safety timeout: ALWAYS dismiss loader after maximum 2.0s even on slow 3G
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setDisplayProgress(100);
      setIsDone(true);
      setTimeout(() => setShouldRender(false), 800);
    }, 2000);

    return () => clearTimeout(safetyTimer);
  }, []);

  const handleSkip = () => {
    setDisplayProgress(100);
    setIsDone(true);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  // Dynamic status text according to progress
  const getStatusText = (progress: number) => {
    if (progress < 35) return "Initializing visual canvas...";
    if (progress < 75) return "Buffering interactive sequence...";
    if (progress < 100) return "Polishing developer workspace...";
    return "Experience ready";
  };

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
        {/* Animated Futuristic Loader Ring with Logo */}
        <div className="relative w-24 h-24 mb-7 flex items-center justify-center">
          {/* Outer Pulsing Halo */}
          <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping" />

          {/* Outer Spin Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />

          {/* Inner Counter-Spin Ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-emerald-500/15 border-b-emerald-400"
            style={{ animation: "spin 2.5s linear infinite reverse" }}
          />

          {/* Center Glowing Logo */}
          <div className="w-14 h-14 rounded-full overflow-hidden border border-orange-500/50 shadow-[0_0_25px_rgba(249,115,22,0.45)] bg-black flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Raheem Ullah Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Branding & Subtitle */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
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
        <div className="w-full space-y-2">
          <div className="h-1.5 w-full bg-zinc-900/90 rounded-full overflow-hidden border border-white/10 p-[1px] relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 transition-all duration-200 ease-out shadow-[0_0_14px_rgba(249,115,22,0.8)] relative"
              style={{ width: `${displayProgress}%` }}
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
                {getStatusText(displayProgress)}
              </span>
            </span>
            <span className="text-orange-400 font-bold ml-2 tabular-nums">
              {String(displayProgress).padStart(2, "0")}%
            </span>
          </div>
        </div>

        {/* Skip button for instant entrance */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="mt-6 px-4 py-1.5 rounded-full glass-pill hover:bg-orange-500/20 text-orange-300 hover:text-white border border-orange-500/40 text-xs font-mono flex items-center gap-1.5 active:scale-95 transition-all animate-in fade-in duration-300"
          >
            <span>Enter Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
