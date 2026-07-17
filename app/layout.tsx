import type { Metadata, Viewport } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { createMetadata } from "@/lib/seo/metadata";
import { getPersonJsonLd, getWebsiteJsonLd } from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/shared/json-ld";
import { Providers } from "@/components/layout/providers";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
        <JsonLd data={getPersonJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
      </head>
      <body className="min-h-screen font-body antialiased">
        <Providers>
          <SkipLink />
          {children}
        </Providers>
      </body>
    </html>
  );
}
