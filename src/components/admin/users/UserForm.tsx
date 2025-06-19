import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UserFormProps {
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onClose }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <Input className="glass-subtle" placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <Input className="glass-subtle" placeholder="Enter last name" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <Input className="glass-subtle" type="email" placeholder="Enter email address" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Role</label>
        <select className="w-full p-3 glass-subtle rounded-lg border border-white/10">
          <option>Select a role</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>User</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Department</label>
        <Input className="glass-subtle" placeholder="Enter department" />
      </div>
      
      <div className="flex space-x-4 pt-4 border-t border-white/10">
        <Button className="flex-1 btn-primary">Create User</Button>
        <Button variant="outline" className="flex-1 glass-subtle" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
