"use client";

import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <Section id={SECTION_IDS.about} ariaLabel="About">
      <SectionHeader
        label="About"
        title="About Me"
        description="Passionate about building modern software, solving real-world problems, and continuously learning new technologies."
      />

      <div className="w-full space-y-10">
        <ScrollReveal>
          <div className="space-y-8">

            <div className="leading-8 text-muted">
              <Text variant="body" className="hidden md:block">
                {profile.bio}
              </Text>

              <Text variant="body" className="block md:hidden">
                Passionate Computer Science student focused on Full Stack Web
                Development, modern technologies, and building scalable
                applications.
              </Text>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-primary" />
                {profile.location}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Briefcase size={16} className="text-primary" />
                {profile.availability}
              </div>
            </div>

            <hr className="my-10 border-border" />

            <div className="h-3" />

            <h3 className="mb-6 text-2xl font-bold">
              🎓 Education
            </h3>

            <Card className="p-6">
              <h4 className="text-xl font-semibold">
                B.Tech Computer Science Engineering
              </h4>

              <p className="mt-2 text-muted">
                Galgotias University
              </p>

              <p className="mt-2 text-muted">
                2024 – 2028 (Currently Pursuing)
              </p>
            </Card>

            <div className="mt-6">
              <h3 className="mt-20 mb-6 text-2xl font-bold">
                🚀 Current Focus
              </h3>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted">
                    Developing Modern Full Stack Applications
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted">
                    Creating Clean & Responsive User Interfaces
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted">
                    Building Scalable Backend Systems
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted">
                    Strengthening Problem-Solving Skills
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted">
                    Exploring Modern Web Technologies
                  </span>
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>

      <div className="h-3" />
    </Section>
  );
}