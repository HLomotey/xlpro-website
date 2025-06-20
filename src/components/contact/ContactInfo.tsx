import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@xlpro.com', 'sales@xlpro.com'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+1 (555) 123-4567', '+44 20 7123 4567'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: ['San Francisco, CA', 'London, UK'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM PST', '24/7 Emergency Support'],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <Card className={`glass-card ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl gradient-text">Contact Information</CardTitle>
        <CardDescription>
          Multiple ways to reach our team for support and inquiries.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-10 h-10 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center`}>
              <method.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{method.title}</h3>
              {method.details.map((detail, i) => (
                <p key={i} className="text-foreground/70">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
