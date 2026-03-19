import { ShieldCheck } from 'lucide-react';
import { Footer, Header, Topic, AnimatedSection } from '@/components';
import packageJson from '../../../package.json';
import {
  CLIENT_PROVIDED,
  DEFINITIONS_PRIVACY_POLICY,
  AUTOMATICALLY_COLLECTED_DATA,
  TREATMENT_PURPOSES,
  LEGAL_BASES,
  DATA_SHARING,
  DATA_SECURITY_MEASURES,
  DATA_SUBJECT_RIGHTS,
  CONTACTS_PRIVACY_POLICY,
} from '@/constants';

export function PrivacyPolicies() {
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
                <ShieldCheck className='w-10 h-10 text-white' />
              </div>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight'>
              Política de Privacidade
            </h1>

            <p className='text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed'>
              Tratamento e Proteção de Dados Pessoais
            </p>

            <div className='flex justify-center gap-6 mt-8 text-xs text-gray-500'>
              <span>Versão {packageJson.version}</span>
              <span>·</span>
              <span>15 de março de 2026</span>
            </div>
          </div>

          <div className='bg-white/3 border border-white/20 rounded-3xl p-8 mb-4'>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium mb-3'>
              Sobre este documento
            </p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              A projeKt Rage é uma prestadora de serviços de tecnologia voltada
              à configuração, hospedagem e manutenção de ferramentas de
              negociação algorítmica. Esta Política descreve como coletamos,
              utilizamos, armazenamos e protegemos os dados pessoais de nossos
              clientes e usuários do site{' '}
              <span className='text-white font-medium'>projektrage.com.br</span>
              , em conformidade com a{' '}
              <span className='text-white font-medium'>
                Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 –
                LGPD)
              </span>
              . Ao contratar nossos serviços ou acessar nosso site, o usuário
              declara ter lido e concordado com esta Política.
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
              <h2 className='text-xl font-light text-white'>Definições</h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {DEFINITIONS_PRIVACY_POLICY.map(([term, def]) => (
                  <li key={term} className='flex gap-2 flex-col'>
                    <span className='text-white font-medium min-w-fit'>
                      {term}:
                    </span>
                    <span>{def}</span>
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
                02
              </span>
              <h2 className='text-xl font-light text-white'>
                Quais Dados Coletamos
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p className='text-white/60 text-xs uppercase tracking-widest font-medium mb-1'>
                2.1 — Dados fornecidos pelo cliente
              </p>
              <ul className='space-y-2 mb-5'>
                {CLIENT_PROVIDED.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>

              <p className='text-white/60 text-xs uppercase tracking-widest font-medium mb-1'>
                2.2 — Dados coletados automaticamente
              </p>
              <ul className='space-y-2 mb-5'>
                {AUTOMATICALLY_COLLECTED_DATA.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>

              <div className='bg-white/5 border border-white/10 rounded-2xl p-4'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-medium mb-2'>
                  Importante
                </p>
                <p>
                  A projeKt Rage{' '}
                  <strong className='text-white font-medium'>
                    NÃO coleta, armazena nem tem acesso
                  </strong>{' '}
                  a senhas de operação ou de retirada das contas de corretora
                  dos clientes. Os recursos financeiros e a conta de corretora
                  pertencem exclusivamente ao cliente.
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
                03
              </span>
              <h2 className='text-xl font-light text-white'>
                Finalidades do Tratamento
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {TREATMENT_PURPOSES.map((item, index) => (
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
                Base Legal para o Tratamento
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-3'>
                {LEGAL_BASES.map(([base, desc]) => (
                  <li key={base} className='flex gap-2 flex-col'>
                    <span className='text-white font-medium min-w-fit'>
                      {base}:
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
                05
              </span>
              <h2 className='text-xl font-light text-white'>
                Compartilhamento de Dados
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A projeKt Rage não comercializa dados pessoais. O
                compartilhamento ocorre apenas nas seguintes hipóteses:
              </p>
              <ul className='space-y-2'>
                {DATA_SHARING.map((item, index) => (
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
                06
              </span>
              <h2 className='text-xl font-light text-white'>
                Retenção de Dados
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Os dados pessoais serão mantidos pelo período necessário para
                cumprir as finalidades descritas nesta Política ou pelo prazo
                exigido por lei. Após o encerramento do contrato de serviços, os
                dados poderão ser retidos por até{' '}
                <strong className='text-white font-medium'>
                  5 (cinco) anos
                </strong>{' '}
                para cumprimento de obrigações legais e resolução de eventuais
                disputas, após o que serão eliminados ou anonimizados.
              </p>
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
                Segurança dos Dados
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais, incluindo:
              </p>
              <ul className='space-y-2'>
                {DATA_SECURITY_MEASURES.map((item, index) => (
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
                Direitos dos Titulares
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Em conformidade com a LGPD (art. 18), o titular tem direito a:
              </p>
              <ul className='space-y-2'>
                {DATA_SUBJECT_RIGHTS.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
              <div className='mt-4 bg-white/5 border border-white/10 rounded-2xl p-4'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-medium mb-2'>
                  Como exercer seus direitos
                </p>
                <p>
                  Entre em contato pelo e-mail{' '}
                  <a
                    href='mailto:privacidade@projektrage.com'
                    className='text-white hover:underline transition-all'
                  >
                    privacidade@projektrage.com
                  </a>
                  . Responderemos em até{' '}
                  <strong className='text-white font-medium'>
                    15 (quinze) dias corridos
                  </strong>
                  .
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
              <h2 className='text-xl font-light text-white'>Cookies</h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                O site poderá utilizar cookies essenciais para autenticação e
                funcionamento, e cookies analíticos opcionais. O usuário pode
                gerenciar suas preferências nas configurações do navegador.
              </p>
              <p>
                A desativação de cookies essenciais pode comprometer o
                funcionamento do site.
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
                Alterações a Esta Política
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Esta Política poderá ser atualizada periodicamente. Alterações
                relevantes serão comunicadas por e-mail ou aviso no site com
                antecedência mínima de{' '}
                <strong className='text-white font-medium'>
                  15 (quinze) dias
                </strong>
                . O uso continuado dos serviços após a notificação implica
                aceitação das alterações.
              </p>
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
              <h2 className='text-xl font-light text-white'>Contato e DPO</h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {CONTACTS_PRIVACY_POLICY.map(([label, value]) => (
                  <li key={String(label)} className='flex gap-2'>
                    <span className='text-white font-medium min-w-fit'>
                      {label}:
                    </span>
                    <span>{value}</span>
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
                12
              </span>
              <h2 className='text-xl font-light text-white'>
                Lei Aplicável e Foro
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Esta Política é regida pela legislação brasileira. Eventuais
                controvérsias serão submetidas ao foro do domicílio do cliente,
                conforme art. 22 do Código de Defesa do Consumidor.
              </p>
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
