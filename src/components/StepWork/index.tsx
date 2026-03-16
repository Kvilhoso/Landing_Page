import { memo } from 'react';
import { motion } from 'framer-motion';
import type { StepWorkProps } from '@/@types';

function StepWork(props: StepWorkProps) {
  const { number, title, description, delay } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-b-orange-900 hover:-translate-y-1 transition-all duration-300'
    >
      <p className='text-[0.65rem] font-semibold uppercase tracking-widest text-orange-300 mb-4'>
        {number}
      </p>

      <h3 className='text-[1rem] font-medium text-white mb-2'>{title}</h3>

      <p className='text-[0.85rem] text-gray-400 leading-relaxed'>
        {description}
      </p>
    </motion.div>
  );
}

export default memo(StepWork);
