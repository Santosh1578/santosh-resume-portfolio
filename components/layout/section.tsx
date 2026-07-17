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
      className={cn("py-20 md:py-28 lg:py-32", className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
