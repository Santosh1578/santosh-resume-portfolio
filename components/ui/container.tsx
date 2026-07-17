import { cn } from "@/lib/utils/cn";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-full overflow-x-hidden px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16",
        {
          "max-w-[1400px]": size === "default",
          "max-w-5xl": size === "narrow",
          "max-w-[1500px]": size === "wide",
          "max-w-none": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}