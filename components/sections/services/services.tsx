"use client";

import { services } from "@/data/services";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations/framer-variants";
import { Code, Palette, Layout, Search } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  palette: Palette,
  layout: Layout,
  search: Search,
};

export function Services() {
  return (
    <Section id={SECTION_IDS.services} ariaLabel="Services">
      <SectionHeader
        label="Services"
        title="What I can build for you"
        description="I develop modern, responsive, scalable, and high-performance web applications using industry-standard technologies and best development practices."
        align="center"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;

          return (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card
  hover
  className="h-full border-border/70 bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="mb-4 font-display text-xl font-bold tracking-wide text-foreground">
                  {service.title}
                </h3>

                <Text variant="muted" className="leading-7">
                  {service.description}
                </Text>

                <StaggerChildren>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        variants={fadeUp}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </StaggerChildren>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
