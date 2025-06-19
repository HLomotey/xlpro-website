import React from 'react';
import { Users, Activity, DollarSign, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
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
};

export default Dashboard;
