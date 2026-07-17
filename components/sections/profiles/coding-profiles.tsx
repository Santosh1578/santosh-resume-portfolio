"use client";

import { codingProfiles } from "@/data/social";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ExternalLink, ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import {
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiGeeksforgeeks,
} from "react-icons/si";
import { cn } from "@/lib/utils/cn";

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  leetcode: SiLeetcode,
  codechef: SiCodechef,
  codolio: Globe,
  hackerrank: SiHackerrank,
  geeksforgeeks: SiGeeksforgeeks,
};

export function CodingProfiles() {
  return (
    <Section id={SECTION_IDS.profiles} ariaLabel="Coding Profiles">
      <SectionHeader
      label="profiles "
        title="Coding Profiles"
        description="Explore my coding profiles, problem-solving journey, and technical learning across different platforms."
      
      />

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {codingProfiles.map((profile, index) => {
          const Icon = platformIcons[profile.icon];

          return (
            <ScrollReveal key={profile.platform} delay={index * 0.05}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-cursor-hover
              >
                <Card
               hover
                   className="h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {Icon && (
                      <Icon className="h-8 w-8 text-foreground transition-colors group-hover:text-primary" />
                      )}
                      <div>
                      <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                          {profile.platform}
                        </h3>
                        <p className="text-sm text-muted break-all">
                           @{profile.username}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  {profile.stats && (
                    <Text variant="small" className="leading-6">
                    {profile.stats}
                  </Text>
                  )}
                </Card>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
      <div className="h-3"></div>
    </Section>
  );
}
