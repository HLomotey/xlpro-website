import React from 'react';
import { Button } from '@/components/ui/button';

const EnterpriseNotice: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <div className="glass-card p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">Need a Custom Solution?</h3>
        <p className="text-foreground/70 mb-4">
          Contact us for enterprise pricing and custom integrations tailored to your business needs.
        </p>
        <Button className="btn-primary">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default EnterpriseNotice;
