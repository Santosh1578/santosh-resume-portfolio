import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeDownloadProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function ResumeDownload({
  variant = "outline",
  size = "md",
}: ResumeDownloadProps) {
  return (
    <a href={profile.resumeUrl} download>
      <Button variant={variant} size={size}>
        <Download size={16} />
        Download Resume
      </Button>
    </a>
  );
}
