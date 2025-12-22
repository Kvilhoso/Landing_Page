import { memo } from 'react';
import { scrollTo } from '@/utils';

function Header() {
  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl'>
      <nav className='backdrop-blur-xl bg-white/5 rounded-full px-8 py-4 shadow-2xl border border-white/10'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>
            <button
              className='text-white cursor-pointer hover:text-gray-300 transition-colors duration-200'
              onClick={() => scrollTo('main')}
            >
              projeKt Rage
            </button>
          </div>

          <div className='flex gap-8 items-center'>
            <button
              onClick={() => scrollTo('who-are-we')}
              className='text-gray-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer'
            >
              Quem somos
            </button>

            <button
              onClick={() => scrollTo('hire')}
              className='bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 text-sm font-medium cursor-pointer'
            >
              Contratar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
