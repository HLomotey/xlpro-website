
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ModulePricing from '@/components/sections/ModulePricing';
import ModuleBundleSelector from '@/components/pricing/ModuleBundleSelector';
import { Button } from "@/components/ui/button";
import { Layers, Package } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'bundle'>('individual');

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
            
            {/* Pricing Tabs */}
            <div className="flex justify-center mb-12">
              <div className="glass-strong rounded-full p-1 flex">
                <Button
                  variant={activeTab === 'individual' ? 'default' : 'ghost'}
                  className={`rounded-full px-6 py-2 ${activeTab === 'individual' ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setActiveTab('individual')}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Individual Modules
                </Button>
                <Button
                  variant={activeTab === 'bundle' ? 'default' : 'ghost'}
                  className={`rounded-full px-6 py-2 ${activeTab === 'bundle' ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setActiveTab('bundle')}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Bundle & Save
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Content Based on Active Tab */}
        {activeTab === 'individual' ? (
          <ModulePricing />
        ) : (
          <section className="py-8 pb-20">
            <div className="container mx-auto px-6">
              <ModuleBundleSelector />
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
