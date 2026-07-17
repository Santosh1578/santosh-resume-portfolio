import { TechPill } from "@/components/shared/tech-pill";
import { ExternalLink } from "@/components/shared/external-link";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types";
import { ExternalLink as ExternalLinkIcon, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-20">
      <Container size="default">
     
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge variant="primary">{project.category}</Badge>
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <Heading as="h1" size="lg" className="mb-4">
          {project.title}
        </Heading>

        <Text variant="lead" className="mb-8">
          {project.description}
        </Text>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              <ExternalLinkIcon size={16} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}
