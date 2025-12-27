export interface PricingCardProps {
  plan: string;
  description: string;
  features: string[];
  brand: string;
  price?: string;
  isHighlight?: boolean;
  isRequestQuote?: boolean;
}
