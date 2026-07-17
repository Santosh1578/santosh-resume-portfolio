export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}
