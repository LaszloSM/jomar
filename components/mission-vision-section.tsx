import { Target, Eye, Heart } from "lucide-react"

const values = [
  { label: "Compromiso",       color: "#E91E8C" },
  { label: "Calidad",          color: "#00BCD4" },
  { label: "Confianza",        color: "#FFD700" },
  { label: "Responsabilidad",  color: "#76C442" },
  { label: "Trabajo en equipo",color: "#9C27B0" },
]

export function MissionVisionSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #9C27B0, #E91E8C, #FFD700, #76C442, #00BCD4)" }}
      />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#76C442" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#76C442" }}>
              Nuestra Razón de Ser
            </span>
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#76C442" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: "#003A70" }}
          >
            Misión,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #76C442, #00BCD4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Visión
            </span>{" "}
            y Valores
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #76C442, #00BCD4, #9C27B0)" }}
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Misión */}
          <div
            className="wayuu-card rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,58,112,0.08)" }}
          >
            <div className="h-2" style={{ background: "#E91E8C" }} />
            <div className="p-8">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(233,30,140,0.1)" }}
              >
                <Target className="w-8 h-8" style={{ color: "#E91E8C" }} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-black" style={{ color: "#003A70" }}>Misión</h3>
                <div
                  className="w-6 h-6 rounded-sm opacity-60"
                  style={{ backgroundColor: "#E91E8C", transform: "rotate(45deg)" }}
                />
              </div>
              <p className="text-[#556080] leading-relaxed">
                Brindar servicios logísticos integrales de alta calidad, garantizando soluciones eficientes en
                transporte, almacenamiento y distribución, comprometidos con la satisfacción de nuestros clientes
                y el desarrollo económico de La Guajira.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div
            className="wayuu-card rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,58,112,0.08)" }}
          >
            <div className="h-2" style={{ background: "#00BCD4" }} />
            <div className="p-8">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(0,188,212,0.1)" }}
              >
                <Eye className="w-8 h-8" style={{ color: "#00BCD4" }} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-black" style={{ color: "#003A70" }}>Visión 2030</h3>
                <div
                  className="w-6 h-6 rounded-sm opacity-60"
                  style={{ backgroundColor: "#00BCD4", transform: "rotate(45deg)" }}
                />
              </div>
              <p className="text-[#556080] leading-relaxed">
                Ser la empresa líder en servicios logísticos en La Guajira, reconocida por nuestra excelencia
                operativa, innovación continua y compromiso con la sostenibilidad, mientras honramos nuestra
                identidad cultural Wayuu.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(0,58,112,0.10)" }}
        >
          <div
            className="h-2"
            style={{ background: "linear-gradient(90deg, #E91E8C, #FF5722, #FFD700, #76C442, #00BCD4, #9C27B0)" }}
          />
          <div className="p-8 bg-white">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(253,181,21,0.15)" }}
              >
                <Heart className="w-6 h-6" style={{ color: "#FDB515" }} />
              </div>
              <h3 className="text-2xl font-black" style={{ color: "#003A70" }}>Nuestros Valores</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: `${value.color}12`,
                    color: value.color,
                    border: `2px solid ${value.color}30`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-sm"
                    style={{ backgroundColor: value.color, transform: "rotate(45deg)" }}
                  />
                  {value.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
