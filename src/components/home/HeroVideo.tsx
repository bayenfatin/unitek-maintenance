"use client";

import { useEffect, useRef } from "react";

type VideoWithFastSeek = HTMLVideoElement & { fastSeek?: (time: number) => void };

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastScrollY = useRef(0);
  const targetTime = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current as VideoWithFastSeek | null;
    if (!video) return;

    const showFirstFrame = () => {
      video.currentTime = 0.001;
      targetTime.current = 0.001;
    };
    video.addEventListener("loadeddata", showFirstFrame, { once: true });

    // fastSeek() cherche le keyframe le plus proche — bien plus rapide que currentTime
    const seek = (t: number) => {
      if (video.fastSeek) video.fastSeek(t);
      else video.currentTime = t;
    };

    // RAF ne tourne que quand il y a quelque chose à rattraper
    const step = () => {
      rafRef.current = null;
      if (!video.duration) return;
      const diff = targetTime.current - video.currentTime;
      if (Math.abs(diff) > 0.04) {
        seek(video.currentTime + diff * 0.3);
        rafRef.current = requestAnimationFrame(step);
      } else {
        seek(targetTime.current);
      }
    };

    const onScroll = () => {
      if (!video.duration) return;
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      targetTime.current = Math.min(
        Math.max(targetTime.current + delta * 0.025, 0),
        video.duration
      );
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadeddata", showFirstFrame);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/hero-bg.mp4"
      muted
      playsInline
      preload="auto"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        willChange: "contents",
      }}
    />
  );
}
