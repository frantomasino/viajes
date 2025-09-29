import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Castle, Zap, Camera, Users, MapPin, Heart } from "lucide-react"

const experiences = [
  {
    icon: Castle,
    title: "Planificación Disney World",
    description:
      "Te ayudamos a planificar tu visita a los 4 parques temáticos de Disney World con itinerarios personalizados.",
    features: ["Reservas de FastPass+/Genie+", "Recomendaciones de restaurantes", "Itinerarios optimizados"],
  },
  {
    icon: Zap,
    title: "Universal Studios",
    description:
      "Asesoramiento completo para Universal Studios y Islands of Adventure, incluyendo el mundo de Harry Potter.",
    features: ["Express Pass recomendaciones", "Early Park Admission info", "Wizarding World tips"],
  },
  {
    icon: Users,
    title: "Viajes Familiares",
    description: "Planificación especializada para familias con niños, adaptando el itinerario a todas las edades.",
    features: ["Actividades por edades", "Horarios flexibles", "Consejos para niños"],
  },
  {
    icon: MapPin,
    title: "Hoteles y Alojamiento",
    description: "Te ayudamos a elegir el mejor hotel según tu presupuesto y preferencias de ubicación.",
    features: ["Comparación de precios", "Ubicaciones estratégicas", "Ofertas exclusivas"],
  },
  {
    icon: Heart,
    title: "Experiencias Especiales",
    description: "Reservas para cenas con personajes, tours VIP y experiencias únicas que harán tu viaje inolvidable.",
    features: ["Cenas con personajes", "Tours behind-the-scenes", "Experiencias VIP"],
  },
  {
    icon: Camera,
    title: "Consejos y Tips",
    description:
      "Compartimos nuestro conocimiento experto sobre los mejores momentos, lugares y secretos de los parques.",
    features: ["Mejores horarios", "Lugares fotogénicos", "Secretos de los parques"],
  },
]

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Experiencias que
            <span className="text-primary"> Transforman Vidas</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Cada viaje es único. Diseñamos experiencias personalizadas que van más allá de lo ordinario, creando
            momentos mágicos que durarán para siempre.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-card-foreground">{experience.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>

                  <ul className="space-y-2">
                    {experience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a
              href="https://wa.me/1234567890?text=Me interesa conocer más sobre sus servicios de planificación para Orlando"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicita tu Asesoramiento Gratuito
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
