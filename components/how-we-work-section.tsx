import { WayuuPattern } from "./wayuu-pattern"
import { ClipboardList, Calculator, CheckCircle, Calendar, Truck, FileCheck, FileText } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Recepción de solicitud",
    description: "Recibimos tu solicitud de servicio por cualquiera de nuestros canales de contacto.",
    icon: ClipboardList,
  },
  {
    number: 2,
    title: "Cotización",
    description: "Elaboramos una cotización detallada ajustada a tus necesidades específicas.",
    icon: Calculator,
  },
  {
    number: 3,
    title: "Confirmación del cliente",
    description: "Una vez aceptada la cotización, confirmamos los detalles del servicio contigo.",
    icon: CheckCircle,
  },
  {
    number: 4,
    title: "Planeación del servicio",
    description: "Organizamos la logística, recursos y rutas para garantizar un servicio eficiente.",
    icon: Calendar,
  },
  {
    number: 5,
    title: "Ejecución",
    description: "Ejecutamos el servicio con personal capacitado y siguiendo los más altos estándares.",
    icon: Truck,
  },
  {
    number: 6,
    title: "Cierre del servicio",
    description: "Verificamos que el servicio se haya completado satisfactoriamente según lo acordado.",
    icon: FileCheck,
  },
  {
    number: 7,
    title: "Facturación y archivo",
    description: "Generamos la factura correspondiente y archivamos toda la documentación del servicio.",
    icon: FileText,
  },
]

export function HowWeWorkSection() {
  return (
    <section id="como-trabajamos" className="py-16 md:py-24 bg-muted/30">
      <WayuuPattern />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Cómo Trabajamos</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Nuestro proceso está diseñado para garantizar transparencia, eficiencia y satisfacción en cada etapa del
            servicio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-secondary"
              >
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>

                <div className="mt-4 mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg inline-block">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-secondary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <WayuuPattern />
    </section>
  )
}
