import { WayuuPattern } from "./wayuu-pattern"
import { Users, Package, Car, FileText, Wrench, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Transporte de personal y carga liviana",
    description: "Movilización segura de personal y mercancía ligera a cualquier destino en La Guajira.",
  },
  {
    icon: Package,
    title: "Logística para eventos y actividades",
    description: "Planificación y ejecución logística integral para eventos corporativos y actividades especiales.",
  },
  {
    icon: Car,
    title: "Alquiler de vehículos con conductor",
    description: "Flota de vehículos disponibles con conductores profesionales y capacitados.",
  },
  {
    icon: FileText,
    title: "Gestión documental y reportes",
    description: "Administración eficiente de documentación y generación de reportes detallados.",
  },
  {
    icon: Wrench,
    title: "Servicios de apoyo logístico",
    description: "Soporte integral en todas las necesidades logísticas de su empresa u organización.",
  },
]

export function DetailedServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <WayuuPattern />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Especializados</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Nos especializamos en logística segura, responsable y a tiempo, cuidando cada detalle del servicio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors border border-white/20"
            >
              <div className="bg-secondary p-4 rounded-lg inline-block mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-primary-foreground/90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-lg font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Servicio profesional garantizado en toda La Guajira</span>
          </div>
        </div>
      </div>

      <WayuuPattern />
    </section>
  )
}
