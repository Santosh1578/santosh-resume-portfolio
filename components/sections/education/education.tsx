import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { formatYearRange } from "@/lib/utils/format-date";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <Section id={SECTION_IDS.education} ariaLabel="Education">
    <SectionHeader
  label="Education"
  title="Education & Academic Journey"
  description="My academic journey, technical learning, and continuous growth..."
/>

<div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <ScrollReveal key={edu.institution}>
          <Card
  hover
  className="transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
>
              <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge variant="primary">{edu.field}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatYearRange(edu.startYear, edu.endYear)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>

                  <Text variant="muted" className="mb-5 leading-7">
                    {edu.description}
                  </Text>

                  <ul className="space-y-3">
                    {edu.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
