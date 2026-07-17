import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
  ariaLabel?: string;
}

export function Section({
  id,
  children,
  className,
  containerSize = "default",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-24 md:py-32 lg:py-36", className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
