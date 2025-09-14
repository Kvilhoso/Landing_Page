import type { FC } from 'react';
import { LOGO_CIRCLE } from '@/config/images';

const currentYear = new Date().getFullYear();

export const Footer: FC = () => (
  <footer className='flex w-full max-w-7xl h-min justify-between items-center mt-10 px-4 pt-10 bg-zinc-900 border-t border-t-zinc-800'>
    <p className='text-zinc-100 text-lg font-montreal-light'>
      © {currentYear} projekt Rage. Todos os direitos reservados.
    </p>

    <img
      src={LOGO_CIRCLE}
      alt='projekt Rage'
      title='projekt Rage'
      className='size-7 rounded-full object-contain'
    />
  </footer>
);
