"use client"

import { Button } from "@/components/ui/button"
import { WayuuPattern } from "./wayuu-pattern"
import Image from "next/image"

export function HeroSection() {
  const scrollToQuote = () => {
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = () => {
    const message = "Hola, estoy interesado en los servicios de JOMAR S.A.S. Me gustaría obtener más información."
    const phone = "573135600630"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="inicio" className="relative pt-20">
      <WayuuPattern />

      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/truck-on-desert-highway-blue-sky-mountains-profess.jpg"
            alt="Camión de carga JOMAR en carretera"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/jomar.jpeg"
                alt="JOMAR S.A.S. Logo"
                width={80}
                height={80}
                className="object-contain bg-white rounded-full p-2"
              />
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl font-bold">JOMAR S.A.S.</h1>
                <p className="text-sm text-white/90">Compromiso, calidad y confianza</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Logística en
              <br />
              La Guajira
            </h2>

            <p className="text-xl md:text-2xl text-white/95 mb-8 text-pretty leading-relaxed">
              Transporte y distribución con compromiso, calidad y confianza en toda La Guajira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToQuote}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
              >
                Solicitar Cotización
              </Button>
              <Button
                size="lg"
                onClick={openWhatsApp}
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl border-2"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>

      <WayuuPattern />
    </section>
  )
}
