"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink } from "lucide-react"

const galleryImages = [
  {
    src: "/disney-castle-fireworks-magical-night.jpg",
    alt: "Castillo de Disney con fuegos artificiales",
    title: "Noches Mágicas en Disney",
  },
  {
    src: "/universal-studios-harry-potter-hogwarts.jpg",
    alt: "Mundo Mágico de Harry Potter",
    title: "Wizarding World",
  },
  {
    src: "/family-enjoying-disney-world-attractions-happy.jpg",
    alt: "Familia disfrutando en Disney",
    title: "Momentos Familiares",
  },
  {
    src: "/orlando-theme-park-roller-coaster-excitement.jpg",
    alt: "Montaña rusa emocionante",
    title: "Adrenalina Pura",
  },
  {
    src: "/disney-character-meet-and-greet-children-smiling.jpg",
    alt: "Encuentro con personajes Disney",
    title: "Encuentros Mágicos",
  },
  {
    src: "/orlando-sunset-beautiful-theme-park-view.jpg",
    alt: "Atardecer en Orlando",
    title: "Vistas Espectaculares",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Momentos que
            <span className="text-primary"> Nunca Olvidarás</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed mb-8">
            Cada sonrisa, cada abrazo, cada momento de asombro. Estas son las memorias que creamos juntos.
          </p>

          <Button variant="outline" size="lg" className="mb-12 bg-transparent" asChild>
            <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <Instagram className="w-5 h-5" />
              <span>Ver más en Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-lg text-balance">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ver más aventuras?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Síguenos en Instagram para ver las últimas aventuras, tips exclusivos y momentos mágicos de nuestros
            viajeros.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <Instagram className="w-5 h-5" />
              <span>@agencia de viaje</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
