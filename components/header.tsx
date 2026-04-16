"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { WayuuStripe } from "./wayuu-pattern"

const navItems = [
  { label: "Inicio",          id: "inicio",            color: "#E91E8C" },
  { label: "Servicios",       id: "servicios",         color: "#00BCD4" },
  { label: "Líneas",          id: "lineas-servicio",   color: "#FFD700" },
  { label: "Cómo Trabajamos", id: "como-trabajamos",   color: "#76C442" },
  { label: "Por Qué Elegirnos", id: "por-que-elegirnos", color: "#FF5722" },
  { label: "Nosotros",        id: "sobre-nosotros",    color: "#9C27B0" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setActiveSection(id)
    }
    setIsMobileMenuOpen(false)
  }

  const openWhatsApp = () => {
    const message = "Hola, estoy interesado en los servicios de JOMAR S.A.S. Me gustaría obtener más información."
    const phone = "573135600630"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 shadow-xl backdrop-blur-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Wayuu Rainbow Stripe */}
      <WayuuStripe />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("inicio")}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #E91E8C, #00BCD4, #FFD700)",
                  padding: 2,
                  borderRadius: "50%",
                }}
              />
              <Image
                src="/jomar.jpeg"
                alt="JOMAR S.A.S. Logo"
                width={56}
                height={56}
                className="object-contain relative z-10 rounded-full ring-2 ring-transparent group-hover:ring-[#FDB515] transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-extrabold text-[#003A70] tracking-tight leading-none">
                JOMAR S.A.S.
              </h1>
              <p className="text-[11px] text-[#E91E8C] font-semibold tracking-widest uppercase mt-0.5">
                Compromiso · Calidad · Confianza
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-sm font-semibold text-[#003A70] transition-colors duration-200 rounded-lg group cursor-pointer"
                style={{ color: activeSection === item.id ? item.color : undefined }}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: `${item.color}12` }}
                />
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("cotizacion")}
              className="ml-3 font-bold px-5 py-2 text-sm rounded-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FDB515)",
                color: "#003A70",
                border: "none",
                boxShadow: "0 4px 15px rgba(253, 181, 21, 0.4)",
              }}
            >
              Cotización
            </Button>

            <button
              onClick={openWhatsApp}
              className="ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
              style={{ background: "#25D366", color: "white", boxShadow: "0 4px 12px rgba(37,211,102,0.4)" }}
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[#003A70]/10 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6 text-[#003A70]" />
              : <Menu className="w-6 h-6 text-[#003A70]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-3 border-t border-[#003A70]/10 animate-wayuu-fade-up">
            <div className="flex flex-col gap-1 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:pl-6"
                  style={{
                    color: "#003A70",
                    borderLeft: `3px solid ${item.color}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = `${item.color}15`
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"
                  }}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex gap-3 pt-3 px-2">
                <Button
                  onClick={() => scrollToSection("cotizacion")}
                  className="flex-1 font-bold cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #FFD700, #FDB515)",
                    color: "#003A70",
                    border: "none",
                  }}
                >
                  Solicitar Cotización
                </Button>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold cursor-pointer"
                  style={{ background: "#25D366", color: "white" }}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
