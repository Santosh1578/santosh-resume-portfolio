"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
  delay?: number;
}

export function GsapReveal({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const animations = {
      fadeUp: { y: 40, opacity: 0 },
      fadeIn: { opacity: 0 },
      slideLeft: { x: -60, opacity: 0 },
      slideRight: { x: 60, opacity: 0 },
    };

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        ...animations[animation],
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion, animation, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
