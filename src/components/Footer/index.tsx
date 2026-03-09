import { memo, useMemo } from 'react';
import { NAVIGATION } from '@/constants';
import { Section } from './components';

const currentYear = new Date().getFullYear();

function Footer() {
  const renderSections = useMemo(
    () =>
      NAVIGATION.map(navigation => (
        <Section key={navigation.id} id={navigation.id}>
          {navigation.label}
        </Section>
      )),
    [],
  );

  return (
    <footer className='py-20 px-6 border-t border-white/10'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-3 gap-12 mb-16'>
          <div className='md:col-span-1'>
            <h2 className='text-2xl md:text-3xl font-light mb-4'>
              projeKt Rage
            </h2>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Sistema autônomo de trading para o mercado de ouro. Tecnologia
              proprietária desenvolvida pela Impulse Labs.
            </p>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-4 text-gray-300'>
              Navegação
            </h3>
            <ul className='space-y-3'>{renderSections}</ul>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-4 text-gray-300'>Legal</h3>

            <ul className='space-y-3 text-gray-400 text-sm'>
              <li className='cursor-pointer hover:text-white transition-colors'>
                Termos de Uso
              </li>

              <li className='cursor-pointer hover:text-white transition-colors'>
                Política de Privacidade
              </li>

              <li className='cursor-pointer hover:text-white transition-colors'>
                Aviso de Risco
              </li>
            </ul>

            <h3 className='text-sm font-medium mt-6 mb-3 text-gray-300'>
              Contato
            </h3>

            <a
              className='text-gray-400 text-sm no-underline cursor-pointer hover:text-white transition-colors'
              href='mailto:contato@projektrage.com.br'
            >
              contato@projektrage.com.br
            </a>
          </div>
        </div>

        <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3'>
          <p className='text-gray-500 text-xs'>
            © {currentYear} projeKt Rage · Impulse Labs. Todos os direitos
            reservados.
          </p>
          <p className='text-gray-600 text-xs'>
            Resultados passados não garantem resultados futuros.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
