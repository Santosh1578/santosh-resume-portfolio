"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-primary"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
