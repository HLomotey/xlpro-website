
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import modular components
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import QuickLinks from '@/components/contact/QuickLinks';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information and Quick Links */}
              <div className="space-y-8">
                <ContactInfo />
                <QuickLinks />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
