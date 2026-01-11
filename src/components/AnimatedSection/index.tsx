import { memo } from 'react';
import { motion } from 'framer-motion';
import type { AnimatedSectionProps } from '@/@types';

function AnimatedSection(props: AnimatedSectionProps) {
  const { children, id, className = '', duration = 0.8, delay = 0 } = props;

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-96px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default memo(AnimatedSection);
