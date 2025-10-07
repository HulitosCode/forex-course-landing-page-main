"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function ResultsSection() {
  const results = [
    { image: "/f1.png" },
    { image: "/f2.png" },
    { image: "/f3.png" },
    { image: "/f4.png" },
    { image: "/f5.png" },
    { image: "/f6.png" },
    { image: "/f7.png" },
    { image: "/f8.png" },
    { image: "/f9.png" },
    { image: "/f10.png" },
    { image: "/f11.png" },
    { image: "/f12.png" },
    { image: "/f13.png" },
    { image: "/f14.png" },
    { image: "/f15.png" },
    { image: "/f16.png" },
    { image: "/f17.png" },
    { image: "/f18.png" },
    { image: "/f19.png" },
    { image: "/f20.png" },
    { image: "/f21.png" },
    { image: "/f22.png" },
    { image: "/f23.jpg" },
  ]

  const [showAll, setShowAll] = useState(false)
  const displayedResults = showAll ? results : results.slice(0, 6)

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">💰 Resultados Reais</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Resultados dos Nossos Alunos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja os lucros reais de quem já está transformando sua vida com o Forex
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedResults.map((result, index) => (
            <Card key={index} className="p-0 border-2 hover:border-primary/50 transition-all overflow-hidden">
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 aspect-[4/3]">
                <Image
                  src={result.image || "/placeholder.svg"}
                  alt={`Resultado de trading ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>

        {!showAll && results.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
            >
              Ver Mais Resultados
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
