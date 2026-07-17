import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { socialLinks } from "@/data/social";
import { createMetadata } from "@/lib/seo/metadata";
import { formatMonthYear } from "@/lib/utils/format-date";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowLeft,
  MapPin,
  Mail,
  Globe,
  GraduationCap,
  CalendarDays,
  Building2,
  Award,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description: `${profile.fullName} — ${profile.title}. View full resume with education, experience, skills, and projects.`,
  path: "/resume",
});

export default function ResumePage() {
  const allSkills = skills.flatMap((cat) => cat.skills.map((s) => s.name));

  return (
    <div className="min-h-screen bg-background py-12 print:py-0">
     <Container size="full">
     <div className="no-print mb-8 flex items-center justify-between print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <a href={profile.resumeUrl} download>
          <Button className="gap-2">
              <Download size={16} />
              Download PDF
            </Button>
          </a>
        </div>

        <article className="w-full rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden print:mx-auto print:max-w-[210mm] print:rounded-none print:border-0 print:shadow-none">

{/* Header */}
<div className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 px-12 py-14 text-white">
<h1 className="font-display text-6xl font-extrabold tracking-tight">{profile.fullName}</h1>

<p className="mt-4 text-2xl font-medium text-blue-100">
    {profile.title}
  </p>
  <div className="mt-8 flex flex-wrap items-center gap-8 text-base text-blue-100">

<div className="flex items-center gap-2">
  <MapPin size={18} />
  <span>{profile.location}</span>
</div>

<div className="flex items-center gap-2">
  <Mail size={18} />
  <span>{profile.email}</span>
</div>

<div className="flex items-center gap-2">
  <Globe size={18} />
  <span>{profile.domain}</span>
</div>

</div>
<div className="mt-8 flex flex-wrap gap-4">
  {socialLinks
    .filter((link) => link.name.toLowerCase() !== "email")
    .map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/20"
      >
        {link.name === "GitHub" && <FaGithub size={14} />}
        {link.name === "LinkedIn" && <FaLinkedin size={14} />}
        {(link.name === "Twitter" || link.name === "X") && (
          <FaXTwitter size={14} />
        )}

        <span>{link.name}</span>
      </a>
    ))}
</div>
</div>

{/* Body */}
<div className="space-y-10">

  {/* Right Side */}
  <section className="space-y-14 p-10 print:p-8">

    {/* Summary */}

    <div className="mb-10 rounded-3xl border border-border bg-slate-50 p-8">

<h2 className="mb-6 text-3xl font-bold text-primary">
  Profile
</h2>

<p className="leading-8 text-muted">
  I am a B.Tech Computer Science student passionate about Full Stack
  Development, modern web technologies, and building scalable,
  user-friendly applications.
</p>

<div className="mt-8 border-t border-border pt-8">

  <h2 className="mb-4 text-3xl font-bold text-primary">
    Professional Summary
  </h2>

  <p className="leading-8 text-muted">
    {profile.bio}
  </p>

</div>

</div>

{/* Skills */}

<div className="mb-12">

<h2 className="mb-8 text-3xl font-bold text-primary">
    Technical Skills
  </h2>

  {skills.map((category) => (
    <div
    key={category.name}
      className="mb-6 rounded-2xl bg-surface p-6"
    >

      <h3 className="mb-4 text-lg font-semibold text-foreground">
        {category.name}
      </h3>

      <div className="flex flex-wrap gap-x-5 gap-y-5 mt-4">

        {category.skills.map((skill) => (

          <span
            key={skill.name}
            className="rounded-full bg-slate-100 px-5 py-3 text-[15px] font-semibold text-black">
            {skill.name}
          </span>

        ))}

      </div>

    </div>

  ))}

</div>
{/* Education */}

<div className="mb-10">
  <h2 className="mb-5 text-2xl font-bold text-primary">
    Education
  </h2>

  {education.map((edu) => (
  <div
    key={edu.institution}
    className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
  >
    <div className="flex items-start justify-between flex-wrap gap-4">

      <div>
      <div className="absolute -left-[13px] top-2 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-md"></div>

        <h3 className="text-2xl font-bold text-black tracking-tight">
        <div className="flex items-center gap-3">
           <GraduationCap className="h-6 w-6 text-primary" />
          <span>{edu.degree}</span>
      </div>
        </h3>

        <p className="mt-2 text-lg font-semibold text-primary">
          {edu.institution}
        </p>

        <p className="mt-2 text-gray-600">
          {edu.field}
        </p>
      </div>

      <div className="text-right">
      <div className="flex items-center justify-end gap-2 text-gray-700 font-semibold">
          <CalendarDays className="h-4 w-4" />
           <span>
            {edu.startYear} – {edu.endYear}
             </span>
        </div>
        <div className="mt-2 flex items-center justify-end gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{edu.location}</span>
        </div>
      </div>

    </div>

    <ul className="mt-6 space-y-2">
      {edu.highlights.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-gray-700"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

  </div>
))}
</div>

{/* Experience */}
<div>
{experiences.length > 0 && (
<>
<h2 className="mb-8 text-3xl font-bold text-primary">
  Experience
</h2>
{experiences.map((exp) => (
  <div
    key={exp.id}
   className="relative mb-10 pl-10 border-l-4 border-primary">
   <h3 className="text-2xl font-bold text-black">
      {exp.role}
    </h3>

    <div className="mt-2 flex items-center gap-2 text-lg font-semibold text-primary">
        <Building2 className="h-5 w-5" />
        <span>{exp.company}</span>
    </div>
    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-500">
  <CalendarDays className="h-4 w-4" />
  <span>
    {formatMonthYear(exp.startDate)} —{" "}
    {exp.endDate === "Present"
      ? "Present"
      : formatMonthYear(exp.endDate)}
  </span>
</div>
    <p className="mt-5 leading-8 text-gray-700">
      {exp.description}
    </p>

    <ul className="mt-6 ml-2 space-y-3">
      {exp.highlights.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3"
        >
          <span className="mt-[10px] h-2 w-2 rounded-full bg-primary"></span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
    </div>
))}

</>
)}
{/* Projects - Hidden for now */}


{/* Certifications */}

<div className="mt-14">

<div className="mb-8 flex items-center gap-3">
  <Award className="h-7 w-7 text-primary" />
  <h2 className="text-3xl font-bold text-primary">
    Certifications
  </h2>
</div>

  {certifications.map((cert) => (
    <div
      key={cert.id}
      className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300"
    >
     <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold text-black">
            {cert.name}
       </h3>
     </div>

      <p className="mt-2 text-primary font-semibold">
        {cert.issuer}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {cert.issueDate}
      </p>
    </div>
  ))}
</div>

</div>
</section>

</div>

</article>
      </Container>
    </div>
  );
}
