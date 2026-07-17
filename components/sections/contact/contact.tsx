"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { SocialLinks } from "@/components/shared/social-links";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
      <Section
        id={SECTION_IDS.contact}
        ariaLabel="Contact"
        className="pb-24"
      >
      <SectionHeader
        label="Contact"
       title="Get In Touch"
        description="I'm always open to internship opportunities, collaborations, and exciting projects. Feel free to reach out."
        
      />

      <div className="mx-auto max-w-7xl">
      <div className="grid items-start gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-[870px_500px]">
        <ScrollReveal>
            <div className="space-y-6">
            <div>
               <h3 className="mb-5 font-display text-2xl font-bold text-foreground">
               Let's Connect
               </h3>

                <Text variant="muted">
                
                I'm always happy to connect with recruiters, developers,
                and anyone interested in collaborating on exciting projects.
                </Text>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                  data-cursor-hover
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <p className="text-sm font-medium text-foreground break-words">
                      {profile.email}
                    </p>
                    
                  </div>
                </a>

                <div className="flex items-center gap-3 text-muted">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="text-sm font-medium text-foreground">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              <SocialLinks hideEmail />
            </div>
          </ScrollReveal>

          <ScrollReveal
          delay={0.2}
         className="mt-8 w-full lg:mt-0 lg:justify-self-end"
>
<Card
  className="w-full max-w-[450px] mx-auto lg:mx-0 border border-border/70 rounded-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Message ready to send
                  </h3>
                  <Text
                variant="muted"
                className="max-w-md leading-8"
>
                    Your email client should open shortly. If not, email me
                    directly at {profile.email}
                  </Text>
                  <Button
                    variant="ghost"
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-4 sm:p-5"
              >
                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                     placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell me about your project, opportunity, or message..."
                    />
                  </div>

                   <Button
                      type="submit"
                      size="lg"
                      className="mt-4 h-12 w-full rounded-xl transition-all duration-300 hover:scale-[1.02]"

                    >
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>
      </div>
      <div className="h-3"></div>
    </Section>
  );
}
