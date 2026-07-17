"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/framer-variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils/cn";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerChildren({
  children,
  className,
  delay = 0,
}: StaggerChildrenProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      transition={{ delayChildren: delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
