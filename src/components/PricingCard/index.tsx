import { memo, useMemo } from 'react';
import { Check } from 'lucide-react';
import type { PricingCardProps } from '@/@types';

function PricingCard(props: PricingCardProps) {
  const {
    plan,
    description,
    price,
    features,
    brand,
    isHighlight = false,
    isRequestQuote = false,
  } = props;

  const highlightedPrimaryText = isHighlight ? 'text-black' : 'text-white';
  const highlightedSecondaryText = isHighlight
    ? 'text-gray-600'
    : 'text-gray-400';

  const renderFeatures = useMemo(
    () =>
      features.map((feature, index) => (
        <li key={index} className='flex items-start gap-3'>
          <Check
            className={`size-5 flex-shrink-0 mt-0.5 ${highlightedPrimaryText}`}
          />
          <span
            className={`text-sm leading-relaxed ${
              isHighlight ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            {feature}
          </span>
        </li>
      )),
    [features, isHighlight, highlightedPrimaryText]
  );

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 hover:scale-105 ${
        isHighlight
          ? 'bg-white text-black border-2 border-white'
          : 'bg-white/5 border border-white/10 hover:border-white/20'
      }`}
    >
      <img
        alt={plan}
        src={brand}
        className='absolute hidden sm:block -top-4 right-5 size-24'
      />

      <div className='flex flex-col'>
        <div className='mb-8'>
          <h3 className={`text-2xl font-light mb-2 ${highlightedPrimaryText}`}>
            {plan}
          </h3>

          <p className={`text-sm ${highlightedSecondaryText} mb-6`}>
            {description}
          </p>

          {price ? (
            <div className='flex items-baseline gap-2'>
              <span
                className={`text-3xl sm:text-4xl font-light ${highlightedPrimaryText}`}
              >
                {price}
              </span>

              {!isRequestQuote && (
                <span className={`text-base ${highlightedSecondaryText}`}>
                  /ano
                </span>
              )}
            </div>
          ) : (
            <div
              className={`inline-block px-4 py-2 rounded-full text-2xl font-bold ${
                isHighlight
                  ? 'bg-black/10 text-black'
                  : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              Solicitar Orçamento
            </div>
          )}
        </div>

        {/* Add mb-8 when button is visible in the future */}
        <ul className='space-y-4'>{renderFeatures}</ul>
      </div>

      {/* In the future this button must be uncommented */}
      {/*
        <button
          className={`w-full py-4 rounded-full text-base font-medium transition-all duration-200 cursor-pointer ${
            isHighlight
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          }`}
        >
          Contratar
        </button>
      */}
    </div>
  );
}

export default memo(PricingCard);
