import type { FC } from 'react';
import { SplitText } from '.';
import type { ButtonProps } from '@/@types';

export const Button: FC<ButtonProps> = ({ text, className, ...rest }) => {
  return (
    <button
      className={`group px-10 pt-5 pb-3 bg-zinc-100 rounded-full cursor-pointer drop-shadow-zinc-900 outline-zinc-100 transition delay-75 duration-200 ease-in-out hover:bg-zinc-200 hover:drop-shadow-lg active:ring-1 active:ring-zinc-400 active:drop-shadow-xl active:scale-95 ${className}`}
      {...rest}
    >
      <SplitText
        delay={50}
        duration={0.75}
        ease='power3.out'
        splitType='chars'
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        textAlign='center'
        text={text || ''}
        className='text-xl text-zinc-500 font-montreal group-hover:text-zinc-600 transition-colors duration-300'
      />
    </button>
  );
};
