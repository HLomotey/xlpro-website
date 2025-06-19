
import React from 'react';
import { X, Play, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardPreview from './DashboardPreview';

interface ModulePreviewProps {
  moduleId: string;
  onClose: () => void;
}

const moduleData = {
  accounting: {
    name: 'Accounting & Finance',
    description: 'Complete financial management solution with automated reporting and tax management.',
    videoUrl: '/videos/accounting-demo.mp4',
    features: ['Automated Bookkeeping', 'Financial Reporting', 'Tax Management', 'Invoice Generation']
  },
  inventory: {
    name: 'Inventory Management',
    description: 'Real-time inventory tracking with advanced stock management features.',
    videoUrl: '/videos/inventory-demo.mp4',
    features: ['Real-time Tracking', 'Stock Alerts', 'Supplier Management', 'Order Management']
  },
  crm: {
    name: 'CRM System',
    description: 'Customer relationship management with lead tracking and communication tools.',
    videoUrl: '/videos/crm-demo.mp4',
    features: ['Lead Management', 'Contact Management', 'Sales Pipeline', 'Communication Tools']
  },
  fleet: {
    name: 'Fleet Management',
    description: 'Vehicle fleet tracking and optimization with maintenance scheduling.',
    videoUrl: '/videos/fleet-demo.mp4',
    features: ['Vehicle Tracking', 'Maintenance Scheduling', 'Route Optimization', 'Fuel Management']
  },
  analytics: {
    name: 'Analytics Dashboard',
    description: 'Data-driven insights and reporting with business intelligence capabilities.',
    videoUrl: '/videos/analytics-demo.mp4',
    features: ['Custom Dashboards', 'Real-time Analytics', 'Report Generation', 'Data Visualization']
  },
  hr: {
    name: 'HR Management',
    description: 'Employee management and HR operations streamlining.',
    videoUrl: '/videos/hr-demo.mp4',
    features: ['Employee Records', 'Attendance Tracking', 'Performance Management', 'Document Management']
  },
  payroll: {
    name: 'Payroll Management',
    description: 'Automated payroll processing with tax management.',
    videoUrl: '/videos/payroll-demo.mp4',
    features: ['Automated Payroll', 'Tax Calculations', 'Pay Slip Generation', 'Compliance Management']
  },
  hospital: {
    name: 'Hospital Management',
    description: 'Comprehensive hospital management system for healthcare providers.',
    videoUrl: '/videos/hospital-demo.mp4',
    features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Billing System']
  }
};

const ModulePreview: React.FC<ModulePreviewProps> = ({ moduleId, onClose }) => {
  const module = moduleData[moduleId as keyof typeof moduleData];
  const [activeTab, setActiveTab] = React.useState<'dashboard' | 'video'>('dashboard');

  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-strong rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold gradient-text">{module.name}</h2>
            <p className="text-foreground/70 mt-1">{module.description}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="glass-subtle">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
            className={`rounded-none px-6 py-3 ${activeTab === 'dashboard' ? 'bg-white/10' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Eye className="mr-2 h-4 w-4" />
            Dashboard Preview
          </Button>
          <Button
            variant={activeTab === 'video' ? 'default' : 'ghost'}
            className={`rounded-none px-6 py-3 ${activeTab === 'video' ? 'bg-white/10' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            <Play className="mr-2 h-4 w-4" />
            Video Demo
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'dashboard' ? (
            <DashboardPreview moduleId={moduleId} />
          ) : (
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-white/50 mx-auto mb-4" />
                <p className="text-white/70">Video demo coming soon</p>
                <p className="text-white/50 text-sm mt-2">Preview of {module.name} functionality</p>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="p-6 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-3">Key Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {module.features.map((feature, index) => (
              <div key={index} className="glass-subtle rounded-lg p-3 text-center">
                <span className="text-sm text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePreview;
