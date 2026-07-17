export type ProjectCategory = "web" | "mobile" | "tool" | "open-source";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  category: ProjectCategory;
  highlights: string[];
}
