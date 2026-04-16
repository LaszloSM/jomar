"use client"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  const scrollToContact = () => {
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#F7F9FC" }}>
      {/* Background diamond watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-64 h-64 opacity-5"
          style={{
            top: "10%", right: "-4%",
            backgroundColor: "#E91E8C",
            transform: "rotate(45deg)",
            borderRadius: 8,
          }}
        />
        <div
          className="absolute w-40 h-40 opacity-5"
          style={{
            bottom: "15%", left: "-3%",
            backgroundColor: "#00BCD4",
            transform: "rotate(45deg)",
            borderRadius: 8,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Image side */}
          <div className="relative">
            {/* Wayuu diamond frame decoration */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-lg opacity-30 -z-10"
              style={{ backgroundColor: "#E91E8C", transform: "rotate(45deg)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg opacity-25 -z-10"
              style={{ backgroundColor: "#00BCD4", transform: "rotate(45deg)" }}
            />

            {/* Colored border frame */}
            <div
              className="absolute inset-0 rounded-2xl -z-10"
              style={{
                background: "linear-gradient(135deg, #E91E8C, #00BCD4, #FFD700, #76C442)",
                padding: 4,
                borderRadius: 16,
              }}
            />

            <div className="relative rounded-2xl overflow-hidden" style={{ padding: 3, background: "linear-gradient(135deg, #E91E8C, #00BCD4, #FFD700)" }}>
              <img
                src="/workers-in-safety-gear-hard-hats-thumbs-up-logisti.jpg"
                alt="Equipo JOMAR S.A.S."
                className="w-full object-cover rounded-xl"
                style={{ height: 420 }}
              />
            </div>

            {/* Floating stat badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #003A70, #00285A)",
                border: "3px solid #FFD700",
              }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-black mb-1"
                  style={{ color: "#FFD700" }}
                >
                  +10
                </div>
                <div className="text-white/80 text-xs font-semibold tracking-wide uppercase">
                  Años en<br />La Guajira
                </div>
              </div>
            </div>

            {/* Small floating accent */}
            <div
              className="absolute -top-6 -right-2 w-12 h-12 rounded-lg"
              style={{
                backgroundColor: "#FF5722",
                transform: "rotate(45deg)",
                opacity: 0.85,
                boxShadow: "0 4px 15px rgba(255,87,34,0.4)",
              }}
            />
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#9C27B0" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#9C27B0" }}>
                Quiénes Somos
              </span>
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#9C27B0" }} />
            </div>

            <h2
              className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none"
              style={{ color: "#003A70" }}
            >
              Sobre{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #9C27B0, #E91E8C)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nosotros
              </span>
            </h2>

            <div
              className="h-1.5 w-20 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #9C27B0, #00BCD4, #FFD700)" }}
            />

            <p className="text-lg text-[#556080] mb-5 leading-relaxed">
              <strong className="text-[#003A70]">JOMAR S.A.S.</strong> es una empresa de logística y transporte
              comprometida con brindar soluciones integrales y confiables, inspirada en los valores de compromiso,
              calidad y confianza, resaltando la{" "}
              <span style={{ color: "#E91E8C", fontWeight: 700 }}>identidad cultural Wayuu</span>.
            </p>

            <p className="text-[#556080] mb-8 leading-relaxed">
              Especializados en cada rincón de La Guajira, ofrecemos servicios de transporte, almacenamiento,
              distribución y suministros con un compromiso inquebrantable hacia la excelencia y la satisfacción del
              cliente.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Compromiso", color: "#E91E8C" },
                { label: "Calidad",    color: "#00BCD4" },
                { label: "Confianza",  color: "#76C442" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="text-center py-4 rounded-xl"
                  style={{
                    background: `${v.color}10`,
                    border: `2px solid ${v.color}30`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-sm mx-auto mb-2"
                    style={{ backgroundColor: v.color, transform: "rotate(45deg)" }}
                  />
                  <span className="text-sm font-black" style={{ color: v.color }}>
                    {v.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl font-black text-white text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #003A70, #00285A)",
                boxShadow: "0 8px 30px rgba(0,58,112,0.35)",
              }}
            >
              Conoce Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
