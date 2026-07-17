import { cn } from "@/lib/utils/cn";

interface TechPillProps {
  name: string;
  className?: string;
}

export function TechPill({ name, className }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary border border-primary/10",
        className
      )}
    >
      {name}
    </span>
  );
}
