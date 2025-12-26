export interface PricingCardProps {
  id: string;
  price: string;
  plan: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
  isRequestQuote?: boolean;
}
