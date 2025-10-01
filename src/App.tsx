import { Footer } from '@/components';

function App() {
  return (
    <main className='flex flex-col w-full h-full items-center pb-16 bg-zinc-900'>
      {/* TODO: Remove in the future position absolute and bottom-16 */}
      <div className='absolute bottom-16 flex flex-col w-full max-w-7xl h-min justify-center items-center pt-10'>
        <Footer />
      </div>
    </main>
  );
}

export default App;
