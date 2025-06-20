import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';
import { modulePricingData, ModulePricingData } from './PricingData';

interface SelectedModule {
  id: string;
  name: string;
  tier: string;
  price: number;
}

const ModuleBundleSelector = () => {
  const [selectedModules, setSelectedModules] = useState<SelectedModule[]>([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  // Calculate discount based on number of modules selected
  useEffect(() => {
    let discountPercent = 0;
    
    if (selectedModules.length >= 2 && selectedModules.length < 4) {
      discountPercent = 10; // 10% discount for 2-3 modules
    } else if (selectedModules.length >= 4 && selectedModules.length < 6) {
      discountPercent = 15; // 15% discount for 4-5 modules
    } else if (selectedModules.length >= 6) {
      discountPercent = 20; // 20% discount for 6+ modules
    }
    
    const subtotal = selectedModules.reduce((sum, module) => sum + module.price, 0);
    const discountAmount = Math.round(subtotal * (discountPercent / 100));
    
    setTotal(subtotal);
    setDiscount(discountAmount);
    setFinalTotal(subtotal - discountAmount);
  }, [selectedModules]);

  // Add or update a module in the selection
  const handleModuleSelection = (moduleId: string, tier: string) => {
    const moduleData = modulePricingData[moduleId];
    const tierData = moduleData.tiers.find(t => t.name === tier);
    
    if (!tierData) return;
    
    setSelectedModules(prev => {
      // Check if module already exists in selection
      const existingIndex = prev.findIndex(m => m.id === moduleId);
      
      if (existingIndex >= 0) {
        // Update existing module
        const updated = [...prev];
        updated[existingIndex] = {
          id: moduleId,
          name: moduleData.name,
          tier: tier,
          price: tierData.price
        };
        return updated;
      } else {
        // Add new module
        return [...prev, {
          id: moduleId,
          name: moduleData.name,
          tier: tier,
          price: tierData.price
        }];
      }
    });
  };

  // Remove a module from selection
  const handleRemoveModule = (moduleId: string) => {
    setSelectedModules(prev => prev.filter(m => m.id !== moduleId));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Module Selection Section */}
        <div className="glass-strong rounded-xl p-6 lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Create Your Custom Bundle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(modulePricingData).map(([moduleId, moduleData]) => (
              <div key={moduleId} className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{moduleData.icon}</span>
                  <h3 className="text-lg font-semibold">{moduleData.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {moduleData.tiers.map((tier) => {
                    const isSelected = selectedModules.some(m => m.id === moduleId && m.tier === tier.name);
                    
                    return (
                      <button
                        key={`${moduleId}-${tier.name}`}
                        className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                          isSelected 
                            ? 'bg-primary/20 border border-primary' 
                            : 'bg-white/5 border border-white/10 hover:bg-white/10'
                        }`}
                        onClick={() => handleModuleSelection(moduleId, tier.name)}
                      >
                        <span className="font-medium">{tier.name}</span>
                        <div className="flex items-center">
                          <span className="mr-2">${tier.price}/mo</span>
                          {isSelected && <Check className="h-4 w-4 text-primary" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section - Docked to the right */}
        <div className="glass-strong rounded-xl p-6 lg:w-1/3 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          
          {selectedModules.length === 0 ? (
            <div className="text-center py-8 text-foreground/70">
              <p>Select modules to view your pricing summary</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {selectedModules.map((module) => (
                  <div key={module.id} className="flex items-center justify-between py-2 border-b border-white/10">
                    <div className="flex-1">
                      <span className="text-lg font-medium block">{module.name}</span>
                      <span className="text-sm text-foreground/70">{module.tier}</span>
                    </div>
                    <div className="flex items-center ml-2">
                      <span className="mr-4">${module.price}</span>
                      <button 
                        className="p-1 rounded-full hover:bg-white/10"
                        onClick={() => handleRemoveModule(module.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Multi-module discount</span>
                    <span>-${discount}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold text-xl pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>${finalTotal}</span>
                </div>
              </div>
              
              <Button className="w-full py-6 text-lg font-semibold">
                Proceed to Payment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleBundleSelector;
