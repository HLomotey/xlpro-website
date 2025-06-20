
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import ModulePricing from '@/components/sections/ModulePricing';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ModulePricing />
      <Footer />
    </div>
  );
};

export default Index;
