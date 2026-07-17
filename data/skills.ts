import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "HTML & CSS", level: "expert" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
      { name: "REST APIs", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Firebase", level: "intermediate" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Vercel", level: "advanced" },
      { name: "Docker", level: "beginner" },
      { name: "Figma", level: "intermediate" },
      { name: "VS Code", level: "expert" },
      { name: "Linux", level: "intermediate" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "C++", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
    ],
  },
];
