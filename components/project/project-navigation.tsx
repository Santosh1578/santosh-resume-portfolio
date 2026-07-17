import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <Container size="narrow" className="pb-20">
      <div className="grid gap-4 sm:grid-cols-2 border-t border-border pt-8">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="group">
            <Card hover className="!p-4">
              <div className="flex items-center gap-3">
                <ArrowLeft
                  size={18}
                  className="text-muted group-hover:text-primary transition-colors"
                />
                <div>
                  <p className="text-xs text-muted">Previous</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="group">
            <Card hover className="!p-4">
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-xs text-muted">Next</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted group-hover:text-primary transition-colors"
                />
              </div>
            </Card>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </Container>
  );
}
