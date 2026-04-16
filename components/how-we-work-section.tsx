import { WayuuPattern } from "./wayuu-pattern"
import { ClipboardList, Calculator, CheckCircle, Calendar, Truck, FileCheck, FileText } from "lucide-react"

const stepColors = [
  "#E91E8C",
  "#00BCD4",
  "#FFD700",
  "#FF5722",
  "#76C442",
  "#9C27B0",
  "#E53935",
]

const steps = [
  { number: 1, title: "Recepción de solicitud", description: "Recibimos tu solicitud de servicio por cualquiera de nuestros canales de contacto.", icon: ClipboardList },
  { number: 2, title: "Cotización", description: "Elaboramos una cotización detallada ajustada a tus necesidades específicas.", icon: Calculator },
  { number: 3, title: "Confirmación del cliente", description: "Una vez aceptada la cotización, confirmamos los detalles del servicio contigo.", icon: CheckCircle },
  { number: 4, title: "Planeación del servicio", description: "Organizamos la logística, recursos y rutas para garantizar un servicio eficiente.", icon: Calendar },
  { number: 5, title: "Ejecución", description: "Ejecutamos el servicio con personal capacitado y los más altos estándares.", icon: Truck },
  { number: 6, title: "Cierre del servicio", description: "Verificamos que el servicio se haya completado satisfactoriamente según lo acordado.", icon: FileCheck },
  { number: 7, title: "Facturación y archivo", description: "Generamos la factura correspondiente y archivamos toda la documentación del servicio.", icon: FileText },
]

export function HowWeWorkSection() {
  return (
    <section id="como-trabajamos" className="relative overflow-hidden" style={{ background: "#F0F5FF" }}>
      <WayuuPattern />

      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FF5722" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#FF5722" }}>
                Nuestro Proceso
              </span>
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FF5722" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
              style={{ color: "#003A70" }}
            >
              Cómo{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF5722, #E91E8C)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Trabajamos
              </span>
            </h2>
            <div
              className="mx-auto h-1.5 w-24 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg, #FF5722, #FFD700, #76C442)" }}
            />
            <p className="text-lg text-[#556080] max-w-2xl mx-auto">
              Nuestro proceso garantiza transparencia, eficiencia y satisfacción en cada etapa del servicio.
            </p>
          </div>

          {/* Steps grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const color = stepColors[index % stepColors.length]
                return (
                  <div
                    key={step.number}
                    className="wayuu-card relative bg-white rounded-2xl p-6 overflow-hidden"
                    style={{
                      boxShadow: "0 4px 20px rgba(0,58,112,0.08)",
                      border: `1px solid ${color}20`,
                    }}
                  >
                    {/* Top color accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ backgroundColor: color }}
                    />

                    {/* Step number badge */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl mb-5 mt-2"
                      style={{
                        backgroundColor: color,
                        color: color === "#FFD700" ? "#003A70" : "white",
                        boxShadow: `0 4px 15px ${color}50`,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <step.icon className="w-5 h-5" style={{ color }} />
                    </div>

                    <h3
                      className="font-black text-base mb-2 leading-tight"
                      style={{ color: "#003A70" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#556080] leading-relaxed">{step.description}</p>

                    {/* Connector arrow (not for last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <div
                          className="w-6 h-0.5"
                          style={{ backgroundColor: color }}
                        />
                        <div
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-sm rotate-45 -translate-x-0.5"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <WayuuPattern flip />
    </section>
  )
}
