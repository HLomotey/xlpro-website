
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
  side?: 'left' | 'right';
}

const SlideForm: React.FC<SlideFormProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = 600,
  side = 'right'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Slide Panel */}
      <div 
        className={cn(
          "absolute top-0 h-full bg-background shadow-2xl transform transition-transform duration-300 ease-in-out",
          side === 'right' ? 'right-0' : 'left-0',
          isOpen ? 'translate-x-0' : side === 'right' ? 'translate-x-full' : '-translate-x-full'
        )}
        style={{ width: `${width}px` }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold gradient-text">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="glass-subtle"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideForm;
