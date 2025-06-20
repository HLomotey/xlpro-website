import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  Database,
  Bell,
  Activity
} from 'lucide-react';

// Import modular components
import Dashboard from './dashboard/Dashboard';
import UsersComponent from './users/Users';
import ContentComponent from './content/Content';
import ModulesComponent from './modules/Modules';
import SettingsComponent from './settings/Settings';
import NotificationsComponent from './notifications/Notifications';
import AnalyticsComponent from './analytics/Analytics';
import SecurityComponent from './security/Security';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const adminSections = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'modules', label: 'Modules', icon: Database },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const renderSidebar = () => (
    <div className="w-64 h-full glass-card border-r border-white/10">
      <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-600">
        <h2 className="text-white font-bold text-lg">Admin Panel</h2>
        <p className="text-white/80 text-sm mt-1">Manage your application</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {adminSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersComponent />;
      case 'content':
        return <ContentComponent />;
      case 'modules':
        return <ModulesComponent />;
      case 'settings':
        return <SettingsComponent />;
      case 'notifications':
        return <NotificationsComponent />;
      case 'analytics':
        return <AnalyticsComponent />;
      case 'security':
        return <SecurityComponent />;
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-foreground/60">Select a section from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {renderSidebar()}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
