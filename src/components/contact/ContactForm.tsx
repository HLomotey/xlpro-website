import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className={`glass-card ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="glass-subtle"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="glass-subtle"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="glass-subtle"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject *</label>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="glass-subtle"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="glass-subtle min-h-32"
              required
            />
          </div>
          <Button type="submit" className="w-full btn-primary">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
