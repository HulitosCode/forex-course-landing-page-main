"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react"
import Image from "next/image"


export function HeroSection() {

  const handlePayment = async () => {
    const paymentRes = await fetch('/api/payment', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 350,
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="bg-yellow-500 text-primary-foreground border-0 px-4 py-1.5 font-bold">
            ⚡ Método Comprovado
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Domine o Mercado <span className="text-yellow-500">Forex</span> e Conquiste sua Liberdade Financeira
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
              <span className="text-3xl font-bold line-through text-muted-foreground">1000 MT</span>
              <span className="text-5xl font-bold text-yellow-500">350 MT</span>
              <Badge variant="destructive" className="text-sm font-bold">
                -65%
              </Badge>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-yellow-500 hover:bg-primary/90 text-primary-foreground font-bold"
              onClick={handlePayment}
            >
              🚀 Acessar Módulo Lucrativo Agora"
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
              src="/f5.png"
              alt="Resultados de Trading Forex"
              width={800}
              height={600}
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
              +60.000 MT Este Mês
            </div>
          </div>

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
  )
}
