import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JOMAR S.A.S. - Logística y Transporte en La Guajira | Servicios Profesionales",
  description:
    "JOMAR S.A.S. ofrece servicios de transporte de carga, almacenamiento, distribución regional y logística para eventos en toda La Guajira. Compromiso, calidad y confianza. Contacto: 313 560 0630",
  generator: "v0.app",
  keywords: [
    "logística La Guajira",
    "transporte Riohacha",
    "distribución Colombia",
    "almacenamiento La Guajira",
    "JOMAR SAS",
    "transporte de carga",
    "logística eventos",
    "alquiler vehículos con conductor",
    "servicios logísticos",
    "transporte personal",
  ],
  openGraph: {
    title: "JOMAR S.A.S. - Logística y Transporte en La Guajira",
    description:
      "Servicios profesionales de transporte, almacenamiento y distribución con compromiso, calidad y confianza en toda La Guajira.",
    type: "website",
    locale: "es_CO",
    siteName: "JOMAR S.A.S.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOMAR S.A.S. - Logística en La Guajira",
    description: "Servicios de transporte y distribución con compromiso, calidad y confianza.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
