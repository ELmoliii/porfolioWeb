import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { LanguageProvider } from "./components/language-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Alejandro Molinero - Desarrollador Software",
  description:
    "Portafolio de Alejandro Molinero , desarrollador full stack especializado en React, Next.js y tecnologías modernas.",
  keywords: "desarrollador, full stack, React, Next.js, JavaScript, TypeScript, portfolio",
  authors: [{ name: "lejandro Molinero" }],
  openGraph: {
    title: "Alejandro Molinero - Desarrollador Full Stack",
    description:
      "Portafolio de Alejandro Molinero, desarrollador full stack especializado en React, Next.js y tecnologías modernas.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
