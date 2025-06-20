import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Globe, Users, BarChart, Settings } from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

interface FeaturesGridProps {
  className?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ className }) => {
  const features: FeatureItem[] = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance with industry standards.',
      benefits: ['256-bit SSL encryption', 'Multi-factor authentication', 'Role-based access control', 'Audit trails'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with cloud infrastructure that ensures your business operations never slow down.',
      benefits: ['Sub-second response times', '99.9% uptime guarantee', 'Auto-scaling infrastructure', 'Global CDN'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Access your business tools from anywhere in the world with full mobile and desktop compatibility.',
      benefits: ['Cross-platform compatibility', 'Mobile-first design', 'Offline capabilities', 'Multi-language support'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools that keep your team connected and productive regardless of location.',
      benefits: ['Real-time collaboration', 'Team workspaces', 'Communication tools', 'Permission management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to make data-driven decisions for your business.',
      benefits: ['Custom dashboards', 'Real-time insights', 'Export capabilities', 'Predictive analytics'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Settings,
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and workflows through our extensive API and integration library.',
      benefits: ['REST API access', '500+ integrations', 'Webhook support', 'Custom connectors'],
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl gradient-text">{feature.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
