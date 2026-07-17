import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/utils/get-base-url";

interface CreateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: CreateMetadataProps = {}): Metadata {
  const baseUrl = getBaseUrl();
  const siteTitle = "Santosh";
  const defaultDescription =
   "Computer Science student and Full Stack Web Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Passionate about building scalable, responsive, and high-performance web applications while continuously learning and contributing to real-world software projects.";

   const pageTitle = title
   ? `${title} | ${siteTitle}`
   : `${siteTitle} | Computer Science Student & Full Stack Web Developer`;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/opengraph-image`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteTitle,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
