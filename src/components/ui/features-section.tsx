import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scissors, 
  UtensilsCrossed, 
  Hotel, 
  ShoppingBag, 
  MessageCircle, 
  Calendar,
  Webhook,
  BarChart3,
  Settings,
  Smartphone,
  Zap,
  Network
} from "lucide-react";

const businessTypes = [
  {
    icon: Scissors,
    title: "Barbearias",
    description: "Sistema inteligente de agendamentos conectado ao WhatsApp",
    features: ["Agendamento automático", "Notificações inteligentes", "Gestão de horários"],
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "IA conectada ao iFood com cardápio e pedidos automatizados",
    features: ["Integração iFood", "Cardápio inteligente", "Atendimento 24/7"],
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: Hotel,
    title: "Hotéis",
    description: "Sistema de reservas e check-in totalmente automatizado",
    features: ["Reservas automáticas", "Check-in inteligente", "Gestão de quartos"],
    gradient: "from-ai-cyan to-ai-neural",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Vendas automatizadas com IA personalizada para cada cliente",
    features: ["Vendas inteligentes", "Suporte 24/7", "Recomendações IA"],
    gradient: "from-ai-neural to-ai-purple",
  },
];

const platformFeatures = [
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Conecte facilmente seus clientes via WhatsApp com IA avançada",
  },
  {
    icon: Calendar,
    title: "Sistema de Follow-up",
    description: "Acompanhamento automático e personalizado de cada cliente",
  },
  {
    icon: Webhook,
    title: "Webhooks & APIs",
    description: "Conecte com qualquer sistema existente através de APIs robustas",
  },
  {
    icon: BarChart3,
    title: "Dashboard Inteligente",
    description: "Analytics avançados e insights em tempo real do seu negócio",
  },
  {
    icon: Settings,
    title: "Automações n8n",
    description: "Crie fluxos complexos e automações personalizadas",
  },
  {
    icon: Smartphone,
    title: "Multi-plataforma",
    description: "Funciona em qualquer dispositivo, a qualquer hora",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30">
            <Zap className="w-4 h-4 mr-2" />
            Soluções Para Todos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            IA Personalizada Para
            <span className="block ai-gradient-text">Cada Tipo de Negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma se adapta automaticamente às necessidades específicas do seu segmento, 
            oferecendo soluções inteligentes e personalizadas.
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {businessTypes.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 bg-gradient-card border-border/30 hover:shadow-neural"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-ai-primary flex items-center justify-center mb-4 ai-glow">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{business.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2">
                    {business.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Features */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30">
            <Network className="w-4 h-4 mr-2" />
            Recursos da Plataforma
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Tudo Que Você Precisa
            <span className="block ai-gradient-text">Em Uma Plataforma</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-gradient-card border-border/30 hover:shadow-card-ai"
              >
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};