import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ModulePricingDataMap } from './PricingData';

interface ModuleSelectorProps {
  modulePricing: ModulePricingDataMap;
  selectedModule: string;
  onSelectModule: (moduleKey: string) => void;
}

const ModuleSelector: React.FC<ModuleSelectorProps> = ({ 
  modulePricing, 
  selectedModule, 
  onSelectModule 
}) => {
  const MODULES_PER_PAGE = 4;
  const moduleEntries = Object.entries(modulePricing);
  const totalModules = moduleEntries.length;
  const totalPages = Math.ceil(totalModules / MODULES_PER_PAGE);
  
  // Find which page contains the currently selected module
  const selectedModuleIndex = moduleEntries.findIndex(([key]) => key === selectedModule);
  const initialPage = Math.floor(selectedModuleIndex / MODULES_PER_PAGE);
  
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  // Get the modules for the current page
  const visibleModules = moduleEntries.slice(
    currentPage * MODULES_PER_PAGE, 
    (currentPage + 1) * MODULES_PER_PAGE
  );
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex justify-center items-center mb-12">
      <Button 
        variant="ghost" 
        size="icon" 
        className="mr-2 glass-strong rounded-full" 
        onClick={goToPrevPage}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <div className="glass-card p-2 rounded-full overflow-hidden">
        <div className="flex space-x-2 px-2 py-1">
          {visibleModules.map(([key, module]) => (
            <Button
              key={key}
              variant={selectedModule === key ? "default" : "ghost"}
              className={`rounded-full px-6 py-3 whitespace-nowrap flex-shrink-0 ${
                selectedModule === key 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              onClick={() => onSelectModule(key)}
            >
              <span className="mr-2">{module.icon}</span>
              {module.name}
            </Button>
          ))}
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-2 glass-strong rounded-full" 
        onClick={goToNextPage}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Page indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${currentPage === index ? 'bg-blue-500' : 'bg-gray-400/30'}`}
            onClick={() => setCurrentPage(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleSelector;
