
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart, 
  Users, 
  Settings, 
  FileText, 
  TrendingUp,
  Package,
  DollarSign,
  Calendar,
  Truck,
  Activity,
  UserCheck,
  CreditCard,
  Stethoscope
} from 'lucide-react';

interface ModuleSidebarProps {
  moduleId: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const moduleConfigs = {
  accounting: {
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'transactions', label: 'Transactions', icon: DollarSign },
      { id: 'reports', label: 'Reports', icon: FileText },
      { id: 'analytics', label: 'Analytics', icon: BarChart },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  inventory: {
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'products', label: 'Products', icon: Package },
      { id: 'stock', label: 'Stock Levels', icon: BarChart },
      { id: 'orders', label: 'Orders', icon: FileText },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  crm: {
    color: 'from-purple-500 to-pink-600',
    accentColor: 'purple',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'contacts', label: 'Contacts', icon: Users },
      { id: 'leads', label: 'Leads', icon: TrendingUp },
      { id: 'pipeline', label: 'Sales Pipeline', icon: BarChart },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  fleet: {
    color: 'from-orange-500 to-red-600',
    accentColor: 'orange',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'vehicles', label: 'Vehicles', icon: Truck },
      { id: 'routes', label: 'Routes', icon: BarChart },
      { id: 'maintenance', label: 'Maintenance', icon: Settings },
      { id: 'analytics', label: 'Analytics', icon: Activity },
    ]
  },
  analytics: {
    color: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'dashboards', label: 'Dashboards', icon: BarChart },
      { id: 'reports', label: 'Reports', icon: FileText },
      { id: 'insights', label: 'Insights', icon: TrendingUp },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  hr: {
    color: 'from-green-500 to-emerald-600',
    accentColor: 'green',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'employees', label: 'Employees', icon: Users },
      { id: 'attendance', label: 'Attendance', icon: Calendar },
      { id: 'performance', label: 'Performance', icon: TrendingUp },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  payroll: {
    color: 'from-yellow-500 to-orange-600',
    accentColor: 'yellow',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'payroll', label: 'Payroll', icon: CreditCard },
      { id: 'employees', label: 'Employees', icon: Users },
      { id: 'reports', label: 'Reports', icon: FileText },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
  hospital: {
    color: 'from-red-500 to-pink-600',
    accentColor: 'red',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'patients', label: 'Patients', icon: Users },
      { id: 'appointments', label: 'Appointments', icon: Calendar },
      { id: 'medical', label: 'Medical Records', icon: Stethoscope },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  }
};

const ModuleSidebar: React.FC<ModuleSidebarProps> = ({ moduleId, activeTab, onTabChange }) => {
  const config = moduleConfigs[moduleId as keyof typeof moduleConfigs];
  
  if (!config) return null;

  return (
    <div className="w-64 h-full glass-card border-r border-white/10">
      {/* Sidebar Header */}
      <div className={`p-6 bg-gradient-to-r ${config.color}`}>
        <h2 className="text-white font-bold text-lg capitalize">
          {moduleId} Module
        </h2>
        <p className="text-white/80 text-sm mt-1">
          Manage your {moduleId} operations
        </p>
      </div>

      {/* Navigation Items */}
      <nav className="p-4">
        <ul className="space-y-2">
          {config.items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? `bg-${config.accentColor}-500/20 text-${config.accentColor}-400 border border-${config.accentColor}-500/30` 
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 mt-auto">
        <div className="glass-subtle rounded-lg p-4">
          <h3 className="text-sm font-medium text-foreground/70 mb-2">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/60">Active Users</span>
              <span className="font-medium">1,234</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/60">Last Updated</span>
              <span className="font-medium">2 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleSidebar;
