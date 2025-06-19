import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ContentFormProps {
  onClose: () => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ onClose }) => {
  return (
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
        <Button variant="outline" className="flex-1 glass-subtle" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ContentForm;
