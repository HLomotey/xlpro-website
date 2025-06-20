
import React from 'react';
import { 
  Database, 
  BarChart3, 
  Users, 
  Truck, 
  Calculator, 
  UserCheck, 
  CreditCard, 
  Shield,
  Zap,
  Globe,
  Settings,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const modules = [
    {
      icon: Database,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with advanced stock management and business system integration.',
      color: 'text-blue-400'
    },
    {
      icon: Calculator,
      title: 'Accounting & Finance',
      description: 'Complete financial management with automated reporting and comprehensive tax management.',
      color: 'text-green-400'
    },
    {
      icon: Users,
      title: 'CRM System',
      description: 'Customer relationship management with lead tracking, conversion tools, and communication suite.',
      color: 'text-purple-400'
    },
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Vehicle fleet optimization with maintenance scheduling and operational efficiency tools.',
      color: 'text-orange-400'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Data-driven insights with business intelligence capabilities and customizable dashboards.',
      color: 'text-cyan-400'
    },
    {
      icon: TrendingUp,
      title: 'Asset Management',
      description: 'Investment platform with Fixed Income, Equity Trading, and Collective Investment Schemes.',
      color: 'text-indigo-400'
    },
    {
      icon: UserCheck,
      title: 'HR Management',
      description: 'Employee management system with HR operations streamlining and personnel record keeping.',
      color: 'text-pink-400'
    },
    {
      icon: CreditCard,
      title: 'Payroll Management',
      description: 'Automated payroll processing with integrated tax management and employee payment systems.',
      color: 'text-yellow-400'
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security protocols protect your sensitive business data.'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized for speed with cloud-native architecture ensuring rapid response times.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy worldwide with multi-region support and 99.9% uptime guarantee.'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with existing systems through comprehensive API ecosystem.'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Modules</span>
            <br />
            <span className="text-foreground">for Every Business Need</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose from our comprehensive suite of enterprise modules, each designed to streamline 
            specific aspects of your business operations.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {modules.map((module, index) => (
            <div 
              key={module.title}
              className="glass-card p-6 group hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition-transform ${module.color}`}>
                  <module.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{module.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{module.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Why Choose xlPro?</h3>
            <p className="text-lg text-foreground/70">
              Built with enterprise-grade standards and modern technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                  <highlight.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
