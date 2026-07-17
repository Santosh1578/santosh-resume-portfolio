import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { getBaseUrl } from "@/lib/utils/get-base-url";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.title,
    description: profile.bio,
    url: getBaseUrl(),
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.college,
    },
    sameAs: socialLinks.map((link) => link.url),
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — Portfolio`,
    url: getBaseUrl(),
    description: profile.tagline,
    author: {
      "@type": "Person",
      name: profile.fullName,
    },
  };
}

export function getProjectJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  year: number;
  techStack: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${getBaseUrl()}/projects/${project.slug}`,
    dateCreated: `${project.year}`,
    author: {
      "@type": "Person",
      name: profile.fullName,
    },
    keywords: project.techStack.join(", "),
  };
}
