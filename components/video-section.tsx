import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 bg-slate-50">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
            Pogledajte unutrašnjost Nova Kruna-M
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Kratak pregled naše poliklinike, prostorija za preglede i dijagnostičkog prostora. Video prezentaciju možete pogledati na YouTube-u: https://www.youtube.com/watch?v=GqX77MMZk5s
          </p>
        </div>

        <a
          href="https://www.youtube.com/watch?v=GqX77MMZk5s"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl group bg-slate-900"
        >
          <Image
            src="/modern-medical-clinic-video-thumbnail-blur.jpg"
            alt="Video prikazuje recepciju u Nova Kruna-M"
            fill
            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-teal-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
              <div className="absolute inset-0 rounded-full animate-ping bg-teal-600 opacity-20 duration-1000" />
            </div>
          </div>

          {/* Optional: Simple controls bar simulation for visual context */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800/50">
            <div className="h-full w-0 group-hover:w-full bg-teal-500/80 transition-all duration-[3s] ease-linear" />
          </div>
        </a>
      </div>
    </section>
  )
}
