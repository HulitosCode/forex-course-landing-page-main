import { CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Acesso vitalício ao conteúdo completo",
    "Atualizações gratuitas de estratégias",
    "Ferramentas e indicadores premium",
    "Aprenda do zero ao avançado",
  ]

  return (
    <section className="bg-foreground text-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Por Que Escolher Nosso Curso?</h2>
            <p className="text-xl opacity-90">Tudo que você precisa para ter sucesso no Forex</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
