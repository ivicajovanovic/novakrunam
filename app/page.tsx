import { SiteHeader } from "@/components/site-header" // Import the new header component
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { DepartmentsSection } from "@/components/departments-section" // importing the new component
import { DoctorsSection } from "@/components/doctors-section"
import { DiagnosticsSection } from "@/components/diagnostics-section" // Importing new component
import { PatientJourneySection } from "@/components/patient-journey-section"
import { ClinicGallerySection } from "@/components/clinic-gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section" // importing new component
import { FAQSection } from "@/components/faq-section" // Import the FAQ section
import { ContactSection } from "@/components/contact-section" // Importing the new ContactSection component
import { SiteFooter } from "@/components/site-footer" // Import SiteFooter
import { StickyMobilePhone } from "@/components/sticky-mobile-phone" // Import sticky mobile phone bar
import { Activity, Shield, Calendar } from "lucide-react" // removed unused Star icon
import { VideoSection } from "@/components/video-section" // Import the VideoSection
import { Preloader } from "@/components/preloader" // Import Preloader component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Preloader />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Core Values / Features */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Preventivna nega</h3>
                <p className="text-slate-600 leading-relaxed">
                  Rana detekcija je ključ za dugoročno zdravlje. Naši sveobuhvatni paketi pregleda dizajnirani su za svaku fazu života.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Napredna dijagnostika</h3>
                <p className="text-slate-600 leading-relaxed">
                  Najsavremenija ultrazvučna i dijagnostička oprema koja obezbeđuje precizne i blagovremene rezultate za preciznu dijagnozu.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Efikasno zakazivanje</h3>
                <p className="text-slate-600 leading-relaxed">
                  Poštujemo vaše vreme. Lako zakažite termine uz minimalno čekanje u našim mirnim prostorijama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Services Overview */}
        <ServicesSection />

        <DepartmentsSection />

        {/* Doctors / Medical Team */}
        <DoctorsSection />

        {/* Diagnostics & Equipment */}
        <DiagnosticsSection />

        {/* Patient Journey */}
        <PatientJourneySection />

        <VideoSection />

        {/* Clinic Highlights / Gallery */}
        <ClinicGallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        <FAQSection />

        {/* Contact / CTA */}
        <ContactSection />
      </main>

      <SiteFooter />
      <StickyMobilePhone />
    </div>
  )
}
