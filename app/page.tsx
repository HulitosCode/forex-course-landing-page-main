"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, BookOpen, Target, ArrowRight, Zap, BarChart3, Lock, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ForexLandingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 8000,
          reference: `FOREX-${Date.now()}`,
          description: "Curso Completo de Forex - Estratégias Lucrativas",
          customerData: {
            name: "Cliente",
            email: "cliente@email.com",
            whatsapp: "",
            gender: "other",
          },
        }),
      })

      const data = await response.json()

      if (data.payment_url) {
        window.location.href = data.payment_url
      } else {
        alert("Erro ao processar pagamento. Tente novamente.")
      }
    } catch (error) {
      console.error("[v0] Erro ao processar pagamento:", error)
      alert("Erro ao processar pagamento. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-foreground text-background py-3 px-4 text-center">
        <p className="text-sm font-medium">
          <span className="text-primary">⚡</span> <span className="font-bold">OFERTA LIMITADA:</span> Apenas 15 vagas
          restantes com 65% de desconto!
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1.5 font-bold">
              ⚡ Método Comprovado
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Domine o Mercado <span className="text-primary">Forex</span> e Conquiste sua Liberdade Financeira
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Aprenda estratégias lucrativas testadas e aprovadas por traders profissionais. Do zero ao avançado, com
              resultados reais comprovados.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Resultados em 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Conteúdo atualizado</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold line-through text-muted-foreground">23.000 MT</span>
                <span className="text-5xl font-bold text-primary">8.000 MT</span>
                <Badge variant="destructive" className="text-sm font-bold">
                  -65%
                </Badge>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                onClick={handlePayment}
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "🚀 Acessar Módulo Lucrativo Agora"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-muted-foreground mt-3">
                ✓ Acesso imediato • ✓ Pagamento seguro • ✓ Conteúdo completo
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
              <Image
                src="/forex-trading-profit-chart-dashboard-showing-green.jpg"
                alt="Resultados de Trading Forex"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
                +320.000 MT Este Mês
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/50 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">94.7%</p>
                  <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">📚 Conteúdo Completo</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">O Que Você Vai Aprender</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do básico ao avançado, tudo que você precisa para se tornar um trader lucrativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Fundamentos do Forex",
              description:
                "Aprenda os conceitos básicos, terminologias e como funciona o mercado de câmbio global desde o zero",
            },
            {
              icon: BarChart3,
              title: "Análise Técnica Avançada",
              description:
                "Domine gráficos, indicadores, padrões de candlestick e identifique os melhores pontos de entrada e saída",
            },
            {
              icon: Target,
              title: "Estratégias Lucrativas",
              description: "Estratégias testadas e comprovadas com taxa de acerto superior a 85% em operações reais",
            },
            {
              icon: Shield,
              title: "Gerenciamento de Risco",
              description:
                "Proteja seu capital com técnicas profissionais de gestão de risco e money management eficaz",
            },
            {
              icon: Zap,
              title: "Psicologia do Trading",
              description:
                "Controle emocional, disciplina e mentalidade vencedora para operar com consistência e lucrar",
            },
            {
              icon: TrendingUp,
              title: "Operando na Exness",
              description:
                "Setup completo na melhor corretora do mercado, com spreads baixos e execução rápida de ordens",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Results */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground font-bold">💰 Resultados Reais</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Resultados dos Nossos Alunos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja os lucros reais de quem já está transformando sua vida com o Forex
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { profit: "+210.800 MT", period: "Último Mês" },
              { profit: "+391.950 MT", period: "Últimos 3 Meses" },
              { profit: "+155.850 MT", period: "Últimas 2 Semanas" },
              { profit: "+572.275 MT", period: "Últimos 6 Meses" },
              { profit: "+114.175 MT", period: "Primeira Semana" },
              { profit: "+280.850 MT", period: "Último Mês" },
            ].map((result, index) => (
              <Card key={index} className="p-0 border-2 hover:border-primary/50 transition-all overflow-hidden">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={`/forex-profit-chart-showing-.jpg?height=300&width=400&query=forex profit chart showing ${result.profit} gain with green candles and uptrend`}
                    alt={`Lucro de ${result.profit}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {result.profit}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <p className="text-sm font-medium text-foreground">{result.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-foreground text-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Por Que Escolher Nosso Curso?</h2>
              <p className="text-xl opacity-90">Tudo que você precisa para ter sucesso no Forex</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Acesso vitalício ao conteúdo completo",
                "Atualizações gratuitas de estratégias",
                "Ferramentas e indicadores premium",
                "Aprenda do zero ao avançado",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 text-base px-6 py-2 bg-primary text-primary-foreground font-bold">
            🔥 ÚLTIMA CHANCE - VAGAS LIMITADAS
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Comece a Lucrar Hoje Mesmo!</h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não perca esta oportunidade única de transformar sua vida financeira. Junte-se aos traders de sucesso que já
            estão lucrando.
          </p>

          <Card className="p-8 border-4 border-primary/30 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-2">De 23.000 MT por apenas</p>
                <p className="text-5xl font-bold text-primary mb-2">8.000 MT</p>
                <p className="text-sm text-muted-foreground">Oferta válida por tempo limitado</p>
              </div>

              <div className="flex-shrink-0">
                <Button
                  size="lg"
                  className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  onClick={handlePayment}
                  disabled={isLoading}
                >
                  {isLoading ? "Processando..." : "Garantir Minha Vaga Agora"}
                  <Lock className="ml-2 h-6 w-6" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Pagamento 100% seguro via Paysuite</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Conteúdo Completo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Forex Academy. Todos os direitos reservados.</p>
          <p className="mt-2">Trading envolve riscos. Opere com responsabilidade.</p>
        </div>
      </footer>
    </div>
  )
}
