"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { LearningPathSection } from "@/components/learning-path-section"
import { ResultsSection } from "@/components/results-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"

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
          amount: 1,
          reference: `FOREX-${Date.now()}`,
          description: "Curso Completo de Forex - Estratégias Lucrativas",
        }),
      })

      const data = await response.json()

      if (data.payment_url) {
        window.location.href = data.payment_url
      } else {
        alert("Erro ao processar pagamento. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao processar pagamento:", error)
      alert("Erro ao processar pagamento. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-yellow-500 text-background py-3 px-4 text-center">
        <p className="text-sm font-medium ">
          <span className="text-primary">⚡</span> <span className="font-bold">OFERTA LIMITADA:</span> Apenas 15 vagas
          restantes com 65% de desconto!
        </p>
      </div>

      <HeroSection onPayment={handlePayment} isLoading={isLoading} />
      <LearningPathSection />
      <ResultsSection />
      <BenefitsSection />
      <CTASection onPayment={handlePayment} isLoading={isLoading} />

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mt-2">Trading envolve riscos. Opere com responsabilidade.</p>
        </div>
      </footer>
    </div>
  )
}
