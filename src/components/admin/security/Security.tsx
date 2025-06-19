import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Security = () => {
  const securityLogs = [
    { id: 1, event: 'Login Success', user: 'admin@example.com', ip: '192.168.1.1', timestamp: '2024-01-18 14:30:22', status: 'success' },
    { id: 2, event: 'Login Failed', user: 'unknown@example.com', ip: '203.0.113.45', timestamp: '2024-01-18 14:25:17', status: 'error' },
    { id: 3, event: 'Password Reset', user: 'john.doe@example.com', ip: '192.168.1.5', timestamp: '2024-01-18 13:45:09', status: 'warning' },
    { id: 4, event: 'Permission Change', user: 'admin@example.com', ip: '192.168.1.1', timestamp: '2024-01-18 12:30:45', status: 'info' },
    { id: 5, event: 'Login Failed', user: 'jane.smith@example.com', ip: '192.168.1.10', timestamp: '2024-01-18 11:22:36', status: 'error' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-text">Security Management</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 glass-subtle">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="access">Access Control</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="settings">Security Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Security Score</p>
                    <p className="text-2xl font-bold text-green-400">85/100</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-sm">
                        85%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-green-400 mt-2">Good security posture</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Active Sessions</p>
                    <p className="text-2xl font-bold text-blue-400">24</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-black font-bold text-sm">
                        24
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-foreground/60 mt-2">Last updated: 5 minutes ago</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground/70">Security Alerts</p>
                    <p className="text-2xl font-bold text-yellow-400">3</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                        3
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-yellow-400 mt-2">Requires attention</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityLogs.map(log => (
                  <div key={log.id} className="flex items-center space-x-3 p-3 glass-subtle rounded-lg">
                    <Badge className={
                      log.status === 'success' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : log.status === 'error'
                        ? 'bg-red-500/20 text-red-400 border-red-500/30'
                        : log.status === 'warning'
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }>
                      {log.event}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{log.user}</p>
                      <p className="text-xs text-foreground/60">IP: {log.ip} - {log.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="access">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Access Control Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">Manage roles and permissions for system access.</p>
              <div className="h-64 flex items-center justify-center">
                <p className="text-foreground/70">Role and permission management interface will appear here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audit">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">Complete history of system access and changes.</p>
              <div className="h-64 flex items-center justify-center">
                <p className="text-foreground/70">Detailed audit log interface will appear here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password Policy</label>
                <select className="w-full p-3 glass-subtle rounded-lg border border-white/10">
                  <option>Standard (8+ chars, 1 uppercase, 1 number)</option>
                  <option>Strong (12+ chars, uppercase, number, symbol)</option>
                  <option>Very Strong (16+ chars, uppercase, number, symbol)</option>
                  <option>Custom Policy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Two-Factor Authentication</label>
                <div className="flex items-center space-x-2">
                  <select className="flex-1 p-3 glass-subtle rounded-lg border border-white/10">
                    <option>Optional for all users</option>
                    <option>Required for admin users only</option>
                    <option>Required for all users</option>
                    <option>Disabled</option>
                  </select>
                  <Button variant="outline" className="glass-subtle">Configure</Button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Session Timeout (minutes)</label>
                <Input className="glass-subtle" type="number" defaultValue="30" />
              </div>
              
              <Button className="btn-primary">Save Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Security;
