import { cn } from "@/lib/utils/cn";
import { type HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "lg" | "md" | "sm";
}

export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-foreground",
        {
          "text-[clamp(2.5rem,8vw,5rem)] leading-[1.1]": size === "xl",
          "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]": size === "lg",
          "text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.3]": size === "md",
          "text-lg leading-[1.4]": size === "sm",
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
