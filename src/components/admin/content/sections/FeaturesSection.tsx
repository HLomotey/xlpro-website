import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Features Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">Manage feature descriptions and settings here.</p>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
