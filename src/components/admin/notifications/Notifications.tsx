import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Notifications = () => {
  const notifications = [
    { 
      id: 1, 
      title: 'System Update', 
      message: 'A new system update is available. Please review and install at your convenience.', 
      type: 'info', 
      date: '2024-01-18 09:30 AM',
      read: false
    },
    { 
      id: 2, 
      title: 'Security Alert', 
      message: 'Multiple failed login attempts detected from IP 192.168.1.45.', 
      type: 'warning', 
      date: '2024-01-17 11:45 PM',
      read: true
    },
    { 
      id: 3, 
      title: 'New User Registration', 
      message: 'User sarah.johnson@example.com has registered and is awaiting approval.', 
      type: 'success', 
      date: '2024-01-17 03:15 PM',
      read: false
    },
    { 
      id: 4, 
      title: 'Database Backup Failed', 
      message: 'The scheduled database backup failed. Please check the logs for more information.', 
      type: 'error', 
      date: '2024-01-16 02:00 AM',
      read: true
    },
    { 
      id: 5, 
      title: 'License Expiring', 
      message: 'Your enterprise license will expire in 15 days. Please renew to avoid service interruption.', 
      type: 'warning', 
      date: '2024-01-15 10:20 AM',
      read: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold gradient-text">Notifications</h2>
        <div className="flex space-x-2">
          <Button variant="outline" className="glass-subtle">Mark All as Read</Button>
          <Button variant="outline" className="glass-subtle">Settings</Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`glass-card ${!notification.read ? 'border-l-4 border-l-blue-500' : ''}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{notification.title}</h3>
                    <Badge className={
                      notification.type === 'info' 
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                        : notification.type === 'warning'
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        : notification.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border-red-500/30'
                    }>
                      {notification.type}
                    </Badge>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">{notification.message}</p>
                  <p className="text-xs text-foreground/50 mt-2">{notification.date}</p>
                </div>
                <Button variant="ghost" size="sm" className="glass-subtle">
                  {notification.read ? 'Mark Unread' : 'Mark Read'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
