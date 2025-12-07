export function SchemaOrg() {
    return (
        <>
            {/* Medical Clinic Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        name: "Poliklinika Nova Kruna M",
                        image: "https://novakruna-m.com/icon.svg",
                        "@id": "https://novakruna-m.com/",
                        url: "https://novakruna-m.com/",
                        telephone: "+38112327564",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Petra Dobrnjca 54",
                            addressLocality: "Petrovac na Mlavi",
                            postalCode: "12300",
                            addressCountry: "RS",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 44.290537,
                            longitude: 21.411442,
                        },
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                opens: "08:00",
                                closes: "15:00",
                            },
                        ],
                        sameAs: [
                            "https://www.instagram.com/novakruna.m",
                            "https://www.facebook.com/novakruna.m/",
                        ],
                        priceRange: "$$",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "5",
                            reviewCount: "3",
                        },
                    }),
                }}
            />

            {/* Medical Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalOrganization",
                        name: "Poliklinika Nova Kruna M",
                        url: "https://novakruna-m.com/",
                        logo: "https://novakruna-m.com/icon.svg",
                        medicalSpecialty: [
                            {
                                "@type": "MedicalSpecialty",
                                name: "Kardiologija",
                                description:
                                    "Specijalistički pregledi srca i krvnih sudova, EKG, ultrazvuk srca, testovi opterećenja",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Ginekologija",
                                description:
                                    "Preventivni pregledi, ultrazvučna dijagnostika, praćenje trudnoće, kontraceptivno savetovanje",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Urologija",
                                description:
                                    "Dijagnostika i lečenje bolesti urinarnog trakta, ultrazvuk urotrakta, problemi sa prostatom",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Neurologija",
                                description:
                                    "Dijagnostika i lečenje poremećaja nervnog sistema, glavobolje, migrene, moždani udar",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Ortopedija",
                                description:
                                    "Dijagnostika i lečenje povreda kostiju, zglobova i mišića, sportske povrede",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Interna medicina",
                                description: "Sveobuhvatni pregledi unutrašnjih organa, ultrazvučna dijagnostika abdomena",
                            },
                        ],
                        availableService: [
                            {
                                "@type": "MedicalTest",
                                name: "Ultrazvuk srca (ehokardiografija)",
                                description: "Neinvazivan pregled strukture i funkcije srca pomoću ultrazvučnih talasa",
                            },
                            {
                                "@type": "MedicalTest",
                                name: "Ultrazvuk abdomena",
                                description:
                                    "Pregled organa u trbuhu - jetra, žučna kesa, pankreas, slezina, bubrezi",
                            },
                            {
                                "@type": "MedicalTest",
                                name: "Dopler krvnih sudova",
                                description: "Merenje brzine i smera protoka krvi kroz krvne sudove",
                            },
                            {
                                "@type": "MedicalTest",
                                name: "EMNG (elektromionevrografija)",
                                description: "Merenje električne aktivnosti mišića i brzine provođenja nerava",
                            },
                            {
                                "@type": "MedicalTest",
                                name: "Merenje gustine kostiju",
                                description: "Skeniranje mineralne gustine kostiju za dijagnostiku osteoporoze",
                            },
                            {
                                "@type": "MedicalSpecialty",
                                name: "Nega starijih",
                                description: "Gerijatrijska nega, kućne posete, palijativna nega i briga o starim licima",
                            },
                        ],
                        areaServed: {
                            "@type": "Place",
                            name: "Petrovac na Mlavi",
                            addressRegion: "RS",
                        },
                    }),
                }}
            />

            {/* FAQ Page Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Kako mogu da zakažem termin?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Zakazivanje se vrši samo pozivom na prikazane brojeve telefona: 012 327564 ili 066 327564. Trudimo se da odgovorimo u najkraćem mogućem roku.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Da li primate pacijente bez zakazivanja?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Primamo pacijente i bez zakazivanja, ali preporučujemo da se javite unapred kako biste izbegli čekanje. Hitni slučajevi se uvek primaju odmah.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Gde se nalazite?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Nalazimo se na adresi Petra Dobrnjca 54 u Petrovcu na Mlavi. Parking je dostupan ispred zgrade. Lako nas možete pronaći koristeći Google Maps navigaciju.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Koje je vaše radno vreme?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Radimo radnim danima od 08:00 do 15:00 časova. Za hitne slučajeve i posebne dogovore, molimo vas da nas kontaktirate telefonom.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Da li imate online prisustvo?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Da, možete nas pronaći na Facebooku i Instagramu gde redovno objavljujemo korisne zdravstvene savete. Takođe imamo ovu web stranicu sa svim potrebnim informacijama.",
                                },
                            },
                        ],
                    }),
                }}
            />
            <AdditionalSchemas />
        </>
    )
}

function AdditionalSchemas() {
    return (
        <>
            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Početna",
                                item: "https://novakruna-m.com/#pocetna",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Usluge",
                                item: "https://novakruna-m.com/#usluge",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "Naš tim",
                                item: "https://novakruna-m.com/#nas-tim",
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                name: "Galerija",
                                item: "https://novakruna-m.com/#galerija",
                            },
                            {
                                "@type": "ListItem",
                                position: 5,
                                name: "Kontakt",
                                item: "https://novakruna-m.com/#kontakt",
                            },
                        ],
                    }),
                }}
            />

            {/* WebSite Schema with Search Action */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Poliklinika Nova Kruna M",
                        url: "https://novakruna-m.com/",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: "https://novakruna-m.com/?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />
        </>
    )
}
