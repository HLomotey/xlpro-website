import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have questions about xlPro? We're here to help. Reach out to our team for support, demos, or partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
