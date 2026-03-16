import type { ButtonProps, ButtonVariantType } from '@/@types';
import { memo } from 'react';

function Button(props: ButtonProps) {
  const { variant = 'primary', children, className, ...rest } = props;

  const variants: Record<ButtonVariantType, string> = {
    primary: `bg-white text-black px-8 py-4 rounded-full text-base font-medium cursor-pointer hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all duration-200 ${className}`,
    secondary: `border border-white/10 text-gray-400 px-8 py-4 rounded-full text-base cursor-pointer hover:border-white/20 hover:text-white transition-all duration-200 ${className}`,
  };

  return (
    <button className={variants[variant]} {...rest}>
      {children}
    </button>
  );
}

export default memo(Button);
