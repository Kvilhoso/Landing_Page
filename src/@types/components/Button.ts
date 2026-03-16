import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariantType = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
}
