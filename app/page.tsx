import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ProductPreview } from "@/components/ProductPreview"
import { VideosSection } from "@/components/VideosSection"
import { ContactSection } from "@/components/ContactSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductPreview />
        <VideosSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
