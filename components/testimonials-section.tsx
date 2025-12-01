"use client"

import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  initials: string
  quote: string
  service: string
  ageGroup?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "V.",
    quote: "Imam staru povredu zgloba šake koja se iznenada pogoršala. Prijem je bio brz i primljen sam odmah. Dobio sam odličnu terapiju i recepte. Ljubazni ljudi, brza usluga, odlični rezultati.",
    service: "Urgentna nega",
  },
  {
    id: 2,
    initials: "J.",
    quote: "Radila sam ultrazvuk abdomena i merenje gustine kostiju. Pregledi su bili temeljni, osoblje ljubazno i objasnili su mi rezultate tako da ih stvarno razumem. Osetila sam se poštovano i sigurno.",
    service: "Ultrazvuk & Denzitometrija",
  },
  {
    id: 3,
    initials: "N.",
    quote: "Nega je bila vrhunska – od samog početka do kraja. Doktor se maksimalno potrudio da postigne rezultate. Prostor je moderno opremljen i pruža privatnost.",
    service: "Ortopedski tretman",
  },
  {
    id: 4,
    initials: "M.",
    quote: "Medicinska sestra je bila sjajna. Bila je veoma pažljiva i ljubazna. Tačno je znala šta radi i mnogo mi je pomogla. Ako mi ikada ponovo zatreba pomoć dok sam u poseti, ponovo bih došla ovde.",
    service: "Internistički pregled",
  },
  {
    id: 5,
    initials: "T.",
    quote: "Svi zaposleni su bili profesionalni i izuzetno ljubazni. Dopada mi se što su me saslušali i što sam im stvarno bila važna. Hvala vam od srca.",
    service: "Kardiološka kontrola",
  },
  {
    id: 6,
    initials: "S.",
    quote: "Doktor Jovanović je bio izuzetno pažljiv i stručan. Detaljno mi je objasnio sve nalaze i odgovorio na sva moja pitanja. Osećala sam se potpuno opušteno i sigurno tokom celog pregleda.",
    service: "Ginekološki pregled",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4 md:mb-6">
            Utisci naših pacijenata
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Posvećeni smo pružanju sigurnog, poštovanog i profesionalnog okruženja za svakog pacijenta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="h-8 w-8 text-teal-100 absolute top-6 right-6" />

              <div className="mb-6 relative z-10">
                <p className="text-slate-700 italic text-lg leading-relaxed">"{item.quote}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="h-10 w-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-lg">
                  {item.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">{item.service}</span>
                  </div>
                  {item.ageGroup && <p className="text-xs text-slate-500">Starosna grupa: {item.ageGroup}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
