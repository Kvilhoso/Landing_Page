import type { CSSProperties } from 'react';

export type SplitTextSplitType = 'chars' | 'words' | 'lines' | 'words, chars';

export type SplitTextTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: SplitTextSplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: SplitTextTagType;
  textAlign?: CSSProperties['textAlign'];
  onLetterAnimationComplete?: VoidFunction;
}
