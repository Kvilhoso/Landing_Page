import { memo, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollTo } from '@/utils';
import { LOGO_CIRCLE } from '@/config';
import { TABS } from '@/constants';
import { Button } from './components';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function onGoTo(id: string): void {
    const wasOpen = isOpen;
    setIsOpen(false);
    setTimeout(() => scrollTo(id), wasOpen ? 300 : 0);
  }

  const renderIcon = useMemo(
    () =>
      isOpen ? (
        <X className='size-10 text-white hover:text-gray-300' />
      ) : (
        <Menu className='size-10 text-white hover:text-gray-300' />
      ),
    [isOpen],
  );

  const renderMobileButtons = useMemo(
    () =>
      TABS.map(tab => (
        <Button
          layout='mobile'
          key={tab.id}
          disabled={tab.disabled}
          onClick={() => onGoTo(tab.id)}
        >
          {tab.label}
        </Button>
      )),
    [onGoTo],
  );

  const renderDesktopButtons = useMemo(
    () =>
      TABS.filter(tab => !tab.disabled).map(tab => (
        <Button
          layout='desktop'
          outlined={tab.id !== 'hire'}
          key={tab.id}
          onClick={() => onGoTo(tab.id)}
        >
          {tab.label}
        </Button>
      )),
    [onGoTo],
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='backdrop-blur-2xl fixed lg:top-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50 w-full lg:w-11/12 max-w-6xl'
    >
      <nav className='bg-white/5 lg:rounded-full px-8 py-4 lg:shadow-2xl lg:border lg:border-white/10'>
        <div className='flex justify-between items-center'>
          <div
            className='group flex gap-2 items-center text-xl font-semibold cursor-pointer'
            onClick={() => onGoTo('main')}
          >
            <img
              src={LOGO_CIRCLE}
              alt='projeKt Rage Logo'
              className='block size-10 rounded-full lg:hidden cursor-pointer group-hover:opacity-70 transition-all duration-200'
            />
            <button className='text-white cursor-pointer group-hover:text-gray-300 transition-colors duration-200'>
              projeKt Rage
            </button>
          </div>

          <div className='flex gap-6 items-center'>
            {renderDesktopButtons}

            <button
              className='block lg:hidden transition-all duration-200 cursor-pointer'
              onClick={() => setIsOpen(prev => !prev)}
            >
              {renderIcon}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden lg:hidden flex flex-col bg-white/5'
          >
            {renderMobileButtons}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default memo(Header);
