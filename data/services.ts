import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. From MVPs to production-grade platforms.",
    icon: "code",
    features: [
      "React & Next.js applications",
      "RESTful API development",
      "Database design & integration",
      "Performance optimization",
    ],
  },
  {
    id: "svc-2",
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation of designs with attention to interaction details and accessibility.",
    icon: "palette",
    features: [
      "Figma to code translation",
      "Responsive & adaptive layouts",
      "Micro-interactions & animations",
      "WCAG accessibility compliance",
    ],
  },
  {
    id: "svc-3",
    title: "Landing Pages",
    description:
      "High-converting landing pages optimized for speed, SEO, and user engagement.",
    icon: "layout",
    features: [
      "Conversion-focused design",
      "SEO-optimized structure",
      "Sub-second load times",
      "Analytics integration",
    ],
  },
  {
    id: "svc-4",
    title: "Code Review & Consulting",
    description:
      "Technical audits, architecture reviews, and mentorship for development teams.",
    icon: "search",
    features: [
      "Code quality assessment",
      "Architecture recommendations",
      "Performance audits",
      "Best practices guidance",
    ],
  },
];
