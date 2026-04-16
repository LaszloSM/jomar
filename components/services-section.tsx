import { Truck, Warehouse, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transporte de Carga",
    description:
      "Flota propia y aliada para el transporte de mercancías de cualquier tipo. Manejo especializado de carga general y refrigerada en toda La Guajira.",
    color: "#E91E8C",
    bg: "rgba(233,30,140,0.08)",
    badge: "Flota Propia",
  },
  {
    icon: Warehouse,
    title: "Almacenamiento",
    description:
      "Servicios de bodegaje, colocación y custodia de insumos. Gestión organizada con control de inventarios y seguridad permanente.",
    color: "#00BCD4",
    bg: "rgba(0,188,212,0.08)",
    badge: "Seguro",
  },
  {
    icon: MapPin,
    title: "Distribución Regional",
    description:
      "Distribución eficiente en toda la región con rastreo y atención en diferentes municipios. Entregas puntuales y confiables.",
    color: "#76C442",
    bg: "rgba(118,196,66,0.08)",
    badge: "+15 Municipios",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#F7F9FC" }}>
      {/* Subtle Wayuu diamond background watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: 180, top: "-5%",  left: "-4%",  color: "#E91E8C", opacity: 0.04 },
          { size: 220, top: "60%",  right: "-5%", color: "#00BCD4", opacity: 0.04 },
          { size: 140, top: "30%",  left: "50%",  color: "#FFD700", opacity: 0.05 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: d.size,
              height: d.size,
              top: d.top,
              left: "left" in d ? (d as any).left : undefined,
              right: "right" in d ? (d as any).right : undefined,
              transform: "rotate(45deg)",
              backgroundColor: d.color,
              opacity: d.opacity,
              borderRadius: 8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#E91E8C" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#E91E8C" }}>
              Lo Que Hacemos
            </span>
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#E91E8C" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: "#003A70" }}
          >
            Nuestros{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E91E8C, #9C27B0)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Servicios
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #E91E8C, #00BCD4, #FFD700)" }}
          />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="wayuu-card rounded-2xl overflow-hidden bg-white"
              style={{
                boxShadow: "0 4px 24px rgba(0,58,112,0.08)",
                border: `1px solid ${service.color}20`,
              }}
            >
              {/* Top color stripe with diamond motif */}
              <div
                className="h-2 w-full"
                style={{ background: service.color }}
              />

              <div className="p-8">
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                  style={{ background: service.bg }}
                >
                  <service.icon className="w-10 h-10" style={{ color: service.color }} />
                  {/* Diamond accent */}
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-sm"
                    style={{
                      backgroundColor: service.color,
                      transform: "rotate(45deg)",
                      opacity: 0.8,
                    }}
                  />
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{
                    backgroundColor: service.bg,
                    color: service.color,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  {service.badge}
                </div>

                <h3
                  className="text-xl font-black mb-3 tracking-tight"
                  style={{ color: "#003A70" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#556080] leading-relaxed text-sm">{service.description}</p>

                {/* Bottom CTA */}
                <div
                  className="mt-6 pt-4 border-t flex items-center gap-2 text-sm font-bold cursor-pointer group"
                  style={{ borderColor: `${service.color}20`, color: service.color }}
                >
                  <span>Ver detalles</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
