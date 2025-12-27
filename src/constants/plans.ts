import type { PricingCardProps } from '@/@types';
import { DYNAMIC, ENTRY, PRO, UNLIMITED } from '@/config';

export const PLANS: PricingCardProps[] = [
  {
    plan: 'Rage ENTRY',
    price: '$ 499.90',
    description: 'Para quem está começando no trading automatizado',
    brand: ENTRY,
    features: [
      'Saldo máximo: $ 3,000.00',
      'Acesso ao algoritmo básico',
      'Monitoramento em tempo real',
      'Relatórios semanais',
      'Suporte por email',
      'Configuração assistida',
    ],
  },
  {
    plan: 'Rage PRO',
    price: '$ 2,499.90',
    description: 'Performance otimizada para traders experientes',
    brand: PRO,
    features: [
      'Saldo máximo: $ 15,000.00',
      'Algoritmo completo com todas as estratégias',
      'Análise avançada de mercado',
      'Relatórios diários detalhados',
      'Suporte prioritário 24/7',
      'Configuração personalizada',
      'Gestão de risco avançada',
      'Acesso antecipado a novas features',
    ],
    isHighlight: true,
  },
  {
    plan: 'Rage Dynamic',
    description: 'Máxima flexibilidade e controle',
    brand: DYNAMIC,
    features: [
      'Saldo máximo: $ 200,000.00',
      'Ajuste dinâmico de parâmetros',
      'Machine learning adaptativo',
      'Dashboard avançado com IA',
      'Backtesting ilimitado',
      'API para integração customizada',
      'Suporte técnico especializado',
      'Atualizações em tempo real',
    ],
    isRequestQuote: true,
  },
  {
    plan: 'Rage Unlimited',
    description: 'Solução enterprise para grandes investidores',
    brand: UNLIMITED,
    features: [
      'Saldo ilimitado',
      'Conta vitalícia',
      'Pagamento único',
      'Estratégias customizadas',
      'Gerente de conta dedicado',
      'Suporte VIP exclusivo',
      'Análise quantitativa personalizada',
      'Integração com sistemas proprietários',
      'Consultoria estratégica mensal',
    ],
    isRequestQuote: true,
  },
];
