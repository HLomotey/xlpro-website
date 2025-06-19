
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">X</span>
            </div>
            <span className="text-xl font-bold gradient-text">xlPro</span>
          </div>
          <p className="text-foreground/70 mb-4">
            Empowering businesses with integrated enterprise solutions
          </p>
          <div className="flex justify-center space-x-8 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-foreground/50 text-sm">
              © 2024 xlPro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
