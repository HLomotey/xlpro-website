import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Download, Upload, Edit, Trash2 } from 'lucide-react';
import ModuleSidebar from './ModuleSidebar';

interface DashboardPreviewProps {
  moduleId: string;
}

const mockData = {
  revenue: [
    { month: 'Jan', value: 45000, expenses: 32000, profit: 13000 },
    { month: 'Feb', value: 52000, expenses: 35000, profit: 17000 },
    { month: 'Mar', value: 48000, expenses: 33000, profit: 15000 },
    { month: 'Apr', value: 61000, expenses: 38000, profit: 23000 },
    { month: 'May', value: 55000, expenses: 36000, profit: 19000 },
    { month: 'Jun', value: 67000, expenses: 41000, profit: 26000 },
  ],
  inventory: [
    { category: 'Electronics', stock: 120, reorder: 20, sold: 85 },
    { category: 'Clothing', stock: 80, reorder: 15, sold: 65 },
    { category: 'Books', stock: 200, reorder: 50, sold: 145 },
    { category: 'Home', stock: 45, reorder: 10, sold: 28 },
  ],
  pieData: [
    { name: 'Active', value: 65, color: '#3B82F6' },
    { name: 'Pending', value: 25, color: '#F59E0B' },
    { name: 'Inactive', value: 10, color: '#EF4444' },
  ],
  timeline: [
    { time: '9:00', calls: 12, meetings: 3, tasks: 8 },
    { time: '12:00', calls: 19, meetings: 5, tasks: 12 },
    { time: '15:00', calls: 8, meetings: 2, tasks: 15 },
    { time: '18:00', calls: 5, meetings: 1, tasks: 6 },
  ]
};

const moduleThemes = {
  accounting: {
    primary: '#10B981',
    secondary: '#059669',
    accent: '#34D399',
    gradient: 'from-emerald-500 to-teal-600'
  },
  inventory: {
    primary: '#3B82F6',
    secondary: '#2563EB',
    accent: '#60A5FA',
    gradient: 'from-blue-500 to-indigo-600'
  },
  crm: {
    primary: '#8B5CF6',
    secondary: '#7C3AED',
    accent: '#A78BFA',
    gradient: 'from-purple-500 to-pink-600'
  },
  fleet: {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#FB923C',
    gradient: 'from-orange-500 to-red-600'
  },
  analytics: {
    primary: '#06B6D4',
    secondary: '#0891B2',
    accent: '#22D3EE',
    gradient: 'from-cyan-500 to-blue-600'
  },
  hr: {
    primary: '#22C55E',
    secondary: '#16A34A',
    accent: '#4ADE80',
    gradient: 'from-green-500 to-emerald-600'
  },
  payroll: {
    primary: '#EAB308',
    secondary: '#CA8A04',
    accent: '#FDE047',
    gradient: 'from-yellow-500 to-orange-600'
  },
  hospital: {
    primary: '#EF4444',
    secondary: '#DC2626',
    accent: '#F87171',
    gradient: 'from-red-500 to-pink-600'
  }
};

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ moduleId }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const theme = moduleThemes[moduleId as keyof typeof moduleThemes] || moduleThemes.accounting;

  const getDummyTableData = () => {
    switch (moduleId) {
      case 'accounting':
        return [
          { id: 1, date: '2024-01-15', description: 'Office Supplies', amount: '$250.00', category: 'Expenses', status: 'Approved' },
          { id: 2, date: '2024-01-14', description: 'Client Payment', amount: '$1,500.00', category: 'Income', status: 'Completed' },
          { id: 3, date: '2024-01-13', description: 'Rent Payment', amount: '$2,000.00', category: 'Expenses', status: 'Pending' },
          { id: 4, date: '2024-01-12', description: 'Consulting Fee', amount: '$800.00', category: 'Income', status: 'Completed' },
        ];
      case 'inventory':
        return [
          { id: 1, name: 'Laptop Dell XPS', sku: 'DEL-001', stock: 15, reorder: 5, price: '$1,200.00', status: 'In Stock' },
          { id: 2, name: 'Office Chair', sku: 'CHR-002', stock: 3, reorder: 10, price: '$250.00', status: 'Low Stock' },
          { id: 3, name: 'Wireless Mouse', sku: 'MOU-003', stock: 45, reorder: 15, price: '$35.00', status: 'In Stock' },
          { id: 4, name: 'Monitor 24"', sku: 'MON-004', stock: 0, reorder: 8, price: '$300.00', status: 'Out of Stock' },
        ];
      case 'crm':
        return [
          { id: 1, name: 'John Smith', email: 'john@company.com', phone: '+1-234-567-8901', status: 'Active', lastContact: '2024-01-15' },
          { id: 2, name: 'Sarah Johnson', email: 'sarah@business.com', phone: '+1-234-567-8902', status: 'Lead', lastContact: '2024-01-14' },
          { id: 3, name: 'Mike Davis', email: 'mike@startup.com', phone: '+1-234-567-8903', status: 'Prospect', lastContact: '2024-01-13' },
          { id: 4, name: 'Emily Brown', email: 'emily@corp.com', phone: '+1-234-567-8904', status: 'Active', lastContact: '2024-01-12' },
        ];
      default:
        return [
          { id: 1, col1: 'Data 1', col2: 'Value 1', col3: 'Status 1', col4: '2024-01-15' },
          { id: 2, col1: 'Data 2', col2: 'Value 2', col3: 'Status 2', col4: '2024-01-14' },
          { id: 3, col1: 'Data 3', col2: 'Value 3', col3: 'Status 3', col4: '2024-01-13' },
        ];
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'analytics':
      case 'reports':
        return renderAnalytics();
      case 'transactions':
      case 'products':
      case 'contacts':
      case 'vehicles':
      case 'employees':
      case 'patients':
        return renderDataTable();
      default:
        return renderOverview();
    }
  };

  const renderDataTable = () => {
    const data = getDummyTableData();
    const headers = Object.keys(data[0] || {}).filter(key => key !== 'id');

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold gradient-text capitalize">{activeTab} Management</h2>
            <p className="text-foreground/70">Manage your {activeTab} data efficiently</p>
          </div>
          <div className="flex gap-2">
            <Button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add New
            </Button>
            <Button variant="outline" className="glass-subtle">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" className="glass-subtle">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Card className="glass-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  {headers.map((header) => (
                    <TableHead key={header} className="capitalize font-semibold">
                      {header.replace(/([A-Z])/g, ' $1').trim()}
                    </TableHead>
                  ))}
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id} className="hover:bg-white/5">
                    {headers.map((header) => (
                      <TableCell key={header} className="font-medium">
                        {header === 'status' ? (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row[header] === 'Active' || row[header] === 'In Stock' || row[header] === 'Completed' || row[header] === 'Approved'
                              ? 'bg-green-500/20 text-green-400'
                              : row[header] === 'Low Stock' || row[header] === 'Pending' || row[header] === 'Lead'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {row[header]}
                          </span>
                        ) : (
                          row[header]
                        )}
                      </TableCell>
                    ))}
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
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
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4 glass-subtle">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Total Revenue</p>
                    <p className="text-2xl font-bold" style={{ color: theme.primary }}>$328,000</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
                <p className="text-xs text-green-400 mt-2">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Active Users</p>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
                <p className="text-xs text-blue-400 mt-2">+5% from last week</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Completion Rate</p>
                    <p className="text-2xl font-bold text-foreground">94.2%</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl">📊</span>
                  </div>
                </div>
                <p className="text-xs text-green-400 mt-2">+2.1% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Growth Rate</p>
                    <p className="text-2xl font-bold" style={{ color: theme.primary }}>+18%</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl">📈</span>
                  </div>
                </div>
                <p className="text-xs text-green-400 mt-2">Trending upward</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="gradient-text">Performance Overview</CardTitle>
              <CardDescription>Monthly performance metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockData.revenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      backdropFilter: 'blur(8px)'
                    }} 
                  />
                  <Area type="monotone" dataKey="value" stroke={theme.primary} fill={theme.primary} fillOpacity={0.3} />
                  <Area type="monotone" dataKey="profit" stroke={theme.accent} fill={theme.accent} fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          {renderAnalytics()}
        </TabsContent>

        <TabsContent value="reports">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="gradient-text">Report Generation</CardTitle>
              <CardDescription>Generate comprehensive reports for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-24 flex flex-col items-center justify-center glass-subtle">
                  <Download className="h-8 w-8 mb-2" />
                  <span>Monthly Report</span>
                </Button>
                <Button className="h-24 flex flex-col items-center justify-center glass-subtle">
                  <Download className="h-8 w-8 mb-2" />
                  <span>Annual Report</span>
                </Button>
                <Button className="h-24 flex flex-col items-center justify-center glass-subtle">
                  <Download className="h-8 w-8 mb-2" />
                  <span>Custom Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="gradient-text">Business Insights</CardTitle>
              <CardDescription>AI-powered insights for better decision making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 glass-subtle rounded-lg">
                  <p className="font-semibold text-green-400">Revenue Growth</p>
                  <p className="text-sm text-foreground/70">Your revenue has increased by 15% this quarter compared to last quarter.</p>
                </div>
                <div className="p-4 glass-subtle rounded-lg">
                  <p className="font-semibold text-blue-400">Customer Retention</p>
                  <p className="text-sm text-foreground/70">Customer retention rate is at 92%, which is 5% above industry average.</p>
                </div>
                <div className="p-4 glass-subtle rounded-lg">
                  <p className="font-semibold text-purple-400">Operational Efficiency</p>
                  <p className="text-sm text-foreground/70">Process automation has reduced manual work by 30% this month.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="gradient-text">Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockData.revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="value" stroke={theme.primary} strokeWidth={3} />
                <Line type="monotone" dataKey="expenses" stroke={theme.secondary} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="gradient-text">Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={mockData.pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {mockData.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDataView = () => (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="gradient-text">Data Overview</CardTitle>
          <CardDescription>Comprehensive data analysis and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={mockData.inventory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="category" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="stock" fill={theme.primary} />
              <Bar dataKey="sold" fill={theme.accent} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex h-[80vh] bg-background/50 rounded-lg overflow-hidden">
      <ModuleSidebar 
        moduleId={moduleId} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text capitalize mb-2">
            {moduleId} Dashboard
          </h1>
          <p className="text-foreground/70">
            Welcome to your {moduleId} management dashboard
          </p>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DashboardPreview;
