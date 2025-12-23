import { memo, useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollTo } from '@/utils';
import { LOGO_CIRCLE } from '@/config';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  function onMenu(): void {
    setIsOpenMenu(!isOpenMenu);
  }

  function onHideByMenu(): void {
    setIsOpenMenu(false);

    setTimeout(() => scrollTo('hire'), 300);
  }

  function onHideByWhoWeAre(): void {
    setIsOpenMenu(false);

    setTimeout(() => scrollTo('who-are-we'), 300);
  }

  return (
    <header className='fixed md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 z-50 w-full md:w-11/12 max-w-6xl'>
      <nav className='md:backdrop-blur-xl bg-black md:bg-white/5 md:rounded-full px-8 py-4 shadow-2xl border border-white/10'>
        <div className='flex justify-between items-center'>
          <div
            className='group flex gap-2 text-xl font-semibold'
            onClick={() => scrollTo('main')}
          >
            <img
              src={LOGO_CIRCLE}
              alt='projeKt Rage Logo'
              className='block size-10 rounded-full md:hidden cursor-pointer group-hover:opacity-70 transition-all duration-200'
            />

            <button className='text-white cursor-pointer group-hover:text-gray-300 transition-colors duration-200'>
              projeKt Rage
            </button>
          </div>

          <div className='flex gap-8 items-center'>
            <button
              onClick={() => scrollTo('who-are-we')}
              className='text-gray-300 hidden md:block hover:text-white transition-colors duration-200 text-sm cursor-pointer'
            >
              Quem somos
            </button>

            <button
              onClick={() => scrollTo('hire')}
              className='bg-white text-black px-6 py-2.5 rounded-full hidden md:block hover:bg-gray-100 transition-all duration-200 text-sm font-medium cursor-pointer'
            >
              Contratar
            </button>

            <button
              className='block md:hidden transition-all duration-200 cursor-pointer'
              onClick={onMenu}
            >
              {isOpenMenu ? (
                <X className='size-10 text-white hover:text-gray-300' />
              ) : (
                <Menu className='size-10 text-white hover:text-gray-300' />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden md:hidden flex flex-col bg-black'
          >
            <button
              className='group w-full px-8 py-4 shadow-2xl bg-black border-b border-b-white/10 transition-colors duration-200 cursor-pointer'
              onClick={onHideByWhoWeAre}
            >
              <div className='flex w-full justify-between gap-2 text-gray-300 group-hover:text-white transition-colors duration-200'>
                <span>Quem somos</span>
                <ChevronRight className='size-5 text-gray-300 group-hover:text-white transition-colors duration-200' />
              </div>
            </button>

            <button
              className='group w-full px-8 py-4 shadow-2xl bg-black border-b border-b-white/10 transition-colors duration-200 cursor-pointer'
              onClick={onHideByMenu}
            >
              <div className='flex w-full justify-between gap-2 text-gray-300 group-hover:text-white transition-colors duration-200'>
                <span>Contratar</span>
                <ChevronRight className='size-5 text-gray-300 group-hover:text-white transition-colors duration-200' />
              </div>
            </button>

            <button
              className='w-full px-8 py-4 shadow-2xl text-gray-300 bg-black border-b border-b-white/10 cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300'
              disabled
            >
              <div className='flex w-full justify-between gap-2'>
                <span>Suporte</span>
                <ChevronRight className='size-5 text-gray-300 cursor-not-allowed' />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default memo(Header);
