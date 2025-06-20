import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { Module, modules } from './ModulesData';

interface ModulesGridProps {
  className?: string;
  onSelectModule: (moduleId: string) => void;
}

const ModulesGrid: React.FC<ModulesGridProps> = ({ className, onSelectModule }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {module.popular && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                  <p className="text-sm text-foreground/70">{module.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">${module.price}</span>
                    <span className="text-sm text-foreground/60 ml-1">/month</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2 pt-4">
                    <Button 
                      className="w-full btn-primary group"
                      onClick={() => onSelectModule(module.id)}
                    >
                      Try Module
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="w-full glass-subtle">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
