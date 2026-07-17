"use client";

import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils/cn";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: FaEnvelope,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  hideEmail?: boolean;
}

export function SocialLinks({
  className,
  iconSize = 18,
  hideEmail = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks
        .filter((link) => !(hideEmail && link.icon === "mail"))
        .map((link) => {
          const Icon = iconMap[link.icon];
          if (!Icon) return null;

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <Icon size={iconSize} />
            </a>
          );
        })}
    </div>
  );
}