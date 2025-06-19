import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Hero Section Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Headline</label>
          <Input 
            className="glass-subtle"
            defaultValue="Enterprise Solutions Reimagined"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Subtitle</label>
          <textarea 
            className="w-full p-3 glass-subtle rounded-lg border border-white/10 h-24 resize-none"
            defaultValue="Streamline your business operations with xlPro's comprehensive suite of modular enterprise tools."
          />
        </div>
        <Button className="btn-primary">Update Hero Section</Button>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
