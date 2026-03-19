import { TriangleAlert } from 'lucide-react';
import { Footer, Header, AnimatedSection, Topic } from '@/components';
import {
  RISK_LOSS,
  RISK_ALGO,
  RISK_OPERATIONAL,
  RISK_MARKET,
  RISK_BROKER,
  RISK_REGULATORY,
  RISK_PROFILE,
  RISK_DECLARATION,
  RISK_RECOMMENDATIONS,
} from '@/constants';
import packageJson from '../../../package.json';

export function RiskWarning() {
  return (
    <main id='main' className='min-h-screen bg-black text-white'>
      <Header />

      <section className='pt-40 pb-16 px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-8'>
              <span className='text-xs uppercase tracking-wider text-gray-400 font-medium'>
                Documentação Legal
              </span>
            </div>

            <div className='flex justify-center mb-8'>
              <div className='bg-white/5 border border-white/10 rounded-2xl p-5'>
                <TriangleAlert className='w-10 h-10 text-white' />
              </div>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight'>
              Aviso de Risco
            </h1>

            <p className='text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed'>
              Declaração de Riscos em Negociação Algorítmica e Uso de Tecnologia
            </p>

            <div className='flex justify-center gap-6 mt-8 text-xs text-gray-500'>
              <span>Versão {packageJson.version}</span>
              <span>·</span>
              <span>15 de março de 2026</span>
            </div>
          </div>

          <div className='bg-white/3 border border-white/20 rounded-3xl p-8 mb-4'>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium mb-3'>
              Leia com atenção antes de contratar
            </p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              A negociação em mercados financeiros envolve risco real e
              significativo de perda de capital. A projeKt Rage oferece
              exclusivamente serviços de tecnologia e{' '}
              <strong className='text-white font-medium'>
                NÃO garante resultados financeiros de nenhuma natureza.
              </strong>{' '}
              A compreensão e aceitação dos riscos descritos neste documento são
              condições indispensáveis para a utilização dos serviços.
            </p>
          </div>
        </div>
      </section>

      <section className='pb-32 px-6'>
        <div className='max-w-5xl mx-auto space-y-4'>
          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                01
              </span>
              <h2 className='text-xl font-light text-white'>
                Natureza do Serviço Prestado
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <div className='bg-white/5 border border-white/10 rounded-2xl p-4 mb-3'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-medium mb-2'>
                  Esclarecimento fundamental
                </p>
                <p>
                  A projeKt Rage presta serviços de tecnologia — não de gestão
                  financeira. Isso significa que: (a) não gerenciamos seu
                  dinheiro; (b) não indicamos quando comprar ou vender; (c) não
                  somos responsáveis pelos resultados das operações; (d) não
                  temos acesso aos seus recursos financeiros.
                </p>
              </div>
              <p>
                Você contrata a manutenção de uma ferramenta tecnológica (o EA
                RAGE), que executará ordens automaticamente na sua conta de
                corretora, de acordo com sua programação.{' '}
                <strong className='text-white font-medium'>
                  O controle sobre a conta, sobre o capital e sobre a decisão de
                  manter o serviço ativo é sempre e exclusivamente seu.
                </strong>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                02
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco de Perda de Capital
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A negociação automatizada em mercados financeiros, incluindo o
                par XAUUSD (Ouro/Dólar), envolve risco substancial e você pode
                perder parte ou a totalidade do capital depositado em sua conta
                de corretora.
              </p>
              <ul className='space-y-2'>
                {RISK_LOSS.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                03
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco Inerente ao Algoritmo
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                O EA RAGE é um software de negociação algorítmica. O Cliente
                deve compreender os seguintes riscos específicos:
              </p>
              <ul className='space-y-2'>
                {RISK_ALGO.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                04
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco Operacional e Tecnológico
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A prestação dos serviços depende de infraestrutura tecnológica
                sujeita a falhas. Os riscos operacionais incluem:
              </p>
              <ul className='space-y-2 mb-3'>
                {RISK_OPERATIONAL.map(([label, desc]) => (
                  <li key={label} className='flex flex-col gap-2 items-start'>
                    <span className='text-white font-medium min-w-fit'>
                      {label}:
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Recomendamos que o Cliente monitore regularmente sua conta de
                corretora e configure alertas para ser notificado sobre
                atividades incomuns.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                05
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco de Mercado
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Os mercados financeiros são influenciados por fatores externos
                que nenhuma tecnologia pode controlar:
              </p>
              <ul className='space-y-2'>
                {RISK_MARKET.map(([label, desc]) => (
                  <li key={label} className='flex flex-col gap-2 items-start'>
                    <span className='text-white font-medium min-w-fit'>
                      {label}:
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                06
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco da Corretora
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {RISK_BROKER.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                07
              </span>
              <h2 className='text-xl font-light text-white'>
                Risco Regulatório e Fiscal
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {RISK_REGULATORY.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                08
              </span>
              <h2 className='text-xl font-light text-white'>
                Perfil Adequado para Contratação
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Os serviços da projeKt Rage são adequados apenas para clientes
                que:
              </p>
              <ul className='space-y-2 mb-4'>
                {RISK_PROFILE.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
              <div className='bg-white/5 border border-white/10 rounded-2xl p-4'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-medium mb-2'>
                  Atenção
                </p>
                <p>
                  Se você não possui experiência com mercados financeiros, ou se
                  os valores que pretende alocar são essenciais para sua
                  subsistência ou de sua família, recomendamos fortemente que
                  não contrate os serviços e que busque orientação de um
                  profissional de investimentos devidamente habilitado e
                  registrado na CVM.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                09
              </span>
              <h2 className='text-xl font-light text-white'>
                Ausência de Assessoria de Investimentos
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A projeKt Rage{' '}
                <strong className='text-white font-medium'>
                  NÃO é registrada
                </strong>{' '}
                na Comissão de Valores Mobiliários (CVM) como gestora de
                recursos, assessora de investimentos ou consultora financeira, e
                não exerce nenhuma dessas atividades.
              </p>
              <p>
                Nenhuma informação disponibilizada pela Empresa — seja no site,
                nos materiais de divulgação, no painel da Plataforma ou em
                comunicações com o suporte técnico — deve ser interpretada como
                recomendação de investimento, análise de mercado, sugestão de
                compra ou venda de ativos ou consultoria financeira de qualquer
                natureza.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                10
              </span>
              <h2 className='text-xl font-light text-white'>
                Declaração de Ciência e Aceite
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Ao contratar os serviços da projeKt Rage, o Cliente declara
                expressamente que:
              </p>
              <ul className='space-y-2'>
                {RISK_DECLARATION.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                11
              </span>
              <h2 className='text-xl font-light text-white'>
                Recomendações Finais
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>Recomendamos:</p>
              <ul className='space-y-2'>
                {RISK_RECOMMENDATIONS.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <div className='pt-4 text-center'>
            <p className='text-gray-600 text-xs'>
              Última atualização: 15 de março de 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
