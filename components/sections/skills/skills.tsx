"use client";

import { skills } from "@/data/skills";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations/framer-variants";
import { cn } from "@/lib/utils/cn";

//const levelColors = {
  //beginner:
  //"bg-muted/20 text-muted border border-border",
  //intermediate:
  //"bg-accent/10 text-accent border border-accent/10",
  //advanced:
  //"bg-primary/10 text-primary border border-primary/10",
  //expert:
 //  "bg-primary/20 text-primary font-semibold border border-primary/20",


export function Skills() {
  return (
    <Section id={SECTION_IDS.skills} ariaLabel="Skills">
      <SectionHeader
        label="Skills"
        title="Technical Skills"
       description="Technologies and tools I use for building modern web applications."
      />

<div className="grid gap-8 md:grid-cols-2">
        {skills.map((category, index) => (
          <ScrollReveal key={category.name} delay={index * 0.1}>
       <Card
       hover
       className="h-full border-border/70 bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <h3 className="mb-5 font-display text-xl font-bold tracking-wide text-foreground">
        {category.name}
      </h3>
      <StaggerChildren className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={fadeUp}
                    className={cn(
                     "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105",
                    "bg-surface-hover text-foreground border border-border hover:border-primary/40"
                    )}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </StaggerChildren>
            </Card>
          </ScrollReveal>
        ))}
      </div>
      <div className="h-3"></div>
    </Section>
  );
}
