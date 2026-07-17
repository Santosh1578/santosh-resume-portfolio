"use client";

import Link from "next/link";
import Image from "next/image";
import { projects, getFeaturedProjects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechPill } from "@/components/shared/tech-pill";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils/cn";

function ProjectImage({ title, category }: { title: string; category: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-surface to-accent/10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl font-bold text-primary/30">
            {title.charAt(0)}
          </p>
          <p className="text-xs text-muted mt-1 uppercase tracking-wider">
            {category}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" data-cursor-hover>
      <Card
  hover
  className="h-full overflow-hidden !p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
        <ProjectImage title={project.title} category={project.category} />
        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted mt-1">{project.year}</p>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
          <Text variant="muted" className="mb-4 line-clamp-2">
            {project.description}
          </Text>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" data-cursor-hover>
      <Card
  hover
  className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">{project.category}</Badge>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="text-muted group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
          />
        </div>
        <Text
  variant="small"
  className="mb-5 line-clamp-2 leading-7"
>
          {project.description}
        </Text>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs text-muted">+{project.techStack.length - 3}</span>
          )}
        </div>
        <div className="mt-5 flex items-center gap-4 border-t border-border pt-5">
          {project.liveUrl && (
            <span className="flex items-center gap-1 text-xs text-muted">
              <ExternalLink size={12} /> Live
            </span>
          )}
          {project.githubUrl && (
            <span className="flex items-center gap-1 text-xs text-muted">
              <FaGithub size={12} /> Source
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}

export function Projects() {
  const featured = getFeaturedProjects();
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id={SECTION_IDS.projects} ariaLabel="Projects">
      <SectionHeader
      label="projects"
       title="Featured Projects"
        description="A selection of projects that demonstrate my expertise in software engineering, full stack development, problem-solving, and building scalable digital products."
      />

      <div className="space-y-12">
        <div>
        <h3 className="mb-8 font-display text-base font-bold uppercase tracking-[0.25em] text-primary">
            Featured
          </h3>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <FeaturedProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
        <h3 className="mb-8 font-display text-base font-bold uppercase tracking-[0.25em] text-muted">
        
            More Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
