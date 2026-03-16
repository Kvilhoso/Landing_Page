import type { ButtonHTMLAttributes } from 'react';

export type HeaderButtonType = 'desktop' | 'mobile';

export interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  layout?: HeaderButtonType;
  outlined?: boolean;
}
