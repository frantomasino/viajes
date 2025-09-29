import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            ¿Listo para tu
            <span className="text-primary"> Aventura Mágica?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy y comencemos a planear el viaje de tus sueños. Estamos aquí para hacer realidad tu
            experiencia perfecta en Orlando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hablemos de tu próxima aventura</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro equipo de expertos está listo para crear una experiencia única y personalizada. Desde la
                planificación hasta el último detalle, estaremos contigo en cada paso.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">WhatsApp (Recomendado)</h4>
                      <p className="text-muted-foreground text-sm mb-3">Respuesta inmediata y atención personalizada</p>
                      <Button size="sm" asChild>
                        <a
                          href="https://wa.me/1234567890?text=¡Hola! Quiero información sobre los viajes a Orlando 🏰"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Escribir ahora
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Instagram</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Síguenos para ver experiencias reales y tips exclusivos
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://." target="_blank" rel="noopener noreferrer">
.....                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Lun - Dom: 8:00 - 22:00</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Orlando, Florida</span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:pl-8">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">¡Comencemos a Planear!</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Un simple mensaje es todo lo que necesitas para comenzar tu aventura mágica. Te responderemos en
                  minutos con una propuesta personalizada.
                </p>

                <div className="space-y-4">
                  <Button size="lg" className="w-full text-lg py-6" asChild>
                    <a
                      href="https://wa.me/1234567890?text=¡Hola! Estoy interesado en planear un viaje a Orlando. ¿Pueden ayudarme con información sobre paquetes y precios? 🎢✨"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Enviar WhatsApp</span>
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    ✓ Respuesta en menos de 30 minutos
                    <br />✓ Consulta gratuita y sin compromiso
                    <br />✓ Propuesta personalizada
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
