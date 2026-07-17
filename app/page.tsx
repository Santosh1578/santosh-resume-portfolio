import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { EducationSection } from "@/components/sections/education/education";
import { Skills } from "@/components/sections/skills/skills";
// import { Services } from "@/components/sections/services/services";
// import { Projects } from "@/components/sections/projects/projects";
import { Certificates } from "@/components/sections/certifications/certifications";
import { CodingProfiles } from "@/components/sections/profiles/coding-profiles";
import { ResumeSection } from "@/components/sections/resume/resume";
import { Contact } from "@/components/sections/contact/contact";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      
      <main
          id="main-content"
          className="w-full overflow-x-hidden"
        >

        <Hero />
        <About />
        <Skills />
        {/* <Services /> */}
        {/* <Projects /> */}
        <Certificates />
        <CodingProfiles />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  );
}
