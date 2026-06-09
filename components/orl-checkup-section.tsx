import { MapPin, Stethoscope, UserRound } from "lucide-react"

const symptoms = [
  "Zapušen nos ili otežano disanje na nos",
  "Česte upale uha, nosa ili grla",
  "Slabiji sluh ili zujanje u ušima",
  "Bol ili curenje iz uha",
  "Vrtoglavice i nestabilnost",
  "Promuklost koja traje duže od 3 nedelje",
  "Otežano ili bolno gutanje",
  "Hrkanje i prekidi disanja tokom sna",
  "Uvećane limfne žlezde ili kvržice na vratu",
]

const services = [
  "Specijalistički ORL pregled uha, grla i nosa",
  "Pregledi za decu i odrasle",
  "Ispiranje ušiju i uklanjanje cerumena",
  "Dijagnostika i lečenje upala uha, sinusa i krajnika",
  "Lečenje alergijskog rinitisa",
  "Uzimanje briseva grla, nosa i uha",
  "Procena promuklosti i stanja glasnica",
  "Zaustavljanje krvarenja iz nosa",
  "Toaleta i čišćenje uha kod upala",
  "Tumačenje nalaza i drugo mišljenje",
  "Preoperativni ORL pregledi",
  "Vađenje stranog tela iz nosa ili uha",
  "Dijagnostika i lečenje vrtoglavica",
  "Audiometrija i procena oštećenja sluha",
]

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function OrlCheckupSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100" id="orl-pregled">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-sm font-medium text-teal-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2" />
              Otorinolaringologija
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                KADA JE VREME ZA ORL PREGLED?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ne ignorišite simptome koji se stalno vraćaju ili dugo traju. Pravovremeni pregled omogućava rano
                otkrivanje problema i uspešnije lečenje.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-teal-700 border border-teal-100">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Petrovac na Mlavi</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-teal-700 border border-teal-100">
                  <UserRound className="h-4 w-4" />
                </span>
                <span>Dr Željka Iskić</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-teal-700 border border-teal-100">
                  <Stethoscope className="h-4 w-4" />
                </span>
                <span>Specijalista otorinolaringologije</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-900">Zakažite pregled ako imate</h3>
              <DotList items={symptoms} />
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-900">Usluge koje pružamo</h3>
              <DotList items={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
