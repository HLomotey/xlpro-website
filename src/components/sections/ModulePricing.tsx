
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const modulePricing = {
  accounting: {
    name: 'Accounting & Finance',
    icon: '📊',
    tiers: [
      {
        name: 'Basic',
        price: 49,
        features: ['Basic Bookkeeping', 'Invoice Generation', 'Expense Tracking', 'Basic Reports']
      },
      {
        name: 'Professional',
        price: 99,
        features: ['Advanced Reporting', 'Tax Management', 'Multi-currency', 'Bank Integration', 'API Access']
      },
      {
        name: 'Enterprise',
        price: 199,
        features: ['Custom Reports', 'Audit Trail', 'Multi-entity', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  inventory: {
    name: 'Inventory Management',
    icon: '📦',
    tiers: [
      {
        name: 'Basic',
        price: 39,
        features: ['Stock Tracking', 'Basic Alerts', 'Simple Reports', 'Up to 1000 items']
      },
      {
        name: 'Professional',
        price: 79,
        features: ['Advanced Analytics', 'Barcode Scanning', 'Supplier Management', 'Up to 10,000 items', 'API Access']
      },
      {
        name: 'Enterprise',
        price: 159,
        features: ['Unlimited Items', 'Multi-location', 'Advanced Forecasting', 'Custom Integrations', 'Priority Support']
      }
    ]
  },
  hospital: {
    name: 'Hospital Management',
    icon: '🏥',
    tiers: [
      {
        name: 'Basic',
        price: 89,
        features: ['Patient Records', 'Appointment Scheduling', 'Basic Billing', 'Up to 100 patients/month']
      },
      {
        name: 'Professional',
        price: 179,
        features: ['Advanced EMR', 'Insurance Integration', 'Lab Management', 'Up to 1000 patients/month', 'Mobile App']
      },
      {
        name: 'Enterprise',
        price: 349,
        features: ['Multi-facility', 'Advanced Analytics', 'HIPAA Compliance', 'Unlimited Patients', 'Custom Modules']
      }
    ]
  },
  fleet: {
    name: 'Fleet Management',
    icon: '🚚',
    tiers: [
      {
        name: 'Basic',
        price: 59,
        features: ['Vehicle Tracking', 'Basic Reports', 'Driver Management', 'Up to 10 vehicles']
      },
      {
        name: 'Professional',
        price: 119,
        features: ['Route Optimization', 'Fuel Management', 'Maintenance Alerts', 'Up to 50 vehicles', 'Mobile App']
      },
      {
        name: 'Enterprise',
        price: 239,
        features: ['Advanced Analytics', 'Custom Reports', 'API Integration', 'Unlimited Vehicles', 'Priority Support']
      }
    ]
  },
  crm: {
    name: 'CRM System',
    icon: '👥',
    tiers: [
      {
        name: 'Basic',
        price: 45,
        features: ['Contact Management', 'Basic Lead Tracking', 'Email Integration', 'Up to 1000 contacts']
      },
      {
        name: 'Professional',
        price: 89,
        features: ['Sales Pipeline', 'Marketing Automation', 'Customer Support', 'Up to 10,000 contacts', 'API Access']
      },
      {
        name: 'Enterprise',
        price: 179,
        features: ['Advanced Analytics', 'Custom Workflows', 'Unlimited Contacts', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  hr: {
    name: 'HR Management',
    icon: '👔',
    tiers: [
      {
        name: 'Basic',
        price: 35,
        features: ['Employee Records', 'Time Tracking', 'Basic Reports', 'Up to 25 employees']
      },
      {
        name: 'Professional',
        price: 75,
        features: ['Performance Reviews', 'Leave Management', 'Onboarding Tools', 'Up to 100 employees', 'Mobile App']
      },
      {
        name: 'Enterprise',
        price: 149,
        features: ['Advanced Analytics', 'Custom Workflows', 'Unlimited Employees', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  analytics: {
    name: 'Analytics Dashboard',
    icon: '📈',
    tiers: [
      {
        name: 'Basic',
        price: 55,
        features: ['Basic Dashboards', 'Standard Reports', 'Data Export', 'Up to 5 users']
      },
      {
        name: 'Professional',
        price: 109,
        features: ['Custom Dashboards', 'Advanced Filters', 'API Access', 'Up to 20 users', 'Data Integration']
      },
      {
        name: 'Enterprise',
        price: 219,
        features: ['Predictive Analytics', 'Custom Reports', 'Unlimited Users', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  payroll: {
    name: 'Payroll Management',
    icon: '💰',
    tiers: [
      {
        name: 'Basic',
        price: 39,
        features: ['Basic Payroll', 'Tax Calculations', 'Direct Deposit', 'Up to 25 employees']
      },
      {
        name: 'Professional',
        price: 79,
        features: ['Advanced Payroll', 'Tax Filing', 'Benefits Management', 'Up to 100 employees', 'Mobile App']
      },
      {
        name: 'Enterprise',
        price: 159,
        features: ['Multi-state Filing', 'Custom Reports', 'Unlimited Employees', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  project: {
    name: 'Project Management',
    icon: '📋',
    tiers: [
      {
        name: 'Basic',
        price: 29,
        features: ['Task Management', 'Basic Gantt Charts', 'File Sharing', 'Up to 5 projects']
      },
      {
        name: 'Professional',
        price: 69,
        features: ['Advanced Gantt Charts', 'Time Tracking', 'Resource Management', 'Up to 20 projects', 'API Access']
      },
      {
        name: 'Enterprise',
        price: 139,
        features: ['Portfolio Management', 'Custom Workflows', 'Unlimited Projects', 'Priority Support', 'Custom Integration']
      }
    ]
  },
  ecommerce: {
    name: 'E-Commerce Platform',
    icon: '🛒',
    tiers: [
      {
        name: 'Basic',
        price: 59,
        features: ['Product Catalog', 'Basic Checkout', 'Order Management', 'Up to 100 products']
      },
      {
        name: 'Professional',
        price: 119,
        features: ['Inventory Sync', 'Multiple Payment Gateways', 'Discount Codes', 'Up to 1000 products', 'API Access']
      },
      {
        name: 'Enterprise',
        price: 239,
        features: ['Multi-channel Sales', 'Advanced Analytics', 'Unlimited Products', 'Priority Support', 'Custom Integration']
      }
    ]
  }
};

const ModulePricing = () => {
  const [selectedModule, setSelectedModule] = useState<keyof typeof modulePricing>('accounting');

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Module Pricing</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose the perfect plan for each module based on your business needs
          </p>
        </div>

        {/* Module Selector */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-full max-w-full overflow-hidden">
            <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent px-2 py-1" style={{ scrollbarWidth: 'thin' }}>
              {Object.entries(modulePricing).map(([key, module]) => (
                <Button
                  key={key}
                  variant={selectedModule === key ? "default" : "ghost"}
                  className={`rounded-full px-6 py-3 whitespace-nowrap flex-shrink-0 ${
                    selectedModule === key 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setSelectedModule(key as keyof typeof modulePricing)}
                >
                  <span className="mr-2">{module.icon}</span>
                  {module.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {modulePricing[selectedModule].tiers.map((tier, index) => (
                    <div
                      key={tier.name}
                      className={`glass-card p-8 rounded-2xl relative ${
                        index === 1 ? 'ring-2 ring-blue-500/50 scale-105' : ''
                      }`}
                    >
                      {index === 1 && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold gradient-text mb-2">
                          ${tier.price}
                        </div>
                        <p className="text-foreground/70">per month</p>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        className={`w-full ${
                          index === 1 
                            ? 'btn-primary' 
                            : 'btn-glass'
                        }`}
                      >
                        Get Started
                      </Button>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="glass-strong border-white/20" />
            <CarouselNext className="glass-strong border-white/20" />
          </Carousel>
        </div>

        {/* Enterprise Notice */}
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
      </div>
    </section>
  );
};

export default ModulePricing;
