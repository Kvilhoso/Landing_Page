import { memo, useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollTo } from '@/utils';
import { LOGO_CIRCLE } from '@/config';

const NAV: { label: string; id: string }[] = [
  { label: 'Resultados',   id: 'performance' },
  { label: 'Academy',      id: 'academy'     },
  { label: 'Quem somos',  id: 'who-are-we'  },
  { label: 'Planos',       id: 'pricing'     },
];

function Header() {
  const [open, setOpen] = useState(false);

  function goTo(id: string): void {
    const wasOpen = open;
    setOpen(false);
    setTimeout(() => scrollTo(id), wasOpen ? 300 : 0);
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='backdrop-blur-2xl fixed md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 z-50 w-full md:w-11/12 max-w-6xl'
    >
      <nav className='bg-white/5 md:rounded-full px-8 py-4 md:shadow-2xl md:border md:border-white/10'>
        <div className='flex justify-between items-center'>
          <div className='group flex gap-2 items-center text-xl font-semibold cursor-pointer' onClick={() => goTo('main')}>
            <img src={LOGO_CIRCLE} alt='projeKt Rage Logo' className='block size-10 rounded-full md:hidden cursor-pointer group-hover:opacity-70 transition-all duration-200' />
            <button className='text-white cursor-pointer group-hover:text-gray-300 transition-colors duration-200'>projeKt Rage</button>
          </div>

          <div className='flex gap-6 items-center'>
            {NAV.map(item => (
              <button key={item.id} onClick={() => goTo(item.id)} className='text-gray-300 hidden md:block hover:text-white transition-colors duration-200 text-sm cursor-pointer'>
                {item.label}
              </button>
            ))}
            <button onClick={() => goTo('hire')} className='bg-white text-black px-6 py-2.5 rounded-full hidden md:block hover:bg-gray-100 transition-all duration-200 text-sm font-medium cursor-pointer'>
              Adquirir Licença
            </button>
            <button className='block md:hidden transition-all duration-200 cursor-pointer' onClick={() => setOpen(v => !v)}>
              {open ? <X className='size-10 text-white hover:text-gray-300' /> : <Menu className='size-10 text-white hover:text-gray-300' />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className='overflow-hidden md:hidden flex flex-col bg-white/5'>
            {NAV.map(item => (
              <button key={item.id} className='group w-full px-8 py-4 transition-colors duration-200 cursor-pointer' onClick={() => goTo(item.id)}>
                <div className='flex w-full justify-between gap-2 text-gray-300 group-hover:text-white transition-colors duration-200'>
                  <span>{item.label}</span>
                  <ChevronRight className='size-5 text-gray-300 group-hover:text-white transition-colors duration-200' />
                </div>
              </button>
            ))}
            <button className='group w-full px-8 py-4 transition-colors duration-200 cursor-pointer' onClick={() => goTo('hire')}>
              <div className='flex w-full justify-between gap-2 text-gray-300 group-hover:text-white transition-colors duration-200'>
                <span>Adquirir Licença</span>
                <ChevronRight className='size-5 text-gray-300 group-hover:text-white transition-colors duration-200' />
              </div>
            </button>
            <button className='w-full px-8 py-4 text-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:text-gray-500' disabled>
              <div className='flex w-full justify-between gap-2'>
                <span>Suporte</span>
                <ChevronRight className='size-5 text-gray-500 cursor-not-allowed' />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default memo(Header);
