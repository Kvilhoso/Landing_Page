import { Prism, SplitText } from '@/components';

function App() {
  return (
    <main className='flex flex-col w-full h-screen bg-zinc-950'>
      <Prism
        animationType='rotate'
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      >
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <SplitText
            text='Revolucione suas financias'
            className='text-4xl font-semibold text-center text-white'
            delay={100}
            duration={0.25}
            ease='power3.out'
            splitType='chars'
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
          />

          <SplitText
            text='Desbloqueando barreiras financeiras'
            className='text-4xl font-semibold text-center text-white'
            delay={100}
            duration={0.25}
            ease='power3.out'
            splitType='chars'
            tag='span'
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
          />
        </div>
      </Prism>
    </main>
  );
}

export default App;
