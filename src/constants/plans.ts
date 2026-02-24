import type { PricingCardProps } from '@/@types';
import {
  BADGE_DYNAMIC,
  BADGE_ENTRY,
  BADGE_PRO,
  BADGE_UNLIMITED,
} from '@/config';
import { formatCurrency } from '@/utils';

export const PLANS: PricingCardProps[] = [
  {
    plan: 'Rage ENTRY',
    price: formatCurrency(499.9),
    description: 'Para quem está começando no trading automatizado',
    brand: BADGE_ENTRY,
    features: [
      `Saldo máximo: ${formatCurrency(3000)}`,
      'Take Profit fixo',
      'Perfil conservador',
      'Operação 100% automática',
      'Crescimento gradual',
      'Ideal para contas pequenas',
      'Regras rígidas de proteção contra cenários extremos',
    ],
  },
  {
    plan: 'Rage PRO',
    price: formatCurrency(2499.9),
    description: 'Performance otimizada para traders experientes',
    brand: BADGE_PRO,
    features: [
      `Saldo máximo: ${formatCurrency(15000)}`,
      'Take Profit dinâmico',
      'Perfil dinâmico',
      'Operação 100% automática',
      'Estratégia avançada de leitura de mercado',
      'Gestão de risco adaptativa e avançada',
      'Maior aproveitamento dos ciclos do ouro',
      'Sistema mais responsivo às condições do mercado',
    ],
    isHighlight: true,
  },
  {
    plan: 'Rage Dynamic',
    description: 'Máxima flexibilidade e controle',
    brand: BADGE_DYNAMIC,
    features: [
      `Saldo máximo: ${formatCurrency(200000)}`,
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
    brand: BADGE_UNLIMITED,
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
