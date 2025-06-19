import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuickLinksProps {
  className?: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ className }) => {
  const links = [
    { text: '📖 Documentation & API Reference', href: '#' },
    { text: '💬 Community Forum', href: '#' },
    { text: '🎥 Video Tutorials', href: '#' },
    { text: '📊 System Status', href: '#' }
  ];

  return (
    <Card className={`glass-card ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Quick Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="block text-foreground/80 hover:text-foreground transition-colors"
          >
            {link.text}
          </a>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickLinks;
