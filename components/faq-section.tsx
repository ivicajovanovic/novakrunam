import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Kako mogu da zakažem termin?",
      answer:
        "Zakazivanje se vrši samo pozivom na navedene brojeve telefona: 012 327564 ili 066 327564. Trudimo se da odgovorimo u najkraćem mogućem roku.",
    },
    {
      question: "Da li primate pacijente bez zakazivanja?",
      answer:
        "Primamo pacijente i bez zakazivanja, ali preporučujemo da se javite unapred kako biste izbegli čekanje. Hitne slučajeve uvek primamo odmah.",
    },
    {
      question: "Gde se nalazite?",
      answer:
        "Nalazimo se na adresi Petra Dobrnjca 54 u Petrovcu na Mlavi. Parking je dostupan ispred zgrade. Lako nas možete pronaći koristeći Google Maps navigaciju.",
    },
    {
      question: "Koje je vaše radno vreme?",
      answer:
        "Radimo radnim danima od 08:00 do 16:00 časova. Za hitne slučajeve i posebne dogovore, molimo vas da nas kontaktirate telefonom.",
    },
    {
      question: "Da li imate online prisustvo?",
      answer:
        "Da, možete nas pronaći na Facebooku i Instagramu gde redovno objavljujemo korisne zdravstvene savete. Takođe imamo ovu veb stranicu sa svim potrebnim informacijama.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200" id="faq">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 md:mb-6">Često postavljana pitanja</h2>
            <p className="text-slate-600 text-lg">Praktične informacije koje će vam pomoći da se pripremite za posetu.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="px-6 last:border-b-0">
                <AccordionTrigger className="text-left text-slate-900 font-medium hover:text-teal-700 hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Added small emergency note below FAQs */}
          <p className="mt-8 text-center text-slate-500 text-sm">
            Napomena: U slučaju hitne medicinske pomoći, molimo kontaktirajte Vašu lokalnu službu hitne pomoći odmah.
          </p>
        </div>
      </div>
    </section>
  )
}
