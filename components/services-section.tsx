import { Card, CardContent } from "@/components/ui/card"
import { Truck, Warehouse, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transporte de Carga",
    description:
      "Flota propia y aliada para el transporte de mercancías de cualquier tipo. Manejo especializado de carga general y refrigerada en toda La Guajira.",
  },
  {
    icon: Warehouse,
    title: "Almacenamiento",
    description:
      "Servicios de bodegaje, colocación y custodia de insumos. Gestión organizada con control de inventarios y seguridad permanente.",
  },
  {
    icon: MapPin,
    title: "Distribución en Toda la Región",
    description:
      "Distribución eficiente en toda la región con rastreo y atención en diferentes municipios. Entregas puntuales y confiables.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">Nuestros Servicios</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-t-secondary hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
