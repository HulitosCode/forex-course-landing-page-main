import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Curso Completo de Forex - Estratégias Lucrativas",
  description:
    "Aprenda a operar no mercado Forex do zero ao avançado. Estratégias comprovadas, resultados reais e suporte completo.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <GoogleAnalytics gaId="G-KG5X0KW8ZT" />
      </body>
    </html>
  )
}
