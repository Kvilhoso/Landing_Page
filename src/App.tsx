import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, HandCoins, Shield, TrendingUp, Users } from 'lucide-react';
import {
  AcademySection,
  AnimatedSection,
  Benefit,
  Button,
  Chip,
  ContactForm,
  Feature,
  Footer,
  Header,
  PricingCard,
  StatCounter,
  StepWork,
} from './components';
import { scrollTo } from './utils';
import {
  HOW_TO_WORK,
  MONTHLY_RESULTS,
  PERFORMANCE,
  PLANS,
  PILLARS,
} from './constants';

function App() {
  const renderStepWorks = useMemo(
    () =>
      HOW_TO_WORK.map((work, index) => (
        <StepWork
          key={work.num}
          number={work.num}
          title={work.title}
          description={work.body}
          delay={index}
        />
      )),
    [],
  );

  return (
    <div id='main' className='min-h-screen bg-black text-white'>
      <Header />

      <AnimatedSection className='min-h-screen flex items-center pt-32 pb-20 px-6'>
        <div className='max-w-6xl mx-auto w-full'>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className='text-xs uppercase tracking-[0.2em] text-gray-500 mb-6'
          >
            Tecnologia de alta performance.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-6xl md:text-7xl font-light leading-[1.06] tracking-tight mb-6'
          >
            Desbrave novas fronteiras{' '}
            <span className='text-orange-300'>do mercado financeiro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className='text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10'
          >
            O Rage opera o mercado de ouro 24 horas por dia, 5 dias por semana,
            de forma completamente autônoma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-wrap gap-4 mb-20'
          >
            <Button onClick={() => scrollTo('hire')}>Adquirir Licença</Button>

            <Button variant='secondary' onClick={() => scrollTo('performance')}>
              Ver resultados →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-3xl overflow-hidden bg-white/5'
          >
            <StatCounter
              value={97.8}
              suffix='%'
              label='Retorno 2025'
              decimals={1}
            />

            <StatCounter
              value={99.8}
              suffix='%'
              label='Taxa de Acerto'
              decimals={1}
            />

            <StatCounter
              value={2.61}
              suffix='%'
              label='Drawdown Máximo'
              decimals={2}
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className='py-32 px-6 bg-linear-to-b from-black to-zinc-900'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <Chip label='O SISTEMA' />

            <h2 className='text-4xl md:text-5xl font-light mt-5 leading-tight'>
              Construído para durar,
              <br />
              não para impressionar
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 rounded-3xl overflow-hidden'>
            <Feature
              title='Alta Seletividade'
              description='O sistema só opera quando múltiplas condições convergem simultaneamente. Prefere não entrar a entrar no momento errado.'
              icon={<TrendingUp className='w-10 h-10 text-white mb-6' />}
            />

            <Feature
              title='Proteção de Capital'
              description='Seis camadas independentes de gerenciamento de risco ativas em tempo real. O drawdown máximo de saldo em 2025 foi de 2,61%. menor que a variação de um dia típico.'
              icon={<Shield className='w-10 h-10 text-white mb-6' />}
            />

            <Feature
              title='100% Autônomo'
              description='Nenhuma ação necessária da sua parte. O Rage analisa, decide, executa e encerra as operações. Você acompanha pelo dashboard e recebe o relatório mensal.'
              icon={<HandCoins className='w-10 h-10 text-white mb-6' />}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id='performance' className='py-32 px-6'>
        <div className='max-w-6xl mx-auto'>
          <Chip label='RESULTADOS 2025' />

          <div className='grid gap-6 mt-10 items-stretch'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col'
            >
              <h2 className='text-4xl md:text-5xl font-light leading-tight mb-6'>
                Doze meses.
                <br />
                Zero meses negativos.
              </h2>
              <p className='text-gray-400 leading-relaxed mb-8 text-[0.95rem]'>
                2025 foi o primeiro ano completo do Rage em operação com dados
                verificáveis, metodologia auditável e resultados documentados
                mês a mês. Nenhuma métrica foi escolhida para parecer melhor do
                que é.
              </p>

              <table className='w-full mb-8'>
                <tbody>
                  {PERFORMANCE.map(row => (
                    <tr
                      key={row.label}
                      className='border-b border-white/5 last:border-0'
                    >
                      <td className='py-3 text-[0.88rem] text-gray-400'>
                        {row.label}
                      </td>
                      <td
                        className={`py-3 text-[0.88rem] font-medium text-right ${row.highlighted ? 'text-orange-300' : 'text-white'}`}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className='text-[0.7rem] uppercase tracking-widest text-gray-500 mb-4'>
                Resultado por mês · 2025
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2'>
                {MONTHLY_RESULTS.map(m => (
                  <div
                    key={m.month}
                    className='bg-white/5 border border-white/8 rounded-xl p-2.5 text-center hover:border-orange-900 duration-300 transition-colors'
                  >
                    <div className='text-[0.65rem] uppercase tracking-widest text-gray-500 mb-1'>
                      {m.month}
                    </div>
                    <div className='text-[0.88rem] font-medium text-orange-300'>
                      {m.value}
                    </div>
                    <div className='text-[0.62rem] text-gray-600 mt-0.5'>
                      {m.wr}
                    </div>
                  </div>
                ))}
              </div>
              <p className='text-[0.72rem] text-gray-600 mt-4 leading-relaxed'>
                Backtest com dados reais de tick (qualidade 99,9%), capital
                inicial de $10.000, período Jan–Dez 2025.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id='how'
        className='py-32 px-6 bg-linear-to-b from-zinc-900 to-black'
      >
        <div className='max-w-6xl mx-auto'>
          <Chip label='COMO FUNCIONA' />

          <h2 className='text-4xl md:text-5xl font-light mt-5 mb-3 leading-tight'>
            Você aloca. Nós operamos.
          </h2>

          <p className='text-gray-400 max-w-lg leading-relaxed mb-12 text-[0.95rem]'>
            O processo de onboarding foi desenhado para ser simples. Em menos de
            48 horas, seu capital já está sendo operado pelo Rage.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {renderStepWorks}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className='py-32 px-6 bg-linear-to-b from-black to-zinc-900'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-light mb-4'>
              Foco em resultados
            </h2>

            <p className='text-xl text-gray-400 font-light max-w-2xl mx-auto'>
              Um sistema de trading pronto para escalar com você.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex flex-col justify-between space-y-6'
            >
              <Benefit
                title='Tecnologia Proprietária'
                description='Algoritmos desenvolvidos do zero, sem dependência de terceiros. Arquitetura otimizada para performance e consistência.'
              />

              <Benefit
                title='Solução Plug and Play'
                description='Configuração rápida e integração simples. Comece a operar com eficiência desde o primeiro dia — sem configuração técnica da sua parte.'
              />

              <Benefit
                title='Gestão de Risco Embutida'
                description='Gestão de posições integrada ao sistema desde o início. Seis camadas de proteção independentes ativas em tempo real.'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex flex-col justify-between space-y-6'
            >
              <Benefit
                title='Monitoramento em Tempo Real'
                description='Acompanhe suas operações e resultados em tempo real com interface intuitiva e relatórios detalhados diretamente do seu celular.'
              />

              <Benefit
                title='Análise Avançada'
                description='Sistema de análise técnica e fundamental para identificar as melhores oportunidades de entrada no mercado de ouro.'
              />

              <Benefit
                title='Suporte Especializado'
                description='Equipe técnica disponível para auxiliar na configuração e otimização do seu sistema, com onboarding assistido incluído.'
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id='who-are-we' className='py-32 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Users className='w-12 h-12 text-white mb-8' />

              <Chip label='QUEM SOMOS' />

              <h2 className='text-4xl md:text-5xl font-light mt-5 mb-8'>
                Engenharia financeira.
                <br />
                Obsessão com consistência.
              </h2>

              <div className='space-y-4 text-gray-400 leading-relaxed text-[0.95rem]'>
                <p>
                  A Impulse Labs é a empresa por trás do Rage — um time de
                  engenheiros e analistas quantitativos com foco exclusivo em
                  sistemas autônomos para o mercado de ouro.
                </p>

                <p>
                  Não somos uma gestora tradicional. Somos um laboratório de
                  tecnologia financeira que passou mais de dois anos
                  construindo, testando e refinando um único produto — até que
                  ele atingisse o padrão que consideramos aceitável para capital
                  de terceiros.
                </p>

                <p>
                  Esse padrão tem um nome: 99,80% de acerto. 2,61% de drawdown
                  máximo. 12 meses positivos consecutivos.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-3 mt-8'>
                {PILLARS.map(p => (
                  <div
                    key={p.label}
                    className='bg-white/5 border border-white/10 rounded-xl p-4'
                  >
                    <p className='text-[0.7rem] font-semibold uppercase tracking-widest text-orange-300 mb-1'>
                      {p.label}
                    </p>
                    <p className='text-[0.82rem] text-gray-400 leading-snug'>
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12'
            >
              <BarChart3 className='w-14 h-14 text-white mb-6' />

              <h3 className='text-2xl font-light text-white mb-4'>
                Transformamos dados em disciplina
              </h3>

              <p className='text-gray-400 text-[0.93rem] leading-relaxed'>
                O Rage não toma decisões com base em intuição. Analisa dezenas
                de condições simultâneas antes de cada entrada — e quando elas
                não convergem, ele simplesmente aguarda.
              </p>

              <p className='text-gray-500 text-[0.88rem] leading-relaxed mt-4'>
                Essa disciplina de máquina — impossível para um ser humano
                manter consistentemente — é o que explica os resultados de 2025.
              </p>

              <div className='mt-8 p-5 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.15)] rounded-2xl'>
                <p className='text-[0.7rem] uppercase tracking-widest text-orange-300 mb-2'>
                  Capital sob sua custódia
                </p>

                <p className='text-[0.88rem] text-gray-400 leading-relaxed'>
                  Seu dinheiro permanece na sua conta, na corretora regulada de
                  sua escolha. A Impulse Labs nunca tem acesso direto ao capital
                  — apenas ao sistema de trading.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id='pricing'
        className='py-32 px-6 bg-linear-to-b from-black to-zinc-900'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <Chip label='PLANOS E LICENÇAS' />

            <h2 className='text-4xl md:text-5xl font-light mt-5 mb-4 text-white'>
              Escolha o plano para o seu perfil
            </h2>
            <p className='text-xl text-gray-400 font-light max-w-2xl mx-auto'>
              Licença anual. Sem taxas sobre resultado. Seu capital, suas
              regras.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {PLANS.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-sm text-gray-500 text-center mt-10'
          >
            Todos os planos incluem 30 dias de garantia. Capital sob sua
            custódia em corretora regulada.{' '}
            <button
              className='text-white cursor-pointer hover:underline'
              onClick={() => scrollTo('hire')}
            >
              Dúvidas? Fale conosco.
            </button>
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection id='academy' className='py-32 px-6'>
        <div className='max-w-6xl mx-auto'>
          <Chip label='RAGE ACADEMY' />

          <div className='mt-6'>
            <AcademySection />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className='py-32 px-6 text-center'>
        <div className='max-w-3xl mx-auto'>
          <p className='text-[0.7rem] uppercase tracking-[0.2em] text-orange-300 mb-5'>
            Licenças disponíveis · Acesso imediato
          </p>

          <h2 className='text-5xl md:text-6xl font-light leading-[1.08] tracking-tight mb-5'>
            O ouro não espera.
            <br />
            <span className='text-orange-300'>Você também não deveria.</span>
          </h2>

          <p className='text-[1rem] text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed'>
            Vagas limitadas para o ciclo 2026. Capital mínimo de $1.000. Seu
            capital permanece sob sua custódia em corretora regulada.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <Button onClick={() => scrollTo('hire')}>
              Adquirir Licença Agora
            </Button>

            <Button variant='secondary' onClick={() => scrollTo('pricing')}>
              Ver planos
            </Button>
          </div>

          <p className='text-[0.75rem] text-gray-600 mt-5'>
            30 dias de garantia · Sem taxa sobre resultado · Sem mensalidade
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id='hire'
        className='py-32 px-6 bg-linear-to-b from-zinc-900 to-black'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className='text-xs uppercase tracking-[0.18em] text-orange-300 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] px-3 py-1.5 rounded-full'>
                Adquirir Licença
              </span>
              <h2 className='text-4xl md:text-5xl font-light mt-5 mb-4 leading-tight'>
                Pronto para começar?
              </h2>
              <p className='text-gray-400 leading-relaxed mb-8 text-[0.95rem]'>
                Entre em contato e nossa equipe vai orientar você sobre o plano
                ideal para o seu perfil e capital disponível.
              </p>
              <div className='space-y-4'>
                {[
                  ['✉', 'contato@projektrage.com.br'],
                  ['◎', 'Atendimento em até 24 horas'],
                  ['◈', 'Onboarding assistido incluído em todos os planos'],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className='flex items-center gap-3 text-[0.9rem] text-gray-400'
                  >
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default App;
