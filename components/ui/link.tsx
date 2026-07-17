import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { type ComponentProps } from "react";

interface CustomLinkProps extends ComponentProps<typeof Link> {
  variant?: "default" | "muted" | "primary";
  external?: boolean;
}

export function CustomLink({
  variant = "default",
  external,
  className,
  children,
  href,
  ...props
}: CustomLinkProps) {
  const classes = cn(
    "transition-colors duration-200 underline-offset-4 hover:underline",
    {
      "text-foreground hover:text-primary": variant === "default",
      "text-muted hover:text-foreground": variant === "muted",
      "text-primary hover:text-accent": variant === "primary",
    },
    className
  );

  if (external) {
    return (
      <a
        href={href as string}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
