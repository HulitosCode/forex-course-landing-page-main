"use client"

import { HeroSection } from "@/components/hero-section"
import { LearningPathSection } from "@/components/learning-path-section"
import { ResultsSection } from "@/components/results-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"

export default function ForexLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-yellow-500 text-background py-3 px-4 text-center">
        <p className="text-sm font-medium">
          <span className="text-primary">⚡</span>{" "}
          <span className="font-bold">OFERTA LIMITADA:</span> Apenas 15 vagas restantes com 65% de desconto!
        </p>
      </div>

      <HeroSection />

      {/* 🎥 Vídeo hospedado localmente */}
      <section className="flex justify-center py-8 px-4 bg-muted/20">
        <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      <LearningPathSection />
      <ResultsSection />
      <BenefitsSection />
      <CTASection />

      <footer className="bg-muted/30 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mt-2">Trading envolve riscos. Opere com responsabilidade.</p>
        </div>
      </footer>
    </div>
  )
}
