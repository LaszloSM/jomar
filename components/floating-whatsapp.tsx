"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const openWhatsApp = () => {
    const message = "Hola, estoy interesado en los servicios de JOMAR S.A.S. Me gustaría obtener más información."
    const phone = "573135600630"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}
