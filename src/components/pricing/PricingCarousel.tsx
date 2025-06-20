import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ModulePricingDataMap } from './PricingData';
import PricingTierCard from './PricingTierCard';

interface PricingCarouselProps {
  modulePricing: ModulePricingDataMap;
  selectedModule: string;
  onSelectModule: (moduleKey: string) => void;
}

const PricingCarousel: React.FC<PricingCarouselProps> = ({
  modulePricing,
  selectedModule,
  onSelectModule
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {Object.entries(modulePricing).map(([moduleKey, moduleData]) => (
            <CarouselItem key={moduleKey} className={moduleKey !== selectedModule ? 'hidden' : ''}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {moduleData.tiers.map((tier, index) => (
                  <PricingTierCard 
                    key={tier.name} 
                    tier={tier} 
                    isPopular={index === 1}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="glass-strong border-white/20" 
          onClick={(e) => {
            e.preventDefault();
            const moduleKeys = Object.keys(modulePricing);
            const currentIndex = moduleKeys.indexOf(selectedModule);
            const prevIndex = (currentIndex - 1 + moduleKeys.length) % moduleKeys.length;
            onSelectModule(moduleKeys[prevIndex]);
          }}
        />
        <CarouselNext 
          className="glass-strong border-white/20" 
          onClick={(e) => {
            e.preventDefault();
            const moduleKeys = Object.keys(modulePricing);
            const currentIndex = moduleKeys.indexOf(selectedModule);
            const nextIndex = (currentIndex + 1) % moduleKeys.length;
            onSelectModule(moduleKeys[nextIndex]);
          }}
        />
      </Carousel>
    </div>
  );
};

export default PricingCarousel;
