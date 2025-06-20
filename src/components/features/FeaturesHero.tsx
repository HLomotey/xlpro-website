import React from 'react';

interface FeaturesHeroProps {
  className?: string;
}

const FeaturesHero: React.FC<FeaturesHeroProps> = ({ className }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Powerful Features for Modern Business
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover the comprehensive suite of features designed to streamline your operations, enhance productivity, and drive growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
