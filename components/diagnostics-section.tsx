import type React from "react"
import { Activity, Heart, Smartphone, ShieldCheck, Microscope } from "lucide-react"

interface Equipment {
  name: string
  type: string
  usage: string
  benefit: string
  icon: React.ElementType
}

const equipmentList: Equipment[] = [
  {
    name: "Kardiološki pregledi i dijagnostika",
    type: "Kardiologija",
    usage: "Specijalistički kardiološki pregledi, EKG, ultrazvuk srca i praćenje krvnog pritiska.",
    benefit: "Rana dijagnostika i praćenje kardiovaskularnih bolesti, kontrola terapije i prevencija.",
    icon: Heart,
  },
  {
    name: "Dijagnostika hrkanja i sleep apneje",
    type: "Poremećaji disanja u snu",
    usage: "Dijagnostika problema sa hrkanjem, buđenjem tokom noći i jutarnjim umorom.",
    benefit: "Individualan plan lečenja i smanjenje rizika za zdravlje srca i krvnih sudova.",
    icon: Activity,
  },
  {
    name: "Merenje gustine kostiju (osteoporoza)",
    type: "Zdravlje kostiju",
    usage: "Procena rizika od osteoporoze i preloma kostiju.",
    benefit: "Preporuke za terapiju, suplementaciju i promene životnih navika za jačanje kostiju.",
    icon: ShieldCheck,
  },
  {
    name: "Ginekološki pregledi i dijagnostika",
    type: "Ginekologija",
    usage: "Kompletni ginekološki pregledi, ultrazvučna dijagnostika, PAPA test i kolposkopija.",
    benefit: "Prevencija i rano otkrivanje oboljenja reproduktivnih organa, praćenje trudnoće i savetovalište.",
    icon: Microscope,
  },
]

export function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Copy */}
          <div className="space-y-8 sticky top-32">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Napredna tehnologija
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-2">
                Specijalistička dijagnostika
              </h2>
              <p className="text-xl font-medium text-teal-700">
                Precizna dijagnostika i praćenje hroničnih stanja.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-[600px]">
                U našoj poliklinici fokusirani smo na preciznu dijagnostiku i praćenje hroničnih stanja, sa posebnim akcentom na zdravlje srca, kvalitet sna i zdravlje kostiju. Sve preglede obavljaju iskusni specijalisti uz savremenu opremu.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Bezbednost na prvom mestu</h4>
                  <p className="text-sm text-slate-600">
                    Sve naše dijagnostičke procedure izvode se uz striktno poštovanje bezbednosnih protokola i higijenskih standarda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Equipment Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {equipmentList.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                    <item.icon className="h-6 w-6 text-slate-600 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {item.name}
                </h3>

                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Koristi se za</p>
                    <p className="text-sm text-slate-700">{item.usage}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-teal-600 uppercase tracking-wider mb-1">Prednost za pacijenta</p>
                    <p className="text-sm text-slate-600">{item.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
