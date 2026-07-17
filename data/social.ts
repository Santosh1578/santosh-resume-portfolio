import type { SocialLink, CodingProfile } from "@/types";
import { url } from "inspector";
import { platform } from "os";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Santosh1578",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santosh-1578sa/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/santoshgangwar",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "Santoshgangwar1578@gmail.com",
    icon: "mail",
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "Santosh1578",
    url: "https://github.com/Santosh1578",
    icon: "github",
    stats: "Open Source Projects",
  },
  {
    platform: "LeetCode",
    username: "santoshgangwar_25",
    url: "https://leetcode.com/u/santoshgangwar_25/",
    icon: "leetcode",
    stats: "DSA & Problem Solving",
  
  },
  {
    platform: "CodeChef",
    username: "santoshgangwar",
    url: "https://www.codechef.com/users/santoshgangwar",
    icon: "codechef",
    stats: "Competitive Programming",
  },
  {
    platform: "HackerRank",
    username: "santosh_25",
    url: "https://www.hackerrank.com/profile/santosh_25",
    icon: "hackerrank",
    stats: "Programming Challenges",
  },
  {
    platform: "GeeksforGeeks",
    username: "santoshgangwar_25",
    url: "https://www.geeksforgeeks.org/profile/santoshgangwar_25",
    icon: "geeksforgeeks",
    stats: "Technical Learning",
  },
  {
    platform:"codolio",
    username:"Santosh_25",
   url:"https://codolio.com/profile/Santosh_25",
   icon:"codolio",
   stats:"Competitive Programming",
  },
];
