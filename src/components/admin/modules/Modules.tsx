import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const Modules = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-text">Module Management</h2>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Available Modules</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70">Manage your system modules here. Enable, disable, and configure module settings.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Modules;
