import { memo } from 'react';
import { scrollTo } from '@/utils';

const currentYear = new Date().getFullYear();

const NAV_LINKS = [
  { label: 'Resultados',    id: 'performance' },
  { label: 'Como funciona', id: 'how'         },
  { label: 'Academy',       id: 'academy'     },
  { label: 'Quem somos',   id: 'who-are-we'  },
  { label: 'Planos',        id: 'pricing'     },
];

function Footer() {
  return (
    <footer className='py-20 px-6 border-t border-white/10'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-3 gap-12 mb-16'>
          <div className='md:col-span-1'>
            <h2 className='text-2xl md:text-3xl font-light mb-4'>projeKt Rage</h2>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Sistema autônomo de trading para o mercado de ouro. Tecnologia proprietária desenvolvida pela Impulse Labs.
            </p>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-4 text-gray-300'>Navegação</h3>
            <ul className='space-y-3'>
              {NAV_LINKS.map(l => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className='text-gray-400 hover:text-white transition-colors text-sm cursor-pointer'>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-4 text-gray-300'>Legal</h3>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li className='cursor-pointer hover:text-white transition-colors'>Termos de Uso</li>
              <li className='cursor-pointer hover:text-white transition-colors'>Política de Privacidade</li>
              <li className='cursor-pointer hover:text-white transition-colors'>Aviso de Risco</li>
            </ul>
            <h3 className='text-sm font-medium mt-6 mb-3 text-gray-300'>Contato</h3>
            <p className='text-gray-400 text-sm'>contato@projektrage.com.br</p>
          </div>
        </div>

        <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3'>
          <p className='text-gray-500 text-xs'>© {currentYear} projeKt Rage · Impulse Labs. Todos os direitos reservados.</p>
          <p className='text-gray-600 text-xs'>Resultados passados não garantem resultados futuros.</p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
