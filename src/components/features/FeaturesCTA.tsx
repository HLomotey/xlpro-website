import React from 'react';

interface FeaturesCTAProps {
  className?: string;
}

const FeaturesCTA: React.FC<FeaturesCTAProps> = ({ className }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using xlPro to streamline their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              Start Free Trial
            </button>
            <button className="btn-glass px-8 py-3">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
