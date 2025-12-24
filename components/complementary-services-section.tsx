import { Coffee, Package2, Headphones, CalendarCheck, Clock } from "lucide-react"

const complementaryServices = [
  { icon: Coffee, text: "Provisión de refrigerios para eventos y jornadas" },
  { icon: Package2, text: "Suministro de materiales adicionales" },
  { icon: Headphones, text: "Apoyo logístico básico" },
  { icon: CalendarCheck, text: "Coordinación operativa" },
  { icon: Clock, text: "Entrega puntual y organizada" },
]

export function ComplementaryServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Servicios Complementarios</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {complementaryServices.map((service, index) => (
            <div key={index} className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-white/95 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
