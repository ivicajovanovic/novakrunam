import { Check, ArrowRight } from "lucide-react"

const departmentGroups = [
  {
    groupTitle: "Specijalistička nega",
    description:
      "Sveobuhvatna briga o zdravlju kroz širok spektar medicinskih grana i stručnih konsultacija.",
    departments: [
      "Opšta medicina",
      "Interna medicina",
      "Kardiologija",
      "Ginekologija",
      "Urologija",
      "Neurologija",
      "Ortopedija",
      "Pedijatrija",
      "Estetska hirurgija",
    ],
  },
  {
    groupTitle: "Dijagnostika i snimanje",
    description: "Moderna oprema za neinvazivne dijagnostičke procedure koje podržavaju jasno donošenje odluka.",
    departments: [
      "Ultrazvuk (Srce, Abdomen, Urotrakt)",
      "Dopler krvnih sudova",
      "EKG i Holter monitoring",
      "EMNG (Elektromioneurografija)",
      "Denzitometrija (DEXA)",
      "Sleep Apnea dijagnostika",
    ],
  },
]

export function DepartmentsSection() {
  return (
    <section id="departments" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Odeljci i specijalizacije
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-[700px]">
                Naša poliklinika nudi širok spektar medicinskih usluga osmišljenih da zadovolje Vaše zdravstvene potrebe na jednom mestu. Od rutinskih pregleda do specijalizovane nege hroničnih stanja.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Zakažite konsultacije <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-10 md:space-y-12">
            {departmentGroups.map((group, index) => (
              <div
                key={index}
                className="relative pl-6 md:pl-8 border-l-2 border-slate-100 group hover:border-teal-500 transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-teal-500 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{group.groupTitle}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{group.description}</p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {group.departments.map((dept, deptIndex) => (
                    <li key={deptIndex} className="flex items-center text-slate-700 text-sm font-medium">
                      <Check className="h-3.5 w-3.5 text-teal-600 mr-2" />
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
