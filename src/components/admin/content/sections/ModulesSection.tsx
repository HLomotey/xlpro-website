import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const ModulesSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Module Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">Enable/disable modules and configure their settings.</p>
      </CardContent>
    </Card>
  );
};

export default ModulesSection;
