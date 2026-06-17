import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react"

import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StickyMobilePhone } from "@/components/sticky-mobile-phone"
import { clinic, getServicePage, servicePages, siteUrl } from "@/lib/clinic-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [...servicePages.map((service) => ({ slug: service.slug })), { slug: "kontakt" }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug === "kontakt") {
    return {
      title: "Kontakt i zakazivanje | Poliklinika Nova Kruna M",
      description:
        "Kontakt Poliklinike Nova Kruna M u Petrovcu na Mlavi. Adresa Petra Dobrnjca 54, telefoni 012 327564 i 066 327564, radno vreme ponedeljak-petak 08:00-15:00.",
      alternates: { canonical: `${siteUrl}/kontakt` },
      openGraph: {
        title: "Kontakt | Poliklinika Nova Kruna M",
        description: "Zakazivanje pregleda u Poliklinici Nova Kruna M, Petra Dobrnjca 54, Petrovac na Mlavi.",
        url: `${siteUrl}/kontakt`,
      },
    }
  }

  const service = getServicePage(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title} | Poliklinika Nova Kruna M`,
    description: service.summary,
    keywords: [...service.keywords],
    alternates: { canonical: `${siteUrl}/${service.slug}` },
    openGraph: {
      title: `${service.title} | Poliklinika Nova Kruna M`,
      description: service.summary,
      url: `${siteUrl}/${service.slug}`,
      type: "website",
    },
  }
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params

  if (slug === "kontakt") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 md:pt-20">
          <ContactSection />
        </main>
        <SiteFooter />
        <StickyMobilePhone />
      </div>
    )
  }

  const service = getServicePage(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = servicePages.filter((item) => item.slug !== service.slug).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 md:pt-20">
        <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-700">
                  {clinic.shortName} - {clinic.address.locality}
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">{service.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakt"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-teal-700 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                  >
                    Zakažite pregled
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${clinic.telephone}`}
                    className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:border-teal-200 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                  >
                    Pozovite {clinic.displayPhone}
                  </a>
                </div>
              </div>

              <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Informacije za pacijente</h2>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                    <span>
                      {clinic.address.street}, {clinic.address.locality}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                    <span>
                      {clinic.displayPhone} / {clinic.displaySecondaryPhone}
                    </span>
                  </p>
                  <p>{clinic.openingHours}</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Šta obuhvata pregled</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-teal-700" />
                      <p className="text-sm font-medium text-slate-800">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">Povezane usluge</h2>
                <div className="mt-4 space-y-3">
                  {relatedServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="block rounded-md border border-slate-200 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-teal-200 hover:text-teal-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
      <StickyMobilePhone />
    </div>
  )
}
