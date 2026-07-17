import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <Container
        size="narrow"
        className="relative z-10 space-y-5 text-center"
      >
        <Skeleton className="mx-auto h-10 w-56 rounded-xl" />
        <Skeleton className="mx-auto h-4 w-72 rounded-lg" />
        <Skeleton className="mx-auto h-4 w-60 rounded-lg" />

        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>
      </Container>
    </div>
  );
}
