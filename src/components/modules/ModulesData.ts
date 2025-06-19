import { 
  Calculator, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  Truck, 
  MessageSquare, 
  Settings
} from 'lucide-react';

export interface Module {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  price: number;
  features: string[];
  popular?: boolean;
}

export const modules: Module[] = [
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
