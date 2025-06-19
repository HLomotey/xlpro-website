import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PricingTier } from './PricingData';

interface PricingTierCardProps {
  tier: PricingTier;
  isPopular?: boolean;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({ tier, isPopular = false }) => {
  return (
    <div
      className={`glass-card p-8 rounded-2xl relative ${
        isPopular ? 'ring-2 ring-blue-500/50 scale-105' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <div className="text-4xl font-bold gradient-text mb-2">
          ${tier.price}
        </div>
        <p className="text-foreground/70">per month</p>
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          isPopular 
            ? 'btn-primary' 
            : 'btn-glass'
        }`}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingTierCard;
