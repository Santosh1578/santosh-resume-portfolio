import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <Container size="narrow" className="relative z-10 text-center">
      <p className="mb-6 font-display text-9xl font-extrabold tracking-tight text-primary/20">
          404
        </p>
        <h1 className="mb-4 font-display text-4xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg leading-8 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
        <Button size="lg">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
        <div
    className="pointer-events-none absolute inset-0 -z-10"
    aria-hidden="true"
  >
    <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-10 right-10 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[100px]" />
  </div>
</Container>
    </div>
  );
}
