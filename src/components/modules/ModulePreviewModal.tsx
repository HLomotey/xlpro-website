import React from "react";
import { Button } from "@/components/ui/button";
import ModulePreview from "./ModulePreview";
import { modules } from "./ModulesData";

interface ModulePreviewModalProps {
  selectedModule: string | null;
  onClose: () => void;
}

const ModulePreviewModal: React.FC<ModulePreviewModalProps> = ({
  selectedModule,
  onClose,
}) => {
  if (!selectedModule) return null;

  const module = modules.find((m) => m.id === selectedModule);

  if (!module) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2">
      <div className="bg-background rounded-lg shadow-2xl max-w-[95vw] w-full max-h-[95vh] min-w-[80vw] overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-2xl font-bold gradient-text">
            {module.name} Module
          </h2>
          <Button variant="ghost" onClick={onClose} className="glass-subtle">
            Close
          </Button>
        </div>
        <div className="h-[calc(95vh-120px)]">
          <ModulePreview moduleId={selectedModule} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ModulePreviewModal;
