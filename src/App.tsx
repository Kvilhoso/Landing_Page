import { Prism, SplitText } from '@/components';

function App() {
  return (
    <main className='flex flex-col w-full h-full bg-zinc-950'>
      <div className='w-full h-[1080px] relative'>
        <Prism
          animationType='rotate'
          timeScale={0.5}
          height={4}
          baseWidth={6}
          scale={3}
          hueShift={0}
          colorFrequency={0.5}
          noise={0}
          glow={0.75}
          hoverStrength={1.5}
          inertia={0.1}
        >
          <div className='flex flex-col w-full h-full items-center justify-center'>
            <SplitText
              text='Revolucione suas financias'
              className='text-6xl font-semibold text-center text-white'
              delay={70}
              duration={1}
              tag='h1'
              ease='power3.out'
              splitType='chars'
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign='center'
            />

            <SplitText
              text='Desbloqueando barreiras financeiras'
              className='text-4xl font-semibold text-center text-white'
              delay={70}
              duration={1}
              tag='h2'
              ease='power3.out'
              splitType='chars'
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign='center'
            />
          </div>
        </Prism>
      </div>
    </main>
  );
}

export default App;
