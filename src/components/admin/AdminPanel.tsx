
import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  Database,
  Bell,
  Globe,
  Palette,
  Mail,
  DollarSign,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/70">Total Users</p>
                <p className="text-2xl font-bold text-blue-400">2,547</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <p className="text-xs text-green-400 mt-2">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/70">Active Sessions</p>
                <p className="text-2xl font-bold text-green-400">1,234</p>
              </div>
              <Activity className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-xs text-green-400 mt-2">+5% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/70">Revenue</p>
                <p className="text-2xl font-bold text-purple-400">$48,329</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-xs text-green-400 mt-2">+18% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/70">System Status</p>
                <p className="text-2xl font-bold text-green-400">99.9%</p>
              </div>
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-xs text-green-400 mt-2">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="gradient-text">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 glass-subtle rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New user registration</p>
                <p className="text-xs text-foreground/60">john.doe@example.com - 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 glass-subtle rounded-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Module update deployed</p>
                <p className="text-xs text-foreground/60">Accounting module v2.1.0 - 15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 glass-subtle rounded-lg">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Security scan completed</p>
                <p className="text-xs text-foreground/60">No vulnerabilities found - 1 hour ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold gradient-text">User Management</h2>
        <Button className="btn-primary">Add New User</Button>
      </div>
      
      <Card className="glass-card">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
                { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-14' },
                { name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', status: 'Inactive', lastLogin: '2024-01-10' },
              ].map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" className="glass-subtle">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-text">Content Management</h2>
      
      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-4 glass-subtle">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hero" className="space-y-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Hero Section Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Headline</label>
                <input 
                  type="text" 
                  className="w-full p-3 glass-subtle rounded-lg border border-white/10"
                  defaultValue="Enterprise Solutions Reimagined"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subtitle</label>
                <textarea 
                  className="w-full p-3 glass-subtle rounded-lg border border-white/10 h-24"
                  defaultValue="Streamline your business operations with xlPro's comprehensive suite of modular enterprise tools."
                />
              </div>
              <Button className="btn-primary">Update Hero Section</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="features">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Features Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">Manage feature descriptions and settings here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pricing">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Pricing Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">Configure pricing tiers and module costs.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="modules">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Module Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">Enable/disable modules and configure their settings.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'users':
        return renderUsers();
      case 'content':
        return renderContent();
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
