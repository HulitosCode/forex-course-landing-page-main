import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("[v0] Creating payment with data:", body)

    const apiKey = process.env.PAYSUITE_API_KEY
    if (!apiKey) {
      console.error("[v0] PAYSUITE_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "Configuração de pagamento inválida. Por favor, configure PAYSUITE_API_KEY nas variáveis de ambiente.",
        },
        { status: 500 },
      )
    }

    console.log("[v0] API Key exists:", apiKey ? `${apiKey.substring(0, 10)}...` : "NOT SET")

    const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL
    if (!baseUrl) {
      console.error("[v0] BASE_URL is not configured")
      return NextResponse.json(
        { error: "Configuração de URL inválida. Por favor, configure BASE_URL ou NEXT_PUBLIC_BASE_URL." },
        { status: 500 },
      )
    }

    console.log("[v0] Making request to Paysuite API...")

    const response = await fetch("https://paysuite.tech/api/v1/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        amount: body.amount,
        reference: body.reference,
        description: body.description,
        return_url: `${baseUrl}/sucesso`,
        callback_url: `${baseUrl}/api/webhook`,
      }),
    })

    const data = await response.json()

    console.log("[v0] Paysuite response status:", response.status)
    console.log("[v0] Paysuite response data:", data)

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Erro na API de pagamento" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Erro no endpoint de pagamento:", error)
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 })
  }
}
