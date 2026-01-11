import type { PropsWithChildren } from 'react';

export interface AnimatedSectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
  duration?: number;
  delay?: number;
}
