import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function SprayCanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn('h-6 w-6', props.className)}
    >
      <path d="m16.5 5.5-1.4-1.4" />
      <path d="m18 4-1-1" />
      <path d="M3 14h.01" />
      <path d="M7 14h.01" />
      <path d="M11 14h.01" />
      <path d="M21 7.5v1a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-1" />
      <path d="M21 7.5a2 2 0 0 0-2-2h-3" />
      <path d="m16 5.5 2.5-2.5" />
      <path d="M13.5 10.5v3.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.5" />
    </svg>
  );
}
