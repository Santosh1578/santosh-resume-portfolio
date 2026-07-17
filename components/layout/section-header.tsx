import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <ScrollReveal
    className={cn(
      "mb-16 md:mb-20",
      align === "center" && "text-center",
      className
    )}
    >
       
          {/*<span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            {label}
          </span>*/}
      <Heading size="lg" className="mb-4">
        {title}
      </Heading>
      {description && (
       <Text
       variant="lead"
       className={cn(
        "w-full",
        align === "center" && "mx-auto"
      )}
     >
          {description}
        </Text>
      )}
    </ScrollReveal>
  );
}
