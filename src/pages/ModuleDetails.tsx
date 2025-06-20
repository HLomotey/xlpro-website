import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Play, Eye, Info } from 'lucide-react';
import DashboardPreview from '@/components/modules/DashboardPreview';
import { modules } from '@/components/modules/ModulesData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ModuleDetails = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'dashboard' | 'video'>('about');
  
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
      
      <main className="pt-24 pb-16 w-full">
        <div className="w-full px-6">
          <div className="glass-strong rounded-2xl overflow-hidden mb-8 shadow-lg w-full">
            {/* Header */}
            <div className="flex items-center p-6 border-b border-white/10">
              <div>
                <h1 className="text-3xl font-bold gradient-text">{module.name}</h1>
                <p className="text-foreground/70 mt-1">{module.description}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <Button
                variant={activeTab === 'about' ? 'default' : 'ghost'}
                className={`rounded-none px-6 py-3 ${activeTab === 'about' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                <Info className="mr-2 h-4 w-4" />
                About
              </Button>
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
              {activeTab === 'about' && (
                <div className="h-[600px] overflow-y-auto">
                  <div className="flex flex-col lg:flex-row gap-8 w-full">
                    {/* Left column: About content */}
                    <div className="lg:w-3/5">
                      <h2 className="text-2xl font-bold mb-4">About {module.name}</h2>
                      <p className="mb-4">
                        The {module.name} module provides comprehensive tools designed to streamline your business operations.
                        With an intuitive interface and powerful features, it helps you manage all aspects of your {module.name.toLowerCase()} processes efficiently.
                      </p>
                      <p className="mb-6">
                        This module integrates seamlessly with other xlPro modules, allowing for a unified workflow across your entire organization.
                        Data flows automatically between modules, eliminating manual data entry and reducing errors.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Technical Specifications</h3>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Real-time data processing and analytics</li>
                        <li>Cloud-based storage with secure encryption</li>
                        <li>Mobile-responsive interface for on-the-go access</li>
                        <li>Customizable dashboards and reports</li>
                        <li>API integration capabilities with third-party services</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="glass-subtle p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Increased Efficiency</h4>
                          <p className="text-sm text-foreground/80">Automate routine tasks and streamline workflows to save time and reduce errors.</p>
                        </div>
                        <div className="glass-subtle p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Data-Driven Decisions</h4>
                          <p className="text-sm text-foreground/80">Access real-time analytics and comprehensive reports to make informed business decisions.</p>
                        </div>
                        <div className="glass-subtle p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Seamless Integration</h4>
                          <p className="text-sm text-foreground/80">Connect with other xlPro modules and third-party services for a unified business ecosystem.</p>
                        </div>
                        <div className="glass-subtle p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Scalable Solution</h4>
                          <p className="text-sm text-foreground/80">Grow your business without outgrowing your software - scales with your needs.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column: Request form */}
                    <div className="glass-card p-6 rounded-xl lg:w-2/5 h-fit sticky top-6">
                      <h2 className="text-2xl font-bold mb-4">Request Information</h2>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input 
                              type="text" 
                              className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input 
                              type="text" 
                              className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <input 
                            type="email" 
                            className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Company</label>
                          <input 
                            type="text" 
                            className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Message</label>
                          <textarea 
                            rows={4} 
                            className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder={`I'm interested in learning more about the ${module.name} module...`}
                          />
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button 
                            className="btn-primary"
                            type="submit"
                          >
                            Submit Request
                          </Button>
                          <Button 
                            variant="outline" 
                            className="btn-glass"
                            onClick={() => navigate('/pricing')}
                            type="button"
                          >
                            View Pricing
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'dashboard' && (
                <div className="h-[600px]">
                  <DashboardPreview moduleId={moduleId || ''} />
                </div>
              )}
              
              {activeTab === 'video' && (
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
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ModuleDetails;
