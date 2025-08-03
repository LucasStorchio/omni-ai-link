import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Brain, 
  Settings, 
  BarChart3, 
  Webhook, 
  MessageCircle,
  LogIn
} from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Recursos", href: "#features", icon: Settings },
    { label: "Dashboard", href: "#dashboard", icon: BarChart3 },
    { label: "Integrações", href: "#integrations", icon: Webhook },
    { label: "Contato", href: "#contact", icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-ai-primary flex items-center justify-center ai-glow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold ai-gradient-text">AI Connect</span>
              <span className="text-xs text-muted-foreground -mt-1">Business Platform</span>
            </div>
            <Badge variant="outline" className="ml-2 text-xs border-primary/30">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-primary transition-colors" />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-primary/30">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button size="sm" className="bg-gradient-ai-primary hover:scale-105 transition-transform ai-glow">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/30 py-4 space-y-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-primary/30">
                <LogIn className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button className="w-full bg-gradient-ai-primary">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};