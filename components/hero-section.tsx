import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/orlando-theme-parks-magical-castle-sunset-vibrant-.jpg"
          alt="Orlando Magic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Agentes Oficiales Disney y Universal</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight mb-6">
            <span className="text-foreground">Agencia de</span>
            <br />
            <span className="text-primary">Viajes</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mb-8 leading-relaxed">
            Te ayudamos a armar tu viaje mágico de manera gratuita. Asesoramiento personalizado y atención exclusiva.
            ¡Déjanos hacer tus sueños realidad!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a
                href="https://wa.me/1131256510?text=¡Hola! Quiero planear mi viaje mágico a Orlando 🏰✨"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Planea tu Viaje Gratis</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
              <a
                href="https://."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <Instagram className="w-5 h-5" />
                <span>Ver Experiencias</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Servicio Gratuito</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Oficial</div>
              <div className="text-sm text-muted-foreground">Disney & Universal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Atención Personal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
