import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Cumplimiento y Eficiencia",
    description: "Entregamos resultados puntuales con los más altos estándares de calidad",
  },
  {
    title: "Atención Personalizada",
    description: "Cada cliente es único y merece soluciones diseñadas a su medida",
  },
  {
    title: "Adaptabilidad",
    description: "Nos ajustamos a las necesidades específicas de cada proyecto y cliente",
  },
  {
    title: "Compromiso con Sostenibilidad",
    description: "Operamos con responsabilidad ambiental y social en cada servicio",
  },
  {
    title: "Identidad Wayuu",
    description: "Orgullosos de nuestras raíces culturales y compromiso con la región",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">¿Por Qué Elegirnos?</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">{reason.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
