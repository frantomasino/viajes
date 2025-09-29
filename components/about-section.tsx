import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="/tom-s-y-paula-agentes-disney-universal-orlando.jpg" alt="Tomás y Paula" className="w-full h-full object-cover" />
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Sobre <span className="text-primary">nosotros</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
            agentes oficiales de Disney y Universal, listos para ayudarte a armar tu viaje mágico de
            manera gratuita. ¡Déjanos hacer tus sueños realidad!
          </p>

          {/* Value Proposition Card */}
          <Card className="bg-muted/30 border-0 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-card-foreground leading-relaxed">
                Reserva con nosotros tu viaje a Disney o Universal y te garantizamos una experiencia mágica inolvidable.
                Asesoramiento personalizado y atención exclusiva.
                <span className="font-semibold text-primary"> ¡Haz tus sueños realidad ahora!</span>
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a
              href="https://wa.me/1234567890?text=¡Hola! Me gustaría conocer más sobre sus servicios como agentes oficiales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Conoce Más Sobre Nosotros</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
