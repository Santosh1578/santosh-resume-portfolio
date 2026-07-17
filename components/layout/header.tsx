"use client";

import { useState, useEffect } from "react";
import { navigation } from "@/data/navigation";
import { SECTION_IDS } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils/cn";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(Object.values(SECTION_IDS));
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[180px_1fr_180px] items-center px-6">
      <div className="justify-self-start">
       <Logo />
     </div>

     <nav
      className="hidden items-center justify-self-center gap-8 lg:flex"
      aria-label="Main navigation"
    >
         <div className="flex items-center gap-8">
  {navigation.map((item) => {
    const sectionId = item.href.replace("#", "");
    const isActive = activeSection === sectionId;

    return (
      <button
        key={item.href}
        onClick={() => handleNavClick(item.href)}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
          isActive
            ? "text-primary"
            : "text-muted hover:text-foreground"
        )}
        data-cursor-hover
      >
        {item.label}
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute inset-x-1 -bottom-px h-px bg-primary"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  })}

  <button
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:text-primary"
    data-cursor-hover
  >
    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
  </button>
</div>

        </nav>

        <div className="flex items-center justify-self-end gap-2">
        <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:text-primary lg:hidden"
                data-cursor-hover
      >
               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
         </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 p-6"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
