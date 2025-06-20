import React from 'react';

interface ModulesHeroProps {
  className?: string;
}

const ModulesHero: React.FC<ModulesHeroProps> = ({ className }) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Enterprise Modules
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose from our comprehensive suite of business modules. Each module is designed to integrate seamlessly with your existing workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesHero;
