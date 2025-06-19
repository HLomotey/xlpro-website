
import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">X</span>
            </div>
            <span className="text-xl font-bold gradient-text">xlPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#modules" className="text-foreground/80 hover:text-foreground transition-colors">
              Modules
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="glass-subtle">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="btn-glass">
              Sign In
            </Button>
            <Button className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass-subtle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-6 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-6">
              <a 
                href="#features" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#modules" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </a>
              <a 
                href="#pricing" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-3">
              <Button variant="ghost" className="btn-glass justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="btn-primary justify-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
