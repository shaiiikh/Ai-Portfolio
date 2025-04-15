import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata = {
  title: "Muhammad Ali Shaikh | AI/ML Engineer",
  description: "AI/ML Engineer, Generative AI Specialist, and MLOps Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'