"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "¿Cuál es el beneficio de utilizar agentes oficiales de Disney y Universal?",
    answer:
      "Como agentes oficiales, tenemos acceso directo a ofertas exclusivas, promociones especiales y conocimiento actualizado de todos los parques. Podemos ayudarte a maximizar tu tiempo y presupuesto, además de brindarte asesoramiento experto sobre las mejores épocas para visitar, restaurantes, y experiencias imperdibles.",
  },
  {
    question: "¿Realmente es gratuito el servicio de asesoramiento?",
    answer:
      "¡Sí! Nuestro servicio de asesoramiento y planificación es completamente gratuito. No cobramos comisiones adicionales a nuestros clientes. Ganamos a través de las comisiones que nos pagan Disney y Universal directamente, por lo que tú obtienes el mejor precio posible.",
  },
  {
    question: "¿Qué incluye la atención personalizada?",
    answer:
      "Creamos un itinerario completamente personalizado basado en tus preferencias, presupuesto y tiempo disponible. Incluye recomendaciones de hoteles, restaurantes, FastPass+, Genie+, y actividades especiales. También te acompañamos durante todo el proceso y estamos disponibles para resolver cualquier duda antes y durante tu viaje.",
  },
  {
    question: "¿Pueden ayudarme con reservas de restaurantes y experiencias especiales?",
    answer:
      "¡Por supuesto! Nos encargamos de todas las reservas importantes: restaurantes, experiencias VIP, tours especiales, y cualquier actividad adicional que desees. Conocemos los mejores lugares y horarios para maximizar tu experiencia mágica.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y cómo podemos ayudarte a planear tu viaje
            perfecto.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 bg-muted/30">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">¿Tienes más preguntas? ¡Estamos aquí para ayudarte!</p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a
              href="https://wa.me/1234567890?text=Hola! Tengo algunas preguntas sobre los servicios para mi viaje a Orlando"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hacer una Pregunta</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
