import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ─────────────────────────────────────────────────────────────────────
interface GlossEntry { title: string; term: string; preview: string; body: string; example: string; }
interface Article { tag: string; title: string; description: string; readTime: string; }
type TabId = 'glossary' | 'articles' | 'macro';

// ── Glossary data ─────────────────────────────────────────────────────────────
const GLOSSARY: Record<string, GlossEntry> = {
  sharpe: {
    title: 'Índice de Sharpe', term: 'SHARPE RATIO',
    preview: 'Mede quanto de retorno você recebe por cada unidade de risco assumida. Quanto maior, melhor.',
    body: '<p>O Índice de Sharpe responde a uma pergunta simples: <strong>vale o risco que você está correndo?</strong></p><p>Imagine dois sistemas. Ambos entregam 50% no ano. Mas um oscila violentamente — com meses de +20% e meses de -15%. O outro sobe de forma constante. O Sharpe mede essa diferença: divide o retorno pelo risco assumido.</p><p>Referências do mercado profissional: abaixo de 1,0 é fraco; acima de 2,0 é bom; acima de 3,0 é excelente. Os melhores fundos quantitativos operam entre 2 e 5.</p>',
    example: 'O Rage entregou Índice de Sharpe de 59,46 em 2025 — resultado explicado pela altíssima taxa de acerto combinada ao drawdown controlado abaixo de 3%.',
  },
  pf: {
    title: 'Profit Factor', term: 'PROFIT FACTOR · FATOR DE LUCRO',
    preview: 'A relação entre o total de lucros e o total de perdas. Acima de 1,0 o sistema ganha mais do que perde.',
    body: '<p>O Profit Factor responde: <strong>quanto de lucro o sistema gera para cada real que perde?</strong></p><p>Se gerou $10.000 em ganhos e perdeu $4.000, seu Profit Factor é 2,5. Para cada $1 perdido, $2,50 foram ganhos.</p><p>Referências: 1,0 empata; abaixo de 1,0 perde dinheiro. Gestoras profissionais miram acima de 1,5.</p>',
    example: 'O Rage teve Profit Factor de 2,72 em 2025 — 81% acima do benchmark mínimo de gestoras profissionais.',
  },
  rf: {
    title: 'Fator de Recuperação', term: 'RECOVERY FACTOR',
    preview: 'Quanto o sistema gerou de lucro em relação ao maior prejuízo temporário que sofreu.',
    body: '<p>O Fator de Recuperação mede a <strong>resiliência real de um sistema</strong>: quanto ele gera de lucro em relação ao maior solavanco que sofreu.</p><p>Se teve drawdown máximo de $1.000 e lucrou $5.500 no final, seu Recovery Factor é 5,5. Acima de 3 é considerado sólido por análise quantitativa.</p>',
    example: 'O Rage teve Recovery Factor de 5,56 em 2025 — para cada $1,00 de drawdown histórico, $5,56 de lucro foram gerados.',
  },
  dd: {
    title: 'Drawdown', term: 'DRAWDOWN · REBAIXAMENTO MÁXIMO',
    preview: 'A queda máxima que uma conta sofre antes de se recuperar. É a principal medida de risco real.',
    body: '<p>Drawdown é a queda máxima desde um pico até o ponto mais baixo antes de se recuperar. <strong>É a medida de risco mais honesta de qualquer sistema.</strong></p><p>Drawdown não é perda definitiva. Se sua conta vai de $10.000 para $9.500 e depois sobe para $11.000, você teve drawdown de 5% — mas terminou no lucro.</p><p>Existem dois tipos: drawdown de saldo (operações fechadas) e de equity (inclui flutuação em aberto).</p>',
    example: 'Em 2025, o drawdown máximo de saldo do Rage foi 2,61% — equivalente a $261 numa conta de $10.000.',
  },
  payoff: {
    title: 'Payoff', term: 'PAYOFF RATIO',
    preview: 'A relação entre o ganho médio nas operações lucrativas e a perda média nas negativas.',
    body: '<p>O Payoff compara o <strong>ganho médio das operações lucrativas com a perda média das negativas</strong>.</p><p>Se ganha em média $50 nas positivas e perde $20 nas negativas, o Payoff é 2,5. O que importa é a combinação entre payoff e taxa de acerto.</p>',
    example: 'O Rage combina taxa de acerto de 99,80% com Payoff positivo — a quase ausência de perdas elimina a necessidade de compensar por ganho médio elevado.',
  },
  mfemae: {
    title: 'MFE & MAE', term: 'MAXIMUM FAVORABLE / ADVERSE EXCURSION',
    preview: 'O máximo que uma operação foi a seu favor (MFE) e o máximo que foi contra você (MAE) antes de fechar.',
    body: '<p>MFE é o <strong>máximo que uma operação foi a seu favor</strong> antes de fechar. MAE é o <strong>máximo que foi contra você</strong>.</p><p>Essas métricas otimizam alvos e stops. Se uma operação vai $200 a seu favor mas fecha com $50 de lucro, o alvo pode estar mal calibrado.</p>',
    example: 'A análise de MFE/MAE é parte da calibração do Rage para garantir que alvos e limites de risco estejam alinhados ao comportamento real do mercado de ouro.',
  },
  zscore: {
    title: 'Pontuação Z', term: 'Z-SCORE · ANÁLISE DE DEPENDÊNCIA',
    preview: 'Mede se as operações lucrativas e negativas aparecem de forma aleatória ou em sequências.',
    body: '<p>A Pontuação Z analisa se operações lucrativas e negativas aparecem em grupos — o que traders chamam de "rachas".</p><p>Z-Score positivo alto: vitórias tendem a vir após vitórias. Z-Score negativo: após uma vitória, tende a vir uma perda. Crucial para dimensionamento de posições.</p>',
    example: 'Para o Rage com 99,80% de acerto, o Z-Score confirma que as raras perdas são eventos isolados — sem padrão de clustering que indicasse risco sistêmico.',
  },
  ahprghpr: {
    title: 'AHPR & GHPR', term: 'AVERAGE / GEOMETRIC HOLDING PERIOD RETURN',
    preview: 'Duas formas de calcular o retorno médio por operação — uma otimista, outra conservadora e realista.',
    body: '<p><strong>AHPR</strong> soma todos os retornos e divide pela quantidade de operações. É otimista e pode superestimar a performance real.</p><p><strong>GHPR</strong> considera o efeito composto — perdas e ganhos se multiplicam, não somam. É mais conservador e realista para avaliar crescimento no longo prazo.</p><p>GHPR abaixo de 1,0 significa que o sistema destrói capital no longo prazo, mesmo que o AHPR pareça positivo.</p>',
    example: 'Um sistema com AHPR de +1% e GHPR de -0,5% está quebrando capital — situação que só aparece na métrica geométrica.',
  },
  tick: {
    title: 'O que é um Tick', term: 'TICK · MENOR VARIAÇÃO DE PREÇO',
    preview: 'A menor variação de preço possível num ativo. No ouro, equivale a $0,01 por onça.',
    body: '<p>Um tick é a <strong>menor variação de preço possível</strong> de um ativo. No ouro (XAU/USD), equivale a $0,01 por onça.</p><p>O preço não pode subir ou descer menos do que um centavo por onça. Na prática o ouro se move em vários ticks de uma vez, mas nunca em frações de tick.</p>',
    example: 'Quando o ouro sobe de $3.200,00 para $3.205,00, se moveu 500 ticks. O Rage busca movimentos de pelo menos 150 ticks de resultado líquido por operação.',
  },
  margin: {
    title: 'Nível de Margem', term: 'MARGIN LEVEL · NÍVEL DE MARGEM',
    preview: 'Indica a saúde da sua conta em operações alavancadas. Abaixo de 100% é zona de perigo.',
    body: '<p>Quando você opera com alavancagem, a corretora exige margem mínima. O Nível de Margem mede a relação entre capital disponível e capital comprometido nas operações abertas.</p><p><strong>Abaixo de 100% é zona de alerta.</strong> Abaixo de certos limites, a corretora pode fechar suas posições automaticamente — o temido "margin call".</p>',
    example: 'O gerenciamento do Rage é calibrado para manter o nível de margem em patamares seguros mesmo durante os momentos de maior volatilidade do ouro.',
  },
  lr: {
    title: 'Correlação e Erro Padrão LR', term: 'LINEAR REGRESSION · CORRELAÇÃO & ERRO PADRÃO',
    preview: 'Mede quão consistente é a curva de lucro — se ela sobe de forma previsível ou com muita irregularidade.',
    body: '<p>A Correlação LR mede <strong>quão consistentemente a curva de lucro cresce</strong>. Próximo de 1,0 = sobe em linha reta e previsível. Próximo de 0 = crescimento errático.</p><p>O Erro Padrão LR mede o desvio dos resultados reais dessa linha ideal. Quanto menor, mais previsível é o sistema.</p>',
    example: 'Uma curva de lucro com alta correlação LR e baixo erro padrão é o sinal mais forte de que um sistema é robusto — não apenas sortudo num período específico.',
  },
  selic: {
    title: 'Selic, CDI e CDO', term: 'TAXA SELIC · CDI · CDO',
    preview: 'As taxas de referência da economia brasileira e o que elas significam para quem investe em dólar ou em ouro.',
    body: '<p><strong>Selic</strong> é a taxa básica de juros do Brasil, definida pelo Banco Central a cada 45 dias.</p><p><strong>CDI</strong> é a taxa que os bancos cobram entre si para empréstimos de curtíssimo prazo — fica próxima da Selic e é o benchmark mais usado para renda fixa.</p><p><strong>CDO</strong> é completamente diferente — um produto financeiro estruturado americano que ficou famoso pela crise de 2008.</p>',
    example: 'Em 2025, a Selic estava em ~13,75% ao ano. O Rage entregou +97,8% no período — mais de 7× o rendimento da renda fixa brasileira, em dólar.',
  },
};

const TRADING_ARTICLES: Article[] = [
  { tag: 'Mercado de Ouro', title: 'Por que o ouro subiu 40% em 2025 e o que isso significa para 2026', description: 'Uma análise objetiva dos fatores macroeconômicos que impulsionaram o ouro ao longo de 2025 e as perspectivas para o próximo ciclo.', readTime: '8 min' },
  { tag: 'Trading Automatizado', title: 'Robôs de trading: o que diferencia um sistema sólido de uma fraude', description: 'Os sinais que um sistema legítimo sempre apresenta — e os red flags que aparecem antes de qualquer coisa quebrar.', readTime: '6 min' },
  { tag: 'Educação Financeira', title: 'Drawdown não é perda — e entender essa diferença muda tudo', description: 'A confusão mais comum entre investidores iniciantes, explicada de forma simples com exemplos reais do mercado de ouro.', readTime: '5 min' },
  { tag: 'Gestão de Capital', title: 'Capital mínimo para trading automatizado: o que ninguém te diz', description: 'Quanto você realmente precisa para começar, como calcular o risco adequado e por que $1.000 pode ser suficiente — ou não.', readTime: '7 min' },
  { tag: 'Análise', title: 'O que é o Índice de Sharpe e por que 59,46 é extraordinário', description: 'Uma explicação direta do indicador mais importante de performance ajustada ao risco — e como interpretar o número do Rage em contexto.', readTime: '5 min' },
  { tag: 'Economia', title: 'Selic, CDI e dólar: o que as taxas brasileiras têm a ver com investir em ouro', description: 'Para quem investe em reais mas quer exposição ao ouro — o impacto real do câmbio e das taxas de juros na sua rentabilidade.', readTime: '9 min' },
];

const MACRO_ARTICLES: Article[] = [
  { tag: 'Básico', title: 'O que é a taxa Selic e por que ela impacta os seus investimentos', description: 'A taxa básica de juros do Brasil explicada do zero — o que ela é, quem define, como muda e o que isso significa para o seu dinheiro.', readTime: '6 min' },
  { tag: 'Intermediário', title: 'CDI vs CDO: a diferença que a maioria dos investidores não conhece', description: 'Dois termos que parecem iguais mas têm funções completamente distintas no mercado financeiro.', readTime: '5 min' },
  { tag: 'Avançado', title: 'Inflação, juros e ouro: o triângulo que move os mercados globais', description: 'A relação histórica entre inflação, política monetária e o preço do ouro — e por que isso importa para quem usa o Rage.', readTime: '10 min' },
];

// ── Sub-components ────────────────────────────────────────────────────────────
const ArticleCard = memo(({ article }: { article: Article }) => (
  <div className='bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-white/20 hover:-translate-y-1 transition-all duration-300'>
    <span className='text-[0.62rem] uppercase tracking-widest text-[#c9a84c] bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] px-2.5 py-1 rounded-full inline-block mb-4'>
      {article.tag}
    </span>
    <h4 className='text-[0.97rem] font-medium text-white leading-snug mb-2'>{article.title}</h4>
    <p className='text-[0.82rem] text-gray-400 leading-relaxed'>{article.description}</p>
    <p className='text-[0.72rem] text-gray-600 mt-4'>Em breve · {article.readTime} de leitura</p>
  </div>
));

// ── Main ──────────────────────────────────────────────────────────────────────
function AcademySection() {
  const [activeTab, setActiveTab] = useState<TabId>('glossary');
  const [activeGloss, setActiveGloss] = useState<string | null>(null);

  const TABS: { id: TabId; label: string }[] = [
    { id: 'glossary', label: 'Glossário' },
    { id: 'articles', label: 'Artigos' },
    { id: 'macro',    label: 'Macroeconomia' },
  ];

  const entry = activeGloss ? GLOSSARY[activeGloss] : null;

  return (
    <div>
      {/* intro */}
      <div className='grid md:grid-cols-2 gap-12 md:gap-20 mb-16'>
        <div>
          <h2 className='text-4xl md:text-5xl font-light leading-tight'>
            O mercado financeiro não foi feito para ser complicado.
          </h2>
        </div>
        <div className='space-y-4 text-gray-400 leading-relaxed'>
          <p>Os termos técnicos existem — em grande parte — para criar a ilusão de que investir bem é coisa de especialista. Não é.</p>
          <p>A Rage Academy foi criada para desmistificar o mercado financeiro. Vídeos, artigos e guias em linguagem simples — sobre indicadores, terminologia, economia e tudo que você precisa entender para tomar decisões melhores.</p>
          <p className='text-[0.85rem] text-gray-500'>Conteúdo em desenvolvimento. Primeiros módulos disponíveis no lançamento.</p>
        </div>
      </div>

      {/* video placeholder */}
      <div className='rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center relative cursor-pointer hover:border-white/20 transition-all duration-300 mb-14'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]' />
        <div className='w-16 h-16 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-2xl relative z-10 hover:bg-white/[0.14] hover:scale-105 transition-all duration-200'>▶</div>
        <span className='absolute bottom-5 left-5 text-[0.72rem] uppercase tracking-widest text-gray-400 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm'>
          Em breve · Introdução ao Mercado de Ouro
        </span>
      </div>

      {/* tabs */}
      <div className='flex flex-wrap gap-2 mb-8'>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[0.78rem] font-medium px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-[#c9a84c] bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.3)]'
                : 'text-gray-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>
        {activeTab === 'glossary' && (
          <motion.div key='g' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Object.entries(GLOSSARY).map(([key, g]) => (
              <div key={key} onClick={() => setActiveGloss(key)} className='bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-[rgba(201,168,76,0.25)] hover:bg-white/[0.08] transition-all duration-300'>
                <p className='text-[0.75rem] font-semibold uppercase tracking-widest text-[#c9a84c] mb-2'>{g.title}</p>
                <p className='text-[0.82rem] text-gray-400 leading-snug'>{g.preview}</p>
              </div>
            ))}
          </motion.div>
        )}
        {activeTab === 'articles' && (
          <motion.div key='a' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {TRADING_ARTICLES.map((a, i) => <ArticleCard key={i} article={a} />)}
          </motion.div>
        )}
        {activeTab === 'macro' && (
          <motion.div key='m' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {MACRO_ARTICLES.map((a, i) => <ArticleCard key={i} article={a} />)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glossary modal */}
      <AnimatePresence>
        {entry && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4' onClick={e => { if (e.target === e.currentTarget) setActiveGloss(null); }}>
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.22 }} className='bg-[#111] border border-white/10 rounded-3xl p-7 max-w-lg w-full max-h-[85vh] overflow-y-auto'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-light text-white leading-snug pr-4'>{entry.title}</h3>
                <button onClick={() => setActiveGloss(null)} className='text-gray-500 hover:text-white transition-colors text-lg leading-none cursor-pointer mt-0.5 shrink-0'>✕</button>
              </div>
              <p className='text-[0.65rem] uppercase tracking-widest text-[#c9a84c] mb-4'>{entry.term}</p>
              <div className='text-[0.93rem] text-gray-300 leading-relaxed [&_p]:mb-3 [&_strong]:text-white' dangerouslySetInnerHTML={{ __html: entry.body }} />
              <div className='mt-5 p-4 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.15)] rounded-2xl'>
                <p className='text-[0.65rem] uppercase tracking-widest text-[#c9a84c] mb-2'>No contexto do Rage</p>
                <p className='text-[0.88rem] text-gray-400 leading-relaxed'>{entry.example}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(AcademySection);
