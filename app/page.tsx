import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceLinesSection } from "@/components/service-lines-section"
import { DetailedServicesSection } from "@/components/detailed-services-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ComplementaryServicesSection } from "@/components/complementary-services-section"
import { AboutSection } from "@/components/about-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactQuoteSection } from "@/components/contact-quote-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ServiceLinesSection />
        <DetailedServicesSection />
        <HowWeWorkSection />
        <ComplementaryServicesSection />
        <WhyChooseUsSection />
        <AboutSection />
        <MissionVisionSection />
        <ContactQuoteSection />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
