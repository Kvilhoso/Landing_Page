export const RISK_LOSS = [
  'Nunca deposite em sua conta de corretora valores que não possa se dar ao luxo de perder integralmente.',
  'O desempenho histórico do EA RAGE, apresentado em backtests ou resultados anteriores, não constitui garantia nem projeção de rentabilidade futura.',
  'Resultados passados não são indicativos de resultados futuros. Condições de mercado mudam e qualquer estratégia algorítmica está sujeita a períodos de perda.',
] as const;

export const RISK_ALGO = [
  'Nenhum algoritmo é capaz de prever com certeza os movimentos futuros do mercado.',
  'O desempenho pode deteriorar-se em condições de mercado adversas, regimes de alta volatilidade, eventos geopolíticos ou macroeconômicos imprevistos.',
  'Backtests e simulações são realizados com dados históricos e podem não refletir o desempenho em conta real, devido a diferenças de spread, liquidez, latência de execução e custos operacionais.',
  'Ajustes periódicos nos parâmetros do EA são necessários e podem alterar o perfil de risco e retorno da estratégia.',
  'Filtros de proteção de risco (ex.: controle de drawdown máximo diário) reduzem, mas não eliminam, a possibilidade de perdas significativas.',
] as const;

export const RISK_OPERATIONAL = [
  [
    'Interrupções do servidor VPS',
    'Manutenções programadas ou falhas técnicas podem ocasionar pausas na execução do EA.',
  ],
  [
    'Falhas de conectividade',
    'Problemas de internet ou de comunicação entre o VPS e a corretora podem causar atrasos ou falhas na execução de ordens.',
  ],
  [
    'Erros de software',
    'Comportamentos inesperados do EA podem, em casos excepcionais, resultar em ordens não intencionais.',
  ],
  [
    'Falhas da corretora',
    'Instabilidades na plataforma da corretora podem impedir a execução ou resultar em ordens executadas em condições desfavoráveis.',
  ],
] as const;

export const RISK_MARKET = [
  [
    'Eventos macroeconômicos',
    'Dados econômicos, decisões de bancos centrais, variações de taxas de juros e inflação.',
  ],
  [
    'Eventos geopolíticos',
    'Conflitos, instabilidade política, sanções econômicas e crises diplomáticas.',
  ],
  [
    'Variações cambiais',
    'O par XAUUSD é cotado em dólar americano; variações cambiais afetam o resultado em moeda local.',
  ],
  [
    'Baixa liquidez e gaps de mercado',
    'Em determinados horários ou após períodos fechados, os preços de execução podem divergir significativamente do esperado.',
  ],
] as const;

export const RISK_BROKER = [
  'O Cliente é responsável pela escolha de sua corretora e pela avaliação de sua solidez, regulamentação e condições operacionais.',
  'A projeKt Rage não se responsabiliza por atos, omissões, falhas técnicas ou insolvência de corretoras.',
  'Condições como spread, comissões, slippage e alavancagem oferecidas pela corretora impactam diretamente o resultado das operações.',
  'A disponibilidade do instrumento XAUUSD e os requisitos de margem podem variar entre corretoras e tipos de conta.',
] as const;

export const RISK_REGULATORY = [
  'Mudanças na legislação brasileira ou internacional podem impactar a legalidade ou as condições de utilização de ferramentas de negociação algorítmica.',
  'Os resultados das operações na conta do Cliente podem estar sujeitos a tributação. O Cliente é responsável pelo cumprimento de suas obrigações fiscais perante a Receita Federal e demais órgãos competentes.',
  'A projeKt Rage não presta orientação jurídica ou fiscal. Para questões de compliance e tributação, o Cliente deve consultar profissionais habilitados.',
] as const;

export const RISK_PROFILE = [
  'Possuem conhecimento básico sobre o funcionamento de mercados financeiros e negociação automatizada.',
  'Compreendem que resultados passados não garantem resultados futuros.',
  'Têm capacidade financeira para suportar perdas potenciais, inclusive a perda total do capital alocado, sem comprometer seu patrimônio ou condições de vida.',
  'Estão cientes de que o serviço contratado é de natureza tecnológica, não de gestão de investimentos.',
  'Aceitam manter a responsabilidade integral pelas decisões relacionadas à sua conta de corretora.',
] as const;

export const RISK_DECLARATION = [
  'Leu, compreendeu e aceita integralmente os riscos descritos neste Aviso.',
  'Está ciente de que pode perder parte ou a totalidade do capital alocado em sua conta de corretora.',
  'Compreende que está contratando um serviço de tecnologia, não de gestão de investimentos ou assessoria financeira.',
  'Não foi induzido por promessas de rentabilidade garantida, retornos mínimos assegurados ou desempenho futuro certo.',
  'Reconhece que a projeKt Rage não pode ser responsabilizada por resultados financeiros decorrentes das operações executadas pelo EA RAGE em sua conta.',
  'Assume integralmente a responsabilidade pelas decisões de contratação, manutenção e encerramento dos serviços, bem como por todas as consequências financeiras delas decorrentes.',
] as const;

export const RISK_RECOMMENDATIONS = [
  'Iniciar com capital reduzido para avaliar o funcionamento do serviço no seu ambiente específico.',
  'Nunca alocar todo o patrimônio disponível em uma única estratégia ou ferramenta.',
  'Definir previamente o limite de perda máxima aceitável e encerrar os serviços caso esse limite seja atingido.',
  'Monitorar regularmente sua conta de corretora.',
  'Buscar orientação de consultor financeiro habilitado antes de tomar decisões significativas de alocação de capital.',
] as const;
export const CONTACTS_PRIVACY_POLICY = [
  [
    'E-mail',
    <a
      key='email'
      href='mailto:privacidade@projektrage.com'
      className='text-white hover:underline transition-all'
    >
      privacidade@projektrage.com
    </a>,
  ],
  [
    'Site',
    <a
      key='site'
      href='https://projektrage.com.br'
      target='_blank'
      className='text-white hover:underline transition-all'
    >
      projektrage.com.br
    </a>,
  ],
] as const;

export const AUTOMATICALLY_COLLECTED_DATA = [
  'Endereço IP, tipo de navegador e sistema operacional ao acessar o site.',
  'Logs de acesso, data e hora das interações com a Plataforma.',
  'Dados operacionais do ambiente VPS gerenciado (disponibilidade, uso de recursos, status do Expert Advisor).',
] as const;

export const TREATMENT_PURPOSES = [
  'Prestação dos serviços contratados: configuração, hospedagem e manutenção do Expert Advisor RAGE no ambiente VPS do cliente.',
  'Suporte técnico e comunicação sobre o status dos serviços.',
  'Monitoramento da disponibilidade e desempenho do ambiente tecnológico gerenciado.',
  'Faturamento e gestão do relacionamento com o cliente.',
  'Cumprimento de obrigações legais e regulatórias.',
  'Melhoria contínua dos serviços e prevenção de fraudes e acessos não autorizados.',
] as const;

export const LEGAL_BASES = [
  [
    'Execução de contrato (art. 7º, V da LGPD)',
    'Para todas as operações necessárias à prestação dos serviços contratados.',
  ],
  [
    'Cumprimento de obrigação legal (art. 7º, II)',
    'Para atendimento de exigências regulatórias e fiscais.',
  ],
  [
    'Consentimento do titular (art. 7º, I)',
    'Para comunicações de marketing e uso de cookies opcionais.',
  ],
  [
    'Legítimo interesse (art. 7º, IX)',
    'Para segurança da plataforma e melhoria dos serviços, respeitados os direitos do titular.',
  ],
] as const;

export const DATA_SHARING = [
  'Provedores de infraestrutura de hospedagem (VPS/cloud), atuando como operadores mediante contratos com cláusulas de proteção de dados.',
  'Ferramentas de autenticação (ex.: Google OAuth), sob seus respectivos termos de privacidade.',
  'Autoridades públicas e órgãos reguladores, quando exigido por lei, decisão judicial ou ordem administrativa.',
  'Terceiros, apenas mediante consentimento expresso e específico do titular.',
] as const;

export const DATA_SECURITY_MEASURES = [
  'Criptografia de senhas e tokens de autenticação.',
  'Autenticação segura via Google OAuth.',
  'Controle de acesso baseado em perfis e necessidade.',
  'Monitoramento contínuo de acessos e atividades suspeitas.',
  'Backups periódicos com procedimentos de recuperação.',
] as const;

export const DATA_SUBJECT_RIGHTS = [
  'Confirmação da existência de tratamento.',
  'Acesso aos dados.',
  'Correção de dados inexatos.',
  'Anonimização, bloqueio ou eliminação de dados desnecessários.',
  'Portabilidade dos dados.',
  'Eliminação de dados tratados com base no consentimento.',
  'Informação sobre compartilhamentos realizados.',
  'Revogação do consentimento.',
] as const;

export const DEFINITIONS_TERM = [
  ['Empresa', 'projeKt Rage, prestadora dos serviços descritos nestes Termos.'],
  ['Cliente', 'Pessoa física ou jurídica que contrata os serviços da Empresa.'],
  [
    'Serviços',
    'Conjunto de atividades técnicas prestadas pela Empresa, descritas na Cláusula 2.',
  ],
  [
    'EA RAGE',
    'Software de negociação algorítmica desenvolvido pela Empresa para a plataforma MetaTrader 5, operando exclusivamente no par XAUUSD.',
  ],
  [
    'VPS',
    'Servidor virtual privado contratado pela Empresa ou pelo Cliente, no qual o EA RAGE é instalado e mantido em operação contínua.',
  ],
  [
    'Conta de Corretora',
    'Conta de negociação de titularidade exclusiva do Cliente junto à corretora por ele escolhida (ex.: Exness), onde o EA executa as ordens.',
  ],
  [
    'Plataforma',
    'Painel de acesso disponível em projektrage.com.br, por meio do qual o Cliente acompanha o status dos serviços.',
  ],
] as const;

export const DEFINITIONS_PRIVACY_POLICY = [
  [
    'Dados Pessoais',
    'Qualquer informação relacionada a pessoa natural identificada ou identificável.',
  ],
  ['Titular', 'A pessoa natural a quem se referem os dados pessoais.'],
  [
    'Tratamento',
    'Toda operação realizada com dados pessoais (coleta, armazenamento, uso, compartilhamento, eliminação).',
  ],
  [
    'Controlador',
    'A projeKt Rage, responsável pelas decisões sobre o tratamento dos dados.',
  ],
  ['Operador', 'Entidade que realiza o tratamento em nome do Controlador.'],
  ['LGPD', 'Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).'],
] as const;

export const SERVICES = [
  'Licenciamento de uso do EA RAGE para a conta de corretora do Cliente.',
  'Configuração inicial do EA RAGE na conta do Cliente, incluindo parâmetros técnicos de operação.',
  'Hospedagem e gestão do ambiente VPS onde o EA RAGE opera em nome do Cliente.',
  'Monitoramento técnico da disponibilidade e funcionamento do ambiente VPS.',
  'Atualização e manutenção do EA RAGE, incluindo melhorias de algoritmo, correções de bugs e ajustes de parâmetros.',
  'Suporte técnico contínuo relacionado ao funcionamento da tecnologia contratada.',
] as const;

export const ENTITLEMENTS = [
  'Não tem poderes de saque, depósito ou transferência sobre a conta do Cliente.',
  'Não custodia nem administra recursos financeiros de terceiros.',
  'Não toma decisões de investimento em nome do Cliente.',
  'Acessa a conta do Cliente exclusivamente por meio de credenciais de somente leitura (login de investidor) ou da API do MetaTrader 5, estritamente para fins de configuração técnica e monitoramento.',
] as const;

export const ACCESS = [
  'Fornecer informações verdadeiras e mantê-las atualizadas.',
  'Manter recursos suficientes na conta de corretora para suportar as operações do EA e os requisitos de margem.',
  'Monitorar regularmente sua conta de corretora e os resultados das operações.',
  'Informar imediatamente a Empresa sobre qualquer alteração nas credenciais da conta de corretora que possa afetar o funcionamento do EA.',
  'Compreender e aceitar os riscos inerentes à negociação algorítmica em mercados financeiros.',
  'Não compartilhar suas credenciais de acesso à Plataforma com terceiros.',
  'Cumprir as regras e regulamentos da corretora e das autoridades reguladoras aplicáveis.',
] as const;

export const REQUIREMENTS = [
  'Prestar os serviços descritos na Cláusula 2 com diligência técnica razoável.',
  'Manter o ambiente VPS operacional e monitorado.',
  'Aplicar atualizações e melhorias no EA RAGE, comunicando alterações relevantes ao Cliente.',
  'Oferecer suporte técnico nos canais disponíveis na Plataforma.',
  'Proteger os dados do Cliente conforme a Política de Privacidade e a LGPD.',
] as const;

export const PLANS_AND_PAYMENTS = [
  'Os valores e condições dos planos são os descritos na página de planos da Plataforma vigente na data da contratação.',
  'O pagamento é condição para a manutenção ativa dos serviços.',
  'O cancelamento pode ser solicitado pelo Cliente a qualquer momento, com efeito ao término do período vigente já pago.',
  'Não há reembolso proporcional de períodos não utilizados, salvo disposição legal em contrário ou acordo expresso.',
  'A Empresa poderá reajustar preços com notificação prévia de 30 (trinta) dias.',
] as const;

export const LIMITATIONS_OF_LIABILITY = [
  'Resultados financeiros das operações executadas pelo EA RAGE na conta do Cliente, sejam lucros ou perdas.',
  'Decisões de manter, encerrar ou alterar as configurações dos serviços, que são prerrogativa exclusiva do Cliente.',
  'Perdas decorrentes de falhas, instabilidades ou restrições impostas pela corretora do Cliente.',
  'Condições adversas de mercado, eventos macroeconômicos ou volatilidade que afetem o desempenho do EA.',
  'Falhas de conectividade da internet do Cliente ou interrupções de infraestrutura fora do controle da Empresa.',
  'Danos indiretos, lucros cessantes ou perdas consequenciais de qualquer natureza.',
] as const;

export const GENERAL_PROVISIONS = [
  'Estes Termos constituem o acordo integral entre as partes em relação ao seu objeto.',
  'A tolerância quanto ao descumprimento de qualquer disposição não implicará renúncia ou novação.',
  'Se qualquer cláusula for declarada nula, as demais permanecerão em plena vigência.',
  'O Cliente não pode ceder seus direitos ou obrigações sem consentimento prévio e por escrito da Empresa.',
] as const;

export const CLIENT_PROVIDED = [
  'Nome completo e e-mail para criação de conta e comunicação.',
  'Credenciais de acesso à Plataforma (armazenadas com criptografia).',
  'Dados de identificação da conta MetaTrader 5 do cliente (número de conta, servidor da corretora e login de investidor somente leitura), fornecidos exclusivamente para fins de configuração técnica e monitoramento do ambiente VPS.',
  'Informações de faturamento necessárias para a prestação do serviço, quando aplicável.',
];
