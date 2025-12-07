import Link from "next/link"
import { Activity, Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      {" "}
      {/* Reduced vertical padding on mobile */}
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Clinic Info Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-teal-500" />
              <span className="font-semibold text-xl text-white">
                Nova <span className="text-teal-500">Kruna-M</span>
              </span>
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Petra Dobrnjca 54,
                  <br />
                  Petrovac na Mlavi
                </span>
              </p>
              <p>Specijalistička nega, precizna dijagnostika i preventivna medicina pod jednim krovom.</p>
            </div>
          </div>

          {/* Navigation Block */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigacija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Usluge
                </Link>
              </li>
              <li>
                <Link
                  href="#doctors"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Lekari
                </Link>
              </li>
              <li>
                <Link
                  href="#diagnostics"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Dijagnostika
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Block */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-500" aria-hidden="true" />
                <a
                  href="tel:+381110000000"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  <span className="sr-only">Pozovite nas na</span>
                  012 327564
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-500" aria-hidden="true" />
                <a
                  href="mailto:info@novakruna-m.rs"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  <span className="sr-only">Pošaljite nam email na</span>
                  info@novakrunam.rs
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 space-y-3">
              <h5 className="font-medium text-white text-sm">Pratite nas</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/novakruna.m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-teal-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-teal-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Block */}
          <div>
            <h4 className="font-semibold text-white mb-4">Pravno</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Uslovi korišćenja
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  Politika kolačića
                </Link>
              </li>
            </ul>
            {/* Added informational disclaimer under the legal block */}
            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              Sadržaj ovog veb sajta je samo informativnog karaktera i ne zamenjuje konsultaciju sa Vašim lekarom.
            </p>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="border-t border-slate-800 mt-12 pt-8 space-y-4">
          <div className="text-xs text-slate-500 text-center max-w-3xl mx-auto space-y-2">
            <p>
              Nova Kruna-M nudi zakazane preglede i dijagnostiku. Nismo služba hitne pomoći. Ako imate teške ili iznenadne simptome, kontaktirajte Vašu lokalnu hitnu pomoć.
            </p>
            <p>
              Napomena: Informacije na ovoj web stranici su samo informativnog karaktera i ne zamenjuju stručni medicinski savet, dijagnozu ili lečenje. Uvek se obratite Vašem lekaru po svim pitanjima u vezi sa zdravstvenim stanjem.
            </p>
          </div>
          <div className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Nova Kruna-M Polyclinic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
