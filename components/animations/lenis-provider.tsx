"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { LENIS_OPTIONS } from "@/lib/animations/lenis-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis(LENIS_OPTIONS);
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
