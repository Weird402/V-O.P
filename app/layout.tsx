import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "VoP - Робота в Німеччині",
  description: "Стабільність, високі заробітки, легальна зайнятість на будівництві в Німеччині",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

