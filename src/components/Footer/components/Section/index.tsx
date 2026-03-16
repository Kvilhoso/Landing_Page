import { memo } from 'react';
import { scrollTo } from '@/utils';
import type { FooterSectionProps } from '@/@types';

function Section(props: FooterSectionProps) {
  const { id, children } = props;

  return (
    <li>
      <button
        onClick={() => scrollTo(id)}
        className='text-gray-400 hover:text-white transition-colors text-sm cursor-pointer'
      >
        {children}
      </button>
    </li>
  );
}

export default memo(Section);
