// Define types for the pricing data structure
export interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

export interface ModulePricingData {
  name: string;
  icon: string;
  tiers: PricingTier[];
}

export type ModulePricingDataMap = Record<string, ModulePricingData>;

// Export the pricing data for all modules
export const modulePricingData: ModulePricingDataMap = {
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
