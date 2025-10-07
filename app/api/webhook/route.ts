import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("[v0] Webhook received:", body)

    // Aqui você pode processar o webhook do Paysuite
    // Por exemplo, atualizar o status do pagamento no banco de dados

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Erro no webhook:", error)
    return NextResponse.json({ error: "Erro ao processar webhook" }, { status: 500 })
  }
}
