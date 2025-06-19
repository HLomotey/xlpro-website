
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import modular components
import ModulesHero from '@/components/modules/ModulesHero';
import ModulesGrid from '@/components/modules/ModulesGrid';
import ModulePreviewModal from '@/components/modules/ModulePreviewModal';

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleSelectModule = (moduleId: string) => {
    setSelectedModule(moduleId);
  };

  const handleCloseModal = () => {
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <ModulesHero />

        {/* Modules Grid */}
        <ModulesGrid onSelectModule={handleSelectModule} />

        {/* Module Preview Modal */}
        {selectedModule && (
          <ModulePreviewModal 
            selectedModule={selectedModule} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Modules;
