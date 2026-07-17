import { cn } from "@/lib/utils/cn";
import { type HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "muted" | "small" | "lead";
}

export function Text({ variant = "body", className, children, ...props }: TextProps) {
  return (
    <p
      className={cn(
        {
          "text-base leading-relaxed": variant === "body",
          "text-muted text-base leading-relaxed": variant === "muted",
          "text-sm text-muted leading-relaxed": variant === "small",
          "text-lg md:text-xl leading-relaxed text-muted": variant === "lead",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
