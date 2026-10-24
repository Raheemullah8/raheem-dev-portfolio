"use client";

interface CanvasHUDProps {
  hasScrolled: boolean;
  loadProgress: number;
  currentFrameDisplay?: number;
  totalFrames?: number;
}

export default function CanvasHUD({
  hasScrolled,
  loadProgress,
}: CanvasHUDProps) {
  return (
    <>
      {/* Minimal Scroll Hint */}
      <div
        className={`fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 sm:gap-2 transition-all duration-700 pointer-events-none ${
          hasScrolled ? "opacity-0 translate-y-3" : "opacity-90 translate-y-0"
        }`}
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-sans font-medium">
          Scroll to explore
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-zinc-600/60 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-orange-500 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Minimal Loading Status */}
      <div
        className={`fixed top-16 sm:top-6 right-3.5 sm:right-6 z-30 flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono tracking-wider transition-opacity duration-700 ${
          loadProgress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
        </span>
        <span className="text-zinc-300">
          {loadProgress < 100
            ? `Loading frames ${loadProgress}%`
            : "Frames ready"}
        </span>
      </div>
    </>
  );
}
