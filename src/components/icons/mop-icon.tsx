import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function MopIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12.3 21.7a1 1 0 0 1-1.6 0L8 18h8l-2.7 3.7Z" />
      <path d="M18 18H6" />
      <path d="M18 15H6" />
      <path d="m19 12-7-9" />
      <path d="m5 12 7-9" />
    </svg>
  );
}
