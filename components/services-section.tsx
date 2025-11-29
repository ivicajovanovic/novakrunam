import Link from "next/link"
import { ArrowRight, Stethoscope, Activity, Microscope, ShieldCheck, Heart } from "lucide-react"

const services = [
  {
    name: "Opšta medicina",
    description:
      "Sveobuhvatni pregledi, dijagnostika i lečenje akutnih i hroničnih bolesti za sve uzraste. Pružamo savete o prevenciji i zdravom načinu života.",
    cta: "Zakažite termin",
    href: "#contact",
    icon: Stethoscope,
  },
  {
    name: "Interna medicina",
    description: "Specijalistički pregledi, ultrazvučna dijagnostika i lečenje bolesti unutrašnjih organa, uključujući srce, pluća i digestivni trakt.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: Activity,
  },
  {
    name: "Ortopedija",
    description: "Dijagnostika i lečenje povreda, preloma, sportskih povreda, kao i degenerativnih i upalnih bolesti kostiju, zglobova i mišića.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: ShieldCheck,
  },
  {
    name: "Kardiologija",
    description: "Kompletna briga o zdravlju srca i krvnih sudova. Vršimo EKG, ultrazvuk srca, testove opterećenja i prevenciju srčanih oboljenja.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: Heart,
  },
  {
    name: "Ginekologija",
    description: "Preventivni pregledi, ultrazvučna dijagnostika, praćenje trudnoće, savetovanje o kontracepciji i lečenje reproduktivnog zdravlja.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: Microscope,
  },
  {
    name: "Urologija",
    description: "Dijagnostika i lečenje bolesti urinarnog trakta kod muškaraca i žena, kao i muškog reproduktivnog sistema.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: Activity,
  },
  {
    name: "Neurologija",
    description: "Dijagnostika i lečenje poremećaja nervnog sistema, kao što su glavobolje, migrene, vrtoglavice i neurodegenerativne bolesti.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: Stethoscope,
  },
  {
    name: "Sleep Apnea",
    description: "Dijagnostika i lečenje apneje u spavanju. Nudimo stručnu analizu spavanja i terapijske opcije za poboljšanje kvaliteta sna.",
    cta: "Zakaži termin",
    href: "#contact",
    icon: ShieldCheck,
  },
]

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
