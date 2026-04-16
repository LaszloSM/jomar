"use client"

import { WayuuPattern } from "./wayuu-pattern"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    href: "https://wa.me/573135600630",
    label: "WhatsApp",
    color: "#25D366",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com/jomarsas",
    label: "Facebook",
    color: "#1877F2",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    href: "https://instagram.com/jomarsas",
    label: "Instagram",
    color: "#E1306C",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "mailto:servicioslogisticosjomar@gmail.com",
    label: "Email",
    color: "#FDB515",
    icon: <Mail className="w-5 h-5" />,
  },
]

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #003A70 0%, #001A40 100%)" }}>
      {/* Wayuu Pattern at top */}
      <WayuuPattern />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="p-0.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #E91E8C, #00BCD4, #FFD700)" }}
              >
                <Image
                  src="/jomar.jpeg"
                  alt="JOMAR S.A.S. Logo"
                  width={56}
                  height={56}
                  className="object-contain bg-white rounded-full p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">JOMAR S.A.S.</h3>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#FDB515" }}>
                  Compromiso · Calidad · Confianza
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empresa líder en logística y transporte en La Guajira. Más de 10 años de experiencia
              sirviendo a la región con identidad Wayuu.
            </p>

            {/* Wayuu diamond row */}
            <div className="flex gap-2 mb-6">
              {["#E91E8C", "#00BCD4", "#FFD700", "#FF5722", "#76C442", "#9C27B0"].map((c, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: c, transform: "rotate(45deg)", opacity: 0.85 }}
                />
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: `1px solid rgba(255,255,255,0.12)`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = s.color
                    el.style.borderColor = s.color
                    el.style.boxShadow = `0 4px 15px ${s.color}60`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = "rgba(255,255,255,0.08)"
                    el.style.borderColor = "rgba(255,255,255,0.12)"
                    el.style.boxShadow = "none"
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-1.5 h-6 rounded-full"
                style={{ backgroundColor: "#E91E8C" }}
              />
              <h3 className="font-black text-lg text-white">Contacto</h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Riohacha, La Guajira, Colombia", color: "#E91E8C", href: undefined },
                { icon: Phone, text: "313 560 0630", color: "#00BCD4", href: "tel:+573135600630" },
                { icon: Phone, text: "301 696 3872", color: "#76C442", href: "tel:+573016963872" },
                { icon: Mail,  text: "servicioslogisticosjomar@gmail.com", color: "#FFD700", href: "mailto:servicioslogisticosjomar@gmail.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/75 hover:text-white transition-colors leading-relaxed break-all"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/75 leading-relaxed">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hours column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-1.5 h-6 rounded-full"
                style={{ backgroundColor: "#FFD700" }}
              />
              <h3 className="font-black text-lg text-white">Horario</h3>
            </div>

            <div className="space-y-3 mb-8">
              {[
                { day: "Lunes a Viernes", hours: "8:00 AM – 6:00 PM", color: "#FFD700" },
                { day: "Sábados",         hours: "8:00 AM – 12:00 PM", color: "#00BCD4" },
                { day: "Emergencias",     hours: "24 / 7 disponible",  color: "#E91E8C" },
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 px-4 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: `1px solid ${h.color}20` }}
                >
                  <span className="text-white/70 text-sm">{h.day}</span>
                  <span className="font-bold text-sm" style={{ color: h.color }}>{h.hours}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573135600630"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-5 py-3 rounded-xl font-black text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "#25D366",
                color: "white",
                boxShadow: "0 4px 15px rgba(37,211,102,0.35)",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escríbenos al WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <p className="text-sm text-white/50">
            © 2025 JOMAR S.A.S. Todos los derechos reservados. | Logística y Transporte en La Guajira
          </p>
          <div className="flex items-center gap-2">
            {["#E91E8C", "#00BCD4", "#FFD700", "#FF5722", "#76C442", "#9C27B0"].map((c, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: c, transform: "rotate(45deg)", opacity: 0.7 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wayuu Pattern at bottom (flipped) */}
      <WayuuPattern flip />
    </footer>
  )
}
