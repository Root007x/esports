import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <h1 className="font-orbitron text-6xl sm:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-text-muted mt-4 text-center">
        Page not found. The round might have been clutched elsewhere.
      </p>
      <Link href="/" className="mt-8" aria-label="Return to home page">
        <Button size="lg" className="shadow-glow">
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}
