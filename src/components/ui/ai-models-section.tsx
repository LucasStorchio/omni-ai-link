import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Mic, 
  Video,
  Code,
  Zap,
  Sparkles,
  Crown,
  Star
} from "lucide-react";

const aiModels = [
  {
    category: "Texto & Conversação",
    icon: MessageSquare,
    gradient: "from-ai-purple to-ai-blue",
    models: [
      { name: "GPT-4 Turbo", provider: "OpenAI", capability: "Conversação avançada", status: "premium" },
      { name: "Claude 3.5", provider: "Anthropic", capability: "Análise e raciocínio", status: "premium" },
      { name: "Gemini Pro", provider: "Google", capability: "Multimodal", status: "popular" },
      { name: "LLaMA 3", provider: "Meta", capability: "Open source", status: "free" },
    ]
  },
  {
    category: "Geração de Imagens",
    icon: Image,
    gradient: "from-ai-blue to-ai-cyan",
    models: [
      { name: "DALL-E 3", provider: "OpenAI", capability: "Arte e design", status: "premium" },
      { name: "Midjourney", provider: "Midjourney", capability: "Arte criativa", status: "premium" },
      { name: "Stable Diffusion", provider: "Stability", capability: "Customizável", status: "popular" },
      { name: "Flux", provider: "Black Forest", capability: "Realismo", status: "new" },
    ]
  },
  {
    category: "Áudio & Voz",
    icon: Mic,
    gradient: "from-ai-cyan to-ai-neural",
    models: [
      { name: "Whisper", provider: "OpenAI", capability: "Transcrição", status: "popular" },
      { name: "ElevenLabs", provider: "ElevenLabs", capability: "Síntese de voz", status: "premium" },
      { name: "Murf AI", provider: "Murf", capability: "Voiceover", status: "popular" },
      { name: "AssemblyAI", provider: "Assembly", capability: "Speech-to-text", status: "free" },
    ]
  },
  {
    category: "Vídeo & Análise",
    icon: Video,
    gradient: "from-ai-neural to-ai-purple",
    models: [
      { name: "Runway Gen-3", provider: "Runway", capability: "Geração de vídeo", status: "premium" },
      { name: "Pika Labs", provider: "Pika", capability: "Video AI", status: "new" },
      { name: "Synthesia", provider: "Synthesia", capability: "Avatar videos", status: "premium" },
      { name: "Luma AI", provider: "Luma", capability: "3D capture", status: "popular" },
    ]
  },
  {
    category: "Código & Automação",
    icon: Code,
    gradient: "from-ai-purple to-ai-blue",
    models: [
      { name: "GitHub Copilot", provider: "GitHub", capability: "Assistente de código", status: "premium" },
      { name: "Codeium", provider: "Codeium", capability: "Code completion", status: "free" },
      { name: "Tabnine", provider: "Tabnine", capability: "AI coding", status: "popular" },
      { name: "Replit Ghostwriter", provider: "Replit", capability: "Pair programming", status: "popular" },
    ]
  },
  {
    category: "Análise de Dados",
    icon: Brain,
    gradient: "from-ai-blue to-ai-cyan",
    models: [
      { name: "DataRobot", provider: "DataRobot", capability: "ML automático", status: "premium" },
      { name: "H2O.ai", provider: "H2O", capability: "Analytics", status: "popular" },
      { name: "Hugging Face", provider: "HF", capability: "Transformers", status: "free" },
      { name: "MonkeyLearn", provider: "MonkeyLearn", capability: "Text analysis", status: "popular" },
    ]
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "premium":
      return <Badge className="bg-ai-neural/20 text-ai-neural border-ai-neural/30"><Crown className="w-3 h-3 mr-1" />Premium</Badge>;
    case "popular":
      return <Badge className="bg-ai-blue/20 text-ai-blue border-ai-blue/30"><Star className="w-3 h-3 mr-1" />Popular</Badge>;
    case "new":
      return <Badge className="bg-ai-cyan/20 text-ai-cyan border-ai-cyan/30"><Sparkles className="w-3 h-3 mr-1" />Novo</Badge>;
    case "free":
      return <Badge className="bg-ai-success/20 text-ai-success border-ai-success/30"><Zap className="w-3 h-3 mr-1" />Grátis</Badge>;
    default:
      return null;
  }
};

export const AIModelsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30">
            <Brain className="w-4 h-4 mr-2" />
            Modelos de IA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todos os Modelos de IA
            <span className="block ai-gradient-text">Em Uma Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se aos melhores modelos de IA do mercado. De GPT-4 a DALL-E, de Whisper a Runway. 
            Tudo integrado e pronto para usar em seu negócio.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiModels.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 bg-gradient-card border-border/30 hover:shadow-neural"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center ai-glow`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <CardDescription className="text-sm">
                        {category.models.length} modelos disponíveis
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-3">
                  {category.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{model.name}</span>
                          {getStatusBadge(model.status)}
                        </div>
                        <p className="text-xs text-muted-foreground">{model.provider} • {model.capability}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-primary/30 hover:bg-primary/10 text-primary"
                  >
                    Configurar Modelos
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold ai-gradient-text mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Modelos de IA</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold ai-gradient-text mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Provedores</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold ai-gradient-text mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold ai-gradient-text mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Suporte</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto Para Começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Configure sua primeira IA em menos de 5 minutos. 
              Basta conectar sua API key e começar a automatizar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-gradient-ai-primary hover:scale-105 transition-transform ai-glow">
                Começar Configuração
              </Button>
              <Button variant="outline" className="border-primary/30">
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};