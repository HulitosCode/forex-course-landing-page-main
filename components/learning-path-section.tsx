import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, BarChart3, Target, Shield, Zap, TrendingUp } from "lucide-react"

export function LearningPathSection() {
  const learningModules = [
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
      description: "Proteja seu capital com técnicas profissionais de gestão de risco e money management eficaz",
    },
    {
      icon: Zap,
      title: "Psicologia do Trading",
      description: "Controle emocional, disciplina e mentalidade vencedora para operar com consistência e lucrar",
    },
    {
      icon: TrendingUp,
      title: "Operando na Exness",
      description: "Setup completo na melhor corretora do mercado, com spreads baixos e execução rápida de ordens",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary text-primary-foreground font-bold">📚 Conteúdo Completo</Badge>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">O Que Você Vai Aprender</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Do básico ao avançado, tudo que você precisa para se tornar um trader lucrativo
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningModules.map((item, index) => (
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
  )
}
