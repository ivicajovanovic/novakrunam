"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface Doctor {
  id: string
  name: string
  title: string
  bio: string
  experience: string
  focusAreas: string[]
  imageUrl?: string
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr Aleksandar Zarić",
    title: "Specijalista vaskularne hirurgije (VMA)",
    bio: "Ultrazvučna dijagnostika krvnih sudova, procena venskog i arterijskog sistema, konsultacije o prevenciji vaskularnih bolesti.",
    experience: "VMA konsultant",
    focusAreas: ["Dopler krvnih sudova", "Procena vaskularnog sistema"],
    imageUrl: "/aleksandar_zaric.jpg",
  },
  {
    id: "2",
    name: "Dr Luković Milan",
    title: "Specijalista ortopedije i traumatologije, načelnik kabineta (VMA)",
    bio: "Dijagnostika, savetovanje, konzervativna terapija i rehabilitacija kod ortopedskih stanja i povreda.",
    experience: "Ortoped VMA",
    focusAreas: ["Ortopedija", "Rehabilitacija"],
    imageUrl: "/milan_lukovic.jpg",
  },
  {
    id: "3",
    name: "Dr Jasmina Malović",
    title: "Specijalista neurologije",
    bio: "Pregled i klinička procena, dijagnostika i interpretacija nalaza, propisivanje i praćenje terapije.",
    experience: "Neurolog",
    focusAreas: ["Neurologija", "Dijagnostika"],
    imageUrl: "/jasmina_malovic.jpg",
  },
  {
    id: "4",
    name: "Dr Nebojša Jovanović",
    title: "Specijalista ginekologije (VMA)",
    bio: "Ginekološki pregledi, ultrazvuk abdomena, lečenje i praćenje bolesti, saveti i testiranja.",
    experience: "Ginekolog VMA",
    focusAreas: ["Ginekologija", "Ultrazvuk"],
    imageUrl: "/nebojsa_jovanovic.jpg",
  },
  {
    id: "5",
    name: "Dr Vidosav Čolović",
    title: "Specijalista urologije (KBC)",
    bio: "Specijalistički urološki pregledi, ultrazvuk urotrakta, dijagnostika i planiranje terapije.",
    experience: "Urolog KBC",
    focusAreas: ["Urologija", "Ultrazvuk urotrakta"],
    imageUrl: "/incognito.jpg",
  },
  {
    id: "6",
    name: "Dr Marina Đaković",
    title: "Specijalista interne medicine",
    bio: "Dijagnostika i lečenje bolesti unutrašnjih organa, preventivni pregledi, praćenje hroničnih stanja i savetovanje o zdravom načinu života.",
    experience: "Internista",
    focusAreas: ["Interna medicina", "Preventiva"],
    imageUrl: "/marina_djakovic.jpg",
  },
  {
    id: "7",
    name: "Dr Mira Ranković",
    title: "Specijalista opšte medicine",
    bio: "Opšti pregledi, propisivanje terapije, preventivna medicina i zdravstvena edukacija.",
    experience: "Opšta medicina",
    focusAreas: ["Opšta praksa", "Preventiva"],
    imageUrl: "/mira_rankovic.jpg",
  },
  {
    id: "8",
    name: "Dr Vera Petrović",
    title: "Specijalista pedijatrije",
    bio: "Dijagnostika i terapija za decu, praćenje razvoja, prevencija i savetovanje roditelja.",
    experience: "Pedijatar",
    focusAreas: ["Pedijatrija", "Dečiji razvoj"],
    imageUrl: "/incognito.jpg",
  },
  {
    id: "9",
    name: "Dr Dušica Stankić-Urošević",
    title: "Specijalista kardiologije",
    bio: "Kardiološki pregledi, terapija, prevencija srčanih bolesti i edukacija pacijenata.",
    experience: "Kardiolog",
    focusAreas: ["Ultrazvuk srca", "Prevencija"],
    imageUrl: "/incognito.jpg",
  },
]

export function DoctorsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="doctors" className="py-12 md:py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3 md:mb-5">
              Naš tim lekara
            </h2>
            <p className="text-lg text-slate-600 max-w-[600px]">
              Tim stručnjaka posvećen vašem zdravlju i blagostanju.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            {/* Custom navigation controls could go here if decoupled from Carousel */}
          </div>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
            aria-label="Meet our specialists – carousel"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-6">
              {doctors.map((doctor, index) => {
                const isActive = index === current
                return (
                  <CarouselItem key={doctor.id} className="pl-4 md:pl-6 basis-full sm:basis-[60%] lg:basis-[38%]">
                    <div
                      className={cn(
                        "h-full transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none",
                        isActive
                          ? "scale-[1.01] opacity-100 z-10"
                          : "scale-[0.98] opacity-80 blur-[0.5px] grayscale-[20%]",
                      )}
                    >
                      <div
                        className={cn(
                          "bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col border border-slate-100 motion-reduce:transition-none",
                          isActive ? "shadow-lg ring-1 ring-slate-200" : "hover:shadow-md",
                        )}
                      >
                        <div className="aspect-square bg-slate-200 relative overflow-hidden group">
                          {doctor.imageUrl ? (
                            <Image
                              src={doctor.imageUrl || "/placeholder.svg"}
                              alt={`Portrait of ${doctor.name}`}
                              fill
                              className={cn(
                                "object-cover transition-transform duration-700 motion-reduce:transition-none",
                                isActive ? "group-hover:scale-105" : "",
                              )}
                              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                              <User className="h-16 w-16 opacity-50" />
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-4 pt-16">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/95 text-teal-800 text-[10px] font-bold backdrop-blur-md shadow-sm mb-1.5">
                              {doctor.experience}
                            </span>
                            <h3 className="font-bold text-lg text-white mb-0.5 leading-tight">{doctor.name}</h3>
                            <p className="text-xs text-slate-200 font-medium">{doctor.title}</p>
                          </div>
                        </div>

                        <div className="p-4 flex flex-col flex-1">
                          <p className="text-slate-600 leading-relaxed mb-4 flex-1 text-sm">{doctor.bio}</p>

                          <div className="mt-auto">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                              Oblasti fokusa
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {doctor.focusAreas.map((area, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-100 rounded-md font-medium"
                                >
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselPrevious
              className="hidden md:flex -left-4 lg:-left-12 h-12 w-12 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 hover:text-teal-700 hover:border-teal-200 hover:bg-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Previous specialist"
            />
            <CarouselNext
              className="hidden md:flex -right-4 lg:-right-12 h-12 w-12 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 hover:text-teal-700 hover:border-teal-200 hover:bg-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Next specialist"
            />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel pagination">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === current}
                aria-controls={`slide-${index + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
                  index === current ? "w-8 bg-teal-600" : "w-2 bg-slate-300 hover:bg-slate-400",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="#"
            className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors group"
          >
            Pogledajte sve lekare <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
