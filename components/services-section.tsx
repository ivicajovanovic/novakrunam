import Link from "next/link"
import { ArrowRight, Stethoscope, Activity, Microscope, ShieldCheck, Heart } from "lucide-react"
import { servicePages } from "@/lib/clinic-data"

const featuredServiceSlugs = [
  "opsta-medicina",
  "interna-medicina",
  "ortopedija",
  "kardiologija",
  "ginekologija",
  "urologija",
  "neurologija",
  "sleep-apnea",
] as const

const serviceIcons = {
  "opsta-medicina": Stethoscope,
  "interna-medicina": Activity,
  ortopedija: ShieldCheck,
  kardiologija: Heart,
  ginekologija: Microscope,
  urologija: Activity,
  neurologija: Stethoscope,
  "sleep-apnea": ShieldCheck,
}

const services = featuredServiceSlugs.map((slug) => {
  const service = servicePages.find((item) => item.slug === slug)

  if (!service) {
    throw new Error(`Missing service page data for ${slug}`)
  }

  return {
    name: service.name,
    description: service.summary,
    cta: "Saznajte više",
    href: `/${service.slug}`,
    icon: serviceIcons[slug],
  }
})

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4 md:mb-6">
            Naše usluge
          </h2>
          <p className="text-lg text-slate-600 max-w-[700px] mx-auto">
            Od preventivnih pregleda do specijalizovanih tretmana, naši odeljci rade zajedno na pružanju sveobuhvatne nege.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative flex flex-col bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-100 transition-colors">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.name}</h3>

              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>

              <Link
                href={service.href}
                className="inline-flex items-center text-teal-700 font-medium text-sm group-hover:text-teal-800 transition-colors mt-auto"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
