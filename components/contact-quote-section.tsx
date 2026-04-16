"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactQuoteSection() {
  const [formData, setFormData] = useState({
    nombreRazonSocial: "",
    nitCedula: "",
    telefono: "",
    correo: "",
    direccionCiudad: "",
    personaContacto: "",
    tipoServicio: "",
    descripcionCarga: "",
    cantidadDimensiones: "",
    valorMercancia: "",
    puntoRecogida: "",
    puntoEntrega: "",
    fechaHoraRecogida: "",
    fechaHoraEntrega: "",
    personalApoyo: "no",
    facturaElectronica: "no",
    formaPago: "",
    condicionesEspeciales: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, soy ${formData.nombreRazonSocial || "[Nombre]"}.
Quiero solicitar una cotización con los siguientes datos:

*Datos del cliente:*
- Nombre o razón social: ${formData.nombreRazonSocial}
- NIT / Cédula: ${formData.nitCedula}
- Teléfono: ${formData.telefono}
- Correo: ${formData.correo}
- Dirección y ciudad: ${formData.direccionCiudad}
- Persona de contacto: ${formData.personaContacto}

*Datos del servicio:*
- Tipo de servicio: ${formData.tipoServicio}
- Descripción de la carga: ${formData.descripcionCarga}
- Cantidad y dimensiones: ${formData.cantidadDimensiones}
- Valor estimado de la mercancía: ${formData.valorMercancia}
- Punto de recogida: ${formData.puntoRecogida}
- Punto de entrega: ${formData.puntoEntrega}
- Fecha y hora de recogida: ${formData.fechaHoraRecogida}
- Fecha y hora de entrega: ${formData.fechaHoraEntrega}
- ¿Requiere personal de apoyo?: ${formData.personalApoyo === "si" ? "Sí" : "No"}
- ¿Requiere factura electrónica?: ${formData.facturaElectronica === "si" ? "Sí" : "No"}
- Forma de pago: ${formData.formaPago}
- Condiciones especiales: ${formData.condicionesEspeciales || "Ninguna"}`

    const phone = "573135600630"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const contactItems = [
    { icon: MapPin, title: "Dirección", content: "Riohacha, La Guajira, Colombia", color: "#E91E8C", href: undefined },
    { icon: Phone, title: "Teléfonos", content: ["313 560 0630", "301 696 3872"], color: "#00BCD4", hrefs: ["tel:+573135600630", "tel:+573016963872"] },
    { icon: Mail, title: "Email", content: "servicioslogisticosjomar@gmail.com", color: "#76C442", href: "mailto:servicioslogisticosjomar@gmail.com" },
    { icon: Clock, title: "Horario", content: "Lun–Vie: 8AM–6PM | Sáb: 8AM–12PM", color: "#FFD700", href: undefined },
  ]

  return (
    <section id="cotizacion" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#F0F5FF" }}>
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #E91E8C, #FF5722, #FFD700, #76C442, #00BCD4, #9C27B0)" }}
      />

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
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#E91E8C" }}>
              Contacto
            </span>
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
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-black mb-8" style={{ color: "#003A70" }}>Contáctenos</h3>

            <div className="space-y-5 mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
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

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573135600630"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-6 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105"
              style={{
                background: "#25D366",
                color: "white",
                boxShadow: "0 8px 25px rgba(37,211,102,0.40)",
              }}
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>

          {/* Quote Form */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,58,112,0.12)", background: "white" }}
          >
            {/* Form header */}
            <div
              className="p-6 text-white"
              style={{ background: "linear-gradient(135deg, #003A70, #00285A)" }}
            >
              <div className="flex items-center gap-3 mb-1">
                {/* Rainbow diamond row */}
                {["#E91E8C", "#FFD700", "#00BCD4"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c, transform: "rotate(45deg)" }} />
                ))}
              </div>
              <h3 className="text-xl font-black">Solicitud de Cotización</h3>
              <p className="text-white/70 text-sm mt-1">Complete todos los campos para una cotización precisa</p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Datos del Cliente */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-dashed" style={{ borderColor: "#E91E8C40" }}>
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#E91E8C", transform: "rotate(45deg)" }} />
                    <h4 className="font-black text-sm" style={{ color: "#003A70" }}>Datos del Cliente</h4>
                  </div>

                  <div>
                    <Label htmlFor="nombreRazonSocial" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Nombre o Razón Social *</Label>
                    <Input id="nombreRazonSocial" required value={formData.nombreRazonSocial}
                      onChange={(e) => setFormData({ ...formData, nombreRazonSocial: e.target.value })}
                      placeholder="Nombre completo o empresa" className="mt-1" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nitCedula" className="text-xs font-bold text-[#556080] uppercase tracking-wide">NIT / Cédula *</Label>
                      <Input id="nitCedula" required value={formData.nitCedula}
                        onChange={(e) => setFormData({ ...formData, nitCedula: e.target.value })}
                        placeholder="123456789" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Teléfono *</Label>
                      <Input id="telefono" type="tel" required value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="300 123 4567" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="correo" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Correo Electrónico *</Label>
                    <Input id="correo" type="email" required value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      placeholder="correo@ejemplo.com" className="mt-1" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="direccionCiudad" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Dirección y Ciudad *</Label>
                      <Input id="direccionCiudad" required value={formData.direccionCiudad}
                        onChange={(e) => setFormData({ ...formData, direccionCiudad: e.target.value })}
                        placeholder="Calle 123, Riohacha" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="personaContacto" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Persona de Contacto *</Label>
                      <Input id="personaContacto" required value={formData.personaContacto}
                        onChange={(e) => setFormData({ ...formData, personaContacto: e.target.value })}
                        placeholder="Nombre de contacto" className="mt-1" />
                    </div>
                  </div>
                </div>

                {/* Datos del Servicio */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-dashed" style={{ borderColor: "#00BCD440" }}>
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#00BCD4", transform: "rotate(45deg)" }} />
                    <h4 className="font-black text-sm" style={{ color: "#003A70" }}>Datos del Servicio</h4>
                  </div>

                  <div>
                    <Label htmlFor="tipoServicio" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Tipo de Servicio *</Label>
                    <Select required value={formData.tipoServicio}
                      onValueChange={(value) => setFormData({ ...formData, tipoServicio: value })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transporte-carga">Transporte de Carga</SelectItem>
                        <SelectItem value="transporte-personal">Transporte de Personal</SelectItem>
                        <SelectItem value="almacenamiento">Almacenamiento</SelectItem>
                        <SelectItem value="distribucion">Distribución Regional</SelectItem>
                        <SelectItem value="logistica-eventos">Logística para Eventos</SelectItem>
                        <SelectItem value="alquiler-vehiculos">Alquiler de Vehículos</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="descripcionCarga" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Descripción de la Carga *</Label>
                    <Textarea id="descripcionCarga" required value={formData.descripcionCarga}
                      onChange={(e) => setFormData({ ...formData, descripcionCarga: e.target.value })}
                      placeholder="Describa detalladamente la carga a transportar" rows={2} className="mt-1" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cantidadDimensiones" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Cantidad y Dimensiones *</Label>
                      <Input id="cantidadDimensiones" required value={formData.cantidadDimensiones}
                        onChange={(e) => setFormData({ ...formData, cantidadDimensiones: e.target.value })}
                        placeholder="Ej: 10 cajas, 200 kg" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="valorMercancia" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Valor Estimado *</Label>
                      <Input id="valorMercancia" required value={formData.valorMercancia}
                        onChange={(e) => setFormData({ ...formData, valorMercancia: e.target.value })}
                        placeholder="$1.000.000" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="puntoRecogida" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Punto de Recogida *</Label>
                      <Input id="puntoRecogida" required value={formData.puntoRecogida}
                        onChange={(e) => setFormData({ ...formData, puntoRecogida: e.target.value })}
                        placeholder="Dirección completa" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="puntoEntrega" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Punto de Entrega *</Label>
                      <Input id="puntoEntrega" required value={formData.puntoEntrega}
                        onChange={(e) => setFormData({ ...formData, puntoEntrega: e.target.value })}
                        placeholder="Dirección completa" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fechaHoraRecogida" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Fecha y Hora de Recogida *</Label>
                      <Input id="fechaHoraRecogida" type="datetime-local" required value={formData.fechaHoraRecogida}
                        onChange={(e) => setFormData({ ...formData, fechaHoraRecogida: e.target.value })} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="fechaHoraEntrega" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Fecha y Hora de Entrega *</Label>
                      <Input id="fechaHoraEntrega" type="datetime-local" required value={formData.fechaHoraEntrega}
                        onChange={(e) => setFormData({ ...formData, fechaHoraEntrega: e.target.value })} className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-bold text-[#556080] uppercase tracking-wide">¿Personal de Apoyo? *</Label>
                      <RadioGroup value={formData.personalApoyo}
                        onValueChange={(value) => setFormData({ ...formData, personalApoyo: value })}
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
                    </div>
                    <div>
                      <Label className="text-xs font-bold text-[#556080] uppercase tracking-wide">¿Factura Electrónica? *</Label>
                      <RadioGroup value={formData.facturaElectronica}
                        onValueChange={(value) => setFormData({ ...formData, facturaElectronica: value })}
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
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="formaPago" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Forma de Pago *</Label>
                    <Select required value={formData.formaPago}
                      onValueChange={(value) => setFormData({ ...formData, formaPago: value })}>
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
                  </div>

                  <div>
                    <Label htmlFor="condicionesEspeciales" className="text-xs font-bold text-[#556080] uppercase tracking-wide">Condiciones Especiales</Label>
                    <Textarea id="condicionesEspeciales" value={formData.condicionesEspeciales}
                      onChange={(e) => setFormData({ ...formData, condicionesEspeciales: e.target.value })}
                      placeholder="Indique cualquier condición o requisito especial" rows={2} className="mt-1" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-white text-base transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: "#25D366",
                    boxShadow: "0 8px 25px rgba(37,211,102,0.40)",
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar Cotización por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
