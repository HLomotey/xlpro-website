
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ModulePreview from '@/components/modules/ModulePreview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  Truck, 
  MessageSquare, 
  Settings,
  ArrowRight,
  Star
} from 'lucide-react';

const modules = [
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Complete financial management and reporting',
    icon: Calculator,
    price: 29,
    features: ['Invoice Management', 'Expense Tracking', 'Financial Reports', 'Tax Calculations'],
    popular: true
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Employee management and payroll system',
    icon: Users,
    price: 35,
    features: ['Employee Records', 'Payroll Management', 'Performance Reviews', 'Attendance Tracking']
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    description: 'Stock control and warehouse management',
    icon: ShoppingCart,
    price: 25,
    features: ['Stock Tracking', 'Supplier Management', 'Order Management', 'Barcode Scanning']
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    description: 'Business intelligence and data visualization',
    icon: BarChart3,
    price: 40,
    features: ['Custom Dashboards', 'Real-time Analytics', 'Report Builder', 'Data Export']
  },
  {
    id: 'project',
    name: 'Project Management',
    description: 'Task and project tracking system',
    icon: FileText,
    price: 20,
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Gantt Charts']
  },
  {
    id: 'logistics',
    name: 'Logistics & Shipping',
    description: 'Supply chain and delivery management',
    icon: Truck,
    price: 30,
    features: ['Route Optimization', 'Delivery Tracking', 'Fleet Management', 'Shipping Integration']
  },
  {
    id: 'crm',
    name: 'Customer Relations',
    description: 'Customer relationship management',
    icon: MessageSquare,
    price: 35,
    features: ['Lead Management', 'Contact Database', 'Sales Pipeline', 'Customer Support']
  },
  {
    id: 'system',
    name: 'System Administration',
    description: 'User management and system settings',
    icon: Settings,
    price: 15,
    features: ['User Permissions', 'System Monitoring', 'Backup Management', 'Security Settings']
  }
];

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Enterprise Modules
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business modules. Each module is designed to integrate seamlessly with your existing workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20">
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
                          onClick={() => setSelectedModule(module.id)}
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

        {/* Module Preview */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-2xl font-bold gradient-text">
                  {modules.find(m => m.id === selectedModule)?.name} Module
                </h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedModule(null)}
                  className="glass-subtle"
                >
                  Close
                </Button>
              </div>
              <div className="h-[calc(90vh-120px)]">
                <ModulePreview moduleId={selectedModule} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Modules;
