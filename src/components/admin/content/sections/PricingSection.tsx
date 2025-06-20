import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Pricing Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">Configure pricing tiers and module costs.</p>
      </CardContent>
    </Card>
  );
};

export default PricingSection;
