
import React from 'react';
import { ArrowRight, Play, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/ui/hero-carousel';

const Hero = () => {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Enterprise Solutions Reimagined",
      subtitle: "Streamline your business operations with xlPro's comprehensive suite of modular enterprise tools. Built for scale, designed for simplicity."
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Digital Transformation Made Simple",
      subtitle: "Transform your business with cutting-edge technology solutions that drive growth and efficiency across every department."
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Operational Excellence Delivered",
      subtitle: "Optimize workflows, reduce costs, and boost productivity with our intelligent automation and analytics platform."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Business Automation at Scale",
      subtitle: "Scale your operations seamlessly with our cloud-native platform designed for enterprise-grade performance and reliability."
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Innovation Powered by AI",
      subtitle: "Leverage artificial intelligence and machine learning to unlock new possibilities and stay ahead of the competition."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Hero Carousel Background */}
      <HeroCarousel slides={heroSlides} autoPlayInterval={6000} />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center glass-card px-4 py-2 mb-6 animate-fade-in">
            <Zap className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium">Powering Enterprise Excellence</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-primary text-lg px-8 py-4 group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="btn-glass text-lg px-8 py-4 group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="glass-card p-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-blue-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-purple-400" />
                <span>Lightning Fast Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
