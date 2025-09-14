export type PrismAnimationType = 'rotate' | 'hover' | '3drotate';

export interface PrismOffsetProps {
  x?: number;
  y?: number;
}

export interface PrismProps {
  height?: number;
  baseWidth?: number;
  animationType?: PrismAnimationType;
  glow?: number;
  offset?: PrismOffsetProps;
  noise?: number;
  transparent?: boolean;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  hoverStrength?: number;
  inertia?: number;
  bloom?: number;
  suspendWhenOffscreen?: boolean;
  timeScale?: number;
}
