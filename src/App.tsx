import {
  FadeContent,
  Prism,
  ScrollReveal,
  SplitText,
  type ScrollRevealProps,
  type SplitTextProps,
} from '@/components';

function App() {
  const commonSplitTextProps: Omit<SplitTextProps, 'text'> = {
    delay: 50,
    duration: 0.75,
    ease: 'power3.out',
    splitType: 'chars',
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    textAlign: 'center',
  };

  const commonScrollRevealProps: ScrollRevealProps = {
    enableBlur: true,
    baseOpacity: 0,
    blurStrength: 10,
    textClassName:
      'text-[clamp(1.25rem,3vw,2.125rem)] font-extralight text-zinc-100 text-center',
  };

  return (
    <main className='flex flex-col w-full h-full bg-zinc-900 pb-16'>
      <FadeContent
        blur
        duration={1000}
        initialOpacity={1}
        threshold={0.1}
        className='w-full h-[1080px] '
      >
        <Prism
          animationType='rotate'
          timeScale={0.5}
          height={3}
          baseWidth={6}
          scale={3}
          hueShift={0}
          colorFrequency={0.5}
          noise={0}
          glow={0.75}
          hoverStrength={1.5}
          inertia={0.1}
        />

        <div className='absolute top-0 left-0 flex flex-col w-full h-full items-center justify-center'>
          <SplitText
            {...commonSplitTextProps}
            text='Revolucione suas finanças'
            className='text-6xl font-semibold text-center text-zinc-100 leading-20'
            tag='h1'
          />

          <SplitText
            {...commonSplitTextProps}
            text='Desbloqueando barreiras financeiras'
            className='text-4xl font-semibold text-center text-zinc-100'
            tag='h2'
          />

          <button className='px-10 py-5 mt-20 bg-zinc-100 rounded-full cursor-pointer shadow-zinc-100 hover:shadow-zinc-200 hover:bg-zinc-200 transition-colors duration-300 group'>
            <SplitText
              {...commonSplitTextProps}
              text='Vamos começar'
              className='text-xl text-zinc-800 font-light leading-6 group-hover:text-zinc-900'
            />
          </button>
        </div>
      </FadeContent>

      <div className='flex flex-col w-full h-full px-64 py-10'>
        <ScrollReveal {...commonScrollRevealProps}>
          O copy trading representa uma verdadeira revolução no mundo dos
          investimentos, permitindo que qualquer pessoa, independentemente de
          sua experiência, tenha acesso às mesmas estratégias utilizadas por
          traders profissionais. Através desta inovadora ferramenta, você pode
          transformar completamente sua relação com o dinheiro, construindo uma
          fonte de renda passiva que trabalha para você 24 horas por dia. É
          chegada a hora de deixar para trás os métodos tradicionais e abraçar
          uma nova era de possibilidades financeiras ilimitadas.
        </ScrollReveal>

        <ScrollReveal {...commonScrollRevealProps}>
          As barreiras que antes impediam o acesso aos mercados financeiros
          agora podem ser completamente eliminadas através do copy trading,
          democratizando o investimento e tornando-o acessível a todos. Não
          importa se você é iniciante ou se possui poucos recursos para começar
          - esta estratégia remove os obstáculos do conhecimento técnico
          complexo e do tempo necessário para análises. Com apenas alguns
          cliques, você pode desbloquear um universo de oportunidades que antes
          eram privilégio exclusivo de grandes investidores e instituições
          financeiras.
        </ScrollReveal>
      </div>
    </main>
  );
}

export default App;
