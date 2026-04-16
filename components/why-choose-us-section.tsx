"use client"

import { CheckCircle2 } from "lucide-react"
import { WayuuPattern } from "./wayuu-pattern"

const reasons = [
  {
    title: "Cumplimiento y Eficiencia",
    description: "Entregamos resultados puntuales con los más altos estándares de calidad",
    color: "#E91E8C",
    icon: "◆",
  },
  {
    title: "Atención Personalizada",
    description: "Cada cliente es único y merece soluciones diseñadas a su medida",
    color: "#00BCD4",
    icon: "◆",
  },
  {
    title: "Adaptabilidad",
    description: "Nos ajustamos a las necesidades específicas de cada proyecto y cliente",
    color: "#FFD700",
    icon: "◆",
  },
  {
    title: "Compromiso con Sostenibilidad",
    description: "Operamos con responsabilidad ambiental y social en cada servicio",
    color: "#76C442",
    icon: "◆",
  },
  {
    title: "Identidad Wayuu",
    description: "Orgullosos de nuestras raíces culturales y compromiso con la región",
    color: "#FF5722",
    icon: "◆",
  },
  {
    title: "Cobertura Total",
    description: "Presencia en todos los municipios de La Guajira con rutas optimizadas",
    color: "#9C27B0",
    icon: "◆",
  },
]

export function WhyChooseUsSection() {
  return (
    <section
      id="por-que-elegirnos"
      className="relative overflow-hidden"
    >
      <WayuuPattern />

      {/* Background */}
      <div
        className="relative py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #003A70 0%, #00285A 50%, #001A40 100%)",
        }}
      >
        {/* Geometric background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg,  transparent 0, transparent 40px, rgba(255,215,0,0.3) 40px, rgba(255,215,0,0.3) 42px),
              repeating-linear-gradient(-45deg, transparent 0, transparent 40px, rgba(233,30,140,0.2) 40px, rgba(233,30,140,0.2) 42px)
            `,
          }}
        />

        {/* Large decorative diamonds */}
        {[
          { size: 300, top: "-10%", left: "-6%",  color: "#E91E8C", opacity: 0.06 },
          { size: 400, top: "40%",  right: "-8%", color: "#00BCD4", opacity: 0.05 },
          { size: 200, top: "70%",  left: "30%",  color: "#FFD700", opacity: 0.06 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: d.size,
              height: d.size,
              top: d.top,
              left: "left" in d ? (d as any).left : undefined,
              right: "right" in d ? (d as any).right : undefined,
              transform: "rotate(45deg)",
              backgroundColor: d.color,
              opacity: d.opacity,
              borderRadius: 12,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#FFD700" }}>
                Nuestro Diferencial
              </span>
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ¿Por Qué{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FF5722)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Elegirnos?
              </span>
            </h2>
            <div
              className="mx-auto mt-4 h-1.5 w-24 rounded-full"
              style={{ background: "linear-gradient(90deg, #FFD700, #E91E8C, #00BCD4)" }}
            />
          </div>

          {/* Reasons grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid rgba(255,255,255,0.12)`,
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = `rgba(255,255,255,0.12)`
                  el.style.borderColor = `${reason.color}60`
                  el.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = "rgba(255,255,255,0.06)"
                  el.style.borderColor = "rgba(255,255,255,0.12)"
                  el.style.transform = "translateY(0)"
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full"
                  style={{ backgroundColor: reason.color }}
                />

                <div className="flex items-start gap-4">
                  {/* Color diamond icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${reason.color}25`,
                      border: `1px solid ${reason.color}40`,
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: reason.color }} />
                  </div>

                  <div>
                    <h3
                      className="font-black text-base mb-2 text-white"
                    >
                      {reason.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <a
              href="#cotizacion"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-black text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FDB515)",
                color: "#003A70",
                boxShadow: "0 8px 30px rgba(253,181,21,0.4)",
              }}
            >
              <span>Solicita tu Cotización</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <WayuuPattern flip />
    </section>
  )
}
