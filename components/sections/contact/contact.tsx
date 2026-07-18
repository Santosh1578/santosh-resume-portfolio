"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Failed to send message.");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_450px]">

          <ScrollReveal>
            <div className="space-y-6">

              <div>
                <h3 className="mb-5 font-display text-2xl font-bold">
                  Let's Connect
                </h3>

                <Text variant="muted">
                  I'm always happy to connect with recruiters,
                  developers, and anyone interested in collaborating
                  on exciting projects.
                </Text>
              </div>


              <div className="space-y-4">

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                    <Mail size={18}/>
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Email
                    </p>

                    <p className="text-sm font-medium">
                      {profile.email}
                    </p>
                  </div>

                </a>


                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                    <MapPin size={18}/>
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Location
                    </p>

                    <p className="text-sm font-medium">
                      {profile.location}
                    </p>
                  </div>

                </div>

              </div>


              <SocialLinks hideEmail />

            </div>

          </ScrollReveal>



          <ScrollReveal>

            <Card className="rounded-2xl border p-5">

              {submitted ? (

                <div className="flex flex-col items-center py-12 text-center">

                  <CheckCircle
                    size={48}
                    className="mb-4 text-primary"
                  />

                  <h3 className="text-xl font-semibold">
                    Message Sent Successfully
                  </h3>

                  <Text variant="muted">
                    Thanks for contacting me. I will get back to you soon.
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
                  className="space-y-4"
                >

                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border px-4 py-3"
                  />


                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border px-4 py-3"
                  />


                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg border px-4 py-3"
                  />


                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full"
                  >

                    <Send size={16}/>

                    {loading
                      ? "Sending..."
                      : "Send Message"}

                  </Button>


                </form>

              )}

            </Card>


          </ScrollReveal>


        </div>

      </div>


    </Section>
  );
}