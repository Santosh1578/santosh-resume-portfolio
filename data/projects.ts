import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "devflow",
    title: "DevFlow",
    description:
      "A developer productivity platform with real-time collaboration, task management, and integrated code snippets.",
    longDescription:
      "DevFlow is a full-stack developer productivity platform designed to streamline team workflows. It features real-time collaborative editing, Kanban-style task boards, syntax-highlighted code snippets, and team analytics dashboards. Built with a focus on performance and developer experience, DevFlow handles concurrent users with optimistic UI updates and WebSocket-based synchronization.",
    image: "/images/projects/devflow.webp",
    images: ["/images/projects/devflow.webp"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://devflow-demo.vercel.app",
    githubUrl: "https://github.com/santoshgangwar/devflow",
    featured: true,
    year: 2025,
    category: "web",
    highlights: [
      "Real-time collaboration with WebSocket sync",
      "Sub-100ms optimistic UI updates",
      "Role-based access control for teams",
      "Responsive design with dark mode support",
    ],
  },
  {
    slug: "cryptovault",
    title: "CryptoVault",
    description:
      "A cryptocurrency portfolio tracker with live market data, price alerts, and interactive analytics charts.",
    longDescription:
      "CryptoVault provides a clean, data-driven interface for tracking cryptocurrency portfolios. It integrates with CoinGecko API for live market data, features customizable price alerts, portfolio allocation charts, and historical performance analytics. The application prioritizes clarity and speed — presenting complex financial data in an accessible, minimal interface.",
    image: "/images/projects/cryptovault.webp",
    images: ["/images/projects/cryptovault.webp"],
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "CoinGecko API"],
    liveUrl: "https://cryptovault-demo.vercel.app",
    githubUrl: "https://github.com/santoshgangwar/cryptovault",
    featured: true,
    year: 2025,
    category: "web",
    highlights: [
      "Live market data from CoinGecko API",
      "Interactive portfolio analytics charts",
      "Customizable price alert system",
      "Local storage persistence for offline access",
    ],
  },
  {
    slug: "taskforge",
    title: "TaskForge",
    description:
      "A minimalist task management app with drag-and-drop boards, priority tagging, and deadline tracking.",
    longDescription:
      "TaskForge reimagines task management with a focus on simplicity and speed. Features include drag-and-drop Kanban boards, priority-based filtering, deadline reminders, and a distraction-free writing mode. Built as a progressive web app with offline support, TaskForge ensures productivity isn't limited by connectivity.",
    image: "/images/projects/taskforge.webp",
    images: ["/images/projects/taskforge.webp"],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/santoshgangwar/taskforge",
    featured: true,
    year: 2024,
    category: "web",
    highlights: [
      "Drag-and-drop Kanban interface",
      "PWA with offline support",
      "Priority and deadline management",
      "Smooth animations with Framer Motion",
    ],
  },
  {
    slug: "weatherpulse",
    title: "WeatherPulse",
    description:
      "A beautifully designed weather application with location-based forecasts and animated weather visualizations.",
    longDescription:
      "WeatherPulse delivers weather information through an elegant, animation-rich interface. It uses the OpenWeather API for accurate forecasts, supports geolocation and city search, and presents data through intuitive visualizations including animated weather icons and hourly/daily forecast cards.",
    image: "/images/projects/weatherpulse.webp",
    images: ["/images/projects/weatherpulse.webp"],
    techStack: ["React", "TypeScript", "OpenWeather API", "CSS Modules", "GSAP"],
    liveUrl: "https://weatherpulse-demo.vercel.app",
    githubUrl: "https://github.com/santoshgangwar/weatherpulse",
    featured: false,
    year: 2024,
    category: "web",
    highlights: [
      "Geolocation and city search",
      "Animated weather visualizations",
      "7-day extended forecast",
      "Responsive mobile-first design",
    ],
  },
  {
    slug: "snippetbox",
    title: "SnippetBox",
    description:
      "An open-source code snippet manager with syntax highlighting, tagging, and one-click copy functionality.",
    longDescription:
      "SnippetBox is an open-source tool for developers to store, organize, and share code snippets. It features multi-language syntax highlighting, tag-based organization, full-text search, and one-click copy. Designed as a browser extension companion with a web dashboard for seamless workflow integration.",
    image: "/images/projects/snippetbox.webp",
    images: ["/images/projects/snippetbox.webp"],
    techStack: ["Next.js", "TypeScript", "Prism.js", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/santoshgangwar/snippetbox",
    featured: false,
    year: 2024,
    category: "open-source",
    highlights: [
      "Multi-language syntax highlighting",
      "Tag-based organization and search",
      "One-click copy to clipboard",
      "Open-source with 50+ GitHub stars",
    ],
  },
  {
    slug: "fittrack",
    title: "FitTrack",
    description:
      "A fitness tracking mobile-first web app with workout logging, progress charts, and goal setting.",
    longDescription:
      "FitTrack helps users maintain fitness routines through intuitive workout logging, progress visualization, and goal tracking. The app features customizable workout templates, rest timers, calorie estimation, and weekly progress reports with chart-based analytics.",
    image: "/images/projects/fittrack.webp",
    images: ["/images/projects/fittrack.webp"],
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "PWA"],
    githubUrl: "https://github.com/santoshgangwar/fittrack",
    featured: false,
    year: 2023,
    category: "mobile",
    highlights: [
      "Customizable workout templates",
      "Progress charts and analytics",
      "PWA installable on mobile",
      "Goal setting with milestone tracking",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
