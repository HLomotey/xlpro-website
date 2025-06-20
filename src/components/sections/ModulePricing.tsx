
import React, { useState } from 'react';

// Import modular components
import { modulePricingData } from '@/components/pricing/PricingData';
import ModuleSelector from '@/components/pricing/ModuleSelector';
import PricingCarousel from '@/components/pricing/PricingCarousel';
import EnterpriseNotice from '@/components/pricing/EnterpriseNotice';

const ModulePricing = () => {
  const [selectedModule, setSelectedModule] = useState<string>('accounting');

  const handleModuleChange = (moduleKey: string) => {
    setSelectedModule(moduleKey);
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Module Pricing</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose the perfect plan for each module based on your business needs
          </p>
        </div>

        {/* Module Selector */}
        <ModuleSelector 
          modulePricing={modulePricingData} 
          selectedModule={selectedModule} 
          onSelectModule={handleModuleChange} 
        />

        {/* Pricing Cards Carousel */}
        <PricingCarousel 
          modulePricing={modulePricingData} 
          selectedModule={selectedModule} 
          onSelectModule={handleModuleChange} 
        />

        {/* Enterprise Notice */}
        <EnterpriseNotice />
      </div>
    </section>
  );
};

export default ModulePricing;
