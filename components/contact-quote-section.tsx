"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactQuoteSection() {
  const [formData, setFormData] = useState({
    // Datos del cliente
    nombreRazonSocial: "",
    nitCedula: "",
    telefono: "",
    correo: "",
    direccionCiudad: "",
    personaContacto: "",

    // Datos del servicio
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

  return (
    <section id="cotizacion" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Contáctenos</h2>
            <div className="w-24 h-1 bg-secondary mb-8"></div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Riohacha, La Guajira
                    <br />
                    Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfonos</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+573135600630" className="hover:text-primary transition-colors">
                      313 560 0630
                    </a>
                    <br />
                    <a href="tel:+573016963872" className="hover:text-primary transition-colors">
                      301 696 3872
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground break-all">
                    <a
                      href="mailto:servicioslogisticosjomar@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      servicioslogisticosjomar@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-secondary-foreground">Horario de Atención</h3>
              <p className="text-secondary-foreground/90">
                Lunes a Viernes: 8:00 AM - 6:00 PM
                <br />
                Sábados: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <Card id="quote-form" className="border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Solicitud de Cotización</CardTitle>
              <p className="text-sm text-muted-foreground">Complete todos los campos para una cotización precisa</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Datos del Cliente */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Datos del Cliente</h3>

                  <div>
                    <Label htmlFor="nombreRazonSocial">Nombre o Razón Social *</Label>
                    <Input
                      id="nombreRazonSocial"
                      required
                      value={formData.nombreRazonSocial}
                      onChange={(e) => setFormData({ ...formData, nombreRazonSocial: e.target.value })}
                      placeholder="Nombre completo o empresa"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nitCedula">NIT / Cédula *</Label>
                      <Input
                        id="nitCedula"
                        required
                        value={formData.nitCedula}
                        onChange={(e) => setFormData({ ...formData, nitCedula: e.target.value })}
                        placeholder="123456789"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="300 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="correo">Correo Electrónico *</Label>
                    <Input
                      id="correo"
                      type="email"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="direccionCiudad">Dirección y Ciudad *</Label>
                    <Input
                      id="direccionCiudad"
                      required
                      value={formData.direccionCiudad}
                      onChange={(e) => setFormData({ ...formData, direccionCiudad: e.target.value })}
                      placeholder="Calle 123 #45-67, Riohacha"
                    />
                  </div>

                  <div>
                    <Label htmlFor="personaContacto">Persona de Contacto *</Label>
                    <Input
                      id="personaContacto"
                      required
                      value={formData.personaContacto}
                      onChange={(e) => setFormData({ ...formData, personaContacto: e.target.value })}
                      placeholder="Nombre de la persona de contacto"
                    />
                  </div>
                </div>

                {/* Datos del Servicio */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Datos del Servicio</h3>

                  <div>
                    <Label htmlFor="tipoServicio">Tipo de Servicio *</Label>
                    <Select
                      required
                      value={formData.tipoServicio}
                      onValueChange={(value) => setFormData({ ...formData, tipoServicio: value })}
                    >
                      <SelectTrigger>
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
                    <Label htmlFor="descripcionCarga">Descripción de la Carga *</Label>
                    <Textarea
                      id="descripcionCarga"
                      required
                      value={formData.descripcionCarga}
                      onChange={(e) => setFormData({ ...formData, descripcionCarga: e.target.value })}
                      placeholder="Describa detalladamente la carga a transportar"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cantidadDimensiones">Cantidad y Dimensiones *</Label>
                    <Input
                      id="cantidadDimensiones"
                      required
                      value={formData.cantidadDimensiones}
                      onChange={(e) => setFormData({ ...formData, cantidadDimensiones: e.target.value })}
                      placeholder="Ej: 10 cajas de 50x50x50 cm, 200 kg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="valorMercancia">Valor Estimado de la Mercancía *</Label>
                    <Input
                      id="valorMercancia"
                      required
                      value={formData.valorMercancia}
                      onChange={(e) => setFormData({ ...formData, valorMercancia: e.target.value })}
                      placeholder="$1.000.000"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="puntoRecogida">Punto de Recogida *</Label>
                      <Input
                        id="puntoRecogida"
                        required
                        value={formData.puntoRecogida}
                        onChange={(e) => setFormData({ ...formData, puntoRecogida: e.target.value })}
                        placeholder="Dirección completa"
                      />
                    </div>

                    <div>
                      <Label htmlFor="puntoEntrega">Punto de Entrega *</Label>
                      <Input
                        id="puntoEntrega"
                        required
                        value={formData.puntoEntrega}
                        onChange={(e) => setFormData({ ...formData, puntoEntrega: e.target.value })}
                        placeholder="Dirección completa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fechaHoraRecogida">Fecha y Hora de Recogida *</Label>
                      <Input
                        id="fechaHoraRecogida"
                        type="datetime-local"
                        required
                        value={formData.fechaHoraRecogida}
                        onChange={(e) => setFormData({ ...formData, fechaHoraRecogida: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="fechaHoraEntrega">Fecha y Hora de Entrega *</Label>
                      <Input
                        id="fechaHoraEntrega"
                        type="datetime-local"
                        required
                        value={formData.fechaHoraEntrega}
                        onChange={(e) => setFormData({ ...formData, fechaHoraEntrega: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>¿Requiere Personal de Apoyo? *</Label>
                      <RadioGroup
                        value={formData.personalApoyo}
                        onValueChange={(value) => setFormData({ ...formData, personalApoyo: value })}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="si" id="apoyo-si" />
                          <Label htmlFor="apoyo-si" className="font-normal cursor-pointer">
                            Sí
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="apoyo-no" />
                          <Label htmlFor="apoyo-no" className="font-normal cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>¿Requiere Factura Electrónica? *</Label>
                      <RadioGroup
                        value={formData.facturaElectronica}
                        onValueChange={(value) => setFormData({ ...formData, facturaElectronica: value })}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="si" id="factura-si" />
                          <Label htmlFor="factura-si" className="font-normal cursor-pointer">
                            Sí
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="factura-no" />
                          <Label htmlFor="factura-no" className="font-normal cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="formaPago">Forma de Pago *</Label>
                    <Select
                      required
                      value={formData.formaPago}
                      onValueChange={(value) => setFormData({ ...formData, formaPago: value })}
                    >
                      <SelectTrigger>
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
                    <Label htmlFor="condicionesEspeciales">Condiciones Especiales</Label>
                    <Textarea
                      id="condicionesEspeciales"
                      value={formData.condicionesEspeciales}
                      onChange={(e) => setFormData({ ...formData, condicionesEspeciales: e.target.value })}
                      placeholder="Indique cualquier condición o requisito especial"
                      rows={3}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Enviar Cotización por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
