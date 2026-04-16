"use client"

import { Button } from "@/components/ui/button"
import { WayuuPattern } from "./wayuu-pattern"
import Image from "next/image"

/* Floating diamond data */
const diamonds = [
  { size: 52, color: "#E91E8C", opacity: 0.75, top: "12%",  left: "7%",   delay: "0s",    duration: "3.8s" },
  { size: 36, color: "#00BCD4", opacity: 0.65, top: "22%",  right: "10%", delay: "0.8s",  duration: "4.5s" },
  { size: 68, color: "#FFD700", opacity: 0.55, top: "58%",  left: "4%",   delay: "0.4s",  duration: "5.2s" },
  { size: 28, color: "#76C442", opacity: 0.7,  top: "70%",  right: "6%",  delay: "1.2s",  duration: "3.5s" },
  { size: 44, color: "#9C27B0", opacity: 0.6,  top: "38%",  right: "22%", delay: "0.2s",  duration: "4.8s" },
  { size: 22, color: "#FF5722", opacity: 0.8,  top: "85%",  left: "18%",  delay: "1.5s",  duration: "3.2s" },
  { size: 58, color: "#00BCD4", opacity: 0.4,  top: "8%",   right: "32%", delay: "0.6s",  duration: "6.0s" },
  { size: 30, color: "#E91E8C", opacity: 0.65, top: "48%",  left: "28%",  delay: "1.8s",  duration: "4.2s" },
]

const stats = [
  { number: "+10",   label: "Años de Experiencia", color: "#E91E8C" },
  { number: "+15",   label: "Municipios Atendidos", color: "#00BCD4" },
  { number: "100%",  label: "Compromiso Total",     color: "#FFD700" },
  { number: "24/7",  label: "Disponibilidad",       color: "#76C442" },
]

export function HeroSection() {
  const scrollToQuote = () => {
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = () => {
    const message = "Hola, estoy interesado en los servicios de JOMAR S.A.S. Me gustaría obtener más información."
    const phone = "573135600630"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="inicio" className="relative" style={{ paddingTop: "82px" }}>
      {/* Hero Image Zone */}
      <div className="relative min-h-[680px] md:min-h-[780px] flex items-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/truck-on-desert-highway-blue-sky-mountains-profess.jpg"
            alt="Camión de carga JOMAR en carretera de La Guajira"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer gradient for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(0,58,112,0.92) 0%, rgba(0,58,112,0.80) 45%, rgba(0,58,112,0.50) 100%)",
            }}
          />
          {/* Wayuu geometric overlay pattern */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg,  transparent 0, transparent 30px, rgba(233,30,140,0.15) 30px, rgba(233,30,140,0.15) 32px),
                repeating-linear-gradient(-45deg, transparent 0, transparent 30px, rgba(0,188,212,0.10) 30px, rgba(0,188,212,0.10) 32px)
              `,
            }}
          />
        </div>

        {/* Floating Wayuu Diamonds */}
        {diamonds.map((d, i) => (
          <div
            key={i}
            className="absolute pointer-events-none z-5"
            style={{
              width: d.size,
              height: d.size,
              top: d.top,
              left: "left" in d ? (d as any).left : undefined,
              right: "right" in d ? (d as any).right : undefined,
              transform: "rotate(45deg)",
              backgroundColor: d.color,
              opacity: d.opacity,
              borderRadius: 4,
              animation: `wayuu-float ${d.duration} ease-in-out ${d.delay} infinite`,
              border: `3px solid rgba(255,255,255,0.3)`,
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">

            {/* Brand badge */}
            <div
              className="inline-flex items-center gap-3 mb-8 animate-wayuu-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div
                className="p-1.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #E91E8C, #00BCD4, #FFD700)",
                  padding: 3,
                }}
              >
                <Image
                  src="/jomar.jpeg"
                  alt="JOMAR S.A.S. Logo"
                  width={64}
                  height={64}
                  className="object-contain bg-white rounded-full p-1"
                />
              </div>
              <div className="text-white">
                <div className="text-2xl font-extrabold tracking-tight">JOMAR S.A.S.</div>
                <div
                  className="text-xs font-bold tracking-widest uppercase mt-0.5"
                  style={{ color: "#FFD700" }}
                >
                  Logística · La Guajira
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight animate-wayuu-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Logística en
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FDB515, #FF5722)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                La Guajira
              </span>
            </h2>

            {/* Wayuu accent line */}
            <div
              className="h-1.5 w-40 rounded-full mb-6 animate-wayuu-fade-up"
              style={{
                animationDelay: "0.35s",
                background: "linear-gradient(90deg, #E91E8C, #00BCD4, #FFD700, #76C442)",
              }}
            />

            <p
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl animate-wayuu-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              Transporte y distribución con{" "}
              <span style={{ color: "#FFD700", fontWeight: 700 }}>compromiso</span>,{" "}
              <span style={{ color: "#00BCD4", fontWeight: 700 }}>calidad</span> y{" "}
              <span style={{ color: "#E91E8C", fontWeight: 700 }}>confianza</span>{" "}
              en toda La Guajira.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-wayuu-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <button
                onClick={scrollToQuote}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FDB515)",
                  color: "#003A70",
                  boxShadow: "0 8px 30px rgba(253,181,21,0.5)",
                }}
              >
                Solicitar Cotización
              </button>
              <button
                onClick={openWhatsApp}
                className="px-8 py-4 rounded-xl font-bold text-lg text-white border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15 cursor-pointer"
              >
                Contáctanos
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap gap-4 mt-8 animate-wayuu-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              {["Flota propia", "Cobertura total", "Rastreo en tiempo real"].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: ["#E91E8C", "#00BCD4", "#76C442"][i],
                    }}
                  />
                  <span className="text-white/90 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wayuu Pattern overlapping the hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <WayuuPattern height={64} />
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="relative z-10"
        style={{ background: "linear-gradient(135deg, #003A70 0%, #00285A 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-8 px-6 text-center group"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-1"
          style={{
            background: "linear-gradient(90deg, #E91E8C, #FF5722, #FFD700, #76C442, #00BCD4, #9C27B0)",
          }}
        />
      </div>
    </section>
  )
}
