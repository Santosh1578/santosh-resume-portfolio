import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { getProjectJsonLd } from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/shared/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectContent } from "@/components/project/project-content";
import { ProjectNavigation } from "@/components/project/project-navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return createMetadata({ title: "Project Not Found" });

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

    return (
      <PageWrapper>
      <JsonLd data={getProjectJsonLd(project)} />
      <Header />
      <main id="main-content">
        <ProjectHero project={project} />
        <ProjectContent project={project} />
        <ProjectNavigation currentSlug={project.slug} />
      </main>
         <Footer />
    </PageWrapper>
  );
}