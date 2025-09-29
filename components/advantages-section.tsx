import { Card, CardContent } from "@/components/ui/card"
import { Star, Gift, Heart } from "lucide-react"

const advantages = [
  {
    icon: Star,
    title: "Asesoramiento experto",
    description: "Somos agentes oficiales de Disney y Universal con años de experiencia, garantizando un viaje mágico.",
  },
  {
    icon: Gift,
    title: "Servicio gratuito",
    description:
      "Te ayudamos a armar tu viaje sin costo adicional, asegurándonos de que todo esté perfectamente planificado.",
  },
  {
    icon: Heart,
    title: "Atención personalizada",
    description:
      "Nos preocupamos por tus necesidades y preferencias, adaptando el viaje a tu medida para una experiencia inolvidable.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Nuestras <span className="text-primary">Ventajas</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Descubre por qué miles de familias confían en nosotros para crear sus experiencias mágicas en Orlando.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-card-foreground">{advantage.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
