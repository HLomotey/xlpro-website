
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import modular components
import FeaturesHero from '@/components/features/FeaturesHero';
import FeaturesGrid from '@/components/features/FeaturesGrid';
import FeaturesCTA from '@/components/features/FeaturesCTA';

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <FeaturesHero />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* CTA Section */}
        <FeaturesCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
