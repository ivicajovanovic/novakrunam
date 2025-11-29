import type React from "react"
import { Calendar, User, Stethoscope, FileText } from "lucide-react"

interface Step {
  title: string
  description: string
  note: string
  icon: React.ElementType
}

const steps: Step[] = [
  {
    title: "1. Zakazivanje",
    description: "Pozovite, pošaljite email ili popunite online formular da zakažete termin.",
    note: "Imajte svoje osnovne informacije pri ruci prilikom zakazivanja.",
    icon: Calendar,
  },
  {
    title: "2. Pregled",
    description: "Dođite malo ranije, prijavite se na recepciji i upoznajte se sa Vašim specijalistom.",
    note: "Obezbeđujemo jasnu komunikaciju i vreme za Vaša pitanja.",
    icon: User,
  },
  {
    title: "3. Testovi i dijagnostika",
    description: "Ukoliko je potrebno, vaš lekar će preporučiti testove kao što su ultrazvuk, EKG ili merenje gustine kostiju.",
    note: "Testovi se predlažu na osnovu medicinske procene, a ne automatski.",
    icon: Stethoscope,
  },
  {
    title: "4. Rezultati i praćenje",
    description: "Dobijate rezultate sa jasnim objašnjenjem i, ukoliko je potrebno, planom praćenja.",
    note: "Prioritet nam je jasnoća i kontinuirano planiranje nege.",
    icon: FileText,
  },
]

export function PatientJourneySection() {
  return (
    <section id="patient-journey" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4 md:mb-6">
            Vaš put ka boljem zdravlju
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pojednostavili smo posetu lekaru i učinili je bez stresa. Evo šta možete očekivati.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-10" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Icon Marker */}
                <div className="h-24 w-24 bg-white rounded-full border-2 border-teal-100 flex items-center justify-center shadow-sm mb-6 group-hover:border-teal-600 transition-colors duration-300">
                  <step.icon className="h-10 w-10 text-teal-700" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>

                {/* Note */}
                <div className="mt-auto px-4 py-2 bg-teal-50/50 rounded-lg border border-teal-100/50">
                  <p className="text-xs text-teal-800 italic">"{step.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Connector (Visual Hint) */}
        <div className="mt-12 md:hidden flex justify-center">
          <p className="text-sm text-slate-400 flex items-center gap-2">Pomerite nadole da vidite više koraka</p>
        </div>
      </div>
    </section>
  )
}
