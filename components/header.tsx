"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
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
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <Image src="/jomar.jpeg" alt="JOMAR S.A.S. Logo" width={60} height={60} className="object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">JOMAR S.A.S.</h1>
              <p className="text-xs text-muted-foreground">Compromiso, calidad y confianza</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("lineas-servicio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Líneas de Servicio
            </button>
            <button
              onClick={() => scrollToSection("como-trabajamos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Cómo Trabajamos
            </button>
            <button
              onClick={() => scrollToSection("por-que-elegirnos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Por Qué Elegirnos
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("cotizacion")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Cotización
            </Button>
            <Button onClick={openWhatsApp} variant="outline" size="icon" className="text-green-600 bg-transparent">
              <Phone className="w-5 h-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("lineas-servicio")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Líneas de Servicio
              </button>
              <button
                onClick={() => scrollToSection("como-trabajamos")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Cómo Trabajamos
              </button>
              <button
                onClick={() => scrollToSection("por-que-elegirnos")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Por Qué Elegirnos
              </button>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Sobre Nosotros
              </button>
              <Button
                onClick={() => scrollToSection("cotizacion")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-2"
              >
                Solicitar Cotización
              </Button>
              <Button onClick={openWhatsApp} variant="outline" className="text-green-600 mt-2 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Contáctanos por WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
