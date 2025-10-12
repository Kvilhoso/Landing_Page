import { memo } from 'react';
import type { FeatureProps } from '@/@types';

function Feature(props: FeatureProps) {
  const { title, description, icon } = props;

  return (
    <div className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300'>
      {icon}

      <h3 className='text-lg font-medium mb-3'>{title}</h3>

      <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
    </div>
  );
}

export default memo(Feature);
