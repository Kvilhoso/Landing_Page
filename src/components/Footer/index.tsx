import { memo } from 'react';
import { scrollTo } from '@/utils';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='py-20 px-6 border-t border-white/10'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          <div>
            <h2 className='text-3xl md:text-4xl font-light mb-6'>
              projeKt Rage
            </h2>
            <p className='text-gray-400 text-sm leading-relaxed max-w-md'>
              Tecnologia proprietária para automatizar seus investimentos em
              XAUUSD com segurança e performance.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h3 className='text-sm font-medium mb-4 text-gray-300'>
                Navegação
              </h3>
              <ul className='space-y-3'>
                <li>
                  <button
                    onClick={() => scrollTo('who-are-we')}
                    className='text-gray-400 hover:text-white transition-colors text-sm cursor-pointer'
                  >
                    Quem somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('hire')}
                    className='text-gray-400 hover:text-white transition-colors text-sm cursor-pointer'
                  >
                    Contratar
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-sm font-medium mb-4 text-gray-300'>
                Contato
              </h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='https://wa.me/seu_numero_aqui'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors text-sm cursor-pointer'
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-white/10'>
          <p className='text-gray-500 text-xs text-center'>
            © {currentYear} projeKt Rage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
