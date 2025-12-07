import Image from "next/image"

const galleryImages = [
  {
    src: "/k1.jpg",
    alt: "Čekaonica i prijemni deo poliklinike",
    category: "Nova Kruna-M",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/k2.jpg",
    alt: "Ordinacija za specijalističke preglede",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k3.jpg",
    alt: "Sala za ultrazvuk srca i abdomena",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k4.jpg",
    alt: "Ginekološka ordinacija i prostor za preglede",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k5.jpg",
    alt: "Kardiološka ordinacija sa modernom opremom",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k6.jpg",
    alt: "Urološka ordinacija za ultrazvuk i preglede",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k7.jpg",
    alt: "Neurološka ordinacija i konsultacije",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k8.jpg",
    alt: "Ortopedska ordinacija za preglede i konsultacije",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/k9.jpg",
    alt: "Dijagnostička oprema i prostorije",
    category: "Nova Kruna-M",
    className: "md:col-span-1 md:row-span-1",
  },
]

export function ClinicGallerySection() {
  return (
    <section id="clinic" className="py-16 md:py-24 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
              Okruženje poliklinike
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Dizajnirano za Vašu udobnost i bezbednost. Naša moderna ustanova kombinuje najsavremeniju medicinsku tehnologiju sa smirujućom atmosferom usmerenom ka pacijentu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-2xl bg-slate-100 ${image.className}`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-teal-600/90 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
