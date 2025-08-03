import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Twitter, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin,
  Zap
} from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#features" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Modelos de IA", href: "#ai-models" },
        { label: "Integrações", href: "#integrations" },
        { label: "Preços", href: "#pricing" },
      ]
    },
    {
      title: "Soluções",
      links: [
        { label: "Barbearias", href: "#barbershop" },
        { label: "Restaurantes", href: "#restaurant" },
        { label: "Hotéis", href: "#hotel" },
        { label: "E-commerce", href: "#ecommerce" },
        { label: "Personalizado", href: "#custom" },
      ]
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentação", href: "#docs" },
        { label: "API Reference", href: "#api" },
        { label: "Tutoriais", href: "#tutorials" },
        { label: "Webinars", href: "#webinars" },
        { label: "Suporte", href: "#support" },
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Carreiras", href: "#careers" },
        { label: "Imprensa", href: "#press" },
        { label: "Contato", href: "#contact" },
      ]
    }
  ];

  return (
    <footer className="relative border-t border-border/30 bg-gradient-ai-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-20 w-40 h-40 bg-ai-purple/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-20 w-60 h-60 bg-ai-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-muted-foreground mb-6">
              Receba atualizações sobre novos modelos de IA, recursos e dicas para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-card/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
              />
              <Button className="bg-gradient-ai-primary hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 mr-2" />
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-ai-primary flex items-center justify-center ai-glow">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold ai-gradient-text">AI Connect</span>
                <p className="text-xs text-muted-foreground">Business Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              A plataforma mais completa para conectar seu negócio aos melhores modelos de IA do mercado. 
              Automatize, otimize e transforme sua empresa com inteligência artificial.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@aiconnect.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 AI Connect Business Platform. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group"
              >
                <Zap className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacidade
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                Termos
              </a>
              <a href="#cookies" className="hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};