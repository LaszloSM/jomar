import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Wrench, TruckIcon } from "lucide-react"

const serviceLines = [
  {
    icon: Package,
    title: "Suministros Institucionales e Industriales",
    items: [
      "Insumos de aseo y limpieza",
      "Bolsas plásticas biodegradables",
      "Elementos de bioseguridad",
      "Equipos de limpieza profesional",
      "Dotaciones empresariales",
    ],
  },
  {
    icon: Wrench,
    title: "Servicios Generales y de Apoyo Operativo",
    items: [
      "Limpieza y mantenimiento locativo",
      "Jardinería",
      "Aseo institucional y hospitalario",
      "Apoyo logístico operativo",
    ],
  },
  {
    icon: TruckIcon,
    title: "Logística y Distribución",
    items: [
      "Transporte de mercancías",
      "Manejo y control de carga",
      "Coordinación de rutas",
      "Seguimiento logístico",
      "Servicios personalizados",
    ],
  },
]

export function ServiceLinesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">Líneas de Servicio</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceLines.map((line, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="bg-secondary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <line.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">{line.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {line.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
