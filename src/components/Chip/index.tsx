import { memo } from 'react';
import type { ChipProps } from '@/@types';

function Chip(props: ChipProps) {
  const { label } = props;

  return (
    <span className='text-xs uppercase tracking-[0.18em] text-orange-300 bg-black border border-orange-900 px-3 py-1.5 rounded-full'>
      {label}
    </span>
  );
}

export default memo(Chip);
