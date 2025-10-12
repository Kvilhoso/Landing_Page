import { memo } from 'react';
import { CheckCircle } from 'lucide-react';
import type { BenefitProps } from '@/@types';

function Benefit(props: BenefitProps) {
  const { title, description } = props;

  return (
    <div className='flex items-start gap-4'>
      <CheckCircle className='w-6 h-6 text-white mt-1 flex-shrink-0' />

      <div>
        <h3 className='text-lg font-medium mb-2'>{title}</h3>

        <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}

export default memo(Benefit);
