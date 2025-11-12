import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function BroomIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M19.88 18.12a3.33 3.33 0 0 0-4.24-4.24l-9.52 9.52a3.33 3.33 0 0 0 4.24 4.24l9.52-9.52Z" />
      <path d="m21 7-2.5-2.5" />
      <path d="M14 14 3 3" />
      <path d="M18 6s-4.5 2-6.5 4" />
    </svg>
  );
}
