"use client"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img src="/workers-in-safety-gear-hard-hats-thumbs-up-logisti.jpg" alt="Equipo JOMAR S.A.S." className="rounded-lg shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-bold text-lg">+10 años</p>
              <p className="text-sm">de experiencia en La Guajira</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">Sobre Nosotros</h2>
            <div className="w-24 h-1 bg-secondary mb-6"></div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              JOMAR S.A.S. es una empresa de logística y transporte comprometida con brindar soluciones integrales y
              confiables, inspirada en los valores de compromiso, calidad y confianza, resaltando la identidad cultural
              Wayuu.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Especializados en cada rincón de La Guajira, ofrecemos servicios de transporte, almacenamiento,
              distribución y suministros con un compromiso inquebrantable hacia la excelencia y la satisfacción del
              cliente.
            </p>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
