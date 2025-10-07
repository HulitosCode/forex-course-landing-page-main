import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-20 w-20 text-primary" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-foreground">Pagamento Confirmado com Sucesso! 🎉</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Parabéns! Seu acesso ao <strong>Curso Completo de Forex</strong> está liberado. Clique no botão abaixo para
          começar sua jornada lucrativa agora mesmo!
        </p>

        <Link href="https://shared-picture-096.notion.site/A-Estrategia-Secreta-para-Lucrar-Online-28483f0c1907803a9355ce6d2ced7981?pvs=73">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-3 rounded-xl shadow-md transition-all duration-300">
            🚀 Acessar Curso Agora
          </Button>
        </Link>

        <p className="mt-6 text-sm text-muted-foreground bg-card p-3 rounded-lg shadow-sm border">
          💡 <strong>Dica:</strong> Salve este link em um lugar seguro. Assim, você poderá acessar seu conteúdo sempre
          que precisar.
        </p>
      </div>
    </div>
  )
}
