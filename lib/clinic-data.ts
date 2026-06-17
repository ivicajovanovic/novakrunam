export const siteUrl = "https://novakruna-m.com"

export const clinic = {
  name: "Poliklinika Nova Kruna M",
  shortName: "Nova Kruna-M",
  description:
    "Privatna poliklinika u Petrovcu na Mlavi za specijalističke preglede, ultrazvučnu dijagnostiku, kardiologiju, ginekologiju, urologiju, neurologiju, ortopediju i preventivne preglede.",
  telephone: "+38112327564",
  secondaryTelephone: "+38166327564",
  displayPhone: "012 327564",
  displaySecondaryPhone: "066 327564",
  email: "info@novakrunam.rs",
  address: {
    street: "Petra Dobrnjca 54",
    locality: "Petrovac na Mlavi",
    postalCode: "12300",
    country: "RS",
    region: "RS-09",
  },
  geo: {
    latitude: 44.3812652,
    longitude: 21.4136953,
  },
  openingHours: "Pon-Pet: 08:00-15:00",
  sameAs: ["https://www.facebook.com/novakruna.m/", "https://www.instagram.com/novakruna.m"],
}

export const doctors = [
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
  {
    id: "10",
    name: "Dr Željka Iskić",
    title: "Specijalista otorinolaringologije",
    bio: "Specijalistički ORL pregledi za decu i odrasle, dijagnostika i lečenje tegoba uha, grla i nosa, ispiranje ušiju, uzimanje briseva i procena promuklosti.",
    experience: "ORL specijalista",
    focusAreas: ["ORL pregledi", "Uho, grlo i nos"],
    imageUrl: "/zeljka.jpg",
  },
] as const

export const servicePages = [
  {
    slug: "opsta-medicina",
    name: "Opšta medicina",
    specialty: "PrimaryCare",
    title: "Opšta medicina u Petrovcu na Mlavi",
    summary:
      "Sveobuhvatni pregledi, prevencija, terapija akutnih tegoba i praćenje hroničnih stanja za pacijente svih uzrasta.",
    description:
      "Opšta medicina u Poliklinici Nova Kruna M obuhvata prvi pregled, procenu simptoma, savetovanje, propisivanje terapije i upućivanje na dodatnu dijagnostiku kada je potrebna.",
    keywords: ["opšta medicina Petrovac na Mlavi", "privatni lekar Petrovac", "opšti pregled"],
    benefits: ["Pregled i savetovanje", "Praćenje hroničnih bolesti", "Preventivni i sistematski pregledi"],
  },
  {
    slug: "interna-medicina",
    name: "Interna medicina",
    specialty: "InternalMedicine",
    title: "Internista u Petrovcu na Mlavi",
    summary:
      "Specijalistički pregledi unutrašnjih organa, ultrazvučna dijagnostika i praćenje hroničnih internističkih stanja.",
    description:
      "Internistički pregled pomaže u proceni opšteg zdravstvenog stanja, tegoba vezanih za srce, pluća, digestivni trakt, krvni pritisak i metaboličke poremećaje.",
    keywords: ["internista Petrovac na Mlavi", "interna medicina", "specijalistički pregled"],
    benefits: ["Klinički pregled interniste", "Tumačenje nalaza", "Plan praćenja i terapije"],
  },
  {
    slug: "kardiologija",
    name: "Kardiologija",
    specialty: "Cardiovascular",
    title: "Kardiolog Petrovac na Mlavi",
    summary:
      "Kardiološki pregledi, EKG, ultrazvuk srca, holter pritiska i procena rizika za bolesti srca i krvnih sudova.",
    description:
      "Kardiologija u Poliklinici Nova Kruna M namenjena je pacijentima sa bolom u grudima, aritmijama, povišenim pritiskom, umorom, nedostatkom daha i potrebom za preventivnom kontrolom srca.",
    keywords: ["kardiolog Petrovac", "ultrazvuk srca Petrovac", "EKG Petrovac", "holter pritiska"],
    benefits: ["EKG i kardiološki pregled", "Ultrazvuk srca", "Kontrola pritiska i terapije"],
  },
  {
    slug: "ginekologija",
    name: "Ginekologija",
    specialty: "Gynecologic",
    title: "Ginekolog Petrovac na Mlavi",
    summary:
      "Ginekološki pregledi, ultrazvučna dijagnostika, preventivne kontrole, praćenje trudnoće i savetovanje.",
    description:
      "Ginekološka služba obuhvata preventivne i dijagnostičke preglede, ultrazvuk, savetovanje o reproduktivnom zdravlju i praćenje promena koje zahtevaju redovnu kontrolu.",
    keywords: ["ginekolog Petrovac", "ginekološki pregled", "ultrazvuk ginekologija"],
    benefits: ["Preventivni pregledi", "Ultrazvučna dijagnostika", "Savetovanje i praćenje"],
  },
  {
    slug: "urologija",
    name: "Urologija",
    specialty: "Urologic",
    title: "Urolog Petrovac na Mlavi",
    summary:
      "Urološki pregledi, ultrazvuk urotrakta, tegobe sa prostatom, infekcije i problemi mokraćnih puteva.",
    description:
      "Urologija je namenjena muškarcima i ženama sa tegobama urinarnog trakta, bolovima, infekcijama, promenama mokrenja ili potrebom za preventivnom kontrolom prostate.",
    keywords: ["urolog Petrovac", "ultrazvuk urotrakta", "pregled prostate"],
    benefits: ["Urološki pregled", "Ultrazvuk urotrakta", "Plan terapije i kontrole"],
  },
  {
    slug: "neurologija",
    name: "Neurologija",
    specialty: "Neurologic",
    title: "Neurolog Petrovac na Mlavi",
    summary:
      "Neurološki pregledi za glavobolje, vrtoglavice, trnjenje, slabost, bolove i poremećaje nervnog sistema.",
    description:
      "Neurološki pregled uključuje kliničku procenu tegoba nervnog sistema, analizu nalaza i preporuke za dalju dijagnostiku ili terapiju.",
    keywords: ["neurolog Petrovac", "neurološki pregled", "EMNG Petrovac"],
    benefits: ["Klinički neurološki pregled", "Procena simptoma", "Preporuke za dijagnostiku"],
  },
  {
    slug: "ortopedija",
    name: "Ortopedija",
    specialty: "Orthopedic",
    title: "Ortoped Petrovac na Mlavi",
    summary:
      "Ortopedski pregledi, povrede, bolovi u zglobovima, sportske povrede, rehabilitacija i praćenje terapije.",
    description:
      "Ortopedija pomaže kod povreda, preloma, bolova u leđima, kolenima, kukovima, ramenima i drugim tegobama koštano-zglobnog sistema.",
    keywords: ["ortoped Petrovac", "ortopedski pregled", "sportske povrede"],
    benefits: ["Pregled ortopeda", "Plan terapije", "Praćenje oporavka"],
  },
  {
    slug: "pedijatrija",
    name: "Pedijatrija",
    specialty: "Pediatric",
    title: "Pedijatar Petrovac na Mlavi",
    summary: "Pregledi dece, praćenje razvoja, savetovanje roditelja i dijagnostika najčešćih dečijih tegoba.",
    description:
      "Pedijatrijski pregledi obuhvataju procenu zdravstvenog stanja deteta, praćenje razvoja, savetovanje i preporuke za dalju negu ili dijagnostiku.",
    keywords: ["pedijatar Petrovac", "pregled dece", "dečiji lekar"],
    benefits: ["Pregled deteta", "Savetovanje roditelja", "Praćenje razvoja"],
  },
  {
    slug: "orl",
    name: "Otorinolaringologija",
    specialty: "Otolaryngologic",
    title: "ORL pregled Petrovac na Mlavi",
    summary:
      "ORL pregledi uha, grla i nosa za decu i odrasle, ispiranje ušiju, brisevi i procena promuklosti.",
    description:
      "ORL pregled je namenjen pacijentima sa tegobama sluha, bolom u uhu, zapušenim nosem, upalama grla, promuklošću ili čestim infekcijama.",
    keywords: ["ORL Petrovac", "otorinolaringolog", "pregled uha grla nosa"],
    benefits: ["ORL pregled", "Ispiranje ušiju", "Brisevi i savetovanje"],
  },
  {
    slug: "ultrazvuk",
    name: "Ultrazvučna dijagnostika",
    specialty: "Diagnostic",
    title: "Ultrazvuk Petrovac na Mlavi",
    summary:
      "Ultrazvuk srca, abdomena, urotrakta i druga neinvazivna dijagnostika uz savremenu medicinsku opremu.",
    description:
      "Ultrazvučna dijagnostika omogućava neinvazivnu procenu organa i tkiva, podržava brže donošenje odluka i koristi se u više specijalističkih oblasti.",
    keywords: ["ultrazvuk Petrovac", "ultrazvuk abdomena", "ultrazvuk srca"],
    benefits: ["Ultrazvuk abdomena", "Ultrazvuk srca", "Ultrazvuk urotrakta"],
  },
  {
    slug: "dopler-krvnih-sudova",
    name: "Dopler krvnih sudova",
    specialty: "Cardiovascular",
    title: "Dopler krvnih sudova Petrovac na Mlavi",
    summary: "Dopler pregled arterijskog i venskog sistema, procena protoka krvi i vaskularno savetovanje.",
    description:
      "Dopler krvnih sudova koristi se za procenu protoka krvi, stanja vena i arterija i praćenje vaskularnih tegoba uz konsultaciju specijaliste.",
    keywords: ["dopler krvnih sudova", "vaskularni hirurg Petrovac", "ultrazvuk vena"],
    benefits: ["Dopler vena i arterija", "Procena cirkulacije", "Vaskularno savetovanje"],
  },
  {
    slug: "emng",
    name: "EMNG",
    specialty: "Neurologic",
    title: "EMNG pregled Petrovac na Mlavi",
    summary:
      "Elektromioneurografija za procenu provodljivosti nerava i funkcije mišića kod neuroloških tegoba.",
    description:
      "EMNG pomaže kod trnjenja, slabosti, bolova, sumnje na oštećenje nerava i drugih stanja koja zahtevaju procenu neuromišićne funkcije.",
    keywords: ["EMNG Petrovac", "elektromioneurografija", "pregled nerava"],
    benefits: ["Procena provodljivosti nerava", "Procena funkcije mišića", "Neurologija"],
  },
  {
    slug: "denzitometrija",
    name: "Denzitometrija",
    specialty: "Diagnostic",
    title: "Merenje gustine kostiju Petrovac na Mlavi",
    summary: "Merenje gustine kostiju za procenu rizika od osteoporoze i preloma.",
    description:
      "Denzitometrija je dijagnostički pregled koji pomaže u proceni mineralne gustine kostiju, rizika od osteoporoze i potrebe za praćenjem ili terapijom.",
    keywords: ["gustina kostiju", "denzitometrija Petrovac", "osteoporoza"],
    benefits: ["Procena rizika od osteoporoze", "Praćenje gustine kostiju", "Preporuke za dalju negu"],
  },
  {
    slug: "sleep-apnea",
    name: "Sleep Apnea",
    specialty: "RespiratoryTherapy",
    title: "Dijagnostika sleep apneje Petrovac na Mlavi",
    summary: "Dijagnostika hrkanja i apneje u spavanju uz stručnu procenu i plan daljeg lečenja.",
    description:
      "Dijagnostika sleep apneje namenjena je pacijentima sa hrkanjem, prekidima disanja tokom sna, jutarnjim umorom i pospanošću tokom dana.",
    keywords: ["sleep apnea Petrovac", "apneja u spavanju", "dijagnostika hrkanja"],
    benefits: ["Procena disanja u snu", "Savetovanje", "Plan daljeg lečenja"],
  },
] as const

export type ServicePage = (typeof servicePages)[number]

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}
