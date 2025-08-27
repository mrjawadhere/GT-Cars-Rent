import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "GT Cars Rent - Premium Car Rental Service in Dubai",
  description:
    "Experience luxury and comfort with GT Cars Rent. Premium vehicles for business trips, weddings, and special occasions at unbeatable rates in Dubai, UAE.",
  generator: "v0.app",
  keywords:
    "car rental Dubai, luxury car rental, premium cars, business car rental, wedding car rental, UAE car rental",
  authors: [{ name: "GT Cars Rent" }],
  openGraph: {
    title: "GT Cars Rent - Premium Car Rental Service",
    description: "Experience luxury and comfort with our premium fleet of vehicles in Dubai, UAE.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
