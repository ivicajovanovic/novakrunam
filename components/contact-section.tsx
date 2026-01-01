import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4 md:mb-6">
              Kontakt i termin
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Posetite nas ili nas kontaktirajte kako biste zakazali termin. Radimo radnim danima od 08:00 do 15:00.
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Lokacija</h4>
                  <p className="text-slate-600">Petra Dobrnjca 54</p>
                  <p className="text-slate-600">Petrovac na Mlavi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Telefon</h4>
                  <p className="text-slate-600 text-lg font-medium">012 327564 / 066 327564</p>
                  <p className="text-slate-500 text-sm">Pon-Pet: 08:00 - 15:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600">info@novakrunam.rs</p>
                  <p className="text-slate-500 text-sm">Za opšta pitanja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Radno vreme</h4>
                  <p className="text-slate-600">Pon–Pet: 08:00–15:00</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.4478251514823!2d21.4136953!3d44.3812652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4751250079451045%3A0xc4b4eb829edf3641!2sPoliklinika%20Nova%20Kruna%20M!5e0!3m2!1sen!2srs!4v1733058762000!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Poliklinike Nova Kruna M na Google Maps"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Pošaljite pitanje</h3>
            <p className="text-slate-500 mb-6">
              Popunite formular i kontaktiraćemo vas u najkraćem roku.
            </p>

            {/* Added emergency notice alert block */}
            <div className="mb-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-lg text-amber-900 text-sm">
              <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
              <p>
                <strong>Napomena:</strong> U slučaju hitne medicinske pomoći, kontaktirajte vašu lokalnu službu
                Hitne pomoći odmah. Ovaj formular nije namenjen za hitne slučajeve.
              </p>
            </div>

            <form
              className="space-y-4"
              name="contactForm"
              method="POST"
              action="https://formsubmit.co/info@novakrunam.rs"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Ime i prezime{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                  <span className="sr-only">(obavezno)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all appearance-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-1"
                  placeholder="npr. Marko Marković"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Telefon{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">(obavezno)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    aria-required="true"
                    className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all appearance-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-1"
                    placeholder="+381 6X..."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email adresa
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-slate-700">
                    Datum (opciono)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-slate-700">
                    Vreme (opciono)
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all text-slate-600"
                  >
                    <option value="">Bilo koje vreme</option>
                    <option value="morning">Jutro (08:00 - 12:00)</option>
                    <option value="afternoon">Podne (12:00 - 14:00)</option>
                    <option value="evening">Posle podne (14:00 - 15:00)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">
                  Usluga
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all text-slate-600"
                >
                  <option value="">Izaberite uslugu (opciono)</option>
                  <option value="general">Opšti pregled</option>
                  <option value="cardio">Kardiologija</option>
                  <option value="endo">Endokrinologija</option>
                  <option value="ultra">Ultrazvučna dijagnostika</option>
                  <option value="other">Ostalo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Pitanje / Napomena (opciono)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full p-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all resize-none"
                  placeholder="Kratko opišite vaše pitanje..."
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    aria-required="true"
                    className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700 focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                  />
                </div>
                <div className="text-sm leading-tight">
                  <label htmlFor="privacy" className="font-medium text-slate-700">
                    Slažem se sa obradom mojih ličnih podataka
                  </label>
                  <p className="text-slate-500 mt-1 text-xs">
                    Vaši podaci su sigurni i koristiće se samo za kontakt u vezi sa vašim terminom.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 inline-flex items-center justify-center rounded-md bg-teal-700 text-base font-semibold text-white shadow-sm hover:bg-teal-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Pošaljite pitanje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
