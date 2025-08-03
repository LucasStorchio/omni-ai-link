import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  MessageCircle,
  Settings,
  Brain,
  Zap,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30">
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard Inteligente
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Controle Total do Seu
            <span className="block ai-gradient-text">Negócio em Tempo Real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dashboard adaptativo que muda automaticamente baseado no seu tipo de negócio, 
            fornecendo insights precisos e ações inteligentes.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="barbershop" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="barbershop" className="text-sm">Barbearia</TabsTrigger>
            <TabsTrigger value="restaurant" className="text-sm">Restaurante</TabsTrigger>
            <TabsTrigger value="hotel" className="text-sm">Hotel</TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-sm">E-commerce</TabsTrigger>
          </TabsList>

          {/* Barbershop Dashboard */}
          <TabsContent value="barbershop" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
                    <Calendar className="w-4 h-4 text-ai-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    +12% vs ontem
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Mensagens IA</CardTitle>
                    <MessageCircle className="w-4 h-4 text-ai-purple" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">
                    <Activity className="w-3 h-3 inline mr-1" />
                    98% resolvidas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Receita Hoje</CardTitle>
                    <BarChart3 className="w-4 h-4 text-ai-cyan" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 2.847</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    +8% vs ontem
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Satisfação</CardTitle>
                    <Users className="w-4 h-4 text-ai-neural" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.9★</div>
                  <p className="text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                    97% positivo
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* AI Assistant Status */}
              <Card className="lg:col-span-2 bg-gradient-card border-border/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        Assistente IA - Status
                      </CardTitle>
                      <CardDescription>Monitoramento em tempo real das interações</CardDescription>
                    </div>
                    <Badge className="bg-ai-success/20 text-ai-success border-ai-success/30">
                      <Activity className="w-3 h-3 mr-1" />
                      Ativo
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Conversas Ativas</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-ai-blue h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Taxa de Resolução</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-ai-success h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Últimas Interações</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                        <CheckCircle className="w-4 h-4 text-ai-success" />
                        <span className="text-sm">Agendamento realizado - João Silva</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 min atrás</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                        <Clock className="w-4 h-4 text-ai-warning" />
                        <span className="text-sm">Reagendamento solicitado - Maria Santos</span>
                        <span className="text-xs text-muted-foreground ml-auto">5 min atrás</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-card border-border/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Ações Rápidas
                  </CardTitle>
                  <CardDescription>Configurações e automações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-primary/10 hover:bg-primary/20 text-primary border-primary/30" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar IA
                  </Button>
                  <Button className="w-full justify-start bg-ai-blue/10 hover:bg-ai-blue/20 text-ai-blue border-ai-blue/30" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Settings
                  </Button>
                  <Button className="w-full justify-start bg-ai-purple/10 hover:bg-ai-purple/20 text-ai-purple border-ai-purple/30" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Horários
                  </Button>
                  <Button className="w-full justify-start bg-ai-cyan/10 hover:bg-ai-cyan/20 text-ai-cyan border-ai-cyan/30" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Relatórios
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Restaurant Dashboard */}
          <TabsContent value="restaurant" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pedidos iFood</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+23% vs ontem</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">IA Atendimentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">189</div>
                  <p className="text-xs text-muted-foreground">95% resolvidas</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Receita</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 5.234</div>
                  <p className="text-xs text-muted-foreground">+15% vs ontem</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28min</div>
                  <p className="text-xs text-muted-foreground">-5min vs ontem</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Hotel Dashboard */}
          <TabsContent value="hotel" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Quartos Ocupados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142/160</div>
                  <p className="text-xs text-muted-foreground">89% ocupação</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Check-ins IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-muted-foreground">100% automatizados</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Receita</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 18.567</div>
                  <p className="text-xs text-muted-foreground">+7% vs ontem</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Satisfação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8★</div>
                  <p className="text-xs text-muted-foreground">96% positivo</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* E-commerce Dashboard */}
          <TabsContent value="ecommerce" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Vendas IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 12.847</div>
                  <p className="text-xs text-muted-foreground">+34% vs ontem</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conversões</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23.4%</div>
                  <p className="text-xs text-muted-foreground">+8.2% vs média</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Suporte IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">267</div>
                  <p className="text-xs text-muted-foreground">94% resolvidos</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/30 hover:shadow-neural transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 487</div>
                  <p className="text-xs text-muted-foreground">+12% vs ontem</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-ai-primary hover:scale-105 transition-transform ai-glow">
            Acessar Dashboard Completo
          </Button>
        </div>
      </div>
    </section>
  );
};