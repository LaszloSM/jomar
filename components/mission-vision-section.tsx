import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

const values = ["Compromiso", "Calidad", "Confianza", "Responsabilidad", "Trabajo en equipo"]

export function MissionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Brindar servicios logísticos integrales de alta calidad, garantizando soluciones eficientes en
                transporte, almacenamiento y distribución, comprometidos con la satisfacción de nuestros clientes y el
                desarrollo económico de La Guajira.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-secondary">
            <CardHeader>
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Visión 2030</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa líder en servicios logísticos en La Guajira, reconocida por nuestra excelencia operativa,
                innovación continua y compromiso con la sostenibilidad, mientras honramos nuestra identidad cultural
                Wayuu.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto border-t-4 border-t-primary">
          <CardHeader>
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl text-center text-primary">Nuestros Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
                  {value}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
