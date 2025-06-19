
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ModulePricing from '@/components/sections/ModulePricing';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Choose Your Perfect Plan
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Flexible pricing for businesses of all sizes. Start with our modules and scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Module Pricing */}
        <ModulePricing />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
