"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringXSpring = useSpring(ringX, { damping: 20, stiffness: 200 });
  const ringYSpring = useSpring(ringY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    if (isMobile || reducedMotion) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile, reducedMotion, cursorX, cursorY, ringX, ringY]);

  if (isMobile || reducedMotion) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-primary/30 mix-blend-difference"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          marginLeft: isHovering ? -28 : -20,
          marginTop: isHovering ? -28 : -20,
        }}
        animate={{
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
