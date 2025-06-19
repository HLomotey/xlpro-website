import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import SlideForm from "@/components/ui/slide-form";
import ContentForm from "./ContentForm";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import ModulesSection from "./sections/ModulesSection";

const Content = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold gradient-text">Content Management</h2>
        <Button className="btn-primary" onClick={openForm}>
          <Plus className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-4 glass-subtle">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4">
          <HeroSection />
        </TabsContent>

        <TabsContent value="features">
          <FeaturesSection />
        </TabsContent>

        <TabsContent value="pricing">
          <PricingSection />
        </TabsContent>

        <TabsContent value="modules">
          <ModulesSection />
        </TabsContent>
      </Tabs>

      {/* Slide-in Form */}
      <SlideForm
        isOpen={isFormOpen}
        onClose={closeForm}
        title="Add New Content"
        width={600}
      >
        <ContentForm onClose={closeForm} />
      </SlideForm>
    </div>
  );
};

export default Content;
