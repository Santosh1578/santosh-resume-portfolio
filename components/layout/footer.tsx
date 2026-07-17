import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/shared/social-links";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="border-t border-border bg-surface/50 py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
          
          </div>

        
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <Text variant="small">
                &copy; {currentYear} {profile.fullName}. All rights reserved.
             </Text>

            <Text variant="small">
             Designed & Developed by Santosh Gangwar • Built with Next.js, React, TypeScript & Tailwind CSS
            </Text>
        </div>
      </Container>
    </footer>
  );
}
