import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 text-xl font-bold text-primary",
        className
      )}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          fill="currentColor"
          d="M50 5L61.76 38.06L97.55 38.06L67.9 59.94L79.66 93L50 71.12L20.34 93L32.1 59.94L2.45 38.06L38.24 38.06L50 5Z"
        />
        <path
          fill="currentColor"
          d="M80.12 32.5L84 25.4L90.1 21.5L84 27.6L80.12 32.5Z"
        />
        <path
          fill="currentColor"
          d="M91.5 35L95.38 29.9L100 28L95.38 32.1L91.5 35Z"
        />
      </svg>

      <div className="flex flex-col leading-tight">
        <span className="font-headline text-2xl tracking-wider">STAR X</span>
        <span className="text-xs font-semibold text-muted-foreground tracking-widest">CLEANING LTD</span>
      </div>
    </Link>
  );
}
