import { FileText } from 'lucide-react';
import { Footer, Header, Topic, AnimatedSection } from '@/components';
import {
  ACCESS,
  DEFINITIONS_TERM,
  ENTITLEMENTS,
  GENERAL_PROVISIONS,
  LIMITATIONS_OF_LIABILITY,
  PLANS_AND_PAYMENTS,
  REQUIREMENTS,
  SERVICES,
} from '@/constants';
import packageJson from '../../../package.json';

export function TermsOfUse() {
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
                <FileText className='w-10 h-10 text-white' />
              </div>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight'>
              Termos de Uso
            </h1>

            <p className='text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed'>
              Condições Gerais de Contratação dos Serviços de Tecnologia
            </p>

            <div className='flex justify-center gap-6 mt-8 text-xs text-gray-500'>
              <span>Versão {packageJson.version}</span>
              <span>·</span>
              <span>15 de março de 2026</span>
            </div>
          </div>

          <div className='bg-white/3 border border-white/20 rounded-3xl p-8 mb-4'>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium mb-3'>
              Aviso Essencial
            </p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              A projeKt Rage é exclusivamente uma prestadora de serviços de
              tecnologia. Não somos corretora de valores, assessora de
              investimentos, gestora de carteiras nem consultora financeira. Não
              oferecemos indicações de investimento, sinais de compra ou venda,
              consultoria financeira ou gestão de capital de terceiros.{' '}
              <strong className='text-white font-medium'>
                O cliente é o único responsável pela sua conta de corretora,
                pelos recursos financeiros nela depositados e por todas as
                decisões relacionadas a suas operações.
              </strong>
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
                {DEFINITIONS_TERM.map(([term, definition]) => (
                  <li key={term} className='flex gap-2 flex-col'>
                    <span className='text-white font-medium min-w-fit'>
                      {term}:
                    </span>
                    <span>{definition}</span>
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
                Descrição dos Serviços
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A projeKt Rage presta os seguintes serviços de natureza
                estritamente tecnológica:
              </p>
              <ul className='space-y-2 list-none'>
                {SERVICES.map((item, index) => (
                  <li key={index} className='flex gap-3 items-start'>
                    <span className='text-white/30 mt-0.5'>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-4 bg-white/5 border border-white/10 rounded-2xl p-4'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-medium mb-2'>
                  O que não está incluído
                </p>
                <p>
                  Os Serviços NÃO incluem: (a) indicações de investimento ou
                  recomendações sobre quando comprar ou vender; (b) consultoria
                  financeira ou análise de mercado personalizada; (c) gestão
                  discricionária da conta ou dos recursos do Cliente; (d)
                  garantia de resultados financeiros positivos; (e) acesso,
                  movimentação ou custódia dos recursos financeiros do Cliente.
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
                Titularidade da Conta e dos Recursos
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A conta de corretora e todos os recursos financeiros nela
                depositados são de titularidade exclusiva do Cliente. A projeKt
                Rage atua como prestadora de serviços técnicos e, nessa
                qualidade:
              </p>
              <ul className='space-y-2'>
                {ENTITLEMENTS.map((item, index) => (
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
                Cadastro e Acesso
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Para contratar os serviços, o Cliente deve criar uma conta na
                Plataforma fornecendo informações verdadeiras, precisas e
                atualizadas. O Cliente é responsável pela confidencialidade de
                suas credenciais de acesso e por todas as atividades realizadas
                com elas. A Empresa poderá suspender ou encerrar contas em caso
                de violação destes Termos ou fornecimento de informações falsas.
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
                Obrigações do Cliente
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {ACCESS.map((item, index) => (
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
                Obrigações da Empresa
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {REQUIREMENTS.map((item, index) => (
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
                Propriedade Intelectual
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                O EA RAGE, seu código-fonte, algoritmos, parâmetros, lógica de
                operação e toda a documentação associada são propriedade
                exclusiva da projeKt Rage, protegidos pela Lei de Direitos
                Autorais (Lei nº 9.610/1998) e pela Lei de Propriedade
                Industrial (Lei nº 9.279/1996).
              </p>
              <p>
                O Cliente recebe uma licença de uso pessoal, intransferível e
                não exclusiva do EA RAGE, restrita à sua própria conta de
                corretora. É expressamente vedado ao Cliente copiar, distribuir,
                sublicenciar, realizar engenharia reversa, adaptar ou
                comercializar o EA RAGE ou qualquer de seus componentes.
              </p>
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
                Planos, Pagamentos e Cancelamento
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {PLANS_AND_PAYMENTS.map((item, index) => (
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
                09
              </span>
              <h2 className='text-xl font-light text-white'>
                Limitação de Responsabilidade
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A projeKt Rage é responsável pela qualidade técnica dos serviços
                prestados. A Empresa NÃO se responsabiliza por:
              </p>
              <ul className='space-y-2'>
                {LIMITATIONS_OF_LIABILITY.map((item, index) => (
                  <Topic key={index} text={item} />
                ))}
              </ul>
              <p className='mt-3'>
                A responsabilidade total da Empresa por danos diretos, em
                qualquer hipótese, fica limitada ao valor das mensalidades pagas
                pelo Cliente nos últimos 3 (três) meses.
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
                Disponibilidade do Serviço
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A Empresa emprega esforços razoáveis para manter o ambiente VPS
                disponível de forma contínua, mas não garante disponibilidade
                ininterrupta. Poderão ocorrer interrupções programadas para
                manutenção, com aviso prévio, ou não programadas em situações de
                emergência técnica. A Empresa não será responsável por danos
                causados por indisponibilidade do serviço fora de seu controle.
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
              <h2 className='text-xl font-light text-white'>Rescisão</h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                A Empresa poderá rescindir ou suspender os serviços, com aviso
                prévio de 15 (quinze) dias, salvo em casos de violação grave
                destes Termos, situação em que a suspensão poderá ser imediata.
                O Cliente poderá cancelar os serviços a qualquer momento pelo
                painel da Plataforma.
              </p>
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
                Modificações dos Termos
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Estes Termos poderão ser alterados a qualquer tempo. O Cliente
                será notificado com antecedência mínima de 15 (quinze) dias. O
                uso continuado dos serviços após a vigência das alterações
                implica concordância com os novos Termos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300'
            delay={0.3}
          >
            <div className='flex items-start gap-4 mb-4'>
              <span className='text-xs font-medium text-gray-500 uppercase tracking-widest mt-1 min-w-8'>
                13
              </span>
              <h2 className='text-xl font-light text-white'>
                Disposições Gerais
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <ul className='space-y-2'>
                {GENERAL_PROVISIONS.map((item, index) => (
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
                14
              </span>
              <h2 className='text-xl font-light text-white'>
                Lei Aplicável e Foro
              </h2>
            </div>
            <div className='pl-12 text-gray-400 text-sm leading-relaxed space-y-3'>
              <p>
                Estes Termos são regidos pela legislação brasileira. As partes
                elegem o foro do domicílio do Cliente para dirimir eventuais
                controvérsias, sem prejuízo do acesso aos Juizados Especiais
                Cíveis competentes.
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
