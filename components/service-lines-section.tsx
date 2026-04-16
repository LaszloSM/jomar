import { Package, Wrench, TruckIcon } from "lucide-react"

const serviceLines = [
  {
    icon: Package,
    title: "Suministros Institucionales e Industriales",
    color: "#E91E8C",
    bg: "rgba(233,30,140,0.08)",
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
    color: "#FF5722",
    bg: "rgba(255,87,34,0.08)",
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
    color: "#00BCD4",
    bg: "rgba(0,188,212,0.08)",
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
    <section id="lineas-servicio" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #E91E8C, #FF5722, #FFD700, #76C442, #00BCD4, #9C27B0)" }}
      />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#00BCD4" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#00BCD4" }}>
              Nuestras Líneas
            </span>
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#00BCD4" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: "#003A70" }}
          >
            Líneas de{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00BCD4, #003A70)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Servicio
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #00BCD4, #9C27B0, #E91E8C)" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceLines.map((line, index) => (
            <div
              key={index}
              className="wayuu-card rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "white",
                border: `1px solid ${line.color}25`,
                boxShadow: "0 4px 24px rgba(0,58,112,0.07)",
              }}
            >
              {/* Decorative diamond corner */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 opacity-15"
                style={{
                  backgroundColor: line.color,
                  transform: "rotate(45deg)",
                  borderRadius: 4,
                }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ background: line.bg }}
              >
                <line.icon className="w-8 h-8" style={{ color: line.color }} />
              </div>

              {/* Left accent bar */}
              <div
                className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full"
                style={{ backgroundColor: line.color }}
              />

              <h3
                className="text-lg font-black mb-5 leading-tight"
                style={{ color: "#003A70" }}
              >
                {line.title}
              </h3>

              <ul className="space-y-3">
                {line.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    {/* Diamond bullet */}
                    <span
                      className="w-2.5 h-2.5 rounded-sm flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: line.color,
                        transform: "rotate(45deg)",
                        minWidth: "10px",
                      }}
                    />
                    <span className="text-[#556080] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
