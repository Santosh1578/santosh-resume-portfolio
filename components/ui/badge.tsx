import { cn } from "@/lib/utils/cn";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-surface text-muted border border-border": variant === "default",
          "bg-primary/10 text-primary border border-primary/20": variant === "primary",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
