import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { GallerySection } from "@/components/gallery-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ExperiencesSection />
      <GallerySection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />

    </main>
  )
}
