"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container size="narrow" className="text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-2">
          Something went wrong
        </h1>
        <p className="text-muted mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <Button onClick={reset}>Try again</Button>
      </Container>
    </div>
  );
}
