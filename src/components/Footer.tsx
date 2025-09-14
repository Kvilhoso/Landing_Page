import type { FC } from 'react';

const currentYear = new Date().getFullYear();

export const Footer: FC = () => (
  <footer className='flex w-full max-w-7xl h-min justify-start items-center mt-10 pt-10 bg-zinc-900 border-t border-t-zinc-800'>
    <p className='text-zinc-100 text-lg font-montreal-light'>
      © {currentYear} projekt Rage. Todos os direitos reservados.
    </p>
  </footer>
);
