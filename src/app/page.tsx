"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CanvasHUD from "@/components/CanvasHUD";
import LoadingScreen from "@/components/LoadingScreen";

const TOTAL_FRAMES = 300;
const FRAME_PATH = (index: number) =>
  `/frames/frame_${String(index).padStart(4, "0")}.png`;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Storage for all preloaded frame images
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedFramesRef = useRef<Set<number>>(new Set());

  // Scrubbing & Lerp state
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const lastRenderedIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // UI state
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [, setIsInitialReady] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState<number>(1);
  const [smoothProgress, setSmoothProgress] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  // Draw image to canvas with cover fit & HiDPI crispness
  const renderImageToCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (
      canvas.width !== Math.floor(displayWidth * dpr) ||
      canvas.height !== Math.floor(displayHeight * dpr)
    ) {
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const screenRatio = displayWidth / displayHeight;

    let drawWidth = displayWidth;
    let drawHeight = displayHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (screenRatio > imgRatio) {
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgRatio;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgRatio;
      offsetX = (displayWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // Nearest frame search to avoid flickers
  const getNearestLoadedFrame = useCallback(
    (target: number): HTMLImageElement | null => {
      const loaded = loadedFramesRef.current;
      if (loaded.has(target) && imagesRef.current[target]) {
        return imagesRef.current[target];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = target - offset;
        if (prev >= 1 && loaded.has(prev) && imagesRef.current[prev]) {
          return imagesRef.current[prev];
        }
        const next = target + offset;
        if (next <= TOTAL_FRAMES && loaded.has(next) && imagesRef.current[next]) {
          return imagesRef.current[next];
        }
      }
      return null;
    },
    []
  );

  // Preload frames systematically
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES + 1).fill(null);
    let isCancelled = false;
    let loadedCount = 0;

    // Load initial frame 1
    const firstImg = new window.Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[1] = firstImg;
      loadedFramesRef.current.add(1);
      loadedCount++;
      setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
      renderImageToCanvas(firstImg);
      setIsInitialReady(true);
    };

    // Load remaining frames with concurrency
    const loadRemainingFrames = async () => {
      const concurrency = 6;
      let nextIndex = 1;

      const worker = async () => {
        while (nextIndex <= TOTAL_FRAMES && !isCancelled) {
          const indexToLoad = nextIndex++;
          if (indexToLoad === 1 && imagesRef.current[1]) continue;

          await new Promise<void>((resolve) => {
            const img = new window.Image();
            img.src = FRAME_PATH(indexToLoad);
            img.onload = () => {
              if (!isCancelled) {
                imagesRef.current[indexToLoad] = img;
                loadedFramesRef.current.add(indexToLoad);
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
              }
              resolve();
            };
            img.onerror = () => {
              if (!isCancelled) {
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
              }
              resolve();
            };
          });
        }
      };

      const workers = Array.from({ length: concurrency }, () => worker());
      await Promise.all(workers);
    };

    loadRemainingFrames();

    return () => {
      isCancelled = true;
    };
  }, [renderImageToCanvas]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const totalScrollableDistance =
        containerRef.current.getBoundingClientRect().height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      if (scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }

      const rawProgress = Math.max(
        0,
        Math.min(1, scrollY / totalScrollableDistance)
      );
      const targetFrame = 1 + rawProgress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = targetFrame;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Smooth lerp loop
  useEffect(() => {
    let active = true;

    const animate = () => {
      if (!active) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      const delta = target - current;
      currentFrameRef.current += delta * 0.12;

      const progress = Math.max(
        0,
        Math.min(1, (currentFrameRef.current - 1) / (TOTAL_FRAMES - 1))
      );
      setSmoothProgress(progress);

      const frameIndexToRender = Math.min(
        Math.max(Math.round(currentFrameRef.current), 1),
        TOTAL_FRAMES
      );

      setCurrentFrameDisplay(frameIndexToRender);

      if (frameIndexToRender !== lastRenderedIndexRef.current) {
        const img = getNearestLoadedFrame(frameIndexToRender);
        if (img) {
          renderImageToCanvas(img);
          lastRenderedIndexRef.current = frameIndexToRender;
        }
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [getNearestLoadedFrame, renderImageToCanvas]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      const currentIdx = Math.min(
        Math.max(Math.round(currentFrameRef.current), 1),
        TOTAL_FRAMES
      );
      const img = getNearestLoadedFrame(currentIdx);
      if (img) {
        renderImageToCanvas(img);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getNearestLoadedFrame, renderImageToCanvas]);

  // Clipboard helpers
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("raheem3434a@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText("+923168062937");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const copySnippetToClipboard = () => {
    const snippet = `const raheemullah = {\n  role: "Junior Full Stack Developer",\n  company: "Innovative Network Pvt Ltd",\n  location: "Karachi, Pakistan 🇵🇰",\n  fbrRole: "Client Invoice Template & Field Integration",\n  stack: ["Node.js", "Express.js", "MongoDB", "React.js", "EJS", "REST APIs"],\n  currentlyLearning: "Agentic AI @ SMIT (Saylani)",\n  contact: "raheem3434a@gmail.com",\n};`;
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2500);
  };

  const scrollToSection = (targetProgress: number) => {
    if (!containerRef.current) return;
    const totalScrollableDistance =
      containerRef.current.getBoundingClientRect().height - window.innerHeight;
    const scrollTarget = targetProgress * totalScrollableDistance;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  // 5 Balanced scroll stages across 650vh
  // Stage 1: Hero (0.0 to 0.18)
  const heroOpacity = Math.max(0, Math.min(1, 1 - smoothProgress * 5.5));
  const heroTranslateY = smoothProgress * -90;

  // Stage 2: Experience & Skills (0.18 to 0.42)
  let expOpacity = 0;
  let expTranslateY = 50;
  if (smoothProgress >= 0.16 && smoothProgress <= 0.44) {
    if (smoothProgress < 0.24) {
      const t = (smoothProgress - 0.16) / 0.08;
      expOpacity = t;
      expTranslateY = 50 * (1 - t);
    } else if (smoothProgress > 0.36) {
      const t = (smoothProgress - 0.36) / 0.08;
      expOpacity = 1 - t;
      expTranslateY = -40 * t;
    } else {
      expOpacity = 1;
      expTranslateY = 0;
    }
  }

  // Stage 3: GitHub Activity & Stats (0.42 to 0.66)
  let githubOpacity = 0;
  let githubTranslateY = 50;
  if (smoothProgress >= 0.40 && smoothProgress <= 0.68) {
    if (smoothProgress < 0.48) {
      const t = (smoothProgress - 0.40) / 0.08;
      githubOpacity = t;
      githubTranslateY = 50 * (1 - t);
    } else if (smoothProgress > 0.60) {
      const t = (smoothProgress - 0.60) / 0.08;
      githubOpacity = 1 - t;
      githubTranslateY = -40 * t;
    } else {
      githubOpacity = 1;
      githubTranslateY = 0;
    }
  }

  // Stage 4: Featured Projects (0.66 to 0.86)
  let projectsOpacity = 0;
  let projectsTranslateY = 50;
  if (smoothProgress >= 0.64 && smoothProgress <= 0.88) {
    if (smoothProgress < 0.72) {
      const t = (smoothProgress - 0.64) / 0.08;
      projectsOpacity = t;
      projectsTranslateY = 50 * (1 - t);
    } else if (smoothProgress > 0.80) {
      const t = (smoothProgress - 0.80) / 0.08;
      projectsOpacity = 1 - t;
      projectsTranslateY = -40 * t;
    } else {
      projectsOpacity = 1;
      projectsTranslateY = 0;
    }
  }

  // Stage 5: Education & Contact (0.86 to 1.0)
  const finaleOpacity = Math.max(0, Math.min(1, (smoothProgress - 0.84) / 0.12));
  const finaleTranslateY = Math.max(
    0,
    (1 - (smoothProgress - 0.84) / 0.16) * 40
  );

  // Active section calculation based on scroll progress
  const activeSection =
    smoothProgress < 0.20
      ? "about"
      : smoothProgress < 0.44
      ? "experience"
      : smoothProgress < 0.68
      ? "github"
      : smoothProgress < 0.86
      ? "projects"
      : "contact";

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black select-none font-sans"
      style={{ height: "650vh" }}
    >
      {/* Fixed Sticky Canvas Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Ambient Dark Gradient Vignette for Seamless Content Blending */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            background:
              smoothProgress > 0.4
                ? "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.88) 100%)"
                : "radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Modular Navigation with Active Section Tracking */}
        <Navbar
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />

        {/* Stage 1: Hero Section */}
        <HeroSection
          opacity={heroOpacity}
          translateY={heroTranslateY}
          scrollToSection={scrollToSection}
          copiedPhone={copiedPhone}
          copiedEmail={copiedEmail}
          copiedSnippet={copiedSnippet}
          copyPhoneToClipboard={copyPhoneToClipboard}
          copyEmailToClipboard={copyEmailToClipboard}
          copySnippetToClipboard={copySnippetToClipboard}
        />

        {/* Stage 2: Work Experience & FBR */}
        <ExperienceSection
          opacity={expOpacity}
          translateY={expTranslateY}
        />

        {/* Stage 3: Live GitHub Stats */}
        <GitHubSection
          opacity={githubOpacity}
          translateY={githubTranslateY}
        />

        {/* Stage 4: Featured Projects */}
        <ProjectsSection
          opacity={projectsOpacity}
          translateY={projectsTranslateY}
          scrollToSection={scrollToSection}
        />

        {/* Stage 5: Education & Contact */}
        <ContactSection
          opacity={finaleOpacity}
          translateY={finaleTranslateY}
          scrollToSection={scrollToSection}
          copiedEmail={copiedEmail}
          copyEmailToClipboard={copyEmailToClipboard}
        />

        {/* Head-up Display: Scroll hint, Loading badge & Scrubber */}
        <CanvasHUD
          hasScrolled={hasScrolled}
          loadProgress={loadProgress}
          currentFrameDisplay={currentFrameDisplay}
          totalFrames={TOTAL_FRAMES}
        />

        {/* Full-screen Loading Overlay with animations */}
        <LoadingScreen loadProgress={loadProgress} />
      </div>
    </div>
  );
}
