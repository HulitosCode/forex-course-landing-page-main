"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield, CheckCircle2, Zap } from "lucide-react"


export function CTASection() {
  
    const handlePayment = async () => {
      const paymentRes = await fetch('/api/payment', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 650,
          reference: `FOREX${Date.now()}`,
          description: "Curso Completo de Forex - Estratégias Lucrativas"
        })
      })
  
      const paymentData = await paymentRes.json()
  
      if (paymentData?.data?.checkout_url) {
        window.location.href = paymentData.data.checkout_url
      }
    }

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 text-base px-6 py-2 bg-yellow-500 text-primary-foreground font-bold">
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
              <p className="text-sm text-muted-foreground mb-2">De 1000 MT por apenas</p>
              <p className="text-5xl font-bold text-yellow-500 mb-2">650 MT</p>
              <p className="text-sm text-muted-foreground">Oferta válida por tempo limitado</p>
            </div>

            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-yellow-500 hover:bg-primary/90 text-primary-foreground font-bold"
                onClick={handlePayment}
              >
                Garantir Minha Vaga Agora
                <Lock className="ml-2 h-6 w-6" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">Pagamento 100% seguro</p>
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
  )
}
