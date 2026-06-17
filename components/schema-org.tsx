import { clinic, doctors, servicePages, siteUrl } from "@/lib/clinic-data"

const faqItems = [
  {
    question: "Kako mogu da zakažem termin?",
    answer:
      "Zakazivanje se vrši samo pozivom na prikazane brojeve telefona: 012 327564 ili 066 327564. Trudimo se da odgovorimo u najkraćem mogućem roku.",
  },
  {
    question: "Da li primate pacijente bez zakazivanja?",
    answer:
      "Primamo pacijente i bez zakazivanja, ali preporučujemo da se javite unapred kako biste izbegli čekanje. Hitni slučajevi se uvek primaju odmah.",
  },
  {
    question: "Gde se nalazite?",
    answer:
      "Nalazimo se na adresi Petra Dobrnjca 54 u Petrovcu na Mlavi. Parking je dostupan ispred zgrade. Lako nas možete pronaći koristeći Google Maps navigaciju.",
  },
  {
    question: "Koje je vaše radno vreme?",
    answer:
      "Radimo radnim danima od 08:00 do 15:00 časova. Za hitne slučajeve i posebne dogovore, molimo vas da nas kontaktirate telefonom.",
  },
]

export function SchemaOrg() {
  const graph = [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinic.name,
      alternateName: clinic.shortName,
      description: clinic.description,
      url: siteUrl,
      image: `${siteUrl}/k1.jpg`,
      logo: `${siteUrl}/logo.svg`,
      telephone: [clinic.telephone, clinic.secondaryTelephone],
      email: clinic.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.address.street,
        addressLocality: clinic.address.locality,
        postalCode: clinic.address.postalCode,
        addressCountry: clinic.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: clinic.geo.latitude,
        longitude: clinic.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "15:00",
        },
      ],
      medicalSpecialty: [...new Set(servicePages.map((service) => service.specialty))],
      availableService: servicePages.map((service) => ({
        "@type": "MedicalProcedure",
        name: service.name,
        description: service.summary,
        url: `${siteUrl}/${service.slug}`,
      })),
      employee: doctors.map((doctor) => ({
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.title,
        description: doctor.bio,
        image: `${siteUrl}${doctor.imageUrl}`,
      })),
      areaServed: {
        "@type": "City",
        name: clinic.address.locality,
      },
      sameAs: clinic.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: clinic.name,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#clinic`,
      },
      inLanguage: "sr-RS",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Početna",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Usluge",
          item: `${siteUrl}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kontakt",
          item: `${siteUrl}/kontakt`,
        },
      ],
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  )
}
