import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Play, Eye } from 'lucide-react';
import DashboardPreview from '@/components/modules/DashboardPreview';
import { modules } from '@/components/modules/ModulesData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ModuleDetails = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'video'>('dashboard');
  
  // Find the module data
  const module = modules.find(m => m.id === moduleId);
  
  // If module not found, redirect to modules page
  useEffect(() => {
    if (!module && moduleId) {
      navigate('/modules');
    }
  }, [module, moduleId, navigate]);
  
  if (!module) return null;
  
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-2xl overflow-hidden mb-8 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h1 className="text-3xl font-bold gradient-text">{module.name}</h1>
                <p className="text-foreground/70 mt-1">{module.description}</p>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/modules')} 
                className="glass-subtle"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <Button
                variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
                className={`rounded-none px-6 py-3 ${activeTab === 'dashboard' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <Eye className="mr-2 h-4 w-4" />
                Dashboard Preview
              </Button>
              <Button
                variant={activeTab === 'video' ? 'default' : 'ghost'}
                className={`rounded-none px-6 py-3 ${activeTab === 'video' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('video')}
              >
                <Play className="mr-2 h-4 w-4" />
                Video Demo
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'dashboard' ? (
                <div className="h-[600px]">
                  <DashboardPreview moduleId={moduleId || ''} />
                </div>
              ) : (
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center h-[600px]">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">Video demo coming soon</p>
                    <p className="text-white/50 text-sm mt-2">Preview of {module.name} functionality</p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="p-6 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {module.features.map((feature, index) => (
                  <div key={index} className="glass-subtle rounded-lg p-3 text-center">
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional module information */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">About {module.name}</h2>
            <p className="mb-4">
              The {module.name} module provides comprehensive tools designed to streamline your business operations.
              With an intuitive interface and powerful features, it helps you manage all aspects of your {module.name.toLowerCase()} processes efficiently.
            </p>
            <p className="mb-4">
              This module integrates seamlessly with other xlPro modules, allowing for a unified workflow across your entire organization.
              Data flows automatically between modules, eliminating manual data entry and reducing errors.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Specifications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time data processing and analytics</li>
              <li>Cloud-based storage with secure encryption</li>
              <li>Mobile-responsive interface for on-the-go access</li>
              <li>Customizable dashboards and reports</li>
              <li>API integration capabilities with third-party services</li>
            </ul>
            
            <div className="mt-8">
              <Button 
                className="btn-primary mr-4"
                onClick={() => navigate('/pricing')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="btn-glass"
                onClick={() => navigate('/contact')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ModuleDetails;
