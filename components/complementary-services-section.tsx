"use client"

import { Coffee, Package2, Headphones, CalendarCheck, Clock } from "lucide-react"

const complementaryServices = [
  { icon: Coffee,       text: "Provisión de refrigerios para eventos y jornadas",  color: "#E91E8C" },
  { icon: Package2,     text: "Suministro de materiales adicionales",               color: "#00BCD4" },
  { icon: Headphones,   text: "Apoyo logístico básico",                             color: "#FFD700" },
  { icon: CalendarCheck,text: "Coordinación operativa",                             color: "#76C442" },
  { icon: Clock,        text: "Entrega puntual y organizada",                       color: "#FF5722" },
]

export function ComplementaryServicesSection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #003A70 0%, #00285A 100%)" }}
    >
      {/* Subtle geometric overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent 0, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 22px)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#9C27B0" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#9C27B0" }}>
              Servicios Extra
            </span>
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#9C27B0" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Servicios{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #9C27B0, #E91E8C)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Complementarios
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #9C27B0, #E91E8C, #FF5722)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {complementaryServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl p-5 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${service.color}25`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = `rgba(255,255,255,0.10)`
                el.style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = "rgba(255,255,255,0.06)"
                el.style.transform = "translateX(0)"
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${service.color}20`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-medium">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
