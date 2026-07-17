"use client";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { LoadingScreen } from "@/components/animations/loading-screen";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { BackToTop } from "@/components/animations/back-to-top";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LenisProvider>
        <LoadingScreen />
        <ScrollProgress />
       {/* <CustomCursor /> */}
        {children}
        <BackToTop />
      </LenisProvider>
    </ThemeProvider>
  );
}
