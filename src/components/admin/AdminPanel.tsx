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
  Activity,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  Grid,
  List
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SlideForm from '@/components/ui/slide-form';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'user' | 'content' | null>(null);

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

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-14', avatar: 'JS' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', status: 'Inactive', lastLogin: '2024-01-10', avatar: 'MJ' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-16', avatar: 'SW' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'Manager', status: 'Pending', lastLogin: '2024-01-12', avatar: 'TB' },
  ];

  const openForm = (type: 'user' | 'content') => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormType(null);
  };

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
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold gradient-text">User Management</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input placeholder="Search users..." className="glass-subtle pl-10 w-64" />
          </div>
          <Button variant="outline" className="glass-subtle">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="glass-subtle">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className="glass-subtle">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <div className="flex border border-white/10 rounded-lg glass-subtle">
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="rounded-r-none"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-l-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
          <Button className="btn-primary" onClick={() => openForm('user')}>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>
      
      {/* Table View */}
      {viewMode === 'table' && (
        <Card className="glass-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {user.avatar}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="glass-subtle">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        user.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : user.status === 'Inactive'
                          ? 'bg-red-500/20 text-red-400 border-red-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button size="sm" variant="ghost" className="glass-subtle">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="glass-subtle text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users.map((user) => (
            <Card key={user.id} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-foreground/60">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Role:</span>
                    <Badge variant="outline" className="glass-subtle text-xs">
                      {user.role}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status:</span>
                    <Badge className={`text-xs ${
                      user.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : user.status === 'Inactive'
                        ? 'bg-red-500/20 text-red-400 border-red-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {user.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Login:</span>
                    <span className="text-xs text-foreground/60">{user.lastLogin}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
                  <Button size="sm" variant="outline" className="flex-1 glass-subtle">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="glass-subtle text-red-400 hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold gradient-text">Content Management</h2>
        <Button className="btn-primary" onClick={() => openForm('content')}>
          <Plus className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>
      
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
                <Input 
                  className="glass-subtle"
                  defaultValue="Enterprise Solutions Reimagined"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subtitle</label>
                <textarea 
                  className="w-full p-3 glass-subtle rounded-lg border border-white/10 h-24 resize-none"
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
        return renderContentManagement();
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-foreground/60">Select a section from the sidebar to get started.</p>
          </div>
        );
    }
  };

  const renderUserForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <Input className="glass-subtle" placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <Input className="glass-subtle" placeholder="Enter last name" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <Input className="glass-subtle" type="email" placeholder="Enter email address" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Role</label>
        <select className="w-full p-3 glass-subtle rounded-lg border border-white/10">
          <option>Select a role</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>User</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Department</label>
        <Input className="glass-subtle" placeholder="Enter department" />
      </div>
      
      <div className="flex space-x-4 pt-4 border-t border-white/10">
        <Button className="flex-1 btn-primary">Create User</Button>
        <Button variant="outline" className="flex-1 glass-subtle" onClick={closeForm}>
          Cancel
        </Button>
      </div>
    </div>
  );

  const renderContentForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Content Type</label>
        <select className="w-full p-3 glass-subtle rounded-lg border border-white/10">
          <option>Select content type</option>
          <option>Hero Section</option>
          <option>Feature Card</option>
          <option>Pricing Plan</option>
          <option>Module Description</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <Input className="glass-subtle" placeholder="Enter content title" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea 
          className="w-full p-3 glass-subtle rounded-lg border border-white/10 h-32 resize-none"
          placeholder="Enter content description"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Status</label>
        <select className="w-full p-3 glass-subtle rounded-lg border border-white/10">
          <option>Draft</option>
          <option>Published</option>
          <option>Archived</option>
        </select>
      </div>
      
      <div className="flex space-x-4 pt-4 border-t border-white/10">
        <Button className="flex-1 btn-primary">Save Content</Button>
        <Button variant="outline" className="flex-1 glass-subtle" onClick={closeForm}>
          Cancel
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background">
      {renderSidebar()}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Slide-in Forms */}
      <SlideForm
        isOpen={isFormOpen && formType === 'user'}
        onClose={closeForm}
        title="Add New User"
        width={600}
      >
        {renderUserForm()}
      </SlideForm>

      <SlideForm
        isOpen={isFormOpen && formType === 'content'}
        onClose={closeForm}
        title="Add New Content"
        width={600}
      >
        {renderContentForm()}
      </SlideForm>
    </div>
  );
};

export default AdminPanel;
