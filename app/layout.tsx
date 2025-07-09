import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Logoriv - Creative Design Solutions",
  description: "Transform your ideas into stunning visual masterpieces with Logoriv",
  generator: "Logoriv",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
