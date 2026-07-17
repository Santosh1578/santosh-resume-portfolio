import { cn } from "@/lib/utils/cn";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 text-primary transition-colors hover:text-accent",
        className
      )}
    >
      {children}
      {showIcon && <ExternalLinkIcon size={14} />}
    </a>
  );
}
