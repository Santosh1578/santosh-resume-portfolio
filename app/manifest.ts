import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Santosh | Computer Science Student & Full Stack Web Developer",
    short_name: "Santosh",
    description:
      "Official portfolio of Santosh, a Computer Science student and Full Stack Web Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}