import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Network } from "lucide-react";
import heroBackground from "@/assets/ai-hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="AI Network Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-ai-hero opacity-80" />
      </div>

      {/* Efeitos visuais */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-ai-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-cyan/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-blue/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 border border-border/30 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Plataforma de IA Completa</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Conecte Seu
            <span className="block ai-gradient-text">
              Negócio à IA
            </span>
            do Futuro
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A plataforma completa que conecta barbeiros, restaurantes, hotéis e qualquer negócio 
            aos modelos de IA mais avançados do mercado. Automação inteligente para todos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="ai-glow text-lg px-8 py-6 bg-gradient-ai-primary hover:scale-105 transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-ai-cyan" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-muted-foreground">Modelos de IA</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Network className="w-6 h-6 text-ai-purple" />
                <span className="text-3xl font-bold">1000+</span>
              </div>
              <p className="text-muted-foreground">Integrações</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-6 h-6 text-ai-neural" />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-muted-foreground">Automatização</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};