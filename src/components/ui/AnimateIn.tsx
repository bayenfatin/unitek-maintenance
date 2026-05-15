"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

type Variant = "fadeUp" | "fadeLeft" | "fadeRight" | "fade";

interface AnimateInProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const initialTransform: Record<Variant, string> = {
  fadeUp: "translateY(28px)",
  fadeLeft: "translateX(-32px)",
  fadeRight: "translateX(32px)",
  fade: "none",
};

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 640,
  threshold = 0.12,
  className = "",
}: AnimateInProps) {
  const { ref, inView } = useInView({ threshold });
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : initialTransform[variant],
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: inView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
