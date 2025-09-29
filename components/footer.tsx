import { Instagram, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl">Agencia de viajes</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Creando experiencias mágicas e inolvidables en Orlando desde hace más de 15 años.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#experiencias" className="text-background/70 hover:text-background transition-colors">
                Experiencias
              </a>
              <a href="#galeria" className="text-background/70 hover:text-background transition-colors">
                Galería
              </a>
              <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact */}
          {/* Contact */}
<div className="space-y-4">
  <h4 className="font-semibold text-lg">Contáctanos</h4>
  
  {/* fila con separación */}
  <div className="flex gap-4">
    {/* WhatsApp */}
    <Button variant="secondary" size="sm" asChild>
      <a
        href="https://wa.me/549XXXXXXXXXX?text=Hola! Me interesa conocer más sobre los viajes a Orlando"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </Button>

    {/* Instagram */}
    <Button variant="secondary" size="sm" asChild>
      <a
        href="https://instagram.com/TU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <Instagram className="w-4 h-4" />
        <span>Instagram</span>
      </a>
    </Button>
  </div>
</div>

        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-background/70 text-sm">© 2025 Agencia de viajes. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-2 text-background/70 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 fill-current text-primary" />
            <span>para familias soñadoras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
