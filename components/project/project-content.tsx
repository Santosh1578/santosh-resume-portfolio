import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import type { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <Container size="default" className="pb-20">
      <div className="relative mb-12 h-[500px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display text-6xl font-bold text-primary/20">
            {project.title.charAt(0)}
          </p>
        </div>
      </div>

      <div className="max-w-none space-y-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Overview
          </h2>
          <Text variant="body">{project.longDescription}</Text>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
