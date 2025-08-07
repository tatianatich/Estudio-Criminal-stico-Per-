'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [serviceType, setServiceType] = useState('Selecciona un servicio')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hola, mi nombre es ${name}.%0AMi teléfono es ${phone} y mi email es ${email}.%0AMe interesa el servicio de: ${serviceType}.%0AMi consulta es: ${message}.`
    const whatsappUrl = `https://wa.me/51950711770?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')

    // Opcional: Limpiar el formulario después de enviar
    setName('')
    setPhone('')
    setEmail('')
    setServiceType('Selecciona un servicio')
    setMessage('')
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Envíanos un Mensaje</CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo a la brevedad.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
              <Input id="name" placeholder="Tu nombre completo" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
              <Input id="phone" placeholder="Tu número de teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <Input id="email" type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">Tipo de Servicio</label>
            <select
              id="serviceType"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option disabled>Selecciona un servicio</option>
              <option>Derecho Penal</option>
              <option>Derecho Civil</option>
              <option>Servicios Periciales</option>
              <option>Asesoramiento Jurídico</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
            <Textarea id="message" placeholder="Describe tu consulta o caso..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
            <Mail className="mr-2 h-5 w-5" />
            Enviar Consulta
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
