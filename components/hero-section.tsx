import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen w-full grid lg:grid-cols-2 overflow-hidden bg-slate-50">
      {/* Left Column: Full Height Image */}
      <div className="relative h-[50vh] lg:h-auto w-full overflow-hidden order-first bg-slate-200">
        <Image
          src="/friendly-doctor-patient-consultation-bright-clinic.jpg"
          alt="Doctor having a friendly consultation with a patient in a modern clinic"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>

        {/* Floating Info Card - Repositioned for the new layout */}
        <div className="absolute bottom-6 right-6 z-10 rounded-xl bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-slate-100 max-w-[280px] animate-in slide-in-from-left-8 fade-in duration-1000 delay-300 hidden sm:block">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Radno vreme</p>
              <p className="text-xs text-slate-500">Radnim danima</p>
            </div>
          </div>
          <div className="space-y-2 border-t border-slate-100 pt-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Pon - Pet</span>
              <span className="font-medium text-slate-900">08:00 - 15:00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Telefon</span>
              <span className="font-medium text-slate-900">012 327564</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="flex flex-col justify-center p-6 md:p-16 lg:p-20 xl:p-24 bg-slate-50 order-last">
        <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2 animate-pulse"></span>
              Primamo nove pacijente
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/tight">
              Poliklinika <br className="hidden lg:block" />
              Nova Kruna M – <span className="text-teal-700">Posvećeni vašem zdravlju</span>
            </h1>

            <p className="text-slate-600 text-base md:text-xl leading-relaxed">
              Specijalistička nega prilagođena Vama. U modernom okruženju, pomažemo Vam da se osećate sigurno na svakom koraku ka boljem zdravlju.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-teal-700 px-8 text-sm font-medium text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-800 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Zakažite pregled
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:text-teal-700 hover:border-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              Pogledajte usluge
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm text-slate-500">Pratite nas:</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/novakruna.m/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-teal-50 hover:text-teal-700"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/novakruna.m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-teal-50 hover:text-teal-700"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "Iskusni specijalisti",
              "Moderna dijagnostička oprema",
              "Jasna objašnjenja i praćenje",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-600">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
