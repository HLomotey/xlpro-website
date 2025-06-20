import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ModuleBundleSelector from '@/components/pricing/ModuleBundleSelector';

const BundlePricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Build Your Custom Bundle
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Select the modules and tiers you need and save with our multi-module discount.
              </p>
            </div>
          </div>
        </section>

        {/* Module Bundle Selector */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <ModuleBundleSelector />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">How does the multi-module discount work?</h3>
                <p className="text-foreground/80">
                  When you select multiple modules, you automatically qualify for discounts: 10% off for 2-3 modules, 
                  15% off for 4-5 modules, and 20% off for 6 or more modules.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Can I change my plan later?</h3>
                <p className="text-foreground/80">
                  Yes, you can upgrade, downgrade, or add new modules at any time. Your billing will be adjusted accordingly.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Do you offer annual billing?</h3>
                <p className="text-foreground/80">
                  Yes, annual billing is available with an additional 10% discount on top of any multi-module discounts.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-foreground/80">
                  We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BundlePricing;
