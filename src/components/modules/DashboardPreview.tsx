
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface DashboardPreviewProps {
  moduleId: string;
}

const mockData = {
  revenue: [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 67000 },
  ],
  inventory: [
    { category: 'Electronics', stock: 120, reorder: 20 },
    { category: 'Clothing', stock: 80, reorder: 15 },
    { category: 'Books', stock: 200, reorder: 50 },
    { category: 'Home', stock: 45, reorder: 10 },
  ],
  pieData: [
    { name: 'Active', value: 65, color: '#3B82F6' },
    { name: 'Pending', value: 25, color: '#F59E0B' },
    { name: 'Inactive', value: 10, color: '#EF4444' },
  ]
};

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ moduleId }) => {
  const renderDashboard = () => {
    switch (moduleId) {
      case 'accounting':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Revenue</h3>
                <p className="text-2xl font-bold gradient-text">$328,000</p>
                <span className="text-green-400 text-sm">+12% from last month</span>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Expenses</h3>
                <p className="text-2xl font-bold text-foreground">$89,500</p>
                <span className="text-red-400 text-sm">+5% from last month</span>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Net Profit</h3>
                <p className="text-2xl font-bold text-green-400">$238,500</p>
                <span className="text-green-400 text-sm">+18% from last month</span>
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
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
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Items</h3>
                <p className="text-2xl font-bold gradient-text">1,245</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Low Stock</h3>
                <p className="text-2xl font-bold text-orange-400">23</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Out of Stock</h3>
                <p className="text-2xl font-bold text-red-400">5</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Categories</h3>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Inventory Levels</h3>
              <ResponsiveContainer width="100%" height={250}>
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
                  <Bar dataKey="stock" fill="#3B82F6" />
                  <Bar dataKey="reorder" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'crm':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Contacts</h3>
                <p className="text-2xl font-bold gradient-text">2,456</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Active Leads</h3>
                <p className="text-2xl font-bold text-blue-400">189</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-sm font-medium text-foreground/70">Conversions</h3>
                <p className="text-2xl font-bold text-green-400">45</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Lead Status</h3>
                <ResponsiveContainer width="100%" height={200}>
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
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-foreground/80">New lead from website</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-foreground/80">Deal closed - $12,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-foreground/80">Follow-up scheduled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="glass-card p-12 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold gradient-text mb-2">{moduleId} Dashboard</h3>
            <p className="text-foreground/70">Dashboard preview coming soon for this module</p>
          </div>
        );
    }
  };

  return <div>{renderDashboard()}</div>;
};

export default DashboardPreview;
