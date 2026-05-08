"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// ─── Field configs per service type ───────────────────────────────────────────

type ServiceKey =
  | "transporte-carga"
  | "transporte-personal"
  | "almacenamiento"
  | "distribucion"
  | "logistica-eventos"
  | "alquiler-vehiculos"
  | "otro"

interface ServiceConfig {
  label: string
  color: string
  fields: {
    descripcionCarga?: { label: string; placeholder: string; required: boolean }
    cantidadDimensiones?: { label: string; placeholder: string; required: boolean }
    valorMercancia?: { label: string; placeholder: string; required: boolean }
    puntoRecogida?: { label: string; placeholder: string; required: boolean }
    puntoEntrega?: { label: string; placeholder: string; required: boolean }
    fechaHoraRecogida?: { label: string; required: boolean }
    fechaHoraEntrega?: { label: string; required: boolean }
    personalApoyo?: boolean
    numeroPasajeros?: boolean
    tipoVehiculo?: boolean
    conConductor?: boolean
    tiempoAlmacenamiento?: boolean
    zonasDistribucion?: boolean
    tipoEvento?: boolean
  }
}

const SERVICE_CONFIG: Record<ServiceKey, ServiceConfig> = {
  "transporte-carga": {
    label: "Transporte de Carga",
    color: "#E91E8C",
    fields: {
      descripcionCarga: { label: "Descripción de la carga", placeholder: "Tipo de mercancía, embalaje, peso aprox.", required: true },
      cantidadDimensiones: { label: "Cantidad y dimensiones", placeholder: "Ej: 10 cajas, 200 kg, 1.2×0.8×1m", required: true },
      valorMercancia: { label: "Valor estimado de la mercancía", placeholder: "$1.000.000", required: true },
      puntoRecogida: { label: "Punto de recogida", placeholder: "Dirección completa, ciudad", required: true },
      puntoEntrega: { label: "Punto de entrega", placeholder: "Dirección completa, ciudad", required: true },
      fechaHoraRecogida: { label: "Fecha y hora de recogida", required: true },
      fechaHoraEntrega: { label: "Fecha y hora de entrega", required: false },
      personalApoyo: true,
    },
  },
  "transporte-personal": {
    label: "Transporte de Personal",
    color: "#00BCD4",
    fields: {
      numeroPasajeros: true,
      tipoVehiculo: true,
      puntoRecogida: { label: "Lugar de recogida", placeholder: "Dirección o punto de encuentro", required: true },
      puntoEntrega: { label: "Destino", placeholder: "Dirección de destino", required: true },
      fechaHoraRecogida: { label: "Fecha y hora de recogida", required: true },
      fechaHoraEntrega: { label: "Fecha y hora de regreso (si aplica)", required: false },
    },
  },
  "almacenamiento": {
    label: "Almacenamiento",
    color: "#76C442",
    fields: {
      descripcionCarga: { label: "Tipo de mercancía a almacenar", placeholder: "Describa el tipo de producto o mercancía", required: true },
      cantidadDimensiones: { label: "Cantidad / Volumen / Peso", placeholder: "Ej: 50 estibas, 5 toneladas, 30 m³", required: true },
      valorMercancia: { label: "Valor estimado de la mercancía", placeholder: "$5.000.000", required: false },
      tiempoAlmacenamiento: true,
    },
  },
  "distribucion": {
    label: "Distribución Regional",
    color: "#FF5722",
    fields: {
      descripcionCarga: { label: "Descripción de la carga", placeholder: "Tipo de productos a distribuir", required: true },
      cantidadDimensiones: { label: "Cantidad y peso total", placeholder: "Ej: 200 unidades, 500 kg", required: true },
      valorMercancia: { label: "Valor estimado", placeholder: "$2.000.000", required: false },
      zonasDistribucion: true,
      puntoRecogida: { label: "Punto de origen (bodega/fábrica)", placeholder: "Dirección de despacho", required: true },
      fechaHoraRecogida: { label: "Fecha de inicio de distribución", required: true },
      personalApoyo: true,
    },
  },
  "logistica-eventos": {
    label: "Logística para Eventos",
    color: "#9C27B0",
    fields: {
      tipoEvento: true,
      descripcionCarga: { label: "Descripción de necesidades logísticas", placeholder: "Equipos, mobiliario, materiales, etc.", required: true },
      puntoRecogida: { label: "Lugar de origen / bodega", placeholder: "Dirección de recogida", required: true },
      puntoEntrega: { label: "Lugar del evento", placeholder: "Dirección del evento", required: true },
      fechaHoraRecogida: { label: "Fecha y hora de montaje", required: true },
      cantidadDimensiones: { label: "Cantidad de ítems / equipo", placeholder: "Ej: 20 sillas, 5 mesas, 2 toldos", required: false },
    },
  },
  "alquiler-vehiculos": {
    label: "Alquiler de Vehículos",
    color: "#FFD700",
    fields: {
      tipoVehiculo: true,
      conConductor: true,
      puntoRecogida: { label: "Lugar de entrega del vehículo", placeholder: "Dirección donde necesita el vehículo", required: false },
      fechaHoraRecogida: { label: "Fecha y hora de inicio", required: true },
      fechaHoraEntrega: { label: "Fecha y hora de devolución", required: true },
    },
  },
  "otro": {
    label: "Otro servicio",
    color: "#556080",
    fields: {
      descripcionCarga: { label: "Describe el servicio que necesitas", placeholder: "Cuéntanos con detalle qué tipo de servicio logístico requieres", required: true },
    },
  },
}

// ─── Initial form state ────────────────────────────────────────────────────────

const INITIAL = {
  // cliente
  nombreRazonSocial: "",
  nitCedula: "",
  telefono: "",
  correo: "",
  direccionCiudad: "",
  personaContacto: "",
  // servicio
  tipoServicio: "" as ServiceKey | "",
  descripcionCarga: "",
  cantidadDimensiones: "",
  valorMercancia: "",
  puntoRecogida: "",
  puntoEntrega: "",
  fechaHoraRecogida: "",
  fechaHoraEntrega: "",
  personalApoyo: "no",
  numeroPasajeros: "",
  tipoVehiculo: "",
  conConductor: "con-conductor",
  tiempoAlmacenamiento: "",
  zonasDistribucion: "",
  tipoEvento: "",
  // cierre
  facturaElectronica: "no",
  formaPago: "",
  condicionesEspeciales: "",
}

const STEPS = ["Tus datos", "El servicio", "Confirmación"] as const

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactQuoteSection() {
  const [formData, setFormData] = useState(INITIAL)
  const [step, setStep] = useState(0)

  const set = (key: keyof typeof INITIAL, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const serviceConfig = formData.tipoServicio ? SERVICE_CONFIG[formData.tipoServicio] : null
  const fields = serviceConfig?.fields ?? {}

  // ── WhatsApp message ────────────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cfg = formData.tipoServicio ? SERVICE_CONFIG[formData.tipoServicio] : null
    const f = formData

    const lines: string[] = [
      `Hola, soy ${f.nombreRazonSocial || "[Nombre]"}.`,
      `Quiero solicitar una cotización con los siguientes datos:`,
      ``,
      `*Datos del cliente:*`,
      `- Nombre o razón social: ${f.nombreRazonSocial}`,
      `- NIT / Cédula: ${f.nitCedula}`,
      `- Teléfono: ${f.telefono}`,
      `- Correo: ${f.correo}`,
      `- Dirección y ciudad: ${f.direccionCiudad}`,
      `- Persona de contacto: ${f.personaContacto}`,
      ``,
      `*Datos del servicio:*`,
      `- Tipo de servicio: ${cfg?.label ?? f.tipoServicio}`,
    ]

    if (f.numeroPasajeros) lines.push(`- Número de pasajeros: ${f.numeroPasajeros}`)
    if (f.tipoVehiculo) lines.push(`- Tipo de vehículo: ${f.tipoVehiculo}`)
    if (f.conConductor && fields.conConductor) lines.push(`- Con conductor: ${f.conConductor === "con-conductor" ? "Sí" : "No"}`)
    if (f.tipoEvento) lines.push(`- Tipo de evento: ${f.tipoEvento}`)
    if (f.descripcionCarga) lines.push(`- ${cfg?.fields.descripcionCarga?.label ?? "Descripción"}: ${f.descripcionCarga}`)
    if (f.cantidadDimensiones) lines.push(`- ${cfg?.fields.cantidadDimensiones?.label ?? "Cantidad"}: ${f.cantidadDimensiones}`)
    if (f.valorMercancia) lines.push(`- Valor estimado: ${f.valorMercancia}`)
    if (f.tiempoAlmacenamiento) lines.push(`- Tiempo de almacenamiento: ${f.tiempoAlmacenamiento}`)
    if (f.zonasDistribucion) lines.push(`- Zonas de distribución: ${f.zonasDistribucion}`)
    if (f.puntoRecogida) lines.push(`- ${cfg?.fields.puntoRecogida?.label ?? "Punto de recogida"}: ${f.puntoRecogida}`)
    if (f.puntoEntrega) lines.push(`- ${cfg?.fields.puntoEntrega?.label ?? "Punto de entrega"}: ${f.puntoEntrega}`)
    if (f.fechaHoraRecogida) lines.push(`- ${cfg?.fields.fechaHoraRecogida?.label ?? "Fecha recogida"}: ${f.fechaHoraRecogida}`)
    if (f.fechaHoraEntrega) lines.push(`- ${cfg?.fields.fechaHoraEntrega?.label ?? "Fecha entrega"}: ${f.fechaHoraEntrega}`)
    if (fields.personalApoyo) lines.push(`- Personal de apoyo: ${f.personalApoyo === "si" ? "Sí" : "No"}`)

    lines.push(``)
    lines.push(`*Datos de pago:*`)
    lines.push(`- Forma de pago: ${f.formaPago}`)
    lines.push(`- Factura electrónica: ${f.facturaElectronica === "si" ? "Sí" : "No"}`)
    if (f.condicionesEspeciales) lines.push(`- Condiciones especiales: ${f.condicionesEspeciales}`)

    window.open(`https://wa.me/573135600630?text=${encodeURIComponent(lines.join("\n"))}`, "_blank")
  }

  // ── Step validators ─────────────────────────────────────────────────────────
  const step0Valid =
    formData.nombreRazonSocial &&
    formData.nitCedula &&
    formData.telefono &&
    formData.correo &&
    formData.direccionCiudad &&
    formData.personaContacto

  const step1Valid = (() => {
    if (!formData.tipoServicio) return false
    const f = fields
    if (f.numeroPasajeros && !formData.numeroPasajeros) return false
    if (f.descripcionCarga?.required && !formData.descripcionCarga) return false
    if (f.cantidadDimensiones?.required && !formData.cantidadDimensiones) return false
    if (f.valorMercancia?.required && !formData.valorMercancia) return false
    if (f.puntoRecogida?.required && !formData.puntoRecogida) return false
    if (f.puntoEntrega?.required && !formData.puntoEntrega) return false
    if (f.fechaHoraRecogida?.required && !formData.fechaHoraRecogida) return false
    if (f.fechaHoraEntrega?.required && !formData.fechaHoraEntrega) return false
    if (f.tiempoAlmacenamiento && !formData.tiempoAlmacenamiento) return false
    if (f.zonasDistribucion && !formData.zonasDistribucion) return false
    if (f.tipoEvento && !formData.tipoEvento) return false
    return true
  })()

  const step2Valid = !!formData.formaPago

  const canNext = step === 0 ? step0Valid : step === 1 ? step1Valid : step2Valid

  const contactItems = [
    { icon: MapPin, title: "Dirección", content: "Riohacha, La Guajira, Colombia", color: "#E91E8C", href: undefined },
    { icon: Phone, title: "Teléfonos", content: ["313 560 0630", "301 696 3872"], color: "#00BCD4", hrefs: ["tel:+573135600630", "tel:+573016963872"] },
    { icon: Mail, title: "Email", content: "servicioslogisticosjomar@gmail.com", color: "#76C442", href: "mailto:servicioslogisticosjomar@gmail.com" },
    { icon: Clock, title: "Horario", content: "Lun–Vie: 8AM–6PM | Sáb: 8AM–12PM", color: "#FFD700", href: undefined },
  ]

  // ── Shared input helpers ─────────────────────────────────────────────────────
  const Field = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  )
  const FL = ({ id, text, required }: { id: string; text: string; required?: boolean }) => (
    <Label htmlFor={id} className="text-xs font-bold text-[#556080] uppercase tracking-wide">
      {text} {required && <span className="text-[#E91E8C]">*</span>}
    </Label>
  )

  return (
    <section id="cotizacion" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#F0F5FF" }}>
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #E91E8C, #FF5722, #FFD700, #76C442, #00BCD4, #9C27B0)" }} />

      {/* Background diamonds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 opacity-4 top-[-5%] right-[-3%]"
          style={{ backgroundColor: "#E91E8C", transform: "rotate(45deg)", borderRadius: 8 }} />
        <div className="absolute w-48 h-48 opacity-4 bottom-[10%] left-[-2%]"
          style={{ backgroundColor: "#00BCD4", transform: "rotate(45deg)", borderRadius: 8 }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#E91E8C" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#E91E8C" }}>Contacto</span>
            <span className="w-8 h-0.5 rounded-full" style={{ background: "#E91E8C" }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{ color: "#003A70" }}>
            Solicita tu{" "}
            <span style={{
              background: "linear-gradient(90deg, #E91E8C, #FF5722)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Cotización
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #E91E8C, #FFD700, #00BCD4)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ── Contact Info ── */}
          <div>
            <h3 className="text-2xl font-black mb-8" style={{ color: "#003A70" }}>Contáctenos</h3>
            <div className="space-y-5 mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-black text-sm mb-1" style={{ color: "#003A70" }}>{item.title}</div>
                    {Array.isArray(item.content) ? (
                      <div className="space-y-0.5">
                        {item.content.map((c, ci) => (
                          <a key={ci} href={(item as any).hrefs[ci]}
                            className="block text-sm text-[#556080] hover:text-[#003A70] transition-colors">{c}</a>
                        ))}
                      </div>
                    ) : item.href ? (
                      <a href={item.href} className="text-sm text-[#556080] hover:text-[#003A70] transition-colors break-all">
                        {item.content}
                      </a>
                    ) : (
                      <span className="text-sm text-[#556080]">{item.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/573135600630" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-6 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105"
              style={{ background: "#25D366", color: "white", boxShadow: "0 8px 25px rgba(37,211,102,0.40)" }}>
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>

          {/* ── Quote Form ── */}
          <div className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,58,112,0.12)", background: "white" }}>

            {/* Form header */}
            <div className="p-6 text-white" style={{ background: "linear-gradient(135deg, #003A70, #00285A)" }}>
              <div className="flex items-center gap-3 mb-2">
                {["#E91E8C", "#FFD700", "#00BCD4"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c, transform: "rotate(45deg)" }} />
                ))}
              </div>
              <h3 className="text-xl font-black">Solicitud de Cotización</h3>
              <p className="text-white/70 text-sm mt-1">Complete los pasos para recibir una cotización precisa</p>

              {/* Progress bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  {STEPS.map((label, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                        i < step ? "bg-[#76C442] text-white" : i === step ? "bg-white text-[#003A70]" : "bg-white/20 text-white/50"
                      }`}>
                        {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </div>
                      <span className={`text-xs font-bold hidden sm:block transition-all duration-300 ${
                        i === step ? "text-white" : i < step ? "text-[#76C442]" : "text-white/40"
                      }`}>{label}</span>
                      {i < STEPS.length - 1 && (
                        <div className="w-8 sm:w-12 h-0.5 mx-1 rounded-full transition-all duration-300"
                          style={{ background: i < step ? "#76C442" : "rgba(255,255,255,0.2)" }} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full h-1 rounded-full bg-white/20">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${((step) / (STEPS.length - 1)) * 100}%`, background: "#76C442" }} />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4">

                {/* ── PASO 0: Datos del Cliente ── */}
                {step === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <SectionTitle color="#E91E8C" text="Datos del Cliente" />

                    <Field>
                      <FL id="nombreRazonSocial" text="Nombre o Razón Social" required />
                      <Input id="nombreRazonSocial" value={formData.nombreRazonSocial}
                        onChange={(e) => set("nombreRazonSocial", e.target.value)}
                        placeholder="Nombre completo o empresa" className="mt-1" />
                    </Field>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FL id="nitCedula" text="NIT / Cédula" required />
                        <Input id="nitCedula" value={formData.nitCedula}
                          onChange={(e) => set("nitCedula", e.target.value)}
                          placeholder="123456789" className="mt-1" />
                      </Field>
                      <Field>
                        <FL id="telefono" text="Teléfono" required />
                        <Input id="telefono" type="tel" value={formData.telefono}
                          onChange={(e) => set("telefono", e.target.value)}
                          placeholder="300 123 4567" className="mt-1" />
                      </Field>
                    </div>

                    <Field>
                      <FL id="correo" text="Correo Electrónico" required />
                      <Input id="correo" type="email" value={formData.correo}
                        onChange={(e) => set("correo", e.target.value)}
                        placeholder="correo@ejemplo.com" className="mt-1" />
                    </Field>

                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FL id="direccionCiudad" text="Dirección y Ciudad" required />
                        <Input id="direccionCiudad" value={formData.direccionCiudad}
                          onChange={(e) => set("direccionCiudad", e.target.value)}
                          placeholder="Calle 123, Riohacha" className="mt-1" />
                      </Field>
                      <Field>
                        <FL id="personaContacto" text="Persona de Contacto" required />
                        <Input id="personaContacto" value={formData.personaContacto}
                          onChange={(e) => set("personaContacto", e.target.value)}
                          placeholder="Nombre de contacto" className="mt-1" />
                      </Field>
                    </div>
                  </div>
                )}

                {/* ── PASO 1: Datos del Servicio ── */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <SectionTitle color="#00BCD4" text="Datos del Servicio" />

                    {/* Tipo de servicio */}
                    <Field>
                      <FL id="tipoServicio" text="Tipo de Servicio" required />
                      <Select value={formData.tipoServicio}
                        onValueChange={(v) => {
                          setFormData({ ...INITIAL, ...Object.fromEntries(
                            ["nombreRazonSocial","nitCedula","telefono","correo","direccionCiudad","personaContacto"]
                              .map(k => [k, formData[k as keyof typeof formData]])
                          ), tipoServicio: v as ServiceKey })
                        }}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleccione un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {(Object.entries(SERVICE_CONFIG) as [ServiceKey, ServiceConfig][]).map(([key, cfg]) => (
                            <SelectItem key={key} value={key}>{cfg.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    {/* Dynamic fields */}
                    {formData.tipoServicio && (
                      <div className="space-y-4 pt-1">
                        {/* Número de pasajeros */}
                        {fields.numeroPasajeros && (
                          <Field>
                            <FL id="numeroPasajeros" text="Número de pasajeros" required />
                            <Input id="numeroPasajeros" type="number" min="1" value={formData.numeroPasajeros}
                              onChange={(e) => set("numeroPasajeros", e.target.value)}
                              placeholder="Ej: 8 personas" className="mt-1" />
                          </Field>
                        )}

                        {/* Tipo de vehículo */}
                        {fields.tipoVehiculo && (
                          <Field>
                            <FL id="tipoVehiculo" text="Tipo de vehículo preferido" />
                            <Select value={formData.tipoVehiculo} onValueChange={(v) => set("tipoVehiculo", v)}>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Seleccione tipo de vehículo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="camioneta">Camioneta</SelectItem>
                                <SelectItem value="bus">Bus / Buseta</SelectItem>
                                <SelectItem value="van">Van</SelectItem>
                                <SelectItem value="camion">Camión</SelectItem>
                                <SelectItem value="tractomula">Tractomula</SelectItem>
                                <SelectItem value="otro">Otro / Sin preferencia</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                        )}

                        {/* Con/sin conductor */}
                        {fields.conConductor && (
                          <Field>
                            <Label className="text-xs font-bold text-[#556080] uppercase tracking-wide">
                              ¿Con o sin conductor? <span className="text-[#E91E8C]">*</span>
                            </Label>
                            <RadioGroup value={formData.conConductor}
                              onValueChange={(v) => set("conConductor", v)}
                              className="flex gap-4 mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="con-conductor" id="cc-si" />
                                <Label htmlFor="cc-si" className="font-normal cursor-pointer">Con conductor</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sin-conductor" id="cc-no" />
                                <Label htmlFor="cc-no" className="font-normal cursor-pointer">Sin conductor</Label>
                              </div>
                            </RadioGroup>
                          </Field>
                        )}

                        {/* Tipo de evento */}
                        {fields.tipoEvento && (
                          <Field>
                            <FL id="tipoEvento" text="Tipo de evento" required />
                            <Input id="tipoEvento" value={formData.tipoEvento}
                              onChange={(e) => set("tipoEvento", e.target.value)}
                              placeholder="Ej: Conferencia, matrimonio, feria comercial" className="mt-1" />
                          </Field>
                        )}

                        {/* Descripción carga / servicio */}
                        {fields.descripcionCarga && (
                          <Field>
                            <FL id="descripcionCarga" text={fields.descripcionCarga.label} required={fields.descripcionCarga.required} />
                            <Textarea id="descripcionCarga" value={formData.descripcionCarga}
                              onChange={(e) => set("descripcionCarga", e.target.value)}
                              placeholder={fields.descripcionCarga.placeholder} rows={2} className="mt-1" />
                          </Field>
                        )}

                        {/* Cantidad y dimensiones */}
                        {fields.cantidadDimensiones && (
                          <Field>
                            <FL id="cantidadDimensiones" text={fields.cantidadDimensiones.label}
                              required={fields.cantidadDimensiones.required} />
                            <Input id="cantidadDimensiones" value={formData.cantidadDimensiones}
                              onChange={(e) => set("cantidadDimensiones", e.target.value)}
                              placeholder={fields.cantidadDimensiones.placeholder} className="mt-1" />
                          </Field>
                        )}

                        {/* Valor mercancía */}
                        {fields.valorMercancia && (
                          <Field>
                            <FL id="valorMercancia" text={fields.valorMercancia.label}
                              required={fields.valorMercancia.required} />
                            <Input id="valorMercancia" value={formData.valorMercancia}
                              onChange={(e) => set("valorMercancia", e.target.value)}
                              placeholder={fields.valorMercancia.placeholder} className="mt-1" />
                          </Field>
                        )}

                        {/* Tiempo de almacenamiento */}
                        {fields.tiempoAlmacenamiento && (
                          <Field>
                            <FL id="tiempoAlmacenamiento" text="Tiempo de almacenamiento estimado" required />
                            <Input id="tiempoAlmacenamiento" value={formData.tiempoAlmacenamiento}
                              onChange={(e) => set("tiempoAlmacenamiento", e.target.value)}
                              placeholder="Ej: 3 meses, 1 año, indefinido" className="mt-1" />
                          </Field>
                        )}

                        {/* Zonas de distribución */}
                        {fields.zonasDistribucion && (
                          <Field>
                            <FL id="zonasDistribucion" text="Zonas / ciudades de distribución" required />
                            <Input id="zonasDistribucion" value={formData.zonasDistribucion}
                              onChange={(e) => set("zonasDistribucion", e.target.value)}
                              placeholder="Ej: Riohacha, Maicao, Uribia, Manaure" className="mt-1" />
                          </Field>
                        )}

                        {/* Puntos de recogida y entrega */}
                        {(fields.puntoRecogida || fields.puntoEntrega) && (
                          <div className={fields.puntoRecogida && fields.puntoEntrega ? "grid grid-cols-2 gap-4" : ""}>
                            {fields.puntoRecogida && (
                              <Field>
                                <FL id="puntoRecogida" text={fields.puntoRecogida.label}
                                  required={fields.puntoRecogida.required} />
                                <Input id="puntoRecogida" value={formData.puntoRecogida}
                                  onChange={(e) => set("puntoRecogida", e.target.value)}
                                  placeholder={fields.puntoRecogida.placeholder} className="mt-1" />
                              </Field>
                            )}
                            {fields.puntoEntrega && (
                              <Field>
                                <FL id="puntoEntrega" text={fields.puntoEntrega.label}
                                  required={fields.puntoEntrega.required} />
                                <Input id="puntoEntrega" value={formData.puntoEntrega}
                                  onChange={(e) => set("puntoEntrega", e.target.value)}
                                  placeholder={fields.puntoEntrega.placeholder} className="mt-1" />
                              </Field>
                            )}
                          </div>
                        )}

                        {/* Fechas */}
                        {(fields.fechaHoraRecogida || fields.fechaHoraEntrega) && (
                          <div className={fields.fechaHoraRecogida && fields.fechaHoraEntrega ? "grid grid-cols-2 gap-4" : ""}>
                            {fields.fechaHoraRecogida && (
                              <Field>
                                <FL id="fechaHoraRecogida" text={fields.fechaHoraRecogida.label}
                                  required={fields.fechaHoraRecogida.required} />
                                <Input id="fechaHoraRecogida" type="datetime-local" value={formData.fechaHoraRecogida}
                                  onChange={(e) => set("fechaHoraRecogida", e.target.value)} className="mt-1" />
                              </Field>
                            )}
                            {fields.fechaHoraEntrega && (
                              <Field>
                                <FL id="fechaHoraEntrega" text={fields.fechaHoraEntrega.label}
                                  required={fields.fechaHoraEntrega.required} />
                                <Input id="fechaHoraEntrega" type="datetime-local" value={formData.fechaHoraEntrega}
                                  onChange={(e) => set("fechaHoraEntrega", e.target.value)} className="mt-1" />
                              </Field>
                            )}
                          </div>
                        )}

                        {/* Personal de apoyo */}
                        {fields.personalApoyo && (
                          <Field>
                            <Label className="text-xs font-bold text-[#556080] uppercase tracking-wide">
                              ¿Requiere personal de apoyo?
                            </Label>
                            <RadioGroup value={formData.personalApoyo}
                              onValueChange={(v) => set("personalApoyo", v)}
                              className="flex gap-4 mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="si" id="apoyo-si" />
                                <Label htmlFor="apoyo-si" className="font-normal cursor-pointer">Sí</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="apoyo-no" />
                                <Label htmlFor="apoyo-no" className="font-normal cursor-pointer">No</Label>
                              </div>
                            </RadioGroup>
                          </Field>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* ── PASO 2: Confirmación ── */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <SectionTitle color="#76C442" text="Detalles de Pago y Envío" />

                    {/* Resumen del servicio */}
                    {serviceConfig && (
                      <div className="rounded-xl p-4 text-sm"
                        style={{ background: `${serviceConfig.color}10`, border: `1px solid ${serviceConfig.color}30` }}>
                        <p className="font-black text-xs uppercase tracking-wide mb-1" style={{ color: serviceConfig.color }}>
                          Servicio seleccionado
                        </p>
                        <p className="font-bold" style={{ color: "#003A70" }}>{serviceConfig.label}</p>
                        {formData.puntoRecogida && (
                          <p className="text-[#556080] text-xs mt-1">
                            Desde: {formData.puntoRecogida}
                            {formData.puntoEntrega && ` → ${formData.puntoEntrega}`}
                          </p>
                        )}
                        {formData.fechaHoraRecogida && (
                          <p className="text-[#556080] text-xs">
                            Fecha: {new Date(formData.fechaHoraRecogida).toLocaleString("es-CO", {
                              dateStyle: "medium", timeStyle: "short"
                            })}
                          </p>
                        )}
                      </div>
                    )}

                    <Field>
                      <FL id="formaPago" text="Forma de Pago" required />
                      <Select value={formData.formaPago} onValueChange={(v) => set("formaPago", v)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleccione forma de pago" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="efectivo">Efectivo</SelectItem>
                          <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                          <SelectItem value="cheque">Cheque</SelectItem>
                          <SelectItem value="credito">Crédito</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <Label className="text-xs font-bold text-[#556080] uppercase tracking-wide">
                        ¿Requiere Factura Electrónica?
                      </Label>
                      <RadioGroup value={formData.facturaElectronica}
                        onValueChange={(v) => set("facturaElectronica", v)}
                        className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="si" id="factura-si" />
                          <Label htmlFor="factura-si" className="font-normal cursor-pointer">Sí</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="factura-no" />
                          <Label htmlFor="factura-no" className="font-normal cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </Field>

                    <Field>
                      <FL id="condicionesEspeciales" text="Condiciones especiales" />
                      <Textarea id="condicionesEspeciales" value={formData.condicionesEspeciales}
                        onChange={(e) => set("condicionesEspeciales", e.target.value)}
                        placeholder="Indique cualquier requisito o condición especial" rows={2} className="mt-1" />
                      <p className="text-xs text-[#99AABB] mt-1">Opcional — refrigeración, horarios restringidos, etc.</p>
                    </Field>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="px-6 pb-6 flex gap-3">
                {step > 0 && (
                  <button type="button" onClick={() => setStep(s => s - 1)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-gray-100 border border-gray-200"
                    style={{ color: "#556080" }}>
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </button>
                )}

                {step < STEPS.length - 1 ? (
                  <button type="button"
                    disabled={!canNext}
                    onClick={() => setStep(s => s + 1)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-white text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
                    style={{ background: canNext ? "linear-gradient(135deg, #003A70, #005B9A)" : "#ccc",
                      boxShadow: canNext ? "0 6px 20px rgba(0,58,112,0.30)" : "none" }}>
                    Siguiente paso
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit"
                    disabled={!step2Valid}
                    className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl font-black text-white text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
                    style={{ background: step2Valid ? "#25D366" : "#ccc",
                      boxShadow: step2Valid ? "0 8px 25px rgba(37,211,102,0.40)" : "none" }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enviar por WhatsApp
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function SectionTitle({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2 pb-2 border-b border-dashed" style={{ borderColor: `${color}40` }}>
      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: color, transform: "rotate(45deg)" }} />
      <h4 className="font-black text-sm" style={{ color: "#003A70" }}>{text}</h4>
    </div>
  )
}
