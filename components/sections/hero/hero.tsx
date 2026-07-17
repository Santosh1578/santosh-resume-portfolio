"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { SECTION_IDS } from "@/lib/constants";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowDown,  Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, "-=0.2")
        .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.1");
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const githubLink = socialLinks.find((l) => l.icon === "github");

  return (
    <section
      id={SECTION_IDS.hero}
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
      aria-label="Hero"
    >
      <Container>
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="flex flex-col items-center justify-center gap-5 text-center lg:items-start lg:text-left lg:max-w-xl">

      <div className="hero-badge mb-8">
        
      </div>
      
          <div className="hero-title w-full">
          <Heading
  as="h1"
  size="xl"
  className="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
>
<span className="block text-xl font-medium text-muted mb-2 sm:text-2xl">
               Hi, I'm
            </span>
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
        </Heading>
          </div>

          <div className="hero-subtitle mb-5 font-semibold tracking-wide text-muted">
              {/* Mobile */}
              <div className="block md:hidden text-lg leading-8">
                <div>Full Stack Developer</div>
                <div>B.Tech CSE Student</div>
              </div>

              {/* Desktop */}
              <div className="hidden md:block text-xl md:text-2xl">
                {profile.title}
              </div>
           </div>

          <div className="hero-desc mb-8">
          <Text
              variant="lead"
              className="mt-2 text-base leading-8 text-muted sm:text-lg sm:leading-9"
          >
          
          Passionate B.Tech CSE student focused on Full Stack Web Development.
          Building modern, responsive web applications while continuously
          learning, solving real-world problems, and improving every day.

           </Text>
          </div>
          <div className="hero-cta mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
         

  <a href={profile.resumeUrl} download data-cursor-hover>
  <Button
  variant="outline"
  size="lg"
  className="h-12 w-full rounded-xl px-8 sm:w-auto"
>
      <Download size={18} />
      Download resume 
    </Button>
  </a>

  {/* Contact button removed for now */}

  <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-muted lg:justify-start">
  <a
    href={socialLinks.find(link => link.name === "GitHub")?.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-primary transition-colors"
  >
    <FaGithub size={20} />
    <span>GitHub</span>
  </a>

  <a
    href={socialLinks.find(link => link.name === "LinkedIn")?.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-primary transition-colors"
  >
    <FaLinkedin size={20} />
    <span>LinkedIn</span>
  </a>

  <a
    href={socialLinks.find(link => link.name === "LeetCode")?.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-primary transition-colors"
  >
    <SiLeetcode size={20} />
    <span>LeetCode</span>
  </a>

</div>
</div>

</div>
<div className="hidden lg:flex items-center justify-center">

  <div className="relative">

    <div
    className="absolute inset-0 rounded-full bg-primary/20 blur-3xl">
    </div>

    <div className="relative flex h-[380px] w-[380px] items-center justify-center rounded-full border border-border bg-surface shadow-2xl">

    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-primary text-5xl font-bold text-white">
      SG
    </div>

    </div>

  
  </div>

  </div>

</div>
<div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-pulse">
  <span className="text-xs uppercase tracking-[0.3em]">
    Scroll to Explore
  </span>

  <ArrowDown size={18} className="animate-bounce" />
</div>
      </Container>

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>
    </section>
  );
}
