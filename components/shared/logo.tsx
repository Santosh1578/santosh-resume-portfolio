import { profile } from "@/data/profile";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#hero"
      className={cn(
        "font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary",
        className
      )}
      aria-label={`${profile.name} — Home`}
    >
      {profile.name}
      <span className="text-primary">.</span>
    </a>
  );
}
