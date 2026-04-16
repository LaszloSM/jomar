"use client"

import { WayuuPattern } from "./wayuu-pattern"
import { Users, Package, Car, FileText, Wrench, CheckCircle } from "lucide-react"

const services = [
  { icon: Users,    title: "Transporte de personal y carga liviana",   description: "Movilización segura de personal y mercancía ligera a cualquier destino en La Guajira.", color: "#E91E8C" },
  { icon: Package,  title: "Logística para eventos y actividades",     description: "Planificación y ejecución logística integral para eventos corporativos y actividades especiales.", color: "#00BCD4" },
  { icon: Car,      title: "Alquiler de vehículos con conductor",      description: "Flota de vehículos disponibles con conductores profesionales y capacitados.", color: "#FFD700" },
  { icon: FileText, title: "Gestión documental y reportes",           description: "Administración eficiente de documentación y generación de reportes detallados.", color: "#76C442" },
  { icon: Wrench,   title: "Servicios de apoyo logístico",            description: "Soporte integral en todas las necesidades logísticas de su empresa u organización.", color: "#FF5722" },
]

export function DetailedServicesSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #003A70 0%, #001A40 100%)" }}
    >
      <WayuuPattern />

      {/* Geometric background */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg,  transparent 0, transparent 50px, rgba(255,215,0,0.08) 50px, rgba(255,215,0,0.08) 52px),
            repeating-linear-gradient(-45deg, transparent 0, transparent 50px, rgba(0,188,212,0.06) 50px, rgba(0,188,212,0.06) 52px)
          `,
        }}
      />

      <div className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#FFD700" }}>
                Especialización
              </span>
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Servicios{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FF5722)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Especializados
              </span>
            </h2>
            <div
              className="mx-auto h-1.5 w-24 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #FFD700, #E91E8C, #00BCD4)" }}
            />
            <p className="text-white/75 text-lg">
              Nos especializamos en logística segura, responsable y a tiempo, cuidando cada detalle del servicio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 transition-all duration-300 cursor-default group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${service.color}25`,
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = `rgba(255,255,255,0.10)`
                  el.style.transform = "translateY(-6px)"
                  el.style.boxShadow = `0 20px 40px ${service.color}30`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = "rgba(255,255,255,0.06)"
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "none"
                }}
              >
                {/* Top accent */}
                <div
                  className="h-0.5 w-12 rounded-full mb-5"
                  style={{ backgroundColor: service.color }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${service.color}20`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <h3 className="font-black text-lg text-white mb-3 leading-tight">{service.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="mt-14 text-center">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FDB515)",
                color: "#003A70",
                boxShadow: "0 8px 30px rgba(253,181,21,0.35)",
              }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Servicio profesional garantizado en toda La Guajira</span>
            </div>
          </div>
        </div>
      </div>

      <WayuuPattern flip />
    </section>
  )
}
