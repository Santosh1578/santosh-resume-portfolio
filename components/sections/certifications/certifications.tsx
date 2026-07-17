import { certifications } from "@/data/certifications";
import { SECTION_IDS } from "@/lib/constants";
import { formatDate } from "@/lib/utils/format-date";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ExternalLink } from "@/components/shared/external-link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Award } from "lucide-react";

export function Certificates() {
  return (
    <Section id={SECTION_IDS.certificates} ariaLabel="Certificates">
      <SectionHeader
        label="Certificates"
        title="Certificates & Achievements"
       description="Professional certifications and technical achievements that reflect my continuous learning and technical growth."
      />

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={index * 0.05}>
           <Card
  hover
  className="h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
>
              <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                <h3 className="mb-2 font-display text-base font-bold leading-snug text-foreground">
                    {cert.name}
                  </h3>
                  <Text variant="small" className="mb-3 text-primary">
                    {cert.issuer}
                  </Text>
                  <p className="mb-4 text-xs text-muted">
                    Issued {formatDate(cert.issueDate)}
                  </p>
                  {cert.credentialUrl && (
                    <ExternalLink
                      href={cert.credentialUrl}
                     className="text-sm font-medium"
                    >
                      Verify credential
                    </ExternalLink>
                  )}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
      <div className="h-3"></div>
    </Section>
  );
}
