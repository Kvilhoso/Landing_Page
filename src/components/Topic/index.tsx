import { memo } from 'react';
import type { TopicProps } from '@/@types';

function Topic(props: TopicProps) {
  const { text } = props;

  return (
    <li className='flex gap-3 items-start'>
      <span className='text-white/30 mt-0.5'>—</span>
      <span>{text}</span>
    </li>
  );
}

export default memo(Topic);
