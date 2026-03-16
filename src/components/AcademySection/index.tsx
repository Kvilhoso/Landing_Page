import { memo } from 'react';

function AcademySection() {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-12 md:gap-20 mb-16'>
        <div>
          <h2 className='text-4xl md:text-5xl font-light leading-tight'>
            O mercado financeiro não foi feito para ser complicado.
          </h2>
        </div>
        <div className='space-y-4 text-gray-400 leading-relaxed'>
          <p>
            Os termos técnicos existem — em grande parte — para criar a ilusão
            de que investir bem é coisa de especialista. Não é.
          </p>
          <p>
            A Rage Academy foi criada para desmistificar o mercado financeiro.
            Vídeos, artigos e guias em linguagem simples — sobre indicadores,
            terminologia, economia e tudo que você precisa entender para tomar
            decisões melhores.
          </p>
          <p className='text-[0.85rem] text-gray-500'>
            Conteúdo em desenvolvimento. Primeiros módulos disponíveis no
            lançamento.
          </p>
        </div>
      </div>

      <div className='rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center relative cursor-pointer hover:border-white/20 transition-all duration-300 mb-14'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]' />
        <div className='w-16 h-16 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-2xl relative z-10 hover:bg-white/[0.14] hover:scale-105 transition-all duration-200'>
          ▶
        </div>
        <span className='absolute bottom-5 left-5 text-[0.72rem] uppercase tracking-widest text-gray-400 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm'>
          Em breve · Introdução ao Mercado de Ouro
        </span>
      </div>
    </div>
  );
}

export default memo(AcademySection);
