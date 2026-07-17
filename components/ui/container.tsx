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
      "mx-auto w-full max-w-full overflow-x-hidden px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24",
       {
        "max-w-[1600px]": size === "default",
        "max-w-5xl": size === "narrow",
        "max-w-[1700px]": size === "wide",
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