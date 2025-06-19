import React, { useState } from "react";
import { Menu, X, Search, User, ChevronDown, Play, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Module navigation is now handled through routes

const modules = [
  { id: "accounting", name: "Accounting & Finance", icon: "📊" },
  { id: "inventory", name: "Inventory Management", icon: "📦" },
  { id: "crm", name: "CRM System", icon: "👥" },
  { id: "fleet", name: "Fleet Management", icon: "🚚" },
  { id: "analytics", name: "Analytics Dashboard", icon: "📈" },
  { id: "hr", name: "HR Management", icon: "👨‍💼" },
  { id: "payroll", name: "Payroll Management", icon: "💰" },
  { id: "hospital", name: "Hospital Management", icon: "🏥" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleModuleSelect = (moduleId: string) => {
    navigate(`/modules/${moduleId}`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">X</span>
              </div>
              <span className="text-xl font-bold gradient-text">xlPro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </Link>

              {/* Modules Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Modules <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 glass-strong border border-white/20">
                  {modules.map((module) => (
                    <DropdownMenuItem
                      key={module.id}
                      className="flex items-center space-x-3 cursor-pointer hover:bg-white/10"
                      onClick={() => handleModuleSelect(module.id)}
                    >
                      <span className="text-lg">{module.icon}</span>
                      <div className="flex-1">
                        <span className="text-foreground">{module.name}</span>
                      </div>
                      <div className="flex space-x-1">
                        <Eye className="h-4 w-4 text-blue-400" />
                        <Play className="h-4 w-4 text-green-400" />
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/pricing"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="glass-subtle">
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="btn-glass"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
              <Button className="btn-primary" onClick={() => navigate("/auth")}>
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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 glass-card p-6 animate-fade-in">
              <nav className="flex flex-col space-y-4 mb-6">
                <Link
                  to="/features"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/futuristic-hero"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  3D Hero
                </Link>
                <Link
                  to="/pricing"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  className="btn-glass justify-start"
                  onClick={() => navigate("/auth")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  className="btn-primary justify-start"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Module details are now shown on a separate page */}
    </>
  );
};

export default Header;
