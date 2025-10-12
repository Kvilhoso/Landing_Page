import { TrendingUp, Shield, Zap, Users, BarChart3 } from 'lucide-react';
import { Benefit, Feature, Footer, Header } from './components';

function App() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />

      <section className='pt-40 pb-32 px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='inline-block mb-8'>
              <span className='text-xs uppercase tracking-wider text-gray-400 font-medium'>
                Tecnologia de Ponta
              </span>
            </div>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight'>
              Robô XAUUSD
            </h1>
            <p className='text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed'>
              Automatize seus investimentos em ouro com algoritmos inteligentes,
              trading 24/7 e gestão de risco avançada.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-24'>
            <Feature
              title='Alta Performance'
              description='Estratégias otimizadas para maximizar ganhos no mercado de ouro.'
              icon={<TrendingUp className='w-10 h-10 text-white mb-6' />}
            />

            <Feature
              title='Segurança Total'
              description='Proteção de capital com stop loss inteligente e gestão de risco.'
              icon={<Shield className='w-10 h-10 text-white mb-6' />}
            />

            <Feature
              title='Execução Rápida'
              description='Trading automatizado 24/7 aproveitando as melhores oportunidades.'
              icon={<Zap className='w-10 h-10 text-white mb-6' />}
            />
          </div>
        </div>
      </section>

      <section className='py-32 px-6 bg-gradient-to-b from-black to-zinc-900'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-light mb-6'>
              Foco em resultados
            </h2>
            <p className='text-xl text-gray-400 font-light max-w-2xl mx-auto'>
              Um sistema de trading pronto para escalar com você.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <Benefit
                title='Tecnologia Proprietária'
                description='Algoritmos desenvolvidos do zero, sem dependência de terceiros. Arquitetura otimizada para performance.'
              />

              <Benefit
                title='Solução Plug and Play'
                description='Configuração rápida e integração simples. Comece a operar com eficiência desde o primeiro dia.'
              />

              <Benefit
                title='Gestão de Risco Embutida'
                description='Stop loss automático e gestão de posições já integrados ao sistema desde o início.'
              />
            </div>

            <div className='space-y-6'>
              <Benefit
                title='Monitoramento em Tempo Real'
                description='Acompanhe suas operações e resultados em tempo real com interface intuitiva e relatórios detalhados.'
              />

              <Benefit
                title='Análise Avançada'
                description='Sistema de análise técnica e fundamental para identificar as melhores oportunidades de entrada.'
              />

              <Benefit
                title='Suporte Especializado'
                description='Equipe técnica disponível para auxiliar na configuração e otimização do seu robô.'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='who-are-we' className='py-32 px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='mb-8'>
                <Users className='w-12 h-12 text-white' />
              </div>
              <h2 className='text-4xl md:text-5xl font-light mb-8'>
                Quem Somos
              </h2>
              <div className='space-y-6 text-gray-400 leading-relaxed'>
                <p>
                  A projeKt Rage é uma empresa especializada em soluções de
                  trading automatizado, focada no mercado de metais preciosos,
                  especialmente o par XAUUSD.
                </p>
                <p>
                  Nossa equipe é composta por traders profissionais,
                  desenvolvedores e analistas quantitativos com mais de 10 anos
                  de experiência combinada nos mercados financeiros.
                </p>
                <p>
                  Desenvolvemos algoritmos proprietários que analisam milhares
                  de dados em tempo real para identificar as melhores
                  oportunidades de trading. Nosso robô foi testado
                  extensivamente em diferentes condições de mercado.
                </p>
              </div>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-3xl p-12 text-center'>
              <BarChart3 className='w-16 h-16 text-white mx-auto mb-6' />
              <h3 className='text-2xl font-light mb-4'>
                Transformamos dados em lucros
              </h3>
              <p className='text-gray-400 text-sm'>
                Acreditamos que a tecnologia pode democratizar o acesso a
                estratégias de investimento sofisticadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id='hire'
        className='py-32 px-6 bg-gradient-to-b from-zinc-900 to-black'
      >
        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='mb-6'>
                <span className='text-xs uppercase tracking-wider text-gray-400 font-medium'>
                  Comece Agora
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-light mb-8 leading-tight'>
                Pronto para começar?
              </h2>
              <p className='text-lg text-gray-400 mb-10 leading-relaxed'>
                Entre para o nosso grupo exclusivo no WhatsApp e receba
                orientações personalizadas sobre como adquirir e configurar seu
                robô XAUUSD.
              </p>
              <a
                href='https://wa.me/seu_numero_aqui'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all duration-200'
              >
                Entrar no Grupo WhatsApp
              </a>
            </div>

            <div className='relative'>
              <div className='aspect-video rounded-2xl overflow-hidden border border-white/10'>
                <video
                  className='w-full h-full object-cover bg-zinc-900'
                  controls
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23000000' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23FFFFFF' font-size='32' font-family='system-ui, sans-serif' dy='.3em'%3ERobô XAUUSD em Ação%3C/text%3E%3C/svg%3E"
                >
                  <source src='seu_video_aqui.mp4' type='video/mp4' />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
