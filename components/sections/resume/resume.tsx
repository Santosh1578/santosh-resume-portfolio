import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";
import { formatMonthYear } from "@/lib/utils/format-date";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Download, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ResumeSection() {
  const allSkills = skills.flatMap((cat) => cat.skills.map((s) => s.name));

  return (
    <Section id={SECTION_IDS.resume} ariaLabel="Resume">
      <SectionHeader
        label="resume"
        title="Resume"
        description="View or download my latest resume to learn more about my education, 
        technical skills, certifications, and experience."
      />

      <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
          <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/resume" data-cursor-hover>
                <Button variant="outline" size="lg">
                  <FileText size={16} />
                  👁 View Full Resume
                </Button>
              </Link>

        <a href={profile.resumeUrl} download>
            <Button variant="outline" size="lg">
              ⬇ Download Resume
            </Button>
          </a>  
        </div>
          </div>
      
      </ScrollReveal>
      <div className="h-3"></div>
    </Section>
  );
}
