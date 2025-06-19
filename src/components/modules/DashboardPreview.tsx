
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
        return renderDataView();
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
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
    <div className="flex h-[70vh] bg-background/50 rounded-lg overflow-hidden">
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
